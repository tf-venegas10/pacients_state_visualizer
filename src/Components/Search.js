import React from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import SearchCard from './SearchCard';
import { connect } from 'react-redux';
import { seleccionarPaciente } from '../ActionCreators';
const rawDataToComponentList = (data, Component, onClickHandler) => {
  const listPacients = [];
  let years = 0;
  let months = 0;
  let timeDiff = 0;
  data.forEach((paciente) => {
    timeDiff = new Date().getTime() - new Date(paciente.fechaNacimiento).getTime();
    years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    months = Math.floor((timeDiff - years * 1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24 * 30.5));
    const pacienteConEdad = { ...paciente };
    pacienteConEdad.anos = years;
    pacienteConEdad.meses = months;
    listPacients.push(
      <Component
        key={paciente.id}
        nombre={paciente.nombre}
        planSalud={paciente.planSalud}
        genero={paciente.genero}
        anos={years}
        meses={months}
        onClick={() => onClickHandler(pacienteConEdad)}
      />
    );
  });
  return listPacients;
};
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pacientes: []
    };
    this.getPacientes = this.getPacientes.bind(this);
    console.log(this.props);
  }

  componentDidMount() {
    this.getPacientes();
  }
  getPacientes = async () => {
    const allPacients = await API.graphql(graphqlOperation(queries.listPacientes));
    this.setState({ pacientes: allPacients.data.listPacientes.items });
  };
  onClickCard = (paciente) => {
    this.props.dispatch(seleccionarPaciente(paciente));
    this.props.history.push('/paciente');
  };
  render() {
    console.log('data', this.state.pacientes);
    const listPacients = rawDataToComponentList(this.state.pacientes, SearchCard, this.onClickCard);
    return <div>{this.state.pacientes ? listPacients : <div>Searching...</div>}</div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClickCard: (paciente) => {
    console.log('changed to paciente');
    dispatch(seleccionarPaciente(paciente));
  }
});

export default connect(
  null,
  null
)(Search);

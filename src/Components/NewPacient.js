import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, Input } from 'reactstrap';
import { cambioPacienteProvisional, crearPaciente } from '../ActionCreators';
import { Form, H1, PrimaryButton } from '../StyledComponents/index';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';

class NewPacient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      fechaNacimiento: '',
      tipoDocumento: 'cc',
      documento: '',
      genero: 'Mujer'
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(inputValue) {
    return (evt) => {
      evt.persist();
      console.log('event', evt);
      this.setState(
        (prevState) => {
          let newState = { ...prevState };
          newState[inputValue] = evt.target.value;
          return newState;
        },
        () => {
          this.props.dispatch(cambioPacienteProvisional(this.state));
        }
      );
    };
  }
  onSubmit = async () => {
    this.props.dispatch(crearPaciente(this.state));
    const paciente = await API.graphql(graphqlOperation(mutations.createPaciente, { input: this.state }));
    this.props.history.push('/paciente');
  };

  render() {
    return (
      <div>
        <H1>Crear paciente nuevo</H1>
        <Form>
          <FormGroup>
            <label>
              Nombre del paciente: <Input value={this.state.nombre} onChange={this.onChange('nombre')} />
            </label>
          </FormGroup>
          <FormGroup>
            <label>
              Fecha de nacimiento:{' '}
              <Input onChange={this.onChange('fechaNacimiento')} type="date" value={this.state.fechaNacimiento} />
            </label>
          </FormGroup>
          <FormGroup>
            <label htmlFor="documentSelect">
              {' '}
              Tipo de documento
              <Input
                value={this.state.tipoDocumento}
                type="select"
                name="tipoDocumento"
                id="documentSelect"
                onChange={this.onChange('tipoDocumento')}
              >
                <option value={'cc'}>C.C.</option>
                <option value={'ti'}>T.I.</option>
              </Input>
            </label>
          </FormGroup>
          <FormGroup>
            <label>
              Documento: <Input value={this.state.documento} onChange={this.onChange('documento')} />
            </label>
          </FormGroup>
          <FormGroup>
            <label htmlFor="genderSelect">
              {' '}
              Genero
              <Input
                value={this.state.genero}
                type="select"
                name="Genero"
                id="genderSelect"
                onChange={this.onChange('genero')}
              >
                <option value={'Hombre'}>Hombre</option>
                <option value={'Mujer'}>Mujer</option>
              </Input>
            </label>
          </FormGroup>
          <FormGroup>
            <label>
              Plan de salud: <Input value={this.state.planSalud} onChange={this.onChange('planSalud')} />
            </label>
          </FormGroup>
          <FormGroup>
            <PrimaryButton onClick={this.onSubmit}>Agregar paciente</PrimaryButton>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(NewPacient);

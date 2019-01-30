import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { toggleExpansion } from '../ActionCreators/index';
import { Form, H1, PrimaryButton } from '../StyledComponents/index';

const AddVisit = (props: any) => {
  console.log(props);
  return (
    <div>
      <H1>Agregar una visita del paciente</H1>
      <h3 onClick={props.toggleExpansion}>paciente {props.paciente.nombre + '>'}</h3>
      {props.expandirPaciente ? (
        <div>
          <p>Edad: {props.paciente.edad}</p>
          <p>Genero: {props.paciente.genero}</p>
        </div>
      ) : (
        <div />
      )}
      <Form>
        <PrimaryButton>Guardar visita</PrimaryButton>
      </Form>
    </div>
  );
};

AddVisit.propTypes = {
  paciente: propTypes.object.isRequired
};

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    toggleExpansion: () => dispatch(toggleExpansion())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddVisit);

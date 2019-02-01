import React from 'react';
import { connect } from 'react-redux';
import { Form, H3, PrimaryButton } from '../StyledComponents/index';
import { FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';
import ForForms from './ForForms';

const BigInput = styled(Input)`
  height: 25vh !important;
  width: 90vw;
`;
class AddVisit extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <H3>Agregar una visita del paciente {this.props.paciente.nombre}</H3>

        <Form>
          <FormGroup>
            <label>
              Entrada de la consulta <BigInput type="textarea" />
            </label>
          </FormGroup>
          <PrimaryButton>Guardar visita</PrimaryButton>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default ForForms(
  connect(
    mapStateToProps,
    null
  )(AddVisit)
);

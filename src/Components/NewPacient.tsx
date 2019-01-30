import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, Input } from 'reactstrap';
import { cambioPacienteProvisional, enumm_genero } from '../ActionCreators';
import { Form, H1, PrimaryButton } from '../StyledComponents/index';

type Props = {
  onChange: Function;
  onSubmit: Function;
};
type InputComp = {
  for: Component;
};
class NewPacient extends React.Component<Props> {
  nombre: any; //(string & String)| null;
  genero: enumm_genero;
  edad: Number;

  constructor(props: any) {
    super(props);
    this.nombre = '';
    this.genero = enumm_genero.Mujer;
    this.edad = 30;
  }
  render() {
    console.log(this.nombre + 'zz');
    return (
      <div>
        <H1>Crear paciente nuevo</H1>
        <Form>
          <FormGroup>
            <label>
              Nombre del paciente:{' '}
              <Input
                ref={(node: any) => {
                  this.nombre = node.value;
                }}
                onChange={this.props.onChange.bind(this, this.nombre, this.edad, this.genero)}
              />
            </label>
          </FormGroup>
          <FormGroup>
            <label>
              Edad:{' '}
              <Input
                name="Edad"
                type="number"
                onChange={this.props.onChange.bind(this, this.nombre, this.edad, this.genero)}
              />
            </label>
          </FormGroup>
          <FormGroup>
            <label htmlFor="exampleSelect">
              {' '}
              Genero
              <Input
                type="select"
                name="Genero"
                id="exampleSelect"
                onChange={this.props.onChange.bind(this, this.nombre, this.edad, this.genero)}
              >
                <option value={enumm_genero.Hombre}>Hombre</option>
                <option value={enumm_genero.Mujer}>Mujer</option>
              </Input>
            </label>
          </FormGroup>
          <FormGroup>
            <PrimaryButton>Agregar paciente</PrimaryButton>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  onChange: (nombre: String, edad: Number, genero: enumm_genero) =>
    dispatch(cambioPacienteProvisional(nombre, edad, genero))
});

export default connect(
  null,
  mapDispatchToProps
)(NewPacient);

import React from 'react';
import { FormGroup, Input } from 'reactstrap';
import { crearPaciente } from '../../ActionCreators';
import { Form, H1, PrimaryButton } from '../../StyledComponents';
import * as mutations from '../../graphql/mutations';
import FormsHandler from '../FormsHandler';

const NewPacient = ({ onChange, item, onSubmit }) => {
  return (
    <div>
      <H1>Crear paciente nuevo</H1>
      <Form>
        <FormGroup>
          <label>
            Nombre del paciente: <Input value={item.nombre} onChange={onChange('nombre')} />
          </label>
        </FormGroup>
        <FormGroup>
          <label>
            Fecha de nacimiento:{' '}
            <Input onChange={onChange('fechaNacimiento')} type="date" value={item.fechaNacimiento} />
          </label>
        </FormGroup>
        <FormGroup>
          <label htmlFor="documentSelect">
            {' '}
            Tipo de documento
            <Input
              value={item.tipoDocumento}
              type="select"
              name="tipoDocumento"
              id="documentSelect"
              onChange={onChange('tipoDocumento')}
            >
              <option value={'cc'}>C.C.</option>
              <option value={'ti'}>T.I.</option>
            </Input>
          </label>
        </FormGroup>
        <FormGroup>
          <label>
            Documento: <Input value={item.documento} onChange={onChange('documento')} />
          </label>
        </FormGroup>
        <FormGroup>
          <label htmlFor="genderSelect">
            {' '}
            Genero
            <Input value={item.genero} type="select" name="Genero" id="genderSelect" onChange={onChange('genero')}>
              <option value={'Hombre'}>Hombre</option>
              <option value={'Mujer'}>Mujer</option>
            </Input>
          </label>
        </FormGroup>
        <FormGroup>
          <label>
            Plan de salud: <Input value={item.planSalud} onChange={onChange('planSalud')} />
          </label>
        </FormGroup>
        <FormGroup>
          <label>
            Numero de afiliado: <Input value={item.numeroAfiliado} onChange={onChange('numeroAfiliado')} />
          </label>
        </FormGroup>
        <FormGroup>
          <PrimaryButton onClick={onSubmit(mutations.createPaciente, crearPaciente, '/paciente')}>
            Agregar paciente
          </PrimaryButton>
        </FormGroup>
      </Form>
    </div>
  );
};

export default FormsHandler(NewPacient);

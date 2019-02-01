import React from 'react';
import { Col, Row, CardBody } from 'reactstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
const PacientCard = ({ paciente, className }) => (
  <CardBody className={className}>
    <Row>
      <Col sm={6}>Nombre: {paciente.nombre}</Col>
      <Col sm={6}>
        <img src="/image-placeholder-300x275.jpeg" alt="foto del paciente" />
      </Col>
    </Row>
    <Row>
      <Col sm={6}>Plan de Salud: {paciente.planSalud}</Col>
      <Col sm={6}>Número de afiliado: {paciente.numeroAfiliado}</Col>
    </Row>
    <Row>
      <Col sm={6}>Tipo de documento: {paciente.tipoDocumento}</Col>
      <Col sm={6}>Número de documento: {paciente.documento}</Col>
    </Row>
    <Row>
      <Col sm={6}>
        Edad: {paciente.anos} años {paciente.meses} meses
      </Col>
      <Col sm={6}>Genero: {paciente.genero}</Col>
    </Row>
  </CardBody>
);

const StyledPacientCard = styled(PacientCard)`
  border: solid 2px;
  margin: 0.5vh;
  z-index: 1000;
  background-color: #7c8cff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(StyledPacientCard);

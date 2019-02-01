import React from 'react';
import { Col, Row, CardBody } from 'reactstrap';
import styled from 'styled-components';
const SearchCard = (props) => (
  <CardBody className={props.className} onClick={props.onClick}>
    <Row>
      <Col sm={6} md={3}>
        Nombre: {props.nombre}
      </Col>
      <Col sm={6} md={3}>
        Plan de Salud: {props.planSalud}
      </Col>
      <Col sm={6} md={3}>
        Edad: {props.anos} años {props.meses} meses
      </Col>
      <Col sm={6} md={3}>
        Genero: {props.genero}
      </Col>
    </Row>
  </CardBody>
);

const StyledSearchCard = styled(SearchCard)`
  border: solid 2px;
  margin: 0.5vh;
  z-index: 1000;
  background-color: #7c8cff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  :hover {
    cursor: pointer;
    background-color: #3048ff;
  }
`;

export default StyledSearchCard;

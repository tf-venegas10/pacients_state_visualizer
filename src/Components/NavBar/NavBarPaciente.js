import React from 'react';
import Link from './Link';
import { Navbar } from 'reactstrap';
import styled from 'styled-components';
import { Col } from 'reactstrap';
const NavBarPaciente = styled(Navbar)`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.2em;
  background-color: #3e467f;
  color: white;
  border: solid black 0.2em;
  padding: 0em;
  margin: 0em;
`;
const PacienteNav = (props) => (
  <NavBarPaciente className="row">
    <Col sm={3}>
      <Link to="/paciente">Información del paciente</Link>
    </Col>
    <Col sm={3}>
      <Link to="/paciente/add">Agregar visita</Link>
    </Col>
    <Col sm={3}>
      <Link to="/paciente/historia">Historia del paciente</Link>
    </Col>
  </NavBarPaciente>
);
export default PacienteNav;

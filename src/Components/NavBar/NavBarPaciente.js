import React from 'react';
import Link from './Link';
import { Navbar } from 'reactstrap';
import styled from 'styled-components';
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
  <NavBarPaciente>
    <Link to="/paciente/1/add">Agregar visita</Link>
    <Link to="/paciente/1/historia">Historia del paciente</Link>
  </NavBarPaciente>
);
export default PacienteNav;

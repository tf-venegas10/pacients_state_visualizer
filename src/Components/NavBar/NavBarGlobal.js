import React from 'react';
import { Navbar } from 'reactstrap';
import styled from 'styled-components';
import Link from './Link';

export const NavBarGlobal = styled(Navbar)`
  height: 7vh;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.2em;
  background-color: #3e467f;
  color: white;
  border: solid 0.1em;
  padding: 0.6em;
  margin: 0 0 0.2em 0;
`;

const GlobalNav = (props) => (
  <header className="App-header">
    <NavBarGlobal>
      <Link to="/">Buscar</Link>
      <Link to="/nuevo/paciente">Nuevo paciente</Link>
      <Link to="/paciente">Paciente: </Link>
    </NavBarGlobal>
  </header>
);

export default GlobalNav;

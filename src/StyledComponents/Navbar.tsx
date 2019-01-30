import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import styled from 'styled-components';

export const NavBarGlobal = styled(Navbar)`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.2em;
  background-color: rgb(220, 220, 220);
  color: rgb(50, 50, 50);
  border: solid 0.1em;
  padding: 0.6em;
  margin: 2em;
`;

export const LinkStyled = styled(Link)`
  color: rgb(50, 50, 50);
  padding: 1em;
  margin: 0.5 em;
`;

export const NavBarPaciente = styled(Navbar)`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.2em;
  background-color: rgb(61, 110, 220);
  color: rgb(50, 50, 50);
  border: solid 0.1em;
  padding: 0.6em;
  margin: 2em;
`;

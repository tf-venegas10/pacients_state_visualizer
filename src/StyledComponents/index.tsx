import { Button } from 'reactstrap';
import styled from 'styled-components';
import * as Navbar from './Navbar';

export const NavBarGlobal = Navbar.NavBarGlobal;
export const Link = Navbar.LinkStyled;
export const NavBarPaciente = Navbar.NavBarPaciente;

export const Form = styled.form`
  color: rgb(55, 55, 55);
  font-size: 1 em;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 1em;
`;

export const H1 = styled.h1`
  color: rgb(65, 65, 65);
  font-size: 3 em;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding: 2em;
  margin: 2 em;
`;

export const PrimaryButton = styled(Button)`
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 0.5em;
  border: 2px solid darkcyan;
  background-color: rgb(77, 181, 220);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 3px;
  color: white;
`;

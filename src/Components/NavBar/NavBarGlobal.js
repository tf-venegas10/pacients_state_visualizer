import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//import Link from './Link';
class GlobalNav extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { open: false, dropdownOpen: false };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  toggleNav = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  };
  toggleDropdown = () => {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };
  render() {
    return (
      <Navbar color="light" light expand="md">
        <Link to="/" className="navbar-brand">
          AliMente
        </Link>
        <NavbarToggler onClick={this.toggleNav} />
        <Collapse isOpen={this.state.open} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">
                Buscar paciente
              </Link>
            </NavItem>
            <NavItem>
              <Link to="" className="nav-link">
                Menu de hoy
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/paciente" className="nav-link">
                Paciente:{' '}
              </Link>
            </NavItem>
            <Dropdown nav inNavbar isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
              <DropdownToggle nav caret>
                Agregar
              </DropdownToggle>
              <DropdownMenu right>
                <Link to="/nuevo/paciente" className="dropdown-item">
                  Paciente
                </Link>
                <DropdownItem>Alimento</DropdownItem>
                <DropdownItem>Preparación</DropdownItem>
                <DropdownItem>Menu</DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const NavBarGlobal = styled(GlobalNav)``;
export default NavBarGlobal;

import React from 'react';
import { Route } from 'react-router-dom';
import { NavBarPaciente } from './NavBar';
import AddVisit from './AddVisit';
import History from './History';
import PacientCard from './PacientCard';

export default class PacientHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBarPaciente />
        <Route path="/paciente/add" component={AddVisit} />
        <Route path="/paciente/historia" component={History} />
        <Route exact path="/paciente" component={PacientCard} />
      </div>
    );
  }
}

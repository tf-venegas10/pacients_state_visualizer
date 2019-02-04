import React from 'react';
import { Route } from 'react-router-dom';
import { NavBarPaciente } from './NavBar';
import AddVisit from './AddVisit';
import History from './History';
import PacientCard from './PacientCard';

const PacientHome = (props) => {
  return (
    <div>
      {/*<NavBarPaciente />
        <Route path="/paciente/add" component={AddVisit} />
        <Route path="/paciente/historia" component={History} />*/}
      <Route exact path="/paciente" component={PacientCard} />
    </div>
  );
};

export default PacientHome;

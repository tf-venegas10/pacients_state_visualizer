import React from 'react';
import { Route } from 'react-router-dom';
import { Link, NavBarPaciente } from '../StyledComponents';
import AddVisit from './AddVisit';
import History from './History';

export default class PacientHome extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBarPaciente>
          <Link to="/paciente/1/add">Agregar visita</Link>
          <Link to="/paciente/1/historia">Historia del paciente</Link>
        </NavBarPaciente>
        <Route path="/paciente/:id/add" component={AddVisit} />
        <Route path="/paciente/:id/historia" component={History} />
      </div>
    );
  }
}

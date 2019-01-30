import { combineReducers } from 'redux';

const paciente = (state: any = {}, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
const paciente_provisional = (state: any = {}, action: any) => {
  switch (action.type) {
    case 'CREAR_PACIENTE_PROVISIONAL':
      return action.paciente;
    default:
      return state;
  }
};

const expandirPaciente = (state: boolean = false, action: any) => {
  switch (action.type) {
    case 'TOGGLE_PACIENTE':
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  paciente,
  paciente_provisional,
  expandirPaciente
});

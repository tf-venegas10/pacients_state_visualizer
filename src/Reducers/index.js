import { combineReducers } from 'redux';

const paciente = (state = {}, action) => {
  switch (action.type) {
    case 'CREAR_PACIENTE':
      return action.paciente;
    case 'SELECCIONAR_PACIENTE':
      return action.paciente;
    default:
      return state;
  }
};
const paciente_provisional = (state = {}, action) => {
  switch (action.type) {
    case 'CREAR_PACIENTE_PROVISIONAL':
      return action.paciente;
    default:
      return state;
  }
};

const expandirPaciente = (state = false, action) => {
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

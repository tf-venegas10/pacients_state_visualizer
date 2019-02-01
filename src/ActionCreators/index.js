export const toggleExpansion = () => ({
  type: 'TOGGLE_PACIENTE'
});

export const crearPaciente = (paciente) => ({
  type: 'CREAR_PACIENTE',
  paciente
});
export const seleccionarPaciente = (paciente) => ({
  type: 'SELECCIONAR_PACIENTE',
  paciente
});

export const cambioPacienteProvisional = (paciente) => ({
  type: 'CREAR_PACIENTE_PROVISIONAL',
  paciente
});

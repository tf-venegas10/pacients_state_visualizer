export const toggleExpansion = () => ({
  type: 'TOGGLE_PACIENTE'
});
export enum enumm_genero {
  Hombre,
  Mujer
}
export const crearPaciente = (nombre: String, edad: Number, genero: enumm_genero) => ({
  type: 'CREAR_PACIENTE',
  paciente: {
    nombre,
    edad,
    genero
  }
});

export const cambioPacienteProvisional = (nombre: String, edad: Number, genero: enumm_genero) => ({
  type: 'CREAR_PACIENTE_PROVISIONAL',
  paciente: {
    nombre,
    edad,
    genero
  }
});

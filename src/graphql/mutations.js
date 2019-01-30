// eslint-disable
// this is an auto generated file. This will be overwritten

export const createPaciente = `mutation CreatePaciente($input: CreatePacienteInput!) {
  createPaciente(input: $input) {
    id
    nombre
    fechaNacimiento
    tipoDocumento
    documento
    planSalud
    numeroAfiliado
    genero
    historia {
      id
      paciente {
        id
        nombre
        fechaNacimiento
        tipoDocumento
        documento
        planSalud
        numeroAfiliado
        genero
      }
      consultas {
        nextToken
      }
    }
  }
}
`;
export const updatePaciente = `mutation UpdatePaciente($input: UpdatePacienteInput!) {
  updatePaciente(input: $input) {
    id
    nombre
    fechaNacimiento
    tipoDocumento
    documento
    planSalud
    numeroAfiliado
    genero
    historia {
      id
      paciente {
        id
        nombre
        fechaNacimiento
        tipoDocumento
        documento
        planSalud
        numeroAfiliado
        genero
      }
      consultas {
        nextToken
      }
    }
  }
}
`;
export const deletePaciente = `mutation DeletePaciente($input: DeletePacienteInput!) {
  deletePaciente(input: $input) {
    id
    nombre
    fechaNacimiento
    tipoDocumento
    documento
    planSalud
    numeroAfiliado
    genero
    historia {
      id
      paciente {
        id
        nombre
        fechaNacimiento
        tipoDocumento
        documento
        planSalud
        numeroAfiliado
        genero
      }
      consultas {
        nextToken
      }
    }
  }
}
`;
export const createHistoria = `mutation CreateHistoria($input: CreateHistoriaInput!) {
  createHistoria(input: $input) {
    id
    paciente {
      id
      nombre
      fechaNacimiento
      tipoDocumento
      documento
      planSalud
      numeroAfiliado
      genero
      historia {
        id
      }
    }
    consultas {
      items {
        id
        entradaHistoria
      }
      nextToken
    }
  }
}
`;
export const updateHistoria = `mutation UpdateHistoria($input: UpdateHistoriaInput!) {
  updateHistoria(input: $input) {
    id
    paciente {
      id
      nombre
      fechaNacimiento
      tipoDocumento
      documento
      planSalud
      numeroAfiliado
      genero
      historia {
        id
      }
    }
    consultas {
      items {
        id
        entradaHistoria
      }
      nextToken
    }
  }
}
`;
export const deleteHistoria = `mutation DeleteHistoria($input: DeleteHistoriaInput!) {
  deleteHistoria(input: $input) {
    id
    paciente {
      id
      nombre
      fechaNacimiento
      tipoDocumento
      documento
      planSalud
      numeroAfiliado
      genero
      historia {
        id
      }
    }
    consultas {
      items {
        id
        entradaHistoria
      }
      nextToken
    }
  }
}
`;
export const createConsulta = `mutation CreateConsulta($input: CreateConsultaInput!) {
  createConsulta(input: $input) {
    id
    entradaHistoria
    historia {
      id
      paciente {
        id
        nombre
        fechaNacimiento
        tipoDocumento
        documento
        planSalud
        numeroAfiliado
        genero
      }
      consultas {
        nextToken
      }
    }
    diagnosticos {
      items {
        id
        nombre
        descripcion
      }
      nextToken
    }
    tratmientos {
      items {
        id
        medicamento
        dosis
        numeroDias
      }
      nextToken
    }
    hospitalizacion {
      id
      sucedio
      numeroDias
      interrupcion
      estado
      consulta {
        id
        entradaHistoria
      }
    }
  }
}
`;
export const updateConsulta = `mutation UpdateConsulta($input: UpdateConsultaInput!) {
  updateConsulta(input: $input) {
    id
    entradaHistoria
    historia {
      id
      paciente {
        id
        nombre
        fechaNacimiento
        tipoDocumento
        documento
        planSalud
        numeroAfiliado
        genero
      }
      consultas {
        nextToken
      }
    }
    diagnosticos {
      items {
        id
        nombre
        descripcion
      }
      nextToken
    }
    tratmientos {
      items {
        id
        medicamento
        dosis
        numeroDias
      }
      nextToken
    }
    hospitalizacion {
      id
      sucedio
      numeroDias
      interrupcion
      estado
      consulta {
        id
        entradaHistoria
      }
    }
  }
}
`;
export const deleteConsulta = `mutation DeleteConsulta($input: DeleteConsultaInput!) {
  deleteConsulta(input: $input) {
    id
    entradaHistoria
    historia {
      id
      paciente {
        id
        nombre
        fechaNacimiento
        tipoDocumento
        documento
        planSalud
        numeroAfiliado
        genero
      }
      consultas {
        nextToken
      }
    }
    diagnosticos {
      items {
        id
        nombre
        descripcion
      }
      nextToken
    }
    tratmientos {
      items {
        id
        medicamento
        dosis
        numeroDias
      }
      nextToken
    }
    hospitalizacion {
      id
      sucedio
      numeroDias
      interrupcion
      estado
      consulta {
        id
        entradaHistoria
      }
    }
  }
}
`;
export const createDiagnostico = `mutation CreateDiagnostico($input: CreateDiagnosticoInput!) {
  createDiagnostico(input: $input) {
    id
    nombre
    descripcion
    consulta {
      id
      entradaHistoria
      historia {
        id
      }
      diagnosticos {
        nextToken
      }
      tratmientos {
        nextToken
      }
      hospitalizacion {
        id
        sucedio
        numeroDias
        interrupcion
        estado
      }
    }
  }
}
`;
export const updateDiagnostico = `mutation UpdateDiagnostico($input: UpdateDiagnosticoInput!) {
  updateDiagnostico(input: $input) {
    id
    nombre
    descripcion
    consulta {
      id
      entradaHistoria
      historia {
        id
      }
      diagnosticos {
        nextToken
      }
      tratmientos {
        nextToken
      }
      hospitalizacion {
        id
        sucedio
        numeroDias
        interrupcion
        estado
      }
    }
  }
}
`;
export const deleteDiagnostico = `mutation DeleteDiagnostico($input: DeleteDiagnosticoInput!) {
  deleteDiagnostico(input: $input) {
    id
    nombre
    descripcion
    consulta {
      id
      entradaHistoria
      historia {
        id
      }
      diagnosticos {
        nextToken
      }
      tratmientos {
        nextToken
      }
      hospitalizacion {
        id
        sucedio
        numeroDias
        interrupcion
        estado
      }
    }
  }
}
`;
export const createTratamiento = `mutation CreateTratamiento($input: CreateTratamientoInput!) {
  createTratamiento(input: $input) {
    id
    medicamento
    dosis
    numeroDias
    consulta {
      id
      entradaHistoria
      historia {
        id
      }
      diagnosticos {
        nextToken
      }
      tratmientos {
        nextToken
      }
      hospitalizacion {
        id
        sucedio
        numeroDias
        interrupcion
        estado
      }
    }
  }
}
`;
export const updateTratamiento = `mutation UpdateTratamiento($input: UpdateTratamientoInput!) {
  updateTratamiento(input: $input) {
    id
    medicamento
    dosis
    numeroDias
    consulta {
      id
      entradaHistoria
      historia {
        id
      }
      diagnosticos {
        nextToken
      }
      tratmientos {
        nextToken
      }
      hospitalizacion {
        id
        sucedio
        numeroDias
        interrupcion
        estado
      }
    }
  }
}
`;
export const deleteTratamiento = `mutation DeleteTratamiento($input: DeleteTratamientoInput!) {
  deleteTratamiento(input: $input) {
    id
    medicamento
    dosis
    numeroDias
    consulta {
      id
      entradaHistoria
      historia {
        id
      }
      diagnosticos {
        nextToken
      }
      tratmientos {
        nextToken
      }
      hospitalizacion {
        id
        sucedio
        numeroDias
        interrupcion
        estado
      }
    }
  }
}
`;
export const createHospitalizacion = `mutation CreateHospitalizacion($input: CreateHospitalizacionInput!) {
  createHospitalizacion(input: $input) {
    id
    sucedio
    numeroDias
    interrupcion
    estado
    consulta {
      id
      entradaHistoria
      historia {
        id
      }
      diagnosticos {
        nextToken
      }
      tratmientos {
        nextToken
      }
      hospitalizacion {
        id
        sucedio
        numeroDias
        interrupcion
        estado
      }
    }
  }
}
`;
export const updateHospitalizacion = `mutation UpdateHospitalizacion($input: UpdateHospitalizacionInput!) {
  updateHospitalizacion(input: $input) {
    id
    sucedio
    numeroDias
    interrupcion
    estado
    consulta {
      id
      entradaHistoria
      historia {
        id
      }
      diagnosticos {
        nextToken
      }
      tratmientos {
        nextToken
      }
      hospitalizacion {
        id
        sucedio
        numeroDias
        interrupcion
        estado
      }
    }
  }
}
`;
export const deleteHospitalizacion = `mutation DeleteHospitalizacion($input: DeleteHospitalizacionInput!) {
  deleteHospitalizacion(input: $input) {
    id
    sucedio
    numeroDias
    interrupcion
    estado
    consulta {
      id
      entradaHistoria
      historia {
        id
      }
      diagnosticos {
        nextToken
      }
      tratmientos {
        nextToken
      }
      hospitalizacion {
        id
        sucedio
        numeroDias
        interrupcion
        estado
      }
    }
  }
}
`;

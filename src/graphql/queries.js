// eslint-disable
// this is an auto generated file. This will be overwritten

export const getPaciente = `query GetPaciente($id: ID!) {
  getPaciente(id: $id) {
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
export const listPacientes = `query ListPacientes(
  $filter: ModelPacienteFilterInput
  $limit: Int
  $nextToken: String
) {
  listPacientes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getHistoria = `query GetHistoria($id: ID!) {
  getHistoria(id: $id) {
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
export const listHistorias = `query ListHistorias(
  $filter: ModelHistoriaFilterInput
  $limit: Int
  $nextToken: String
) {
  listHistorias(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getConsulta = `query GetConsulta($id: ID!) {
  getConsulta(id: $id) {
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
export const listConsultas = `query ListConsultas(
  $filter: ModelConsultaFilterInput
  $limit: Int
  $nextToken: String
) {
  listConsultas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getDiagnostico = `query GetDiagnostico($id: ID!) {
  getDiagnostico(id: $id) {
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
export const listDiagnosticos = `query ListDiagnosticos(
  $filter: ModelDiagnosticoFilterInput
  $limit: Int
  $nextToken: String
) {
  listDiagnosticos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      nombre
      descripcion
      consulta {
        id
        entradaHistoria
      }
    }
    nextToken
  }
}
`;
export const getTratamiento = `query GetTratamiento($id: ID!) {
  getTratamiento(id: $id) {
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
export const listTratamientos = `query ListTratamientos(
  $filter: ModelTratamientoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTratamientos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      medicamento
      dosis
      numeroDias
      consulta {
        id
        entradaHistoria
      }
    }
    nextToken
  }
}
`;
export const getHospitalizacion = `query GetHospitalizacion($id: ID!) {
  getHospitalizacion(id: $id) {
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
export const listHospitalizacions = `query ListHospitalizacions(
  $filter: ModelHospitalizacionFilterInput
  $limit: Int
  $nextToken: String
) {
  listHospitalizacions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const searchPacientes = `query SearchPacientes(
  $filter: SearchablePacienteFilterInput
  $sort: SearchablePacienteSortInput
  $limit: Int
  $nextToken: Int
) {
  searchPacientes(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;

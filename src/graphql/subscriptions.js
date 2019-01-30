// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreatePaciente = `subscription OnCreatePaciente {
  onCreatePaciente {
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
export const onUpdatePaciente = `subscription OnUpdatePaciente {
  onUpdatePaciente {
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
export const onDeletePaciente = `subscription OnDeletePaciente {
  onDeletePaciente {
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
export const onCreateHistoria = `subscription OnCreateHistoria {
  onCreateHistoria {
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
export const onUpdateHistoria = `subscription OnUpdateHistoria {
  onUpdateHistoria {
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
export const onDeleteHistoria = `subscription OnDeleteHistoria {
  onDeleteHistoria {
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
export const onCreateConsulta = `subscription OnCreateConsulta {
  onCreateConsulta {
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
export const onUpdateConsulta = `subscription OnUpdateConsulta {
  onUpdateConsulta {
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
export const onDeleteConsulta = `subscription OnDeleteConsulta {
  onDeleteConsulta {
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
export const onCreateDiagnostico = `subscription OnCreateDiagnostico {
  onCreateDiagnostico {
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
export const onUpdateDiagnostico = `subscription OnUpdateDiagnostico {
  onUpdateDiagnostico {
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
export const onDeleteDiagnostico = `subscription OnDeleteDiagnostico {
  onDeleteDiagnostico {
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
export const onCreateTratamiento = `subscription OnCreateTratamiento {
  onCreateTratamiento {
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
export const onUpdateTratamiento = `subscription OnUpdateTratamiento {
  onUpdateTratamiento {
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
export const onDeleteTratamiento = `subscription OnDeleteTratamiento {
  onDeleteTratamiento {
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
export const onCreateHospitalizacion = `subscription OnCreateHospitalizacion {
  onCreateHospitalizacion {
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
export const onUpdateHospitalizacion = `subscription OnUpdateHospitalizacion {
  onUpdateHospitalizacion {
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
export const onDeleteHospitalizacion = `subscription OnDeleteHospitalizacion {
  onDeleteHospitalizacion {
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

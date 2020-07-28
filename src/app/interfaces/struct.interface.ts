export interface IEstructCurso {
    title: String,
    curso: ICursoDetail,
    miembros: [IMiembro],
    sumilla: String,
    competencia: String,
    groups: [IGroup]
    semanas: [ISemana]
}

export interface ICursoDetail {
    nombre: String,
    creditos: String,
    horas: String,
    ciclo: String,
    periodo: String,
    docente: String
}

export interface IMiembro {
    name: String,
    drive: String,
    code: String
}

export interface IGroup {
    id: String,
    url: String,
    integrantes: [String]
}

export interface ISemana {
    id: String,
    title: String,
    observaciones?: String
}
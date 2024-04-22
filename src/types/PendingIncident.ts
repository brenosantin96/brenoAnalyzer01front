import { Incident } from "./Incident";

export type PendingIncidentType = {
    numero: string,
    fechaActualizado: Date,
    tecnico: string,
    qtde: number,
    pencierre: boolean;
}

export type PendingPencierreIncidents = {
    numero: string,
    fechaActualizado: Date,
    tecnico: string,
    qtdePendiente: number,
    qtdePencierre: number,
}

export type PendingPencierreIncidentType = {
    tecnico: string,
    qtde: number
}

export type PendingTickets = {
    pendientes: Incident[],
    pencierres: Incident[]
}
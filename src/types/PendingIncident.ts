import { Incident } from "./Incident";

export type PendingIncidentType = {
    numero: string,
    fechaActualizado: Date,
    tecnico: string,
    qtde: number,
    pencierre: boolean;
}

export type PendingTicketsIncidents = {
    tecnico: string,
    qtdePendiente: number,
    qtdePencierre: number,
    ticketsPendientes: Incident[];
    ticketsPencierre: Incident[];
}

export type PendingPencierreIncidentType = {
    tecnico: string,
    qtde: number
}

export type PendingTickets = {
    pendientes: Incident[],
    pencierres: Incident[]
}
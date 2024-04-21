import { Incident } from "@/types/Incident";
import { subDays, isWeekend } from 'date-fns';

const getPendingDate = (today: Date, days: number): Date => {
    let pendingDate = subDays(today, days);

    // Se a data de pendência cair em um sábado ou domingo, subtrai mais um dia até encontrar um dia útil
    while (isWeekend(pendingDate)) {
        pendingDate = subDays(pendingDate, 1);
    }

    return pendingDate;
};

export const getPendingIncidents = (incidents: Incident[]) => {
    
    const todayDate = new Date();
    const pendingDate = getPendingDate(todayDate, 2); // Subtraindo 2 dias úteis, desconsiderando fins de semana

    // Data de corte até a qual consideramos os incidentes pendentes (dois dias úteis atrás)
    //const cutoffDate = getPendingDate(todayDate, 2);

    // Filtra os incidentes
    const filteredIncidents = incidents.filter((item) =>
        item.actualizado <= pendingDate &&
        //item.actualizado >= cutoffDate && // Filtra apenas os incidentes até a data limite
        item.motivoparaponerenespera === "Esperando al solicitante" &&
        !item.etiquetas.includes("PENCIERRE")
    );

    // Ordena os incidentes pelo campo "actualizado", do mais recente para o mais antigo
    const sortedIncidents = filteredIncidents.sort((a, b) => b.actualizado.getTime() - a.actualizado.getTime());

    return sortedIncidents;
};

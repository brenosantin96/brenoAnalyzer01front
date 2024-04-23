import { Incident } from "@/types/Incident";
import { PendingIncidentType, PendingTickets, PendingTicketsIncidents } from "@/types/PendingIncident";
import { subDays, isWeekend, isSaturday, isSunday, startOfDay } from 'date-fns'
import { isMonday } from "date-fns/isMonday";
import { isTuesday } from "date-fns/isTuesday";
import { isWednesday } from "date-fns/isWednesday";
import { Newsreader } from "next/font/google";


export const getPendingDate = (today: Date, days: number): Date => {

    let pendingDate = subDays(today, days);

    if (isMonday(today) || isTuesday(today)) {
        pendingDate = subDays(today, 4)
    }

    // setting time to midnight. 
    pendingDate.setHours(23, 59, 59, 999);

    return pendingDate;
};


export const getPendingIncidents = (incidents: Incident[]) => {

    const todayDate = new Date();

    //handleWeekendTickets
    let weekendPendingTickets: Incident[] = []
    let saturday00 = getLastSaturday(todayDate);
    let sunday2359 = getLastSunday(todayDate);

    saturday00.setHours(0, 0, 0, 500);
    sunday2359.setHours(23, 59, 59, 500);


    // setting time to midnight. 
    todayDate.setHours(0, 0, 1, 500);

    const pendingDate = getPendingDate(todayDate, 2)

    //Para trazer todos tickets caducados do fim de semana para serem atualizados na terca feira.
    if (isTuesday(todayDate)) {
        weekendPendingTickets = incidents.filter((item) => item.actualizado <= sunday2359 &&
            item.actualizado >= saturday00 &&
            item.motivoparaponerenespera.includes("Esperando al solicitante") &&
            !item.etiquetas.includes("PENCIERRE"))

        console.log("SUNDAY PENDING TICKETS", weekendPendingTickets)
    }


    let filteredIncidents = incidents.filter((item) => item.actualizado <= pendingDate &&
        item.motivoparaponerenespera.includes("Esperando al solicitante") &&
        !item.etiquetas.includes("PENCIERRE"))

    let ticketsConcatenados = filteredIncidents.concat(weekendPendingTickets);

    // sorting by date of updatedItem
    const sortedIncidents = ticketsConcatenados.sort((a, b) => b.actualizado.getTime() - a.actualizado.getTime());



    return sortedIncidents;

}

export const getPendingDatePencierre = (today: Date, days: number): Date => {

    let pendingDate = subDays(today, days);

    if (isMonday(today) || isTuesday(today) || isWednesday(today)) {
        pendingDate = subDays(today, 5)
    }

    // setting time to midnight. 
    pendingDate.setHours(23, 59, 59, 999);

    return pendingDate;
};



export const getPencierreIncidents = (incidents: Incident[]) => {

    const todayDate = new Date();

    //handleWeekendTickets
    let weekendPendingTickets: Incident[] = []
    let saturday00 = getLastSaturday(todayDate);
    let sunday2359 = getLastSunday(todayDate);

    saturday00.setHours(0, 0, 0, 500);
    sunday2359.setHours(23, 59, 59, 500);

    todayDate.setHours(0, 0, 0, 500);


    const pendingDate = getPendingDatePencierre(todayDate, 3)

    //Para trazer todos tickets caducados do fim de semana para serem atualizados na quarta feira.
    if (isWednesday(todayDate)) {
        weekendPendingTickets = incidents.filter((item) => item.actualizado <= sunday2359 &&
            item.actualizado >= saturday00 &&
            item.motivoparaponerenespera.includes("Esperando al solicitante") &&
            !item.etiquetas.includes("PENCIERRE"))

        console.log("WEEKEND PENDING TICKETS", weekendPendingTickets)
    }



    const filteredIncidents = incidents.filter((item) => item.actualizado <= pendingDate &&
        item.motivoparaponerenespera.includes("Esperando al solicitante") &&
        item.etiquetas.includes("PENCIERRE"))

    let ticketsConcatenados = filteredIncidents.concat(weekendPendingTickets);

    // sorting by date of updatedItem
    const sortedIncidents = ticketsConcatenados.sort((a, b) => b.actualizado.getTime() - a.actualizado.getTime());


    return sortedIncidents;

}




export const getPendingTicketsPerTechnician = (incidents: Incident[]) => {

    const pendingItemsObject: PendingIncidentType[] = [];

    incidents.forEach((item) => {

        const index = pendingItemsObject.findIndex((element) => element.tecnico === item.asignadoa)

        if (index !== -1) {
            pendingItemsObject[index].qtde++;

        } else {
            pendingItemsObject.push({
                numero: item.numero,
                fechaActualizado: item.actualizado,
                tecnico: item.asignadoa,
                qtde: 1,
                pencierre: false
            })
        }

    });


};

export const getPendingTicketsPerTechnicianPencierre = (pencierreIncidents: Incident[]) => {

    const pendingItemsObject: PendingIncidentType[] = [];

    pencierreIncidents.forEach((item) => {

        const index = pendingItemsObject.findIndex((element) => element.tecnico === item.asignadoa)

        if (index !== -1) {
            pendingItemsObject[index].qtde++;

        } else {
            pendingItemsObject.push({
                numero: item.numero,
                fechaActualizado: item.actualizado,
                tecnico: item.asignadoa,
                qtde: 1,
                pencierre: true
            })
        }

    });

    return pendingItemsObject;

};


/* export const getAllPendingTickets = (incidents: Incident[]) => {

    const pendingItemsObject: PendingTicketsIncidents[] = [];

    let pendingTickets = getPendingIncidents(incidents);
    let pencierreTickets = getPencierreIncidents(incidents);

    let allPendingTickets = pendingTickets.concat(pencierreTickets);



    allPendingTickets.forEach((item) => {

        const index = pendingItemsObject.findIndex((element) => element.tecnico === item.asignadoa)

        //se encontrado elemento em pendingItemsObject
        if (index !== -1) {

            if (item.etiquetas.includes("PENCIERRE")) {
                pendingItemsObject[index].qtdePencierre++;
            }
            if (!item.etiquetas.includes("PENCIERRE")) {
                pendingItemsObject[index].qtdePendiente++;
            }


        } else {


            if (item.etiquetas.includes("PENCIERRE")) {
                pendingItemsObject.push({
                    tecnico: item.asignadoa,
                    qtdePencierre: 1,
                    qtdePendiente: 0
                })
            }

            if (!item.etiquetas.includes("PENCIERRE")) {
                pendingItemsObject.push({
                    tecnico: item.asignadoa,
                    qtdePencierre: 0,
                    qtdePendiente: 1
                })
            }


        }

    });

    return pendingItemsObject;


} */

export const getAllPendingTickets2 = (incidents: Incident[]) => {

    const pendingItemsObject: PendingTicketsIncidents[] = [];

    let pendingTickets = getPendingIncidents(incidents);
    let pencierreTickets = getPencierreIncidents(incidents);

    let allPendingTickets = pendingTickets.concat(pencierreTickets);



    allPendingTickets.forEach((item) => {

        const index = pendingItemsObject.findIndex((element) => element.tecnico === item.asignadoa)

        //se encontrado elemento em pendingItemsObject
        if (index !== -1) {

            if (item.etiquetas.includes("PENCIERRE")) {
                pendingItemsObject[index].qtdePencierre++;
                pendingItemsObject[index].ticketsPencierre.push(item)
            }
            if (!item.etiquetas.includes("PENCIERRE")) {
                pendingItemsObject[index].qtdePendiente++;
                pendingItemsObject[index].ticketsPendientes.push(item)
            }


        } else {


            if (item.etiquetas.includes("PENCIERRE")) {
                pendingItemsObject.push({
                    tecnico: item.asignadoa,
                    qtdePencierre: 1,
                    qtdePendiente: 0,
                    ticketsPencierre: [item],
                    ticketsPendientes: []
                })
            }

            if (!item.etiquetas.includes("PENCIERRE")) {
                pendingItemsObject.push({
                    tecnico: item.asignadoa,
                    qtdePencierre: 0,
                    qtdePendiente: 1,
                    ticketsPencierre: [],
                    ticketsPendientes: [item]
                })
            }


        }

    });

    return pendingItemsObject;


}


function getLastSunday(date: Date): Date {

    let currentDate = startOfDay(date); // Garante que estamos começando a partir do início do dia

    // Enquanto o dia atual não for domingo, subtrai um dia
    while (!isSunday(currentDate)) {
        currentDate = subDays(currentDate, 1);
    }

    return currentDate;
}


function getLastSaturday(date: Date): Date {

    let currentDate = startOfDay(date); // Garante que estamos começando a partir do início do dia

    // Enquanto o dia atual não for domingo, subtrai um dia
    while (!isSaturday(currentDate)) {
        currentDate = subDays(currentDate, 1);
    }

    return currentDate;
}





//

//pegar a data atual
//subtrair dois dias da data atual
//com esse resultado, pegar todos incidentes que nao possuem a palavra pencierre em incidentes.etiquetas

//Aqui estou pegando a data que o ticket deveria ser atualizado.... Se supostamente hoje é dia 22 e se removemos 02, ficaria 20
//20/Abril/2024 é Sabado, a funcao getPendingDate removeria 1 por cair dentro do while, e retornaria dia 19/04.... mas entretanto deveria retornar apenas os tickets
//do dia 18/Abril/2024, que sao de 02 dias atras, desconsiderando sabado e domingo....


// Se a data de pendência cair em um sábado ou domingo, subtrai mais um dia até encontrar um dia útil
/*
EX: se eu tirar relatorio segunda feira, vai reduzir 02 dias e vai cair no sabado, que vai reduzir mais 02 dias trazendo pendentes de quinta feira
EX: se eu tirar relatorio terca feira, vai reduzir 02 dias e vai cair no domingo, que vai reduzir mais 02 dias trazendo pendentes de sexta feira

*/


//Nao esta pegando o ticket pendente de dois dias atras... que no caso é de domingo...
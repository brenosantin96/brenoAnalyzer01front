import { Incident } from "@/types/Incident";
import { subDays, isWeekend } from 'date-fns'


export const getPendingDate = (today: Date, days: number): Date => {

    let pendingDate = subDays(today, days);

    // Se a data de pendência cair em um sábado ou domingo, subtrai mais um dia até encontrar um dia útil
    while (isWeekend(pendingDate)) {
        pendingDate = subDays(pendingDate, 1);
    }

    return pendingDate;
};


export const getPendingIncidents = (incidents: Incident[]) => {

    const todayDate = new Date();

    let tomorrow = new Date(); //estou supondo que estou executando esse codigo no dia de amanha dia 22/Abril/2024
    tomorrow.setDate(tomorrow.getDate() + 1);
    console.log(tomorrow)


    const pendingDate = getPendingDate(tomorrow, 2) //Aqui estou pegando a data que o ticket deveria ser atualizado.... Se supostamente hoje é dia 22 e se removemos 02, ficaria 20
    //20/Abril/2024 é Sabado, a funcao getPendingDate removeria 1 por cair dentro do while, e retornaria dia 19/04.... mas entretanto deveria retornar apenas os tickets
    //do dia 18/Abril/2024, que sao de 02 dias atras, desconsiderando sabado e domingo....

    const filteredIncidents = incidents.filter((item) => item.actualizado <= pendingDate && item.motivoparaponerenespera === "Esperando al solicitante" && !item.etiquetas.includes("PENCIERRE"))

    // Ordena os incidentes pelo campo "actualizado", do mais recente para o mais antigo
    const sortedIncidents = filteredIncidents.sort((a, b) => b.actualizado.getTime() - a.actualizado.getTime());

    return sortedIncidents;
    //esta retornando tickets com actualizado do dia 19 e deveria apenas trazer tickets do dia dia 18 para tras

}


//pegar a data atual
//subtrair dois dias da data atual
//com esse resultado, pegar todos incidentes que nao possuem a palavra pencierre em incidentes.etiquetas
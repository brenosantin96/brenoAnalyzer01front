"use client"
import React, { useEffect, useState } from 'react';
import { useIncidentContext } from '@/contexts/IncidentContext';
import Navbar from '@/components/Navbar';
import WeeklyChatsTable from '@/components/WeeklyChatsTable';
import Link from 'next/link';
import { Chat, ExpiredChatsConversationByTechnician } from '@/types/Chat';
import { getAllChatsByTechnician, getExpiredChatName, getExpiredPorcent, getQuantityAllExpiredChats } from '../../utils/ChatsFunctions';
import * as XLSX from 'xlsx';
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

const WeeklyChats = () => {
    //context
    const incidentContext = useIncidentContext();

    const [chatsByTechnician, setChatsByTechnician] = useState<ExpiredChatsConversationByTechnician[]>([])

    useEffect(() => {

        if (incidentContext?.chats) {
            console.log("allChatsConversations", incidentContext.chats)
            let expiredChatsByTechnician = getAllChatsByTechnician(incidentContext.chats)
            let sortedChatsByTechnician = expiredChatsByTechnician.sort((a: any, b: any) => b.qtdeTotalChats - a.qtdeTotalChats)
            setChatsByTechnician(sortedChatsByTechnician);
        }
    }, [incidentContext?.chats])

    const getChatConversationFinalDate = (chats: Chat[]) => {

        if (incidentContext?.chats) {
            const stringInitialDate = incidentContext?.chats[0].creado;
            const formattedStringFinalDate = format(stringInitialDate, 'dd/MMMM/yyyy', { locale: es })
            return formattedStringFinalDate;
        }
    }

    const getChatConversationInitialDate = (chats: Chat[]) => {

        if (incidentContext?.chats) {
            const stringInitialDate = incidentContext?.chats[incidentContext?.chats.length - 1].creado
            const formattedStringInitialDate = format(stringInitialDate, 'dd/MMMM/yyyy', { locale: es })
            return formattedStringInitialDate;
        }
    }



    const exportExcel = (chatsByTechnician: ExpiredChatsConversationByTechnician[], allChatsConversations: Chat[]) => {

        let qtdeExpiredChats = 0;
        chatsByTechnician.forEach((item) => qtdeExpiredChats = qtdeExpiredChats + item.qtdeexpiredChats)
        let totalChats = allChatsConversations.length;
        let allPorcentageExpired = (qtdeExpiredChats / totalChats) * 100
        let allPorcentageExpired02Houses = parseFloat(allPorcentageExpired.toFixed(2));


        //um array, cada elemento é uma linha, cada virgula é uma coluna
        let wsData = [[`Chats ${getChatConversationInitialDate(allChatsConversations)} a ${getChatConversationFinalDate(allChatsConversations)}`],
        ["Técnico", "Registrados", "Caducados", "% Caducados", "Chats Caducados"],
        ...chatsByTechnician.map((chat: ExpiredChatsConversationByTechnician) => [
            chat.tecnico,
            chat.qtdeTotalChats,
            chat.qtdeexpiredChats,
            chat.expiredPorcentage = parseFloat(getExpiredPorcent(chat.qtdeTotalChats, chat.expiredChats).toFixed(2)),
            chat.expiredChatsString = getExpiredChatName(chat.expiredChats)

        ]),
        ["TOTAL", allChatsConversations.length, getQuantityAllExpiredChats(allChatsConversations), allPorcentageExpired02Houses]
        ];


       // wsData[3].sort((a, b) => b.creado.getTime() - a.creado.getTime());
        // sorting by date of updatedItem
        

        const ws = XLSX.utils.aoa_to_sheet(wsData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Chats");
        XLSX.writeFile(wb, "WeeklyChats.xlsx");
    }

    return (
        <>


            <Navbar />

            <div className={`${incidentContext && incidentContext.chats.length === 0 ? 'h-screen ' : ' '} md:h-screen flex flex-col 
            justify-center items-center md:flex-row md:justify-start md:items-start mt-2 md:mt-0 bg-[#EAEBED] w-full`}>

                {incidentContext && incidentContext.chats.length === 0 &&

                    <div className='mx-5 text-center flex flex-col justify-center items-center h-3/4 md:px-5  w-full'>
                        <p className='text-3xl justify-center items-center mb-5'>
                            Ninguno fichero .xls importado, hacer clic <strong><Link className='hover:text-[#006989]' href="/">aquí</Link></strong> para importar un fichero y empezar el análisis.
                        </p>
                        <p className='text-2xl justify-center items-center mt-5 text-red-500'>
                            Colunas obligatórias: Creado, Tarea, Porcentaje de negocio trascurrido, Asignado a
                        </p>
                        <p className='text-2xl justify-center items-center mt-5'>
                            El fichero se puede coger desde el siguiente enlace:  <strong><Link target='_blank' className='hover:text-[#006989]' href="https://repsolprod.service-now.com/nav_to.do?uri=%2Ftask_sla_list.do%3Fsysparm_query%3Dsla%3Deeedebdbdb3850102e3cf3d31d96190a%5Eend_timeBETWEENjavascript:gs.dateGenerate(%272024-04-01%27,%2700:00:00%27)@javascript:gs.dateGenerate(%272024-04-05%27,%2723:59:59%27)%5Etask.ref_chat_queue_entry.u_callISNOTEMPTY%26sysparm_first_row%3D1%26sysparm_view%3D">Hacer clic aquí</Link></strong>
                        </p>
                        <p className='text-2xl justify-center items-center mt-5'>
                            No olvides poner en el filtro de que fecha hasta que fecha deseas tu informe
                        </p>
                    </div>
                }

                {incidentContext && incidentContext?.chats.length > 0 &&

                    <div className='bg-[#EAEBED]'>
                        <div className='flex flex-col justify-center items-center mt-2 md:mt-5 md:px-5 bg-[#EAEBED] w-full '>
                            <WeeklyChatsTable allChatsConversations={incidentContext.chats} />
                        </div>

                        <div className='px-5 mb-10'>
                            <button className='bg-[#13293d] text-[#e8f1f2] p-2 rounded-lg hover:bg-[#1b98e0] hover:text-[#FFF]'
                                onClick={() => exportExcel(chatsByTechnician, incidentContext.chats)}
                            >Exportar Excel</button>
                        </div>
                    </div>
                }


            </div>


        </>
    );
};

export default WeeklyChats;


/* {incidentContext.chats.map((item) => (
    <div className='text-gray-600 block' key={item.tarea}>{item.tarea} - {item.asignadoa}</div>
))} */
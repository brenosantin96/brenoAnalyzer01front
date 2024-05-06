"use client"
import React, { useEffect } from 'react';
import { useIncidentContext } from '@/contexts/IncidentContext';
import Navbar from '@/components/Navbar';
import WeeklyChatsTable from '@/components/WeeklyChatsTable';
import Link from 'next/link';

const WeeklyChats = () => {
    //context
    const incidentContext = useIncidentContext();

    useEffect(() => {

        console.log(incidentContext?.chats);

    }, [incidentContext])

    return (
        <>

            <div className='h-screen bg-[#EAEBED]'>
                <Navbar />

                {incidentContext && incidentContext.chats.length === 0 &&

                    <div className='mx-5 flex flex-col justify-center items-center h-3/4 md:px-5  w-full'>
                        <p className='text-3xl justify-center items-center mb-5 my-'>
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
                    <div className='flex flex-col justify-center items-center mt-2 md:mt-5 md:px-5 bg-[#EAEBED] w-full'>
                        <WeeklyChatsTable allChatsConversations={incidentContext.chats} />
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
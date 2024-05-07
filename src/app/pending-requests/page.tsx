"use client"

import React, { useEffect, useState } from 'react'
import IncidentsTable from '../../components/IncidentsTable';
import { useIncidentContext } from '../../contexts/IncidentContext'
import Navbar from '@/components/Navbar';
import TableEx from '@/components/TableEx';
import { getAllPendingTickets2 } from '@/utils/IncidentsFunctions';
import { PendingTicketsIncidents } from '@/types/PendingIncident';
import Link from 'next/link';


const PendingRequests = () => {

    //context
    const incidentContext = useIncidentContext();

    const [allPendingTickets, setAllPendingTickets] = useState<PendingTicketsIncidents[]>([])
    const [techPendingTickets, setTechPendingTickets] = useState<PendingTicketsIncidents>()

    const [togglePendings, setTogglePendings] = useState(false);

    const [selectedTechnician, setSelectedTechnician] = useState("");



    useEffect(() => {

        if (incidentContext) {
            let allTickets = getAllPendingTickets2(incidentContext.requests)
            setAllPendingTickets(allTickets)

        }
    }, [incidentContext])

    useEffect(() => {

        console.log(techPendingTickets)

    }, [techPendingTickets])



    const getTechnician = (name: string) => {
        setSelectedTechnician(name);

        const pendingTicketsByTechnician = allPendingTickets.find((item: PendingTicketsIncidents) => item.tecnico === name);

        if (pendingTicketsByTechnician) {
            setTechPendingTickets(pendingTicketsByTechnician)
        }

        console.log(name)
    }





    return (

        <>
            <Navbar />
            {incidentContext !== null &&


                <div className={`${allPendingTickets.length === 0 ? 'h-screen ' : ' '} md:h-screen flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start mt-2 md:mt-0 bg-[#EAEBED] w-full`}>
                    
                    {allPendingTickets.length === 0 &&
                        <div className='mx-5 text-center w-full h-3/4 flex flex-col justify-center items-center'>
                            <p className='text-3xl justify-center items-center mb-5 my-'>
                                Ninguno fichero .xls importado, hacer clic <strong><Link className='hover:text-[#006989]' href="/">aquí</Link></strong> para importar un fichero y empezar el análisis.
                            </p>
                            <p className='text-2xl justify-center items-center mt-5 text-red-500'>
                                El fichero debe contener las columnas 'Número', 'Abierto', 'Actualizado', 'Asignado a', 'Razón Pendiente', 'Etiquetas'
                            </p>
                            <p className='text-2xl justify-center items-center mt-5'>
                                El fichero se puede coger desde el siguiente enlace:  <strong><Link target='_blank' className='hover:text-[#006989]' href="https://repsolprod.service-now.com/sc_req_item_list.do?sysparm_query=assignment_group%3D0231c292db67ba00b5e3fd651d9619fc%5Estate%3D-5%5Eactive%3Dtrue">Hacer clic aquí</Link></strong>
                            </p>
                        </div>
                    }


                    {allPendingTickets.length > 0 &&
                        <aside>
                            <IncidentsTable pendingIncidents={allPendingTickets} getSelectedTechnician={getTechnician} />
                        </aside>
                    }

                    {selectedTechnician !== undefined && techPendingTickets &&

                        <div className='my-3 px-3'>

                            {techPendingTickets.ticketsPendientes.length > 0 ? (
                                <div>
                                    <h2 className='font-bold text-xl md:text-2xl pb-2'>Pendientes de {techPendingTickets?.tecnico}</h2>
                                    {techPendingTickets.ticketsPendientes.map((item) => <h4 key={item.numero} className='text-[#726D6D]'>{item.numero}</h4>)}
                                </div>
                            ) : (
                                <div>
                                    <h2 className='font-bold text-xl md:text-2xl pb-2'>Pendientes de {techPendingTickets?.tecnico}</h2>
                                    <div className="text-[#726D6D]">Sin tickets Pendientes para actualizar hoy</div>
                                </div>
                            )}

                            <div className='mt-2'>
                                {techPendingTickets.ticketsPencierre.length > 0 ? (
                                    <div>
                                        <h2 className='font-bold text-xl md:text-2xl pb-2'>Pencierres de {techPendingTickets?.tecnico}</h2>
                                        {techPendingTickets.ticketsPencierre.map((item) => <h4 key={item.numero} className='text-[#726D6D]'>{item.numero}</h4>)}
                                    </div>
                                ) : (
                                    <div>
                                        <h2 className='font-bold text-xl md:text-2xl pb-2'>Pencierres de {techPendingTickets?.tecnico}</h2>
                                        <div className="text-[#726D6D]">Sin tickets Pencierre para actualizar hoy</div>
                                    </div>
                                )}
                            </div>

                        </div>
                    }
                </div>
            }

        </>

    )
}

export default PendingRequests


{/* < div className = 'flex justify-center items-center bg-[#f5f5fa] overflow-auto' >
        { incidentContext &&
        <IncidentsTable incidents={incidentContext.incidents} />
                }
            </div > */}
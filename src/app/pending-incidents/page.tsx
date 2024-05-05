"use client"

import React, { useEffect, useState } from 'react'
import IncidentsTable from '../../components/IncidentsTable';
import { useIncidentContext } from '../../contexts/IncidentContext'
import Navbar from '@/components/Navbar';
import TableEx from '@/components/TableEx';
import { getAllPendingTickets2 } from '@/utils/IncidentsFunctions';
import { PendingTicketsIncidents } from '@/types/PendingIncident';


const PendingIncidents = () => {

    //context
    const incidentContext = useIncidentContext();

    const [allPendingTickets, setAllPendingTickets] = useState<PendingTicketsIncidents[]>([])
    const [techPendingTickets, setTechPendingTickets] = useState<PendingTicketsIncidents>()

    const [togglePendings, setTogglePendings] = useState(false);

    const [selectedTechnician, setSelectedTechnician] = useState("");



    useEffect(() => {

        if (incidentContext) {
            let allTickets = getAllPendingTickets2(incidentContext.incidents)
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


                <div className='flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start mt-2 md:mt-0 bg-[#EAEBED] w-full '>
                    <aside>
                        <IncidentsTable pendingIncidents={allPendingTickets} getSelectedTechnician={getTechnician} />
                    </aside>

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

export default PendingIncidents


{/* < div className = 'flex justify-center items-center bg-[#f5f5fa] overflow-auto' >
        { incidentContext &&
        <IncidentsTable incidents={incidentContext.incidents} />
                }
            </div > */}
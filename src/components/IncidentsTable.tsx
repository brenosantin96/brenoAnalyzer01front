import { Incident } from '@/types/Incident'
import React from 'react'
import IncidentItemLineTable from './IncidentItemLineTable'
import { PendingTicketsIncidents } from '@/types/PendingIncident'
import { getDate } from 'date-fns/getDate'
import { isSunday } from 'date-fns/isSunday'
import { isWeekend } from 'date-fns/isWeekend'

type Props = {
    pendingIncidents: PendingTicketsIncidents[];
    getSelectedTechnician: (name: string) => void
}

const IncidentsTable = ({ pendingIncidents, getSelectedTechnician }: Props) => {

    

    const getTechnician = (name: string) => {
        getSelectedTechnician(name)
    }


    return (

        <table className="border-spacing-1 table-auto bg-[#D9D9D9] border-2">
            <thead className='text-center'>

                <tr className=' text-center p-2 w-full'>
                    <td colSpan={3} className='text-xl font-medium p-3'>{isWeekend(new Date()) ? 'Deben ser actualizados el Lunes' : 'Deberían estar actualizados'}  </td>
                    <td></td>
                    <td></td>
                </tr>

                <tr className='font-medium text-center'>
                    <td className='border border-[#ABABAB] text-[#505153] font-semibold p-1 md:p-3'>Técnico</td>
                    <td className='border border-[#ABABAB] text-[#505153] font-semibold p-1 md:p-3'>Pendientes</td>
                    <td className='border border-[#ABABAB] text-[#505153] font-semibold p-1 md:p-3'>Pencierres</td>
                </tr>
            </thead>
            <tbody>
                
                {pendingIncidents !== undefined && pendingIncidents.map((item) => (
                    <IncidentItemLineTable key={item.tecnico + new Date().toString()} pendingIncidents={item} getSelectedTechnician={getTechnician} />
                ))}

            </tbody>
        </table>

    )
}

export default IncidentsTable

/* {incidents.map((item) => (
    <IncidentItemLineTable key={item.numero} incident={item} />
))} */
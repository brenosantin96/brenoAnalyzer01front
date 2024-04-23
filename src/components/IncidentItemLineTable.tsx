import { Incident } from '@/types/Incident'
import { PendingTicketsIncidents } from '@/types/PendingIncident';
import React from 'react'

type Props = {
    pendingIncidents: PendingTicketsIncidents;
}

const IncidentItemLineTable = ({ pendingIncidents }: Props) => {






    return (
        <tr className='font-medium'>
            <td className='md:text-nowrap border border-[#ABABAB] text-[#505153] p-2'>{pendingIncidents.tecnico}</td>
            <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>{pendingIncidents.qtdePendiente}</td>
            <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>{pendingIncidents.qtdePencierre}</td>
        </tr>
    )
}

export default IncidentItemLineTable
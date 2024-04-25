import { Incident } from '@/types/Incident'
import { PendingTicketsIncidents } from '@/types/PendingIncident';
import React, { useState } from 'react'

type Props = {
    pendingIncidents: PendingTicketsIncidents;
    getSelectedTechnician: (name: string) => void
}

const IncidentItemLineTable = ({ pendingIncidents, getSelectedTechnician }: Props) => {


    const [selectedTech, setSelectedTech] = useState("");

    const getTechnician = (name: string) => {
        getSelectedTechnician(name)
    }




    return (
        <tr onClick={() => getTechnician(pendingIncidents.tecnico)}
            className='font-medium hover:bg-gray-100 hover:bg-opacity-50 transition-colors duration-200 cursor-pointer'
        >
            <td className='md:text-nowrap border border-[#ABABAB] text-[#505153] p-2'>{pendingIncidents.tecnico}</td>
            <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>{pendingIncidents.qtdePendiente}</td>
            <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>{pendingIncidents.qtdePencierre}</td>
        </tr>
    )
}

export default IncidentItemLineTable
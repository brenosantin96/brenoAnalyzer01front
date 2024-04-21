import { Incident } from '@/types/Incident'
import React from 'react'

type Props = {
    incident: Incident,
    incidents: Incident[]
}

const IncidentItemLineTable = ({ incident, incidents }: Props) => {






    return (
        <tr className='font-medium'>
            <td className='md:text-nowrap border border-[#ABABAB] text-[#505153] p-2'>{incident.asignadoa}</td>
            <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>3</td>
            <td className='border border-[#ABABAB] text-[#505153] p-2 text-center'>4</td>
        </tr>
    )
}

export default IncidentItemLineTable
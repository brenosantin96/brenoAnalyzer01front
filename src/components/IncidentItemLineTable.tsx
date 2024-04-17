import { Incident } from '@/types/Incident'
import React from 'react'

type Props = {
    incident: Incident
}

const IncidentItemLineTable = ({ incident }: Props) => {
    return (
        <tr>
            <td className='border border-slate-400 p-2'>{incident.numero}</td>
            <td className='border border-slate-400 p-2'>{incident.abierto.toString()}</td>
            <td className='border border-slate-400 p-2'>{incident.asignadoa}</td>
            <td className='border border-slate-400 p-2'>{incident.actualizado.toString()}</td>
            <td className='border border-slate-400 p-2'>{incident.etiquetas}</td>
        </tr>
    )
}

export default IncidentItemLineTable
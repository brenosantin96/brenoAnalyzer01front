import { Incident } from '@/types/Incident'
import React from 'react'
import IncidentItemLineTable from './IncidentItemLineTable'

type Props = {
    incidents: Incident[]
}

const IncidentsTable = ({ incidents }: Props) => {
    return (
        <div className='overflow-y-auto overflow-auto bg-red-300'>
            <table className="m-5 border-spacing-1 table-auto bg-slate-200 border-2">
                <thead>
                    <tr>
                        <th className='border border-slate-400 font-semibold p-3'>Número</th>
                        <th className='border border-slate-400 font-semibold p-3'>Abierto</th>
                        <th className='border border-slate-400 font-semibold p-3'>Asignado a</th>
                        <th className='border border-slate-400 font-semibold p-3'>Actualizado por último</th>
                        <th className='border border-slate-400 font-semibold p-3'>Pencierre/Pendiente</th>
                    </tr>
                </thead>
                <tbody>
                 {incidents.map((item) => (
                    <IncidentItemLineTable key={item.numero} incident={item} />
                ))} 

                </tbody>
            </table>
        </div>
    )
}

export default IncidentsTable

/* {incidents.map((item) => (
    <IncidentItemLineTable key={item.numero} incident={item} />
))} */
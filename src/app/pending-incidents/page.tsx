"use client"

import React, { useEffect } from 'react'
import IncidentsTable from '../../components/IncidentsTable';
import { useIncidentContext } from '../../contexts/IncidentContext'
import Navbar from '@/components/Navbar';


const PendingIncidents = () => {

    //context
    const incidentContext = useIncidentContext();

    useEffect(() => {
        console.log(incidentContext)
    })

    return (

        <>
            <Navbar/>
            <div className='flex justify-center items-center bg-[#f5f5fa] overflow-auto'>
                {incidentContext &&
                    <IncidentsTable incidents={incidentContext.incidents} />
                }
            </div>

        </>

    )
}

export default PendingIncidents
"use client"

import React, { useEffect } from 'react'
import IncidentsTable from '../../components/IncidentsTable';
import { useIncidentContext } from '../../contexts/IncidentContext'
import Navbar from '@/components/Navbar';
import TableEx from '@/components/TableEx';


const PendingIncidents = () => {

    //context
    const incidentContext = useIncidentContext();

    useEffect(() => {
        console.log(incidentContext)
    })

    return (

        <>
            <Navbar />
            {incidentContext !== null &&


                <div className='flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start mt-2 md:mt-0 bg-[#EAEBED] w-full '>
                    <aside>
                        <IncidentsTable incidents={incidentContext.incidents} />
                    </aside>
                    <div className='my-3  w-full px-3'>
                        <div>
                            <h2 className='font-bold text-xl md:text-2xl pb-2'>Pendientes de @nombre</h2>
                            <h4 className='text-[#726D6D]'>INC12345678</h4>
                            <h4 className='text-[#726D6D]'>INC12345678</h4>
                            <h4 className='text-[#726D6D]'>INC12345678</h4>
                            <h4 className='text-[#726D6D]'>INC12345678</h4>
                        </div>

                        <div className='mt-2'>
                            <h2 className='font-bold text-xl md:text-2xl pb-2'>Pencierres de @nombre</h2>
                            <h4 className='text-[#726D6D] '>INC12345678</h4>
                            <h4 className='text-[#726D6D]'>INC12345678</h4>
                            <h4 className='text-[#726D6D]'>INC12345678</h4>
                            <h4 className='text-[#726D6D]'>INC12345678</h4>
                        </div>
                    </div>
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
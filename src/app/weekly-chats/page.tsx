"use client"
import React, { useEffect } from 'react';
import { useIncidentContext } from '@/contexts/IncidentContext';
import Navbar from '@/components/Navbar';

const WeeklyChats = () => {
    //context
    const incidentContext = useIncidentContext();

    useEffect(()=> {

        console.log(incidentContext?.chats);

    }, [incidentContext])

    return (
        <> 
            <Navbar />

            {incidentContext && incidentContext.chats.length > 0 && (
                <div className='flex flex-col justify-center items-start mt-2 md:mt-0 bg-[#EAEBED] w-full'>
                    {incidentContext.chats.map((item) => (
                        <div className='text-gray-600 block' key={item.tarea}>{item.tarea} - {item.asignadoa}</div>
                    ))}
                </div>
            )}
        </>
    );
};

export default WeeklyChats;
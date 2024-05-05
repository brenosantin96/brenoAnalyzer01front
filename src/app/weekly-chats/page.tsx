"use client"
import React, { useEffect } from 'react';
import { useIncidentContext } from '@/contexts/IncidentContext';
import Navbar from '@/components/Navbar';
import WeeklyChatsTable from '@/components/WeeklyChatsTable';

const WeeklyChats = () => {
    //context
    const incidentContext = useIncidentContext();

    useEffect(() => {

        console.log(incidentContext?.chats);

    }, [incidentContext])

    return (
        <>
            <Navbar />

            {incidentContext && incidentContext?.chats.length > 0 &&
                <div className='flex flex-col justify-center items-center mt-2 md:mt-5 md:px-5 bg-[#EAEBED] w-full'>
                    <WeeklyChatsTable allChatsConversations={incidentContext.chats} />
                </div>
            }
        </>
    );
};

export default WeeklyChats;


/* {incidentContext.chats.map((item) => (
    <div className='text-gray-600 block' key={item.tarea}>{item.tarea} - {item.asignadoa}</div>
))} */
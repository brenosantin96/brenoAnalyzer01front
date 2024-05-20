"use client"

import { Chat } from '@/types/Chat';
import { Incident } from '../types/Incident';
import { ReactNode, createContext, useContext, useState } from "react";

type IncidentContextType = {
    incidents: Incident[];
    requests: Incident[];
    chats: Chat[];
    setChats: (chats: Chat[]) => void;
    setIncidents: (incs: Incident[]) => void;
    setRequests: (reqs: Incident[]) => void;
}

export const IncidentsContext = createContext<IncidentContextType | null>(null);

type PropsIncidentsProvider = {
    children: ReactNode;
}

export const IncidentsProvider = ({ children }: PropsIncidentsProvider) => {

    const [incidents, setIncidents] = useState<Incident[]>([]);
    const [requests, setRequests] = useState<Incident[]>([]);
    const [chats, setChats] = useState<Chat[]>([]);

    return (
        <IncidentsContext.Provider value={{ incidents, setIncidents, requests, setRequests, chats, setChats }}>
            {children}
        </IncidentsContext.Provider>
    )

}

//export const useIncidentContext = useContext(IncidentsContext);

export const useIncidentContext = () => {
    
    return useContext(IncidentsContext);
};
"use client"

import { Incident } from '../types/Incident';
import { ReactNode, createContext, useContext, useState } from "react";

type IncidentContextType = {
    incidents: Incident[];
    requests: Incident[];
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

    return (
        <IncidentsContext.Provider value={{ incidents, setIncidents, requests, setRequests }}>
            {children}
        </IncidentsContext.Provider>
    )

}

//export const useIncidentContext = useContext(IncidentsContext);

export const useIncidentContext = () => {
    
    return useContext(IncidentsContext);
};
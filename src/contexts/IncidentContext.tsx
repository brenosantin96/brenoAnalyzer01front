"use client"

import { Incident } from '../types/Incident';
import { ReactNode, createContext, useContext, useState } from "react";

type IncidentContextType = {
    incidents: Incident[];
    setIncidents: (incs: Incident[]) => void
}

export const IncidentsContext = createContext<IncidentContextType | null>(null);

type PropsIncidentsProvider = {
    children: ReactNode;
}

export const IncidentsProvider = ({ children }: PropsIncidentsProvider) => {

    const [incidents, setIncidents] = useState<Incident[]>([]);

    return (
        <IncidentsContext.Provider value={{ incidents, setIncidents }}>
            {children}
        </IncidentsContext.Provider>
    )

}

//export const useIncidentContext = useContext(IncidentsContext);

export const useIncidentContext = () => {
    
    return useContext(IncidentsContext);
};
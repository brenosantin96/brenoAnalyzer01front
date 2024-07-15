import { createContext, useContext } from 'react';
import { AuthContextType } from '../Auth/Types'


export const AuthContext = createContext<AuthContextType>(null!);

export const useAuthContext = () => {
    
    return useContext(AuthContext);
};
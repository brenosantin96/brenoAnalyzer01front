import { AxiosErrorResponse } from '@/types/AxiosErrorResponse';
import axios from 'axios'
const baseURL = process.env.NEXT_PUBLIC_BASEURL;

export const useApi = (token?: string) => ({


    uploadFile: async (formData: FormData) => {
        try {
            const response = await axios.post(`${baseURL}/api/upload`, formData);
            return response.data.message;
        } catch (error) {
            const axiosError = error as AxiosErrorResponse;
            return { error: axiosError.message };
        }
    },

    login: async (email: string, password: string) => {
        try {
            const response = await axios.post(`${baseURL}/api/login`, { email, password });
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosErrorResponse;
            return { error: axiosError.message };
        }
    },

    register: async (name: string, email: string, password: string, isAdmin: string) => {
        try {
            const response = await axios.post(`${baseURL}/api/register`, { name, email, password, isAdmin });
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosErrorResponse;
            return { error: axiosError.response?.data.error || axiosError.message };
        }
    },

    getInc_Vs_Ritm_Texts: async () => {

        try {
            const response = await axios.get(`${baseURL}/api/inc_vs_ritm_texts`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            } );
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosErrorResponse;
            return { error: axiosError.response?.data.error || axiosError.message };
        }
    }

    //Farei depois o create, update, delete no front, nao preocupar com isso agora.



    
});


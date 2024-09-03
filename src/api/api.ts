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
            });
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosErrorResponse;
            return { error: axiosError.response?.data.error || axiosError.message };
        }
    },

    create_Inc_Vs_Ritm_Texts: async (platform: string, casuistry: string, type_spanish: string, 
        type_english: string, shortcut: string, kb_article: string) => {

        try {
            const response = await axios.post(`${baseURL}/api/inc_vs_ritm_texts`, {
                platform, casuistry, type_spanish, type_english, shortcut, kb_article
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosErrorResponse;
            return { error: axiosError.response?.data.error || axiosError.message };
        }
    },

    edit_Inc_Vs_Ritm_Texts: async (id:string, platform: string, casuistry: string, type_spanish: string, 
        type_english: string, shortcut: string, kb_article: string, created_by: number, last_edition_by: number) => {

        try {
            const response = await axios.put(`${baseURL}/api/inc_vs_ritm_texts/${id}`, {
                platform, casuistry, type_spanish, type_english, shortcut, kb_article, created_by, last_edition_by
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosErrorResponse;
            return { error: axiosError.response?.data.error || axiosError.message };
        }
    },

    getUserLogged: async () => {

        if(token){

            try {
                const response = await axios.get(`${baseURL}/api/getuserlogged`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });
                return response.data;
            } catch (error) {
                const axiosError = error as AxiosErrorResponse;
                return { error: axiosError.response?.data.error || axiosError.message };
                //return { error: axiosError.response?.data.error || axiosError.message };
            }

        }
        
    }

});


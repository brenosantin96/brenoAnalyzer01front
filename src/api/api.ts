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
    }
});
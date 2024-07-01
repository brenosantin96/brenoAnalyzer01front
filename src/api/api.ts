import axios from 'axios'
const baseURL = process.env.NEXT_PUBLIC_BASEURL;


export const useApi = (token?: string) => ({


    uploadFile: async (formData: FormData) => {

        const response = await axios.post(`${baseURL}/api/upload`, formData)
        console.log(response.data)
        return response.data.message;

    },

    login: async (email: string, password: string) => {



    },

    register: async (name: string, email: string, password: string, isAdmin: string) => {
        
        const response = await axios.post(`${baseURL}/api/register`)

        console.log(response)


    }


})
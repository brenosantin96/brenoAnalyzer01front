import axios from 'axios'
const baseURL = process.env.NEXT_PUBLIC_BASEURL;


export const useApi = (token?: string) => ({


    uploadFile: async (formData: FormData) => {

        const response = await axios.post(`${baseURL}/upload`, formData)
        return response.data.message;

    },


})
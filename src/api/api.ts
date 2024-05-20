import axios from 'axios'
const baseURL = process.env.NEXT_PUBLIC_BASEURL;


export const useApi = (token?: string) => ({


    uploadFile: async (formData: FormData) => {

        const response = await axios.post(`${baseURL}/api/upload`, formData)
        console.log(response.data)
        return response.data.message;

    },

<<<<<<< HEAD
=======
    login: async (email: string, password: string) => {

        

    },

>>>>>>> e6efb29f09172639507bf79f6526f45aa65fad7b

})
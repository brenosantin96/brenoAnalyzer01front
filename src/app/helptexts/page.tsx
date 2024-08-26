import { useApi } from '@/api/api'
import Navbar from '@/components/Navbar'
import Table from '@/components/Table'
import { Inc_vs_ritm_text } from '@/types/Inc_vs_ritm_text_type'
import React, { useEffect, useState } from 'react'
import { redirect } from 'next/navigation' // Usado para redirecionar o usuário
import { cookies } from 'next/headers'

//SERVER COMPONENT
const HelpTexts = async () => {

    const token = cookies().get("token")?.value;
    const api = useApi(token);

     // validating token
     let allTableData = await api.getInc_Vs_Ritm_Texts();

     if(allTableData.error){
        redirect('/login');
     }
     
     console.log(allTableData)


    return (
        <>
            <Navbar />

            <div className='bg-[#C2D1DF]'>
                <Table />
            </div>
        </>
    )
}

export default HelpTexts


/* 

data: ServerProps

type ServerProps = {
    all_inc_vs_ritm_texts: Inc_vs_ritm_text[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    // const token = context.req.headers.cookie?.split(';').find(c => c.trim().startsWith('token='))?.split('=')[1] || '';

    const cookies = parseCookies(context);
    const token = cookies.token;

    if (!token) {
        return {
            redirect: {
                destination: '/login', // Redireciona para a página de login se o token não estiver presente
                permanent: false,
            },
        };
    }

    const api = useApi(token);

    //Get texts
    const all_inc_vs_ritm_texts = await api.getInc_Vs_Ritm_Texts();


    return {
        props: {
            all_inc_vs_ritm_texts
        }
    }
} */

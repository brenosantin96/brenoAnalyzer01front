"use client"
import { useApi } from '@/api/api'
import Navbar from '@/components/Navbar'
import Table from '@/components/Table'
import { Inc_vs_ritm_text } from '@/types/Inc_vs_ritm_text_type'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import nookies, { parseCookies } from 'nookies'


const HelpTexts = (data: ServerProps) => {


    const [selectActive, setSelectActive] = useState(false)
    const [selectedDivId, setSelectedDivId] = useState("0");


    useEffect(() => {
        console.log("selectActive", selectActive)
    }, [selectActive])

    return (
        <>
            <Navbar onClick={() => setSelectActive(false)} />

            <div className='bg-[#C2D1DF]'>
                <Table />
            </div>
        </>
    )
}

export default HelpTexts


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
}

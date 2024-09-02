import { useApi } from '@/api/api'
import Navbar from '@/components/Navbar'
import Table from '@/components/Table'
import { Inc_vs_ritm_text } from '@/types/Inc_vs_ritm_text_type'
import React, { useEffect, useState } from 'react'
import { redirect } from 'next/navigation' // Usado para redirecionar o usuário
import { cookies } from 'next/headers'
import { useAuthContext } from '@/contexts/Auth/AuthContext'
import { User } from '@/types/User'

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
            <Navbar userLogged={undefined}/>

            <div className='bg-[#C2D1DF]'>
                <Table data_to_table={allTableData} />
            </div>
        </>
    )
}

export default HelpTexts


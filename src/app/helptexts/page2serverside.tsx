import { useApi } from '@/api/api'
import Navbar from '@/components/Navbar'
import Table from '@/components/Table'
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
            <Navbar/>

            <div>
                <Table data_to_table={allTableData} />
            </div>
        </>
    )
}

export default HelpTexts


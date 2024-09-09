import { useApi } from '@/api/api'
import Navbar from '@/components/Navbar'
import Table from '@/components/Table'
import React, { useEffect, useState } from 'react'
import { redirect } from 'next/navigation' // Usado para redirecionar o usuário
import { cookies } from 'next/headers'
import { User } from '@/types/User'

//SERVER COMPONENT
const HelpTexts = async () => {

    const token = cookies().get("token")?.value; //ATUALMENTE NAO POSSUI VALOR NENHUM!
    const api = useApi(token);

    // validating token
    let allTableData = await api.getInc_Vs_Ritm_Texts();

    //getting userLogged
    let userLogged: User | undefined = undefined;

    if (token !== undefined) {
        let userLoggedWithoutDesconstructing = await api.getUserLogged(token);
        userLogged = userLoggedWithoutDesconstructing.user;
    }

    if (allTableData.error) {
        redirect('/login');
    }

    return (
        <>
            <Navbar />

            <div>
                <Table data_to_table={allTableData} token={token} userLogged={userLogged} />
            </div>
        </>
    )
}

export default HelpTexts


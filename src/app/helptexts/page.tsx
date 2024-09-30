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

    // Filtrando as colunas que você não quer renderizar
    const filteredData = allTableData.map((row: any) => {
        const { created_by, last_edited_by, created_at, lastEdited_at, ...rest } = row;
        return rest;  // Retorna apenas as colunas que você deseja exibir
    });

    //getting userLogged
    let userLogged: User | undefined = undefined;

    if (token !== undefined) {
        let userLoggedWithoutDesconstructing = await api.getUserLogged(token);

        if(userLoggedWithoutDesconstructing){
            userLogged = userLoggedWithoutDesconstructing.user;
        }
    }

    if (allTableData.error) {
        redirect('/login');
    }

    return (
        <>
            <Navbar />

            <div>
                <Table all_data_table={allTableData} filtered_data_to_table={filteredData} token={token} userLogged={userLogged} />
            </div>
        </>
    )
}

export default HelpTexts


"use client"
import React, { useEffect, useState } from 'react'
import { CustomImput } from './CustomImput'
import { useApi } from '@/api/api';
import Link from 'next/link';

export const FormLoginPage = () => {

    const api = useApi();

    const [loginInput, setLoginInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    useEffect(() => {
        console.log("LOGIN INPUT", loginInput)
    }, [loginInput])


    const handleLogin = async () => {
        //se acertar usuario e palavra passe, vai poder entrar.
        //realizar pagina de registro? 

    }



    return (
        <div className='flex flex-col gap-3 mt-16 w-full text-ice-dark-blue'>
            <CustomImput svg='login'
                heightSVG='34px'
                widthSVG='34px'
                typeInput={'text'}
                textPlaceholder='Username or e-mail'
                value={loginInput}
                onChangeInput={setLoginInput}
                placeholderColor='placeholder:text-ice-dark-blue/40'
            />

            <CustomImput svg='key'
                heightSVG='34px'
                widthSVG='34px'
                typeInput={'password'}
                textPlaceholder='Password'
                value={passwordInput}
                onChangeInput={setPasswordInput}
                placeholderColor='placeholder:text-ice-dark-blue/40'
            />

            <button
                onClick={handleLogin}
                className='px-2 bg-transparent border-2 font-semibold text-ice-dark-blue border-ice-dark-blue
                 hover:bg-ice-lightblue hover:border-ice-white hover:text-ice-white text-2xl py-4
                 rounded-md mt-8 duration-150 ease-in-out'
            >
                Login
            </button>

            <p className='pt-2 text-xl'>Primero acceso? <b><Link href={'/register'}>Registrese</Link></b></p>


        </div>
    )
}

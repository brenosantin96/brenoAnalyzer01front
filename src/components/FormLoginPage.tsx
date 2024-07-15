"use client"
import React, { useContext, useEffect, useState } from 'react'
import { CustomImput } from './CustomImput'
import { useApi } from '@/api/api';
import Link from 'next/link';
import { AuthContext, useAuthContext } from '@/contexts/Auth/AuthContext';
import { useRouter } from 'next/navigation';

export const FormLoginPage = () => {

    const api = useApi();
    const router = useRouter();

    const [loginInput, setLoginInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const userContext = useAuthContext()
    
    
    const handleLogin = async () => {

        let loginResponse = await userContext.signIn(loginInput, passwordInput)

        if(!loginResponse){
            alert("Usuario y/o contraseña incorrectos")
            return
        }

        if(loginResponse){
            router.push("/");
            return
        }



    }



    return (
        <div className='flex flex-col gap-3 mt-16 w-full'>
            <CustomImput svg='person'
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
                 hover:bg-ice-blue hover:text-ice-white text-2xl py-4
                 rounded-md mt-8 duration-300 ease-in-out'
            >
                Login
            </button>

            <p className='pt-2 text-xl'>Primero acceso? <b><Link href={'/register'}>Registrese</Link></b></p>


        </div>
    )
}

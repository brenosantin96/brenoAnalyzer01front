"use client"
import React, { useEffect, useState } from 'react'
import { CustomImput } from './CustomImput'
import { useApi } from '@/api/api';

export const FormLoginPage = () => {

    const api = useApi();

    const [loginInput, setLoginInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    useEffect(() => {
        console.log("LOGIN INPUT", loginInput)
    }, [loginInput])


    const handleLogin = async () => {
       
    }



    return (
        <div className='flex flex-col gap-3 mt-16 w-full text-white'>
            <CustomImput svg='login'
                heightSVG='34px'
                widthSVG='34px'
                typeInput={'text'}
                textPlaceholder='Username or e-mail'
                value={loginInput}
                onChangeInput={setLoginInput}
            />

            <CustomImput svg='key'
                heightSVG='34px'
                widthSVG='34px'
                typeInput={'password'}
                textPlaceholder='Password'
                value={passwordInput}
                onChangeInput={setPasswordInput}
            />

            <button
                onClick={handleLogin}
                className='px-2 bg-transparent border-2 text-[#FFF] hover:bg-white hover:text-blue-600 text-2xl py-4 border-[#FFF] rounded-md mt-8 duration-150 ease-in-out'
            >
                Login
            </button>
        </div>
    )
}

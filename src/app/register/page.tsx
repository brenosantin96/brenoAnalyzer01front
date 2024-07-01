"use client"
import React, { useEffect, useState } from 'react'
import { CustomImput } from '@/components/CustomImput'
import { useApi } from '@/api/api'

const page = () => {

    const api = useApi();

    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [passwordInput2, setPasswordInput2] = useState("");


    //buttonControl
    const [activeButton, setIsActiveButton] = useState(false);

    
    useEffect(() => {
        checkPasswords(passwordInput2)
    }, [passwordInput, passwordInput2])


    const handleRegister = async () => {
       

    }

    //useEffect criar uma funcao que roda todo tempo que passwordInput2 é editado, se a palavra passe nao for igual, nao libera o botao de criar o usuario.
    //o cursor tem que ficar em cima para logo depois sair a mensagem embaixo que as palavras passes nao coincidem

    const checkPasswords = (pass: string) => {
        if (passwordInput === pass) {
            setIsActiveButton(true)
        } else {
            setIsActiveButton(false)
        }
    }


    return (
        <div className='bg-blue-800 bg-[url("/assets/bgloginpagez.svg")] bg-cover bg-no-repeat h-screen w-full'>
            <div className='container mx-auto max-w-lg '>

                <div className='flex justify-center flex-col items-center h-screen p-5'>
                    <div className='text-center font-sans text-white '>
                        <h1 className='text-4xl md:text-6xl pb-4 font-bold'>
                            Regístrese
                        </h1>
                        <h2 className='text-xl md:text-2xl font-semibold'>
                            Cree un usuario y contraseña
                        </h2>
                    </div>

                    <div className='flex flex-col gap-3 mt-16 w-full text-white'>
                        <CustomImput svg='login'
                            heightSVG='34px'
                            widthSVG='34px'
                            typeInput={'text'}
                            textPlaceholder='Nombre'
                            value={nameInput}
                            onChangeInput={setNameInput}
                        />

                        <CustomImput svg='login'
                            heightSVG='34px'
                            widthSVG='34px'
                            typeInput={'text'}
                            textPlaceholder='Correo'
                            value={emailInput}
                            onChangeInput={setEmailInput}
                        />

                        <CustomImput svg='key'
                            heightSVG='34px'
                            widthSVG='34px'
                            typeInput={'password'}
                            textPlaceholder='Contraseña'
                            value={passwordInput}
                            onChangeInput={setPasswordInput}
                        />

                        <CustomImput svg='key'
                            heightSVG='34px'
                            widthSVG='34px'
                            typeInput={'password'}
                            textPlaceholder='Repetir Contraseña'
                            value={passwordInput2}
                            onChangeInput={setPasswordInput2}
                        />

                        <button
                            onClick={handleRegister}
                            className={`
                              ${activeButton ? "px-2 bg-transparent border-2 text-[#FFF] hover:bg-white hover:text-blue-600 text-2xl py-4 border-[#FFF] rounded-md mt-8 duration-150 ease-in-out" :
                                    "px-2 bg-[#aaa] border-2 text-[#111010] text-2xl py-4 border-[#aaa] rounded-md mt-8 duration-150 ease-in-out cursor-not-allowed"}  
                            `}
                            disabled={!activeButton}
                        >
                            Registrar
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page

//url();
//file has to be in public
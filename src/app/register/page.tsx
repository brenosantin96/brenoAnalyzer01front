"use client"
import React, { useEffect, useState } from 'react'
import { CustomImput } from '@/components/CustomImput'
import { useApi } from '@/api/api'
import { ModalWarning } from '@/components/ModalWarning'
import { isValidEmail, isValidName, isValidPassword } from '@/utils/Validations'
import Link from 'next/link'

const page = () => {

    const api = useApi();

    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [passwordInput2, setPasswordInput2] = useState("");

    //dealingWithErrors
    const [errorz, setErrorz] = useState("")


    //buttonControl
    const [activeButton, setIsActiveButton] = useState(false);
    const [registerCreated, setRegisterCreated] = useState(false);


    useEffect(() => {
        checkPasswords(passwordInput2)
    }, [passwordInput, passwordInput2])

    useEffect(() => {
        setIsActiveButton(false)
        setRegisterCreated(false)
    }, [])


    useEffect(() => {
        console.log("ERROR:", errorz)
    }, [errorz])


    const handleRegister = async () => {

        setRegisterCreated(false);
        setErrorz("");


        if (!isValidName(nameInput)) {
            setErrorz("Nombre muy corto");
            return
        }

        if (!isValidEmail(emailInput)) {
            setErrorz("Correo no corresponde");
            return
        }

        if (!isValidPassword(passwordInput2)) {
            setErrorz("Contraseña no cumple con los requisitos");
            return
        }



        let response = await api.register(nameInput, emailInput, passwordInput, 'false')

        if (response.error) {
            console.log("Entrou no if")
            setErrorz(response.error)
            setNameInput("")
            setEmailInput("");
            setPasswordInput("");
            setPasswordInput2("");
            setRegisterCreated(false)
            return;
        }

        setRegisterCreated(true)
        setNameInput("")
        setEmailInput("");
        setPasswordInput("");
        setPasswordInput2("");


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
        <div className='bg-ice-graybackground bg-[url("/assets/bgloginpagez.svg")] bg-cover bg-no-repeat h-screen w-full relative'>
            <div className='container mx-auto max-w-lg '>


                {errorz !== "" &&
                    <ModalWarning message={errorz} colorBG='bg-yellow-400' />
                }

                {registerCreated &&
                    <ModalWarning message={"Usuario creado con succeso."} colorBG='bg-green-400' link='/login' messageLink='Iniciar sesión' />
                }

                <div className='flex justify-center flex-col items-center h-screen p-5'>
                    <div className='text-center font-sans text-ice-dark-blue '>
                        <h1 className='text-4xl md:text-6xl pb-4 font-bold'>
                            Regístrese
                        </h1>
                        <h2 className='text-xl md:text-2xl font-semibold'>
                            Cree un usuario y contraseña
                        </h2>
                    </div>

                    <div className='flex flex-col gap-3 mt-16 w-full text-ice-dark-blue'>
                        <CustomImput svg=''
                            heightSVG='34px'
                            widthSVG='34px'
                            typeInput={'text'}
                            textPlaceholder='Nombre'
                            value={nameInput}
                            onChangeInput={setNameInput}
                            placeholderColor='placeholder:text-ice-dark-blue/40'
                        />

                        <CustomImput svg=''
                            heightSVG='34px'
                            widthSVG='34px'
                            typeInput={'text'}
                            textPlaceholder='Correo'
                            value={emailInput}
                            onChangeInput={setEmailInput}
                            placeholderColor='placeholder:text-ice-dark-blue/40'
                        />

                        <CustomImput svg=''
                            heightSVG='34px'
                            widthSVG='34px'
                            typeInput={'password'}
                            textPlaceholder='Contraseña'
                            value={passwordInput}
                            onChangeInput={setPasswordInput}
                            placeholderColor='placeholder:text-ice-dark-blue/40'
                        />

                        <CustomImput svg=''
                            heightSVG='34px'
                            widthSVG='34px'
                            typeInput={'password'}
                            textPlaceholder='Repetir Contraseña'
                            value={passwordInput2}
                            onChangeInput={setPasswordInput2}
                            placeholderColor='placeholder:text-ice-dark-blue/40'
                        />

                        <button
                            onClick={handleRegister}
                            className={`
                              ${activeButton ? "px-2 bg-transparent border-2 text-ice-dark-blue hover:bg-ice-blue hover:text-ice-white text-2xl py-4 border-ice-dark-blue rounded-md mt-8 duration-300 ease-in-out" :
                                    "px-2 bg-ice border-2 text-ice-dark-blue text-2xl py-4 border-ice-dark-blue rounded-md mt-8 duration-150 ease-in-out cursor-not-allowed"}  
                            `}
                            disabled={!activeButton}
                        >
                            {activeButton ? "Registrar" : "Rellene todos campos"}

                        </button>

                        <p className='pt-2 text-xl'>Ya tiene cuenta de usuario? <b><Link href={'/login'}>Login</Link></b></p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default page

//url();
//file has to be in public
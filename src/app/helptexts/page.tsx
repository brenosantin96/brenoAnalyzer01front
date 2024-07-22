"use client"
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'


const HelpTexts = () => {
    return (
        <>
            <Navbar />

            <div className='bg-[#C2D1DF] overflow-y-hidden'>
                <div className='mt-[75px] bg-[#C2D1DF] overflow-y-hidden'>
                    <ul className='ml-2 flex gap-4 font-bold text-[#5A5A5A] '>
                        <li>
                            <Link className='hover:text-[#006989]' href="#">Pte. conf. usuario</Link>
                        </li>
                        <li>
                            <Link className='hover:text-[#006989]' href="#">INC vs RITM</Link>
                        </li>
                        <li>
                            <Link className='hover:text-[#006989]' href="#">TEMP</Link>
                        </li>
                    </ul>
                </div>


                <div className='pl-2 bg-[#C2D1DF] text-[#5A5A5A] h-screen overflow-x-scroll  overflow-y-hidden whitespace-nowrap'>

                    <div className='flex justify-start h-[80px] flex-row w-max text-[22px] text-left gap-0 font-arial font-bold text-white'>
                        <div className='min-w-[154px] pl-2 flex items-center text-left border border-gray-400 bg-[#A5A5A5]'>Plataforma</div>
                        <div className='min-w-[190px] pl-2 flex items-center text-left  border-gray-400 bg-[#A5A5A5]'>Casuística</div>
                        <div className='min-w-[810px] pl-2 flex items-center text-left border-gray-400 bg-[#A5A5A5]'>Texto Tipo ESP</div>
                        <div className='min-w-[810px] pl-2 flex items-center text-left border-gray-400 bg-[#A5A5A5]'>Texto Tipo ENG</div>
                        <div className='min-w-[330px] pl-2 flex items-center text-left  border-gray-400 bg-[#A5A5A5] font-golos font-bold'>Shortcut</div>
                        <div className='min-w-[154px] pl-2 flex items-center text-left  border-gray-400 bg-[#A5A5A5]'>KB Tecnico</div>
                    </div>

                    <div className='flex flex-row'>
                        <div className='min-w-[154px] text-wrap flex justify-center items-center bg-grey-table'>Cuenta usuario</div>
                        <div className='min-w-[190px] text-wrap flex justify-center items-center bg-grey-table'>Accesos usuarios nuevos (Interno)</div>
                        <div className='min-w-[810px] text-wrap flex justify-center items-start bg-grey-table'>Estimado usuario,
                            Para poder gestionar los permisos de usuarios nuevos, rogamos que siga los pasos que se encuentran en la siguiente guía:
                            <br /><br />
                            - Onboarding - ¿Qué tengo que hacer para dar de alta un nuevo empleado? ¿Cómo solicito peticiones para un nuevo empleado?
                            https://repsolprod.service-now.com/sp?id=ss_kb_article_view_unity&sysparm_article=KB0015131
                            <br /><br />
                            - Video Guía - Gestión de alta de nuevos empleados
                            https://web.microsoftstream.com/video/df0b7fab-c2df-4c0c-acde-fa7f65336c30
                            <br /><br />
                            Copie y pegue el enlace en su navegador para acceder.</div>
                        <div className='min-w-[810px] text-wrap flex justify-center items-start bg-grey-table'>Dear user,
                            In order to manage the permissions of new users, please follow the steps in the following guide:
                            <br /><br />
                            - Onboarding - What do I have to do to register a new employee? How do I request requests for a new employee?
                            https://repsolprod.service-now.com/sp?id=ss_kb_article_view_unity&sysparm_article=KB0015134
                            <br /><br />
                            - Video Guide - Managing new employee onboarding
                            https://web.microsoftstream.com/video/df0b7fab-c2df-4c0c-acde-fa7f65336c30
                            <br /><br />
                            Copy and paste the link in your browser to access.</div>
                        <div className='min-w-[330px] flex justify-center items-center bg-grey-table'>//notiene</div>
                        <div className='min-w-[154px] flex justify-center items-center bg-grey-table'></div>

                    </div>

                    <div className='flex flex-row'>
                        <div className='min-w-[154px] text-wrap flex justify-center items-center bg-white'>Cuenta usuario</div>
                        <div className='min-w-[190px] text-wrap flex justify-center items-center bg-white'>Accesos usuarios nuevos (Interno)</div>
                        <div className='min-w-[810px] text-wrap flex justify-center items-start bg-white'>Estimado usuario,
                            Para poder gestionar los permisos de usuarios nuevos, rogamos que siga los pasos que se encuentran en la siguiente guía:
                            <br /><br />
                            - Onboarding - ¿Qué tengo que hacer para dar de alta un nuevo empleado? ¿Cómo solicito peticiones para un nuevo empleado?
                            https://repsolprod.service-now.com/sp?id=ss_kb_article_view_unity&sysparm_article=KB0015131
                            <br /><br />
                            - Video Guía - Gestión de alta de nuevos empleados
                            https://web.microsoftstream.com/video/df0b7fab-c2df-4c0c-acde-fa7f65336c30
                            <br /><br />
                            Copie y pegue el enlace en su navegador para acceder.</div>
                        <div className='min-w-[810px] text-wrap flex justify-center items-start bg-white'>Dear user,
                            In order to manage the permissions of new users, please follow the steps in the following guide:
                            <br /><br />
                            - Onboarding - What do I have to do to register a new employee? How do I request requests for a new employee?
                            https://repsolprod.service-now.com/sp?id=ss_kb_article_view_unity&sysparm_article=KB0015134
                            <br /><br />
                            - Video Guide - Managing new employee onboarding
                            https://web.microsoftstream.com/video/df0b7fab-c2df-4c0c-acde-fa7f65336c30
                            <br /><br />
                            Copy and paste the link in your browser to access.</div>
                        <div className='min-w-[330px] flex justify-center items-center bg-white'>//notiene</div>
                        <div className='min-w-[154px] flex justify-center items-center bg-white'></div>

                    </div>

                    <div className='flex flex-row'>
                        <div className='min-w-[154px] text-wrap flex justify-center items-center bg-grey-table'>Cuenta usuario</div>
                        <div className='min-w-[190px] text-wrap flex justify-center items-center bg-grey-table'>Accesos usuarios nuevos (Interno)</div>
                        <div className='min-w-[810px] text-wrap flex justify-center items-start bg-grey-table'>Estimado usuario,
                            Para poder gestionar los permisos de usuarios nuevos, rogamos que siga los pasos que se encuentran en la siguiente guía:
                            <br /><br />
                            - Onboarding - ¿Qué tengo que hacer para dar de alta un nuevo empleado? ¿Cómo solicito peticiones para un nuevo empleado?
                            https://repsolprod.service-now.com/sp?id=ss_kb_article_view_unity&sysparm_article=KB0015131
                            <br /><br />
                            - Video Guía - Gestión de alta de nuevos empleados
                            https://web.microsoftstream.com/video/df0b7fab-c2df-4c0c-acde-fa7f65336c30
                            <br /><br />
                            Copie y pegue el enlace en su navegador para acceder.</div>
                        <div className='min-w-[810px] text-wrap flex justify-center items-start bg-grey-table'>Dear user,
                            In order to manage the permissions of new users, please follow the steps in the following guide:
                            <br /><br />
                            - Onboarding - What do I have to do to register a new employee? How do I request requests for a new employee?
                            https://repsolprod.service-now.com/sp?id=ss_kb_article_view_unity&sysparm_article=KB0015134
                            <br /><br />
                            - Video Guide - Managing new employee onboarding
                            https://web.microsoftstream.com/video/df0b7fab-c2df-4c0c-acde-fa7f65336c30
                            <br /><br />
                            Copy and paste the link in your browser to access.</div>
                        <div className='min-w-[330px] flex justify-center items-center bg-grey-table'>//notiene</div>
                        <div className='min-w-[154px] flex justify-center items-center bg-grey-table'></div>

                    </div>

                </div>


            </div>
        </>
    )
}

export default HelpTexts
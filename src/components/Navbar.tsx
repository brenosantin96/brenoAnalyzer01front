"use client"
import React, { useEffect, useState } from 'react'
import NavBarStyle from './NavBarStyle.module.css'
import { Icon } from './Icon/Icon'
import Link from 'next/link';
import { useAuthContext } from '@/contexts/Auth/AuthContext';
import { User, UserLogged } from '@/types/User';

type PropsNavbar = {
    userLogged? : UserLogged | undefined
}

const Navbar = ({userLogged} : PropsNavbar) => {

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpened(!isMenuOpened)
    }

    const [isLogged, setIsLogged] = useState(false);
    const authContext = useAuthContext();

     useEffect(() => {
        setIsLogged(authContext.user !== null);
        console.log(authContext)
    }, [authContext.user]);
    

    useEffect(()=> {
        console.log(isLogged)
    }, [isLogged]) 


    return (
        <nav className={`fixed top-0 left-0 right-0 flex justify-between items-center mx-auto bg-[#006989] px-3 shadow-3xl mt-[-1px] z-10`}>
            <div className='flex items-center'> {/* Div principal */}
                <Link href={'/'}>
                    <div className='flex justify-center items-center cursor-pointer'>

                        <Icon svg='fileTopNavBar' height='48px' width='48px' fillColor='#FFF' />
                        <div className='text-xl -ml-1 font-bold text-[#EAEBED]'>Analyzer</div>

                    </div>
                </Link>

                {/* Essa div so aparece em dispositivos menores que md */}
                <div className={`md:hidden md:static absolute bg-[#006989] md:min-h-fit  left-0 ${isMenuOpened ? `top-[8%]` : `top-[-300%]`} ease-in-out duration-300 md:w-auto w-full flex items-center md:px-5`}>
                    <ul className='flex md:flex-row flex-col md:items-center md:gap-4 gap-6 py-4 text-xl ml-6 text-[#EAEBED] '> {/* Lista de itens da navbar */}
                        {!isLogged &&
                            <li>
                                <Link className='hover:text-[#fdfdfd]' href="/login">Login</Link>
                            </li>
                        }
                        {isLogged &&
                            <li>
                                <Link className='hover:text-[#fdfdfd]' href="/weekly-chats">Salir</Link>
                            </li>
                        }
                        <li>
                            <Link className='hover:text-[#fdfdfd]' href="/pending-incidents">Incidencias</Link>
                        </li>
                        <li>
                            <Link className='hover:text-[#fdfdfd]' href="/pending-requests">Solicitudes</Link>
                        </li>
                        <li>
                            <Link className='hover:text-[#fdfdfd]' href="/weekly-chats">Chats</Link>
                        </li>
                    </ul>

                </div>
            </div>

            {/* Essa div so aparece em dispositivos maiores que md */}
            <div className={` md:flex md:static relative z-20  bg-[#006989] md:min-h-fit  left-0 ${isMenuOpened ? `top-[8%]` : `top-[-100%]`} ease-in-out duration-300 md:w-auto w-full flex items-center md:px-5`}>
                <ul className='hidden md:flex md:flex-row flex-col md:items-center md:gap-6 gap-4 text-xl text-[#EAEBED] '> {/* Lista de itens da navbar */}
                    <li>
                        <Link className='hover:text-[#fdfdfd]' href="/pending-incidents">Incidencias</Link>
                    </li>
                    <li>
                        <Link className='hover:text-[#fdfdfd]' href="/pending-requests">Solicitudes</Link>
                    </li>
                    <li>
                        <Link className='hover:text-[#fdfdfd]' href="/weekly-chats">Chats</Link>
                    </li>
                    {isLogged &&
                        <li>
                            <Link className='hover:text-[#fdfdfd]' href="/helptexts">TextoTipos</Link>
                        </li>
                    }

                </ul>

            </div>


            <div className='p-10 md:p-5 md:flex sm:hidden  '>
                <div className='hidden md:block'>
                    {isLogged &&
                        <Link className='hover:text-[#fdfdfd]' href="#">
                            <Icon svg='logout' height='36px' width='36px' fillColor={"white"} classNam='relative z-20' strokeColor='#FFF' />
                        </Link>
                    }
                    {!isLogged &&
                        <Link className='hover:text-[#fdfdfd]' href="/login">
                            <Icon svg='login' height='36px' width='36px' fillColor={"white"} classNam='relative z-20' strokeColor='#FFF' />
                        </Link>
                    }
                </div>
            </div>


            <div className='md:hidden cursor-pointer' onClick={handleToggleMenu}> {/* Div para o ícone do menu */}
                {!isMenuOpened &&
                    <Icon svg='menu' height='48px' width='48px' classNam='relative z-20' strokeColor='#FFF' />
                }
                {isMenuOpened &&
                    <Icon svg='close' height='48px' width='48px' classNam='relative z-20' fillColor='#FFF' />
                }
            </div>
        </nav>
    )
}

export default Navbar




import React, { useState } from 'react'
import NavBarStyle from './NavBarStyle.module.css'
import { Icon } from './Icon/Icon'
import Link from 'next/link';

const Navbar = () => {

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpened(!isMenuOpened)
    }


    return (
        <nav className={`flex justify-between items-center mx-auto bg-[#006989] px-3 shadow-3xl mt-[-1px] relative z-10`}>
            <div className='flex items-center'> {/* Div principal */}
                <Link href={'/'}>
                    <div className='flex justify-center items-center cursor-pointer'>

                        <Icon svg='fileTopNavBar' height='48px' width='48px' fillColor='#FFF' />
                        <div className='text-xl -ml-1 font-bold text-[#EAEBED]'>Analyzer</div>

                    </div>
                </Link>

                {/* Essa div so aparece em dispositivos menores que md */}
                <div className={`md:hidden md:static absolute bg-[#006989] md:min-h-fit  left-0 ${isMenuOpened ? `top-[8%]` : `top-[-200%]`} ease-in-out duration-300 md:w-auto w-full flex items-center md:px-5`}>
                    <ul className='flex md:flex-row flex-col md:items-center md:gap-4 gap-6 py-4 text-xl ml-6 text-[#EAEBED] '> {/* Lista de itens da navbar */}
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
                <ul className='hidden md:flex md:flex-row flex-col md:items-center md:gap-4 gap-4 text-xl text-[#EAEBED] '> {/* Lista de itens da navbar */}
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
            <div className='p-10 md:flex sm:hidden  '>

            </div>


            <div className='md:hidden cursor-pointer' onClick={handleToggleMenu}> {/* Div para o ícone do menu */}
                {!isMenuOpened &&
                    <Icon svg='menu' height='48px' width='48px' classNam='relative z-20' strokeColor='#FFF'  />
                }
                {isMenuOpened &&
                    <Icon svg='close' height='48px' width='48px' classNam='relative z-20' fillColor='#FFF'  />
                }
            </div>
        </nav>
    )
}

export default Navbar




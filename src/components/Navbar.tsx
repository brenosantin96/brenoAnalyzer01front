import React, { useState } from 'react'
import NavBarStyle from './NavBarStyle.module.css'
import { Icon } from './Icon/Icon'

const Navbar = () => {

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpened(!isMenuOpened)
    }


    return (
        <nav className={`flex justify-between items-center w-[98%] mx-auto`}>
            <div className='flex items-center'> {/* Div principal */}
                <div className='flex justify-center items-center'>
                    <Icon svg='fileTopNavBar' height='48px' width='48px' />
                    <div className='text-xl -ml-1'>Analyzer</div>
                </div>
                
                {/* Essa div so aparece em dispositivos menores que md */}
                <div className={`md:hidden md:static absolute bg-white md:min-h-fit min-h-[25vh] left-0 ${isMenuOpened ? `top-[8%]` : `top-[-100%]`} ease-in-out duration-300 md:w-auto w-full flex items-center md:px-5`}>
                    <ul className='flex md:flex-row flex-col md:items-center md:gap-4 gap-8 text-xl ml-6 '> {/* Lista de itens da navbar */}
                        <li>
                            <a className='hover:text-gray-500' href="#">Incidencias</a>
                        </li>
                        <li>
                            <a className='hover:text-gray-500' href="#">Solicitudes</a>
                        </li>
                        <li>
                            <a className='hover:text-gray-500' href="#">Chats</a>
                        </li>
                    </ul>

                </div>
            </div>

            {/* Essa div so aparece em dispositivos maiores que md */}
            <div className={` md:flex sm:hidden md:static flex bg-white md:min-h-fit min-h-[25vh] left-0 ${isMenuOpened ? `top-[8%]` : `top-[-100%]`} ease-in-out duration-300 md:w-auto w-full flex items-center md:px-5`}>
                    <ul className='flex md:flex-row flex-col md:items-center md:gap-4 gap-8 text-xl '> {/* Lista de itens da navbar */}
                        <li>
                            <a className='hover:text-gray-500' href="#">Incidencias</a>
                        </li>
                        <li>
                            <a className='hover:text-gray-500' href="#">Solicitudes</a>
                        </li>
                        <li>
                            <a className='hover:text-gray-500' href="#">Chats</a>
                        </li>
                    </ul>

            </div>
            <div className='p-10 md:flex sm:hidden  '>
                
            </div>
           

            <div className='md:hidden cursor-pointer' onClick={handleToggleMenu}> {/* Div para o ícone do menu */}
                {!isMenuOpened &&
                    <Icon svg='menu' height='48px' width='48px' />
                }
                {isMenuOpened &&
                    <Icon svg='close' height='48px' width='48px' />
                }
            </div>
        </nav>
    )
}

export default Navbar




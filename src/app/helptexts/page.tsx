"use client"
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'


const HelpTexts = () => {
    return (
        <>
            <Navbar />

            <div className='bg-[#C2D1DF]'>
                <div className='mt-[75px] bg-[#C2D1DF]'>
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


                <div className='bg-[#C2D1DF] text-[#5A5A5A] h-screen overflow-x-scroll whitespace-nowrap'>
                    <div className='flex flex-row w-max text-[22px] text-left'>
                        <div className='w-36 h-36 m-2 text-center flex justify-center items-center bg-ice-white'>SQUAREeeeeeeee</div>
                        <div className='w-96 h-36 m-2 text-center flex justify-center items-center bg-ice-white'>RECTANGLE</div>
                    </div>

                    <div className='flex flex-row'>
                        <div className='w-36 h-36 m-2 text-center flex justify-center items-center bg-blue-300'>SQUARE</div>
                        <div className='w-96 h-36 m-2 text-center flex justify-center items-center bg-blue-300'>RECTANGLE</div>
                        <div className='w-96 h-36 m-2 text-center flex justify-center items-center bg-blue-300'>RECTANGLE</div>
                        <div className='w-96 h-36 m-2 text-center flex justify-center items-center bg-blue-300'>RECTANGLE</div>
                        <div className='w-96 h-36 m-2 text-center flex justify-center items-center bg-blue-300'>RECTANGLE</div>
                    </div>

                    <div className='flex flex-row'>
                        <div className='w-36 h-24 m-2 text-center flex justify-center items-center bg-blue-300'>SQUARE</div>
                        <div className='w-96 h-36 m-2 text-center flex justify-center items-center bg-blue-300'>RECTANGLE</div>
                        <div className='w-96 h-36 m-2 text-center flex justify-center items-center bg-blue-300'>RECTANGLE</div>
                        <div className='w-96 h-36 m-2 text-center flex justify-center items-center bg-blue-300'>RECTANGLE</div>
                        <div className='w-96 h-36 m-2 text-center flex justify-center items-center bg-blue-300'>RECTANGLE</div>
                    </div>

                    <div className='flex flex-row'>
                        <div className='w-36 h-36 m-2 text-center flex justify-center items-center bg-blue-300'>SQUARE</div>
                        <div className='w-96 h-36 m-2 text-center flex justify-center items-center bg-blue-300'>RECTANGLE</div>
                        <div className='w-96 h-36 m-2 text-center flex justify-center items-center bg-blue-300'>RECTANGLE</div>
                        <div className='w-96 h-36 m-2 text-center flex justify-center items-center bg-blue-300'>RECTANGLE</div>
                        <div className='w-96 h-36 m-2 text-center flex justify-center items-center bg-blue-300'>RECTANGLE</div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default HelpTexts
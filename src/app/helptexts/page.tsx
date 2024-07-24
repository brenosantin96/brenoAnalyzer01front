"use client"
import Navbar from '@/components/Navbar'
import Table from '@/components/Table'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const HelpTexts = () => {

    const [selectActive, setSelectActive] = useState(false)
    const [selectedDivId, setSelectedDivId] = useState("0");


    useEffect(()=> {
        console.log("selectActive", selectActive)
    }, [selectActive])

    return (
        <>
            <Navbar onClick={() => setSelectActive(false)} />

            <div className='bg-[#C2D1DF] overflow-y-hidden'>
                <Table/>
            </div>
        </>
    )
}

export default HelpTexts
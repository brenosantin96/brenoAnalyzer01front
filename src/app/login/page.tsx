"use client"

import { FormLoginPage } from '@/components/FormLoginPage'
import { HeaderLoginPage } from '@/components/HeaderLoginPage'
import { Icon } from '../../components/Icon/Icon'
import React, { useState } from 'react'
import { url } from 'inspector'

const page = () => {



  return (
    <div className='bg-blue-300 bg-login-background bg-cover bg-no-repeat h-screen w-full'>
      <div className='container mx-auto max-w-lg '>
        <div className='flex justify-center flex-col items-center h-screen p-5'>
          <HeaderLoginPage />
          <FormLoginPage />
        </div>
      </div>
    </div>
  )
}

export default page

//url();
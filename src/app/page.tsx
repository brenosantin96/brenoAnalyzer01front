"use client"

import { useApi } from '@/api/api';
import Navbar from '@/components/Navbar';
import React, { useCallback, useEffect, useState } from 'react'

const Home = () => {

  const [file, setFile] = useState<File | null>(null);
  const api = useApi();

  useEffect(() => {
    handleUploadByButton();
  }, [file])


  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    // Faça o que quiser com o arquivo aqui, como enviar para o servidor, etc.
    console.log('Arquivo solto:', file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };


  const onHandleChangeInputFile = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleUploadByButton = async () => {

    if (!file) {
      console.log("No file selected")
      return
    }

    if (file.type !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      alert("File selected is not a .XLS type")
      return;
    }

    const fd = new FormData();
    fd.append('excel', file);


    const responseUpload = await api.uploadFile(fd)
    if(responseUpload){
      console.log(responseUpload)
    }

    console.log(file)

  }




  return (

    <>

      <Navbar />

      <div className='h-screen flex justify-center items-center bg-[#f5f5fa]' onDrop={handleDrop} onDragOver={handleDragOver}>
        <div className='container h-screen'>
          <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-2xl -mt-48 mb-4 md:text-4xl font-inter font-bold p-3 text-center '>Importe el fichero excel para empezar el análisis</h1>
            <h2 className=' text-xl md:text-2xl mb-11 font-poppins text-center'>Analisis fácil y rápido</h2>

            <div className='w-full flex items-center justify-center'>
              <label htmlFor="fileInput" className='flex items-center justify-center text-white text-2xl md:text-5xl bg-[#e5322d] py-6 px-12 rounded-xl leading-7 min-h-20 min-w-80 w-2/4 hover:bg-[#e5322d]/[.8]'>Select .XLS Files</label>
              <input id='fileInput' onChange={onHandleChangeInputFile} className='hidden' type="file" />
            </div>

            <div className='md:block sm:hidden mt-8 text-center text-[#47474f] text-2xl'>O arrastre el archivo .xls aquí</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
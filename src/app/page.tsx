"use client"

import { useApi } from '@/api/api';
import Navbar from '@/components/Navbar';
import { Incident } from '@/types/Incident';
import React, { useCallback, useEffect, useState } from 'react'

const Home = () => {

  const [file, setFile] = useState<File | null>(null);
  const [isMovingOverDropArea, setIsMovingOverDropArea] = useState(false)

  const [incidents, setIncidents] = useState<Incident[]>([])

  const api = useApi();

  useEffect(() => {
    handleUploadByButton();
  }, [file])



  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    const fd = new FormData();
    fd.append('excel', file);

    if(file.type !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
      alert("Fichero debe ser un .XLS")
      return
    }

    setFile(file);
    setIsMovingOverDropArea(false);

    const responseUpload = await api.uploadFile(fd)
    if (responseUpload) {
      const incidentsWithDate: Incident[] = responseUpload.map((incident : any) => ({
        ...incident,
        abierto: new Date(incident.Abierto),
        actualizado: new Date(incident.Actualizado),
      }))

      console.log(typeof incidentsWithDate[0].actualizado)
      console.log(typeof incidentsWithDate[0].abierto)
      console.log(typeof incidentsWithDate[0].asignadoA)
      console.log(typeof responseUpload[0].signadoA)

      console.log(incidentsWithDate)
      setIncidents(responseUpload)
    }

    // Faça o que quiser com o arquivo aqui, como enviar para o servidor, etc.
    console.log('Arquivo solto:', file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsMovingOverDropArea(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    setIsMovingOverDropArea(false); // Define como falso quando o arquivo está sendo arrastado para fora da div
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
    if (responseUpload) {
      console.log(responseUpload)
      setIncidents(responseUpload)
    }

    console.log(file)

  }




  return (

    <>

      <Navbar />

      <div className='h-screen flex justify-center items-center bg-[#f5f5fa]' onDragOver={handleDragOver}>
      <div className={`h-screen w-full absolute ${isMovingOverDropArea ? 'flex ' : 'hidden '}justify-center items-center bg-[#000]/[.8] text-[#c9c3c3] text-7xl`} onDragLeave={handleDragLeave} onDrop={handleDrop}>Drop it now!</div>
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
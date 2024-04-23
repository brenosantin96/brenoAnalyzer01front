"use client"

import { useApi } from '@/api/api';
import Navbar from '@/components/Navbar';
import { useIncidentContext } from '@/contexts/IncidentContext';
import { Incident } from '@/types/Incident';
import { getAllPendingTickets, getPencierreIncidents, getPendingIncidents } from '@/utils/IncidentsFunctions';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'

const Home = () => {

  const [file, setFile] = useState<File | null>(null);
  const [isMovingOverDropArea, setIsMovingOverDropArea] = useState(false)

  //router
  const router = useRouter();

  //context
  const incidentContext = useIncidentContext();

  //api
  const api = useApi();

  useEffect(() => {
    handleUploadByButton();
  }, [file])



  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (!file) {
      alert("Fichero debe ser un .XLS")
      setIsMovingOverDropArea(false);
      return
    }


    const fd = new FormData();
    fd.append('excel', file);


    if (file.type !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      alert("Fichero debe ser un .XLS")
      return
    }

    setFile(file);

    setIsMovingOverDropArea(false);

    const responseUpload = await api.uploadFile(fd)
    if (responseUpload) {

      const incidentsWithDate: Incident[] = responseUpload.map((incident: any) => ({
        ...incident,
        abierto: new Date(incident.abierto),
        actualizado: new Date(incident.actualizado),
      }))


      if (incidentContext) {
        //getting pendingIncidents from total

        let allPendingTickets = getAllPendingTickets(incidentsWithDate)
        console.log("ALL PENDING TICKETS", allPendingTickets)

        let pendingIncidentes = getPendingIncidents(incidentsWithDate)
        console.log("PENDIENTES: ", pendingIncidentes)

        let pendingPencierres = getPencierreIncidents(incidentsWithDate)
        console.log("PENCIERRES: ", pendingPencierres)

        incidentContext.setIncidents(incidentsWithDate)
        router.push("/pending-incidents")
      }
      //setIncidents(responseUpload)
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

      const incidentsWithDate: Incident[] = responseUpload.map((incident: any) => ({
        ...incident,
        abierto: new Date(incident.abierto),
        actualizado: new Date(incident.actualizado),
      }))



      if (incidentContext) {
        //getting pendingIncidents from total

        let allPendingTickets = getAllPendingTickets(incidentsWithDate)
        console.log("ALL PENDING TICKETS", allPendingTickets)

        let pendingIncidentes = getPendingIncidents(incidentsWithDate)
        console.log("PENDIENTES: ", pendingIncidentes)

        let pendingPencierres = getPencierreIncidents(incidentsWithDate)
        console.log("PENCIERRES: ", pendingPencierres)

        incidentContext.setIncidents(incidentsWithDate)
        router.push("/pending-incidents")
      }

    }

  }




  return (

    <>

      <Navbar />

      <div className='h-screen flex justify-center items-center bg-[#A3BAC3] overflow-auto' onDragOver={handleDragOver}>
        <div id='cu' className={`h-screen w-full absolute ${isMovingOverDropArea ? 'flex ' : 'hidden '}justify-center items-center bg-[#000]/[.8] text-[#c9c3c3] text-7xl`} onDragLeave={handleDragLeave} onDrop={handleDrop}>Drop it now!</div>



        <div className='container h-screen mx-auto overflow-auto'>
          <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-3xl -mt-48 mb-12 md:text-4xl font-inter font-bold p-3 text-center text-white '>Importe el fichero excel para empezar el análisis</h1>
            <div className='w-full flex items-center justify-center text-center'>
              <label htmlFor="fileInput" className='flex items-center justify-center text-white text-2xl md:text-5xl bg-[#006989] py-6  rounded-full leading-7 min-h-20 w-72 md:min-w-80 md:w-2/4 hover:bg-[#006989]/[.8] shadow-xl mt-[-1px] relative z-10'>Select .XLS Files</label>
              <input id='fileInput' onChange={onHandleChangeInputFile} className='hidden' type="file" />
            </div>
            <div className='md:block sm:hidden mt-8 text-center font-medium text-[#FAFAFA] text-2xl'>O arrastre el archivo .xls aquí</div>
          </div>
        </div>



      </div>

    </>
  )
}

export default Home
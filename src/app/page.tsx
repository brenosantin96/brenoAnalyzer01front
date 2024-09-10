import { useApi } from '@/api/api';
import DropAreaButtonAreaMainPage from '@/components/DropAreaButtonAreaMainPage';
import Navbar from '@/components/Navbar';
import { useAuthContext } from '@/contexts/Auth/AuthContext';
import React from 'react'
import { cookies } from 'next/headers'
import { User } from '@/types/User';
import { RightClickContextMenuTable } from '@/components/RightClickContextMenuTable';

const Home = async () => {

  const token = cookies().get("token")?.value;
  const api = useApi(token || "");
  console.log("TOKEN: ",token)
  
  let userLogged: User | undefined = await api.getUserLogged(token || "");

  console.log("USER LOGGED: ",userLogged)

  return (

    <>
      <Navbar />
      <DropAreaButtonAreaMainPage />
    </>
  )
}

export default Home



  /* 
  const token = cookies().get("token")?.value;
  console.log("TOKEN: ",token)
  const api = useApi(token as string);

   validating token
  let userLogged: User | undefined = await api.getUserLogged();

  if (!userLogged) {
    userLogged = undefined;
  }

  console.log("USER LOGGED: ",userLogged) 
  */
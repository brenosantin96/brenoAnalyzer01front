import { useApi } from '@/api/api';
import DropAreaButtonAreaMainPage from '@/components/DropAreaButtonAreaMainPage';
import Navbar from '@/components/Navbar';
import { User, UserLogged } from '@/types/User';
import { cookies } from 'next/headers';
import React from 'react'

const Home = async () => {


  const token = cookies().get("token")?.value;
  console.log("TOKEN: ",token)
  const api = useApi(token as string);

  // validating token
  let userLogged: User | undefined = await api.getUserLogged();

  if (!userLogged) {
    userLogged = undefined;
  }

  console.log("USER LOGGED: ",userLogged)

  return (

    <>
      <Navbar />
      <DropAreaButtonAreaMainPage />
    </>
  )
}

export default Home
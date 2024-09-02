import { useApi } from '@/api/api';
import DropAreaButtonAreaMainPage from '@/components/DropAreaButtonAreaMainPage';
import Navbar from '@/components/Navbar';
import { UserLogged } from '@/types/User';
import { cookies } from 'next/headers';
import React from 'react'

const Home = async () => {


  const token = cookies().get("token")?.value;
  console.log("TOKEN: ",token)
  const api = useApi(token);
  console.log("API: ",api)

  // validating token
  let userLogged: UserLogged | undefined = await api.getUserLogged();
  if (!userLogged) {
    userLogged = undefined;
    console.log("User not logged")
  }

  console.log("userLogged:", userLogged);

  return (

    <>
      <Navbar userLogged={userLogged} />
      <DropAreaButtonAreaMainPage />
    </>
  )
}

export default Home
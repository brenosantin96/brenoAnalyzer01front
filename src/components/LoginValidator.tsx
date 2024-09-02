import { useApi } from '@/api/api';
import { UserLogged } from '@/types/User';
import { cookies } from 'next/headers';

const LoginValidator = async () => {


  const token = cookies().get("token")?.value;
  const api = useApi(token);

  // validating token
  let userLogged : UserLogged | undefined = await api.getUserLogged();
  if(!userLogged){
    userLogged = undefined;
    console.log("User not logged")
  }
  console.log("User logged")

  
}

export default LoginValidator
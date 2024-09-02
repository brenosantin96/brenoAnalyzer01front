"use client"

import { User } from "@/types/User";
import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { ProviderType } from "./Types";
import { getCookie, setCookie } from 'cookies-next';
import axios, { AxiosInstance } from "axios";
import { useApi } from "@/api/api";

const baseURL = process.env.NEXT_PUBLIC_BASEURL;



export const AuthProvider = ({ children }: ProviderType) => {

  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState("");

  const api = useApi();


  useEffect(() => {
    const storedToken = getCookie("token") || localStorage.getItem("token");
    console.log("stored TOKEN: ", storedToken)
    if (storedToken) {
      //entrou no useEffect
      handleToken(storedToken as string);
      validateUser(storedToken as string);
    }
  }, []);

  const validateUser = async (token: string) => {
    const userLogged = await api.getUserLogged();
    console.log("userLogged validate user: ", userLogged)
    if (userLogged) {
      setUser(userLogged);
    } else {
      // Limpa o token caso não seja válido
      handleToken("");
      setUser(null);
    }
  };

  const signOut = async () => {
    handleToken("");
    setUser(null);
  };

  const handleToken = async (tokenString: string) => {
    setToken(tokenString);
    localStorage.setItem("token", tokenString)
    setCookie("token", tokenString);
  };

  const isLogged = () => {
    return !!token && !!user;
  };

  const signIn = async (email: string, passwordReq: string) => {

    const data = await api.login(email, passwordReq);

    if (data.status === true && data.token) {


      console.log(data);

      setUser(data.user);
      handleToken(data.token);
      return true;
    }

    return false;
  };



  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, token, handleToken, isLogged  }}
    >
      {children}
    </AuthContext.Provider>
  );
};



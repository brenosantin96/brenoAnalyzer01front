"use client"

import { User } from "@/types/User";
import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { ProviderType } from "./Types";
import { setCookie } from 'cookies-next';
import axios, { AxiosInstance } from "axios";
import { useApi } from "@/api/api";

const baseURL = process.env.NEXT_PUBLIC_BASEURL;



export const AuthProvider = ({ children }: ProviderType) => {

  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState("");

  const api = useApi();


  const signOut = async () => {
  
  };

  const handleToken = async (tokenString: string) => {
    setToken(tokenString);
    localStorage.setItem("token", tokenString)
    setCookie("token", tokenString);
  };

  const isLogged = () => {
    return token ? true : false;
  };

  const signIn = async (email: string, passwordReq: string) => {

    const data = await api.login(email, passwordReq);

    if (data.status === true && data.token) {
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
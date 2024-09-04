"use client"
import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { ProviderType } from "./Types";
import { setCookie, getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { useApi } from "@/api/api";
import { User } from "@/types/User";

export const AuthProvider = ({ children }: ProviderType) => {

  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const api = useApi(token as string);

  useEffect(() => {
    const storedToken = getCookie("token") || localStorage.getItem("token");
    console.log("STORED TOKEN ENCONTRADO: ", storedToken);
    if (storedToken) {
      handleToken(storedToken as string);
      validateUser(storedToken as string);
    }
  }, []);

  const validateUser = async (token: string) => {
    const userLogged = await api.getUserLogged(token);
    console.log("AUTH PROVIDER, USER LOGGED: ",userLogged)

    if (userLogged) {
      setUser(userLogged);
    } else {

      console.log("LIMPANDO TOKEN pois nao é valido!")
      // Limpa o token caso não seja válido
      handleToken("");
      setUser(null);
    }
  };

 
  const handleToken = (tokenString: string) => {
    setToken(tokenString);
    localStorage.setItem("token", tokenString);
    setCookie("token", tokenString);
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

  const signOut = async () => {
    handleToken("");
    setUser(null);
  };

  const isLogged = () => {
    return !!token && !!user;
  };

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, token, handleToken, isLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
};
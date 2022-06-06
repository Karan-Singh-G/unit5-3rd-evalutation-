import React, { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthorize,setAuthorize]=useState(false);

  const login=(username,password)=>{
     if(username&&password){
       setAuthorize(true);
     }
  }
  const logout=()=>{
    setAuthorize(false);
  }

  return <AuthContext.Provider value={{isAuthorize,login,logout}}>{children}</AuthContext.Provider>;
};

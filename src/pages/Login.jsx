import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
   const {isAuthorize,login,logout}=useContext(AuthContext);
   console.log(email,password)
  return (
    <div>
      <input data-cy="login-email" placeholder="Email"  onChange={({target})=>setEmail(target.value)} />
      <input data-cy="login-password" placeholder="password" onChange={({target})=>setPassword(target.value)}/>
      <button data-cy="login-submit" onClick={()=>{
        if(isAuthorize){
          logout();
        }else{
         login(email,password)
        }
      }}>{isAuthorize ? "Logout":"Login"}</button>
    </div>
  );
};

export default Login;

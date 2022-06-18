import React, { Children, createContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
export const AuthContext = createContext();

function AuthProvider({children}) {
    const [token,setToken] = useState("");
    const check = useSelector((state)=>state.auth.token);
    console.log(check)
    useEffect(()=>{
        setToken(check)
    },[check])

   const logout = ()=>{
    setToken("")
   }

  return (
   <AuthContext.Provider value= {{token,logout}}>
     {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider
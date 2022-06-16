import React, { Children, createContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
export const AuthContext = createContext();

function AuthProvider({children}) {
    const [token,setToken] = useState("");
    const check = useSelector((state)=>state.auth.token);

    useEffect(()=>{
        setToken(check)
    },[check])

  return (
   <AuthContext.Provider value= {{token}}>
     {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider
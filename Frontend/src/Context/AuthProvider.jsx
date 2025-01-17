import React, { createContext, useState } from 'react'
import { useContext } from 'react'

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const InitialAuthUser = localStorage.getItem("Users")
    const [authUser, setAuthUser]= useState(
        InitialAuthUser? JSON.parse(InitialAuthUser) : undefined
    )
    return(
        <AuthContext.Provider value = {[authUser,setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth = ()=> useContext(AuthContext)


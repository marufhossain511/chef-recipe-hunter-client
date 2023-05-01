import React, { createContext, useEffect, useState } from 'react';

export const AuthContext=createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)

   const signUp=(name,email,password,photo)=>{
    return createUserWithEmailAndPassword(auth,email,password)
   }
 
   const login =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
   }

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
        setUser(loggedUser);
    })

    return () => {
        unsubscribe();
    }
}, [])



    const authInfo={
          user,
          signUp,
          login
    }

    return <AuthContext.Provider value={authInfo}>
              {children}
           </AuthContext.Provider>
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext=createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const [photo,setPhoto]=useState('')
  const [loading,setLoading]=useState(true)
  console.log(photo);

   const signUp=(name,email,password,photo)=>{
    setPhoto(photo)
    return createUserWithEmailAndPassword(auth,email,password)
   }
 
   const login =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
   }

   const logOut=()=>{
    return signOut(auth)
   }

   useEffect(()=>{
    const subscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false)
    })
    return () => {
        return subscribe();
    }
}, [])



    const authInfo={
          user,
          signUp,
          login,
          photo,
          logOut,
          loading
    }

    return <AuthContext.Provider value={authInfo}>
              {children}
           </AuthContext.Provider>
};

export default AuthProvider;
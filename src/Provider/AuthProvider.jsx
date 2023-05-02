import React, { createContext, useEffect, useState } from 'react';

export const AuthContext=createContext(null)
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app)
const GoogleProvider =new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const [photo,setPhoto]=useState('')
  const [loading,setLoading]=useState(true)
  const [name,setName]=useState('')
  console.log(photo);

   const signUp=(name,email,password,photo)=>{
    setPhoto(photo)
    setName(name)
    return createUserWithEmailAndPassword(auth,email,password)
   }
 
   const login =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
   }

   const logOut=()=>{
    return signOut(auth)
   }

   const googleLogin=()=>{
     return signInWithPopup(auth,GoogleProvider)
   }
    
   const gitHubLogin=()=>{
    return signInWithPopup(auth,githubProvider)
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
          loading,
          name,
          googleLogin,
          gitHubLogin
    }

    return <AuthContext.Provider value={authInfo}>
              {children}
           </AuthContext.Provider>
};

export default AuthProvider;
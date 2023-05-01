import React, { createContext } from 'react';

export const AuthContext=createContext(null)
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const user='maruf'

   const signUp=(name,email,password,photo)=>{
    return createUserWithEmailAndPassword(auth,email,password)
   }

   

    const authInfo={
          user,
          signUp
    }

    return <AuthContext.Provider value={authInfo}>
              {children}
           </AuthContext.Provider>
};

export default AuthProvider;
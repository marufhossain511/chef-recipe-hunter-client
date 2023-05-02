import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <div class="flex justify-center items-center h-screen">
        <div class="flex items-center">
          <div class="border-4 border-gray-300 rounded-full w-16 h-16 animate-spin"></div>
          <p class="ml-3 text-white font-bold text-2xl">L<span class="animate-pulse">o</span>ading</p>
        </div>
      </div>
      
      
      
    }
    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;
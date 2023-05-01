import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
    const [error,setError]=useState('')

    const {login}=useContext(AuthContext)

    const handleLogin=(e)=>{
        e.preventDefault()

        const form=e.target
        const email=form.email.value
        const password=form.password.value
        // console.log(email,password);
         setError('')

        login(email,password)
        .then((result)=>{
            const loggedUser=result.user
            console.log(loggedUser);
        })
        .catch((err)=>{
            console.log(err);
            setError(err.message)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                <h1 className="text-5xl font-bold">Please Login!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                   
                        <p className='mt-'><small>Don't have an account? <Link className='text-orange-500' to="/register">Register</Link></small></p>
                    
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn bg-lime-700 text-white">Login</button>
                    </div>
                    <p className='text-red-500'><small>{error}</small></p>
                </form>
                </div>
            <button className="bg-slate-600 hover:bg-slate-700 flex items-center text-white font-bold py-2 px-10 rounded-lg">
              <FaGoogle className='mr-2'/> Sign in with Google
            </button>
            <button className="bg-slate-600 flex items-center hover:bg-slate-700 text-white font-bold py-2 px-10 rounded-lg">
             <FaGithub className='mr-2'/> Sign in with GitHub
            </button>
            </div>
            </div>

        </div>
    );
};

export default Login;
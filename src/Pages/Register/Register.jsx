import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  const{signUp,googleLogin,gitHubLogin}=useContext(AuthContext)
  const[error,setError]=useState('')
    const handleRegister=(e)=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value
        const email=form.email.value
        const password=form.password.value
        const photo=form.photo.value
        // console.log(name,email,password,photo);
        setError('')
        if(password.length <6){
            return setError('The password is less than 6 characters')
        }

        signUp(name,email,password,photo)
        .then((result)=>{
            const createdUser=result.user
            console.log(createdUser);
        })
        .catch((err)=>{
            console.log(err.message);
            setError(err.message)
        })
    }

    const handleGoogleLogin=(e)=>{
        e.preventDefault()
        googleLogin()
        .then((result)=>{
            const signedUser=result.user
            console.log(signedUser);
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }

    const handleGitHubLogin=(e)=>{
        e.preventDefault()
        gitHubLogin()
        .then((result)=>{
            const githubUser=result.user
            console.log(githubUser);
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                <h1 className="text-5xl font-bold">Please Register!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text"name="name" required placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo url</span>
                    </label>
                    <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" />
                    </div>
                        <p className='mt-2'><small>Already have an account? <Link className='text-orange-500' to="/Login">Login</Link></small></p>
                    
                    
                    <div className="form-control mt-6">
                    <button className="btn bg-accent-focus text-white">Register</button>
                    </div>
                    <p className='text-red-400'><small>{error}</small></p>
                </form>
                </div>
            <button onClick={handleGoogleLogin} className="bg-accent-focus hover:bg-slate-700 flex items-center text-white font-bold py-2 px-10 rounded-lg">
              <FaGoogle className='mr-2'/> Continue with Google
            </button>
            <button onClick={handleGitHubLogin} className="bg-accent-focus flex items-center hover:bg-slate-700 text-white font-bold py-2 px-10 rounded-lg">
             <FaGithub className='mr-2'/> Continue with GitHub
            </button>
            </div>
            </div>
        </div>
    );
};

export default Register;
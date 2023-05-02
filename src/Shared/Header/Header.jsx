import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
  const {user,photo,logOut,name}=useContext(AuthContext)

  const handleLogout=(e)=>{
    logOut()
    .then(()=>{})
    .catch((err)=>console.log(err))
  }

    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
            <div className="flex-1">
                <NavLink><h2 className='text-primary text-2xl font-bold'>Al-Faham</h2></NavLink>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                 <NavLink to="/"  className={({ isActive }) => (isActive ? " text-info mr-2 rounded" : "mr-2 rounded text-white")}>Home</NavLink>
                 <NavLink to="/blog" className={({ isActive }) => (isActive ? " text-info mr-2 rounded" : "mr-2 rounded text-white")}>Blog</NavLink>
                {user? <button onClick={handleLogout} className='btn btn-outline bg-primary text-white'>Logout</button>
                 :<NavLink to="/login" className='mx-3'><button className='btn btn-outline bg-primary text-white'>Login</button></NavLink>
                 }
                
                </div>
                <div className="dropdown dropdown-end">
               
                    {user && <div className="w-10 rounded-full">
                    <img className='rounded-full w-10 h-10 tooltip'src={photo}/>
                    </div>}
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;
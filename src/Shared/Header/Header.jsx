import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
  const {user,photo,logOut}=useContext(AuthContext)

  const handleLogout=(e)=>{
    logOut()
    .then(()=>{})
    .catch((err)=>console.log(err))
  }

    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
            <div className="flex-1">
                <Link><h2 className='text-lime-500 text-2xl font-normal'>Al-Faham</h2></Link>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                 <Link className='mr-2 text-white '>Home</Link>
                 <Link className='mr-2 text-white '>Blog</Link>
                {user? <button onClick={handleLogout} className='btn bg-lime-500 text-white'>Logout</button>
                 :<Link to="/login" className='mx-3'><button className='btn bg-lime-500 text-white'>Login</button></Link>
                 }
                
                </div>
                <div className="dropdown dropdown-end">
               
                    {user && <div className="w-10 rounded-full">
                    <img className='rounded-full w-10 h-10' src={photo}/>
                    </div>}
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
                 <Link to="/login" className='mx-3'><button className='btn bg-lime-500 text-white'>Login</button></Link>
                
                </div>
                <div className="dropdown dropdown-end">
               
                    <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;
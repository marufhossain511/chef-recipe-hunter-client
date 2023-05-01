import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='md:min-h-[calc(100vh-112px)]'>
            <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
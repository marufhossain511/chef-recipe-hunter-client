import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefData=useLoaderData()
    console.log(chefData);
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;
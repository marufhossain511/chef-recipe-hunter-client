import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../Chef/ChefCard';

const Home = () => {
    const chefData=useLoaderData()
    console.log(chefData);
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-center text-white text-5xl font-bold mt-10 my-5'>Meet Our Professionals Chef</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 py-6 lg:grid-cols-3 gap-4 md:px-4 lg:px-4'> 
               {
                    chefData.map(data=><ChefCard
                    key={data.id}
                    data={data}
                    ></ChefCard>)
                }
          </div>
        </div>
    );
};

export default Home;
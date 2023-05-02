import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://media.istockphoto.com/id/1408797987/photo/chef-decorating-a-plate-while-working-in-the-kitchen-at-a-restaurant.jpg?b=1&s=170667a&w=0&k=20&c=051trCkQfpVapBF2QVgpL0Hm-OftxJt1zzR-5Jgwj8A=")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl text-white font-bold">Delicious Food The Best Only Taste Wonder</h1>
                <p className="mb-5 text-white">If you want to become a great chef, you have to work with great chefs. And that's exactly what I did.</p>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;
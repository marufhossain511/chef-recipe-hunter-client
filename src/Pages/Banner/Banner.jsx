import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/top-view-rice-with-carrot-cooked-with-lamb-served-with-yogurt-salad_141793-2449.jpg?size=626&ext=jpg&ga=GA1.1.452690373.1680190369&semt=robertav1_2_sidr")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Delicious Food The Best Only Taste Wonder</h1>
                <p className="mb-5">He who inserts himself between the onion and its skin, will only gain its smell</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;
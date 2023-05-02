import React, { useEffect, useState } from 'react';
import FeedbackCard from './FeedbackCard';

const ClientFeedback = () => {

    const [feedbacks,setFeedbacks]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/feedback')
        .then(res=>res.json())
        .then(data=>setFeedbacks(data))
    },[])
    // console.log(feedbacks);

    return (
        <div>
            <h2 className='text-white  text-5xl text-center'>What Customers Are Saying <br /> About Us </h2>
           <div className='grid grid-cols-1 md:grid-cols-2 py-6 lg:grid-cols-3 gap-4 md:px-4 lg:px-4'>
           {
                feedbacks.map((feedback,idx)=><FeedbackCard
                key={idx}
                feedback={feedback}
                ></FeedbackCard>)
            }
           </div>
        </div>
    );
};

export default ClientFeedback;
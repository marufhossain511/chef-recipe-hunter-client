import React from 'react';

const FeedbackCard = ({feedback}) => {
    const {customer_name,customer_image,comment}=feedback
    return (
        <div>
            <div className="card h-full w-full bg-base-300 shadow-xl">
            <figure className=" px-10 pt-10">
                <img src={customer_image}  className="rounded-xl" />
            </figure>
            <div className="card-body text-white items-center text-center">
                <h2 className="card-title">{customer_name}</h2>
                <p>{comment}</p>
            </div>
            </div>
        </div>
    );
};

export default FeedbackCard;
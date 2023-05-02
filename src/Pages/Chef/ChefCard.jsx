import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefCard = ({data}) => {
    // console.log(data);
    const {id,likes,chef_picture,chef_name,years_of_experience,number_of_recipes}=data
    return (
        <div>
            <div className="card h-full w-full bg-base-300  shadow-xl">
                <figure className='h-72'><img className='' src={chef_picture} /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{chef_name}</h2>
                    <p>Experience: {years_of_experience}Year</p>
                    <p>Numbers of Recipes: {number_of_recipes}</p>
                    <p className='flex items-center'>Likes: {likes} <FaThumbsUp className='ml-2'/></p>
                    <div className="card-actions justify-end">
                    <Link to={`/recipes/${id}`}><button className="btn bg-lime-700 text-white">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;
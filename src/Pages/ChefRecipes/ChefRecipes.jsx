import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import SpecialRecipe from './SpecialRecipe/SpecialRecipe';

const ChefRecipes = () => {
    const recipes=useLoaderData()
    console.log(recipes);
    const{chef_picture,chef_name,description,likes,years_of_experience,number_of_recipes,nationality,special_recipes}=recipes
    return (
        <div className='my-6'>
            <div className="card  bg-base-300 shadow-xl">
            <figure><img className='mt-6 rounded' src={chef_picture} alt="Album"/></figure>
            <div className="lg:mx-36 md:mx-36 mx-5 card-body text-white">
                <h2 className="text-xl text-center">{chef_name}</h2>
                <p>{description}</p>
                <p className='flex align-center'>Likes : {likes} <FaThumbsUp className='ml-2'/></p>
                <p>Number of Recipes: {number_of_recipes}</p>
                <p>Experience: {years_of_experience} Year</p>
            </div>
            <h2 className='text-white text-center text-3xl my-3'>Special Recipe of {chef_name}</h2>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 py-6 lg:grid-cols-3 md:px-4 lg:px-4'>
    
                
                {
                    special_recipes.map((data,idx)=><SpecialRecipe 
                    key={idx}
                    data={data}
                    ></SpecialRecipe>)
                }
            </div>
            </div>
        </div>
    );
};

export default ChefRecipes;
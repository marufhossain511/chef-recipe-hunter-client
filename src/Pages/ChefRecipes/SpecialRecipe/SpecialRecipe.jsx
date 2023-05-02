import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const SpecialRecipe = ({data}) => {
    const {recipe_name,recipe_image,recipe_ingredients,recipe_details}=data
  const[disable,setDisable]=useState(false)
    const handleFavorite=()=>{
        toast.success('Added to Favorite ❤️')
        setDisable(true)
    }
    return (
        <div>
            <div className="card h-96 w-full bg-base-100 shadow-xl text-white">
            {/* <figure><img src={recipe_image} alt="food" /></figure> */}
            <div className="card-body">
                <h2 className="card-title">{recipe_name}</h2>
                <div className='flex'>
                <p>Ingredients: {recipe_ingredients.map((i,idx)=><li key={idx}>{i}</li>)}</p>
                <img className='h-36 w-40 object-cover rounded border-black' src={recipe_image} alt="" />
                </div>
                <p>Details: {recipe_details}</p>
                <div className="card-actions justify-end">
                <button onClick={handleFavorite} className="btn text-white bg-lime-700 border-none" disabled={disable}>Favorite</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SpecialRecipe;
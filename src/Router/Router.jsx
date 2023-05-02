import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Register/Register";
import Banner from "../Pages/Banner/Banner";
import Home from "../Pages/Home/Home";
import ChefRecipes from "../Pages/ChefRecipes/ChefRecipes";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/data')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/recipes/:id',
                element:<ChefRecipes></ChefRecipes>
            }
        ]
    }
])

export default router
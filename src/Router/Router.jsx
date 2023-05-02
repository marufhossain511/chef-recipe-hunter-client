import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Register/Register";
import Banner from "../Pages/Banner/Banner";
import Home from "../Pages/Home/Home";
import ChefRecipes from "../Pages/ChefRecipes/ChefRecipes";
import Contact from "../Pages/Home/ContactUs/Contact";
import PrivateRoute from "./PrivateRoute";

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
                element:<PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/data/${params.id}`)
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    }
])

export default router
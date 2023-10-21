import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../../Root/Root';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import AddProduct from '../../Pages/AddProduct/AddProduct';
import Cart from '../../Pages/Cart/Cart';
import Protected from './Protected';
import BrandDetails from '../../components/BrandDetails/BrandDetails';
import ViewCard from '../../components/ViewCard/ViewCard';
import UpdateCard from '../../components/UpdateCard/UpdateCard';

const PublicRoutes = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=> fetch("/data.json")
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/addProduct",
                element:<Protected><AddProduct></AddProduct></Protected>
            },
            {
                path:"/cart",
                element:<Protected><Cart></Cart></Protected>,
                loader:()=> fetch("http://localhost:3000/cart")
            },
            {
                path:"/brands/:id",
                element:<Protected><BrandDetails></BrandDetails></Protected>,
                loader:()=> fetch("http://localhost:3000/data")
            },
            {
                path:"/view/:id",
                element:<ViewCard></ViewCard>,
                loader:({params})=> fetch(`http://localhost:3000/data/${params.id}`)
            },
            {
                path:"/update/:id",
                element:<UpdateCard></UpdateCard>,
                loader:({params})=> fetch(`http://localhost:3000/data/${params.id}`)
            }
        ]
    }
])

export default PublicRoutes;
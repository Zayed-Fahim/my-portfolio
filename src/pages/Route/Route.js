import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blog from '../Blog/Blog';
import Home from '../Home/Home';

const Route = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/home',
                    element:<Home></Home>
                },
                {
                    path: '/',
                    element:<Home></Home>
                },
                {
                    path: '/blog',
                    element:<Blog></Blog>
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}>

            </RouterProvider>
        </div>
    );
};

export default Route;
import React from 'react';
import ReactDOM from 'react-dom/client';
import BodyComponent from './src/components/BodyComponent';
import HeaderComponent from './src/components/HeaderComponent';
import RestaurantsComponent from './src/components/RestaurantsComponent';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import RestaurantMenu from './src/components/RestaurantMenu';


const AppContainer = () => {
    return(
        <div className='app-container'>
            <HeaderComponent />
            <Outlet />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppContainer />,
        children:[
            {
                path:'/',
                element:<div><BodyComponent />
                <RestaurantsComponent /></div>
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
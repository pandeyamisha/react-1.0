import React from 'react';
import ReactDOM from 'react-dom/client';
import  Header  from './components/Header';
import Body from './components/Body';//default export
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu.Js';
const AppLayout =() =>(
  <div className="app">
   <Header/>
   <Outlet/>
  </div>
)

const appRoute = createBrowserRouter([
  {
    path :'/',
    element : <AppLayout/>,
    children:[
      {
        path : '/',
        element:<Body/>
      },
      {
        path : '/aboutUs',
        element:<AboutUs/>
      },
      {
      path : '/ContactUs',
      element:<ContactUs/>
    },{
      path : '/restaurants/:resId',
      element:<RestaurantMenu/>
    }],
    errorElement:<Error/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoute}/>)

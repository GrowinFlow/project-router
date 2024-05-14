import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About'
import Product from './component/Product'
import User from './component/User';
import Login from './component/Login'; 



function App() {

    const router = createBrowserRouter([
      {
        path: "/",
        element: <> <Navbar /> <Home /> </>
      },
      {
        path: "/about",
        element: <> <Navbar /> <About /> </>
      },
      {
        path: "/product",
        element:  <> <Navbar /> <Product /> </>
      },
      {
        path: "/user/:username",
        element:  <> <Navbar /> <User /> </>
      },
      {
        path: "/login",
        element:  <> <Navbar /> <Login /> </>
      },
    ])

  return (
    <>
<RouterProvider  router={router}/>
          

    </>
  );
}

export default App;

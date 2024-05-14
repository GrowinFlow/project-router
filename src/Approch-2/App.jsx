import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About';
import Product from './component/Product';
import User from './component/User';
import Login from './component/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use Layout here
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'product',
        element: <Product />
      },
      {
        path: 'user/:username',
        element: <User />
      },
      {
        path: 'login',
        element: <Login />
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

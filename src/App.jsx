import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About'
import Product from './component/Product'

import Un from './component/Un';
import UserParams from './component/UserParams';

import User from './component/User';
import Login from './component/Login'; 




function App() {


  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="user" element={<User />} />
          <Route path="un/" element={<Un />} />
          <Route path="un/:username" element={<UserParams />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;

import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import HeroSection from './components/HeroSection';
import './App.css';
import Navbar from './components/Navbar';
import CategorySection from './components/CategorySection';
import Products from './components/Products';
import Home from './Pages/Home';
import About from './Pages/About';


import ProductDetail from './components/ProductDetail';
import Login from './Pages/Login';



function App() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="productdetail" element={<ProductDetail />} />



      </Routes>
    </div>

  );
}


export default App;

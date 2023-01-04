import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HaedlineCards from './components/HaedlineCards';
import Food from './components/Food';
import Category from './components/Category';
import { useSelector, useDispatch } from 'react-redux'
import { Route, Link, BrowserRouter as Router, Routes, BrowserRouter } from "react-router-dom";
import About from './components/About';
import { Navigate } from "react-router-dom";
import Home from './Home';
import Orders from './components/Orders';

function App() {
  const count = useSelector((state) => state.counter.value)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

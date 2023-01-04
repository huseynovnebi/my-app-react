import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HaedlineCards from './components/HaedlineCards';
import Food from './components/Food';
import Category from './components/Category';
import { useSelector, useDispatch } from 'react-redux'



const Home = () => {
  const count = useSelector((state) => state.counter.value)
  return (
    <div className={count ? "bg-black" : "bg-white"}>

    <Navbar />
    <Hero />
    <HaedlineCards />
    <Food />
    <Category />
    
  </div>
  )
}

export default Home
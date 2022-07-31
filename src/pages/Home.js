import React from 'react';
import Broadcast from '../components/Broadcast';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsleter from '../components/Newsletter';

function Home() {
  return (
    <div>
    <Broadcast />
    <Navbar />
    <Carousel />
    <Categories />
    <Products />
    <Newsleter />
    </div>
    
  )
}

export default Home
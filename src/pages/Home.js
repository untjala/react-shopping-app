import React from 'react';
import Broadcast from '../components/Broadcast';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';

function Home() {
  return (
    <div>
    <Broadcast />
    <Navbar />
    <Carousel />
    <Categories />
    </div>
    
  )
}

export default Home
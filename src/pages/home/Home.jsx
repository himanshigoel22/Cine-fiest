import React from 'react';
import "./style.scss";
import HeroSection from './heroSection/HeroSection';
import Trending from "./trending/Trending";
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';

TopRated
const Home = () => {
  return (
    <div className='homePage'>
      <HeroSection />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home;

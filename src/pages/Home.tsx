import React from 'react';
import Hero from '../components/Home/Hero';
import HowItWorks from '../components/Home/HowItWorks';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <HowItWorks />
    </div>
  );
};

export default Home;
import React from 'react';
import Hero from '../components/common/Hero';
import Services from '../components/common/Services';

const HomePage = () => {
  return (
    <div className="pt-20 bg-[#0b0f19] text-white">
      <Hero />
      <Services />
    </div>
  );
};


export default HomePage;
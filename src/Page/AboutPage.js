import React from 'react';
import AboutUs from '../components/common/AboutUs';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-purple-900 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-purple-200">
            Creamos soluciones digitales que impulsan a las empresas colombianas hacia el futuro
          </p>
        </div>
      </div>
      <AboutUs />
    </div>
  );
};

export default AboutPage;

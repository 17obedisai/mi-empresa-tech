import React from 'react';
import Services from '../components/common/Services';

const ServicesPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-purple-900 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-blue-200">
            Soluciones digitales inteligentes diseñadas para tu crecimiento
          </p>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default ServicesPage;

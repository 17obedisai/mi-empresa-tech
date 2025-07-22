import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Sobre <span className="text-blue-700">Tecnológica</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Tecnológica nació para llevar la innovación a empresas colombianas. Desde 2024, ofrecemos desarrollo web, apps y comercio digital.
          </p>
          <p className="text-gray-700 mb-6">
            Nuestro enfoque se basa en resultados, agilidad y soluciones pensadas para escalar. Cada cliente es un socio estratégico.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 text-center rounded-lg">🎯<p className="text-blue-700 font-semibold">Innovación</p></div>
            <div className="bg-green-50 p-4 text-center rounded-lg">🤝<p className="text-green-700 font-semibold">Confianza</p></div>
            <div className="bg-purple-50 p-4 text-center rounded-lg">⚡<p className="text-purple-700 font-semibold">Agilidad</p></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-xl text-center">
            <div className="text-3xl font-bold">+50</div>
            <div>Proyectos</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-6 rounded-xl text-center">
            <div className="text-3xl font-bold">+25</div>
            <div>Clientes</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-6 rounded-xl text-center">
            <div className="text-3xl font-bold">100%</div>
            <div>A tiempo</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 text-white p-6 rounded-xl text-center">
            <div className="text-3xl font-bold">24/7</div>
            <div>Soporte</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

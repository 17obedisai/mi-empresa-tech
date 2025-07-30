import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-[#0e111b] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-6">
            Sobre <span className="text-blue-500">Tecnológica</span>
          </h2>
          <p className="text-gray-300 mb-4">
            En Tecnológica, impulsamos a las empresas colombianas con herramientas digitales que transforman la manera de trabajar y crecer.
          </p>
          <p className="text-gray-300 mb-6">
            Desde 2024, brindamos soluciones en desarrollo web, apps, tiendas en línea y automatización de procesos. Creemos en la innovación, la cercanía con el cliente y la velocidad para entregar resultados.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-900 p-4 text-center rounded-lg border border-blue-600">
              <div className="text-2xl mb-1">🎯</div>
              <p className="text-blue-400 font-semibold">Innovación</p>
            </div>
            <div className="bg-green-900 p-4 text-center rounded-lg border border-green-600">
              <div className="text-2xl mb-1">🤝</div>
              <p className="text-green-400 font-semibold">Confianza</p>
            </div>
            <div className="bg-purple-900 p-4 text-center rounded-lg border border-purple-600">
              <div className="text-2xl mb-1">⚡</div>
              <p className="text-purple-400 font-semibold">Agilidad</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl text-center shadow-lg">
            <div className="text-3xl font-bold">+50</div>
            <div className="text-sm text-blue-100">Proyectos entregados</div>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-xl text-center shadow-lg">
            <div className="text-3xl font-bold">+25</div>
            <div className="text-sm text-green-100">Clientes felices</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-xl text-center shadow-lg">
            <div className="text-3xl font-bold">100%</div>
            <div className="text-sm text-purple-100">Entregas a tiempo</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 p-6 rounded-xl text-center shadow-lg">
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-sm text-yellow-100">Soporte disponible</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

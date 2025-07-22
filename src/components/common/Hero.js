import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-700 text-white py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10 relative">
        {/* TEXTO PRINCIPAL */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Impulsamos <span className="text-yellow-400">tu negocio</span> con tecnología
          </h1>
          <p className="text-lg text-blue-200 mb-8">
            En <strong className="text-white">Tecnológica</strong>, transformamos ideas en productos digitales, con diseño, desarrollo y estrategia.
          </p>
          <div className="flex space-x-4">
            <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-300 transition">
              Conocer servicios
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-900 transition">
              Cotizar ahora
            </button>
          </div>
        </div>

        {/* ILUSTRACIÓN */}
        <div className="relative w-full h-80 flex items-center justify-center">
          <div className="w-72 h-72 bg-white/10 rounded-full backdrop-blur-xl flex items-center justify-center text-8xl shadow-inner">
            🚀
          </div>
          <div className="absolute top-6 left-6 w-14 h-14 bg-yellow-400 text-2xl rounded-full flex items-center justify-center animate-bounce shadow-lg">💡</div>
          <div className="absolute bottom-6 right-6 w-14 h-14 bg-green-400 text-2xl rounded-full flex items-center justify-center animate-pulse shadow-lg">⚡</div>
        </div>
      </div>

      {/* DECORACIÓN DE FONDO */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-0" />
    </section>
  );
};

export default Hero;

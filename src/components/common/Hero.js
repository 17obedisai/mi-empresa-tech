import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10 relative">
        
        {/* TEXTO PRINCIPAL */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            <span className="text-cyan-400">Transforma tu negocio</span> con tecnología
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            En <strong className="text-purple-400">NEOTECH</strong>, convertimos ideas en experiencias digitales. Diseño, desarrollo y resultados.
          </p>
          <div className="flex space-x-4">
            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:from-pink-500 hover:to-purple-600 transition">
              Explorar Servicios
            </button>
            <button className="border-2 border-cyan-400 text-cyan-300 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-[#0f0c29] transition">
              Cotizar Proyecto
            </button>
          </div>
        </div>

        {/* ILUSTRACIÓN CON ANIMACIÓN */}
        <div className="relative w-full h-80 flex items-center justify-center">
          {/* Círculo giratorio y flotante */}
          <div className="w-72 h-72 bg-white/5 rounded-full backdrop-blur-xl flex items-center justify-center text-8xl shadow-inner border border-white/20 animate-spin-slow hover:animate-float-pulse">
            {/* Cohete con animación de flotación y rotación */}
            <div className="animate-float rotate-[-12deg] hover:scale-110 transition-transform duration-300">
              🚀
            </div>
          </div>

          {/* Iconos animados */}
          <div className="absolute top-6 left-6 w-14 h-14 bg-purple-500 text-2xl rounded-full flex items-center justify-center animate-bounce shadow-xl shadow-purple-800/40">
            💡
          </div>
          <div className="absolute bottom-6 right-6 w-14 h-14 bg-cyan-400 text-2xl rounded-full flex items-center justify-center animate-pulse shadow-xl shadow-cyan-800/30">
            ⚡
          </div>
        </div>
      </div>

      {/* DECORACIÓN DE FONDO */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-0" />
    </section>
  );
};

export default Hero;


import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#0b0f19] via-[#0f1320] to-[#141a2b] text-white pt-16 px-6 mt-24 shadow-inner border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 pb-12">
        <div className="md:col-span-2">
          <div className="text-2xl font-bold text-purple-400 mb-2">NEOTECH</div>
          <p className="text-sm text-gray-400 mb-2">
            Impulsamos negocios con soluciones digitales modernas y eficientes.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Desde Colombia, creamos software de clase mundial para transformar tu empresa.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-2xl hover:text-blue-400 transition">📘</a>
            <a href="#" className="text-2xl hover:text-green-400 transition">💬</a>
            <a href="#" className="text-2xl hover:text-pink-400 transition">📷</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-purple-300">Servicios</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Desarrollo Web</li>
            <li>Apps Móviles</li>
            <li>UX/UI & E-commerce</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-purple-300">Contacto</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>📧 contacto@neotech.dev</li>
            <li>📱 +57 321 456 7890</li>
            <li>📍 Medellín, Colombia</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm py-6 border-t border-gray-800">
        © 2025 NEOTECH. Desarrollado con 💡 y React.
      </div>
    </footer>
  );
};

export default Footer;

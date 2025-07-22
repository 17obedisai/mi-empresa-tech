import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="text-xl font-bold mb-2">Tecnológica</div>
          <p className="text-sm text-gray-400 mb-4">Soluciones inteligentes para un mundo digital</p>
          <p className="text-gray-400 text-sm mb-4">Creamos productos digitales impactantes desde Colombia para el mundo.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-2xl hover:text-blue-400">📘</a>
            <a href="#" className="text-2xl hover:text-green-400">💬</a>
            <a href="#" className="text-2xl hover:text-pink-400">📷</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Servicios</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Desarrollo Web</li>
            <li>Apps Móviles</li>
            <li>E-commerce</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contacto</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>📧 contacto@tecnologica.co</li>
            <li>📱 +57 310 000 0000</li>
            <li>📍 Garzón, Huila</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm pt-10 border-t border-gray-800 mt-12">
        © 2025 Tecnológica. Desarrollado con ❤️ y React.
      </div>
    </footer>
  );
};

export default Footer;

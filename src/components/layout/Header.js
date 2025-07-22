// Header.js MEJORADO SEGÚN LA GUÍA DEL TALLER
import React, { useState } from 'react';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('inicio');

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'contacto', label: 'Contacto' },
    { id: 'tienda', label: 'Tienda' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">💻</span>
          </div>
          <div>
            <div className="text-xl font-bold text-gray-800">Tecnológica</div>
            <div className="text-xs text-gray-500">Soluciones digitales que transforman</div>
          </div>
        </div>

        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveMenu(item.id)}
                className={`transition ${
                  activeMenu === item.id ? 'text-blue-700 border-b-2 border-blue-700 pb-1' : 'hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
          Cotizar Proyecto
        </button>
      </nav>
    </header>
  );
};

export default Header;

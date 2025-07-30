import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const menuItems = [
    { id: 'inicio', label: 'Inicio', path: '/' },
    { id: 'servicios', label: 'Servicios', path: '/servicios' },
    { id: 'nosotros', label: 'Nosotros', path: '/nosotros' },
    { id: 'contacto', label: 'Contacto', path: '/contacto' },
    { id: 'tienda', label: 'Tienda', path: '/tienda' }
  ];

  return (
    <header className="bg-[#0b0f19] shadow-md fixed w-full top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO + TEXTO */}
        <div className="flex items-center space-x-3">
          <NavLink to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🚀</span>
            </div>
            <div>
              <div className="text-xl font-bold animate-pulse">
                <span className="text-purple-400">NEO</span>
                <span className="text-blue-400">TECH</span>
              </div>
              <div className="text-xs text-cyan-400">Innovación que impulsa tu negocio</div>
            </div>
          </NavLink>
        </div>

        {/* MENÚ */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive
                      ? 'text-purple-400 border-b-2 border-purple-500 pb-1'
                      : 'hover:text-purple-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* BOTÓN */}
        <NavLink 
          to="/contacto"
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-pink-500 hover:to-purple-500 transition-colors duration-200 inline-block shadow-md"
        >
          ¡Cotiza tu Solución!
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;


import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Desarrollo Web Profesional',
      desc: 'Creamos sitios web responsivos, optimizados para buscadores (SEO) y enfocados en la conversión de tus clientes.',
      price: 'Desde $2.000.000 COP',
      items: [
        'Diseño 100% personalizado',
        'Optimización para celulares',
        'Integración con Google Analytics',
        'Panel de administración',
        'Formularios de contacto automáticos'
      ]
    },
    {
      icon: '📱',
      title: 'Aplicaciones Móviles a Medida',
      desc: 'Desarrollamos apps Android y iOS con interfaces atractivas y rendimiento eficiente, ideales para negocios modernos.',
      price: 'Desde $4.500.000 COP',
      items: [
        'Diseño UI/UX profesional',
        'Notificaciones push',
        'Conexión con bases de datos',
        'Multi-dispositivo',
        'Publicación en App Store y Play Store'
      ]
    },
    {
      icon: '🛒',
      title: 'Tiendas Virtuales (E-commerce)',
      desc: 'Implementamos tiendas online seguras con control de inventario, pagos electrónicos y panel administrativo.',
      price: 'Desde $3.200.000 COP',
      items: [
        'Integración con pasarelas de pago (Wompi, PayU)',
        'Gestión de productos y stock',
        'Panel de estadísticas y reportes',
        'Diseño adaptado a tu marca',
        'Soporte post-lanzamiento'
      ]
    }
  ];

  return (
    <section className="bg-[#0b0f19] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Servicios Inteligentes</h2>
        <p className="text-lg text-gray-400 mb-12">Soluciones digitales a la medida de tu negocio en Colombia</p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#1e1e2f] to-[#161623] rounded-2xl p-6 shadow-lg border border-white/5 hover:shadow-xl hover:scale-[1.03] transition-all"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{s.desc}</p>
              <div className="text-purple-400 font-bold text-lg mb-2">{s.price}</div>
              <ul className="text-sm text-gray-400 space-y-1 mb-4 text-left">
                {s.items.map((item, j) => (
                  <li key={j}>✓ {item}</li>
                ))}
              </ul>
              <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-pink-500 hover:to-purple-600 transition text-sm w-full">
                Cotizar este Servicio
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Desarrollo Web',
      desc: 'Creamos plataformas modernas, responsivas y con buen rendimiento.',
      price: '$500+',
      items: ['Diseño Responsive', 'SEO', 'Panel Admin']
    },
    {
      icon: '📱',
      title: 'Apps Móviles',
      desc: 'Aplicaciones para Android y iOS integradas con tus sistemas.',
      price: '$1200+',
      items: ['UI/UX Premium', 'Notificaciones', 'Multi-dispositivo']
    },
    {
      icon: '🛒',
      title: 'E-commerce',
      desc: 'Tiendas online con pasarelas de pago, stock y dashboard.',
      price: '$800+',
      items: ['Pagos Seguros', 'Stock', 'Reportes']
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
        <p className="text-lg text-gray-600 mb-12">Soluciones que transforman tu negocio</p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl shadow hover:shadow-xl p-6 transition">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{s.desc}</p>
              <div className="text-blue-600 font-bold text-lg mb-2">{s.price}</div>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                {s.items.map((item, j) => (
                  <li key={j}>✓ {item}</li>
                ))}
              </ul>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition text-sm">
                Cotizar Servicio
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
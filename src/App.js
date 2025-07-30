import React from 'react';
import Header from './components/layout/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Page/HomePage';
import ServicesPage from './Page/ServicesPage';
import AboutPage from './Page/AboutPage';
import ContactPage from './Page/ContactPage';
import Footer from './components/layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0b0f19]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inicio" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/common/Hero';
import Services from './components/common/Services';
import AboutUs from './components/common/AboutUs';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24">
        <Hero />
        <Services />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;

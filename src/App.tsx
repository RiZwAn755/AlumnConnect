import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Newsletter from './components/Newsletter';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'AlumniConnect | Reconnect, Network, Grow Together';
  }, []);
  
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Stats />
        <Newsletter />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
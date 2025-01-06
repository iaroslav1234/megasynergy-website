import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Stats from './components/Stats';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
    </div>
  );
}

export default App;

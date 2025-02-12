import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-site min-h-screen overflow-x-hidden'>
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <Banner />
      
      {/* Navigation */}
      <Nav />
      
      {/* Sections */}
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { farmerData } from '../data/farmerData';
import './Financial.css';
import { useTranslation } from 'react-i18next';

// Import components
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Schemes from '../components/Schemes';
import Calculator from '../components/Calculator';
import Eligibility from '../components/Eligibility';
import SuccessStories from '../components/SuccessStories';
import Footer from '../components/Footer';

const Financial = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [schemeData, setSchemeData] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Load scheme data
    setSchemeData(farmerData.schemes);
  }, []);

  const navigateToSection = (section) => {
    setActiveSection(section);
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // If scheme data is not loaded yet, show loading state
  if (!schemeData) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>{t('financial.loading.loading')}</p>
      </div>
    );
  }

  return (
    <div className="financial-portal">
      {/* Universal navbar at the very top */}
      <Navbar />
      <Header 
        activeSection={activeSection} 
        navigateToSection={navigateToSection} 
      />
      
      <main className="main-content">
        {activeSection === 'home' && (
          <Hero navigateToSection={navigateToSection} />
        )}
        
        {activeSection === 'schemes' && schemeData && (
          <Schemes schemes={schemeData} />
        )}
        
        {activeSection === 'calculator' && (
          <Calculator />
        )}
        
        {activeSection === 'eligibility' && (
          <Eligibility />
        )}
        
        {/* Success Stories is always visible */}
        <SuccessStories />
      </main>
      
      <Footer />
    </div>
  );
};

export default Financial;
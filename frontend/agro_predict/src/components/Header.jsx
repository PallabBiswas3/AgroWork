import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ activeSection, navigateToSection }) => {
  const navigate = useNavigate();
  
  const handleBackToHome = () => {
    navigate('/home');
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__brand">
            <h1 className="header__title">🇮🇳 Farmer Financial Assistance Portal</h1>
            <p className="header__subtitle">Government of India</p>
          </div>
          <nav className="header__nav">
            <button 
              className="nav-btn back-btn"
              onClick={handleBackToHome}
              title="Back to Dashboard"
            >
              ← Back to Dashboard
            </button>
            <button 
              className={`nav-btn ${activeSection === 'home' ? 'active' : ''}`} 
              onClick={() => navigateToSection('home')}
            >
              Portal Home
            </button>
            <button 
              className={`nav-btn ${activeSection === 'schemes' ? 'active' : ''}`} 
              onClick={() => navigateToSection('schemes')}
            >
              Schemes
            </button>
            <button 
              className={`nav-btn ${activeSection === 'calculator' ? 'active' : ''}`} 
              onClick={() => navigateToSection('calculator')}
            >
              Calculator
            </button>
            <button 
              className={`nav-btn ${activeSection === 'eligibility' ? 'active' : ''}`} 
              onClick={() => navigateToSection('eligibility')}
            >
              Eligibility
            </button>
            <button 
              className={`nav-btn ${activeSection === 'apply' ? 'active' : ''}`} 
              onClick={() => navigateToSection('apply')}
            >
              Apply
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

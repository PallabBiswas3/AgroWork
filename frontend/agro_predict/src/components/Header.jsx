import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = ({ activeSection, navigateToSection }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const handleBackToHome = () => {
    navigate('/home');
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__brand">
            <h1 className="header__title">{t('financial.header.title')}</h1>
            <p className="header__subtitle">{t('financial.header.subtitle')}</p>
          </div>
          <nav className="header__nav">
            <button 
              className="nav-btn back-btn"
              onClick={handleBackToHome}
              title={t('financial.header.back_title')}
            >
              {t('financial.header.back_label')}
            </button>
            <button 
              className={`nav-btn ${activeSection === 'home' ? 'active' : ''}`} 
              onClick={() => navigateToSection('home')}
            >
              {t('financial.header.home')}
            </button>
            <button 
              className={`nav-btn ${activeSection === 'schemes' ? 'active' : ''}`} 
              onClick={() => navigateToSection('schemes')}
            >
              {t('financial.header.schemes')}
            </button>
            <button 
              className={`nav-btn ${activeSection === 'calculator' ? 'active' : ''}`} 
              onClick={() => navigateToSection('calculator')}
            >
              {t('financial.header.calculator')}
            </button>
            <button 
              className={`nav-btn ${activeSection === 'eligibility' ? 'active' : ''}`} 
              onClick={() => navigateToSection('eligibility')}
            >
              {t('financial.header.eligibility')}
            </button>
            <button 
              className={`nav-btn ${activeSection === 'apply' ? 'active' : ''}`} 
              onClick={() => navigateToSection('apply')}
            >
              {t('financial.header.apply')}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

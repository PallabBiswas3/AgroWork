import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./HomePage.css";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { Box } from '@mui/material';

const HomePage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    navigate('/home');
  };

  const handleFeatureClick = (category) => {
    navigate(`/chat/${category}`);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div className="navbar-brand" style={{ flexShrink: 0 }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            <span style={{ marginRight: '8px' }}>🌱</span>
            <span>AGROWORK</span>
          </Link>
        </div>
        
        <div className="navbar-links" style={{ display: 'flex', alignItems: 'center' }}>
          <a href="#home" onClick={() => scrollToSection('home')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>
            {t('home.nav.home')}
          </a>
          <a href="#about" onClick={() => scrollToSection('about')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>
            {t('home.nav.about')}
          </a>
          <a href="#services" onClick={() => scrollToSection('services')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>
            {t('home.nav.services')}
          </a>
          <a href="#contact" onClick={() => scrollToSection('contact')} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem' }}>
            {t('home.nav.contact')}
          </a>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem', ml: 2 }}>
            <span style={{ color: 'white' }}>
              {t('home.labels.welcome_user', { name: user?.name || 'Farmer' })}
            </span>
            <LanguageSwitcher />
            <button 
              onClick={handleLogout} 
              style={{
                background: '#e74c3c',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 500,
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.background = '#c0392b'}
              onMouseOut={(e) => e.target.style.background = '#e74c3c'}
            >
              {t('home.labels.logout')}
            </button>
          </Box>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {t('home.hero.title_prefix')}
              <span className="gradient-text"> {t('home.hero.title_accent')}</span>
            </h1>
            <p className="hero-subtitle">
              {t('home.hero.subtitle')}
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={handleGetStarted}>
                {t('home.hero.get_started')}
                <span className="btn-icon">→</span>
              </button>
              <button className="btn-secondary">
                {t('home.hero.watch_demo')}
                <span className="btn-icon">▶</span>
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-image">
              <div className="floating-card card-1">
                <span className="card-icon">🌱</span>
                <span className="card-text">Soil Analysis</span>
              </div>
              <div className="floating-card card-2">
                <span className="card-icon">🐛</span>
                <span className="card-text">Pest Detection</span>
              </div>
              <div className="floating-card card-3">
                <span className="card-icon">🌤️</span>
                <span className="card-text">Weather Forecast</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.features.title')}</h2>
            <p className="section-subtitle">{t('home.features.subtitle')}</p>
          </div>
          
          <div className="features-grid">
            <div 
              className="feature-card" 
              onClick={() => navigate('/crop-recommendation')}
              style={{ cursor: 'pointer' }}
            >
              <div className="feature-icon">🌱</div>
              <h3 className="feature-title">{t('home.features.crop_advisor.title')}</h3>
              <p className="feature-description">{t('home.features.crop_advisor.desc')}</p>
              <div className="feature-btn">
                {t('home.features.crop_advisor.cta')}
                <span className="btn-icon">→</span>
              </div>
            </div>
            
            <div 
              className="feature-card" 
              onClick={() => navigate('/soil-analysis')}
              style={{ cursor: 'pointer' }}
            >
              <div className="feature-icon">🧪</div>
              <h3 className="feature-title">{t('home.features.soil_analysis.title')}</h3>
              <p className="feature-description">{t('home.features.soil_analysis.desc')}</p>
              <div className="feature-btn">
                {t('home.features.soil_analysis.cta')}
                <span className="btn-icon">→</span>
              </div>
            </div>
            
            <div className="feature-card" onClick={() => navigate('/disease-pest-dashboard')}>
              <div className="feature-icon">🔍</div>
              <h3 className="feature-title">{t('home.features.disease_detector.title')}</h3>
              <p className="feature-description">{t('home.features.disease_detector.desc')}</p>
              <button className="feature-btn">
                {t('home.features.disease_detector.cta')}
                <span className="btn-icon">→</span>
              </button>
            </div>
          
            
            <div className="feature-card" onClick={() => navigate('/environmental-monitoring')}>
              <div className="feature-icon">🌍</div>
              <h3 className="feature-title">{t('home.features.env_monitoring.title')}</h3>
              <p className="feature-description">{t('home.features.env_monitoring.desc')}</p>
              <div className="feature-btn">
                {t('home.features.env_monitoring.cta')}
                <span className="btn-icon">→</span>
              </div>
            </div>
            
            <div className="feature-card" onClick={() => navigate('/financial')}>
              <div className="feature-icon">💰</div>
              <h3 className="feature-title">{t('home.features.financial.title')}</h3>
              <p className="feature-description">{t('home.features.financial.desc')}</p>
              <button className="feature-btn">
                {t('home.features.financial.cta')}
                <span className="btn-icon">→</span>
              </button>
            </div>
            
            <div 
              className="feature-card" 
              onClick={() => navigate('/chatbot')}
              style={{ cursor: 'pointer' }}
            >
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">AI Chatbot</h3>
              <p className="feature-description">Ask farming questions and get instant assistance.</p>
              <div className="feature-btn">
                Open Chatbot
                <span className="btn-icon">→</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.how_it_works.title')}</h2>
            <p className="section-subtitle">{t('home.how_it_works.subtitle')}</p>
          </div>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-icon">👤</div>
              <h3 className="step-title">{t('home.how_it_works.step1_title')}</h3>
              <p className="step-description">{t('home.how_it_works.step1_desc')}</p>
            </div>
            
            <div className="step-connector"></div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-icon">💬</div>
              <h3 className="step-title">{t('home.how_it_works.step2_title')}</h3>
              <p className="step-description">{t('home.how_it_works.step2_desc')}</p>
            </div>
            
            <div className="step-connector"></div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-icon">🎯</div>
              <h3 className="step-title">{t('home.how_it_works.step3_title')}</h3>
              <p className="step-description">{t('home.how_it_works.step3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.testimonials.title')}</h2>
            <p className="section-subtitle">{t('home.testimonials.subtitle')}</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"{t('home.testimonials.t1')}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👨‍🌾</div>
                <div className="author-info">
                  <h4>Rajesh Kumar</h4>
                  <span>Wheat Farmer, Punjab</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"{t('home.testimonials.t2')}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩‍🌾</div>
                <div className="author-info">
                  <h4>Priya Sharma</h4>
                  <span>Organic Farmer, Karnataka</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"{t('home.testimonials.t3')}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👨‍🌾</div>
                <div className="author-info">
                  <h4>Amir Khan</h4>
                  <span>Rice Farmer, Uttar Pradesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <span className="logo-icon">🌱</span>
                <span className="logo-text">AGROWORK</span>
              </div>
              <p className="footer-description">
                {t('home.footer.desc')}
              </p>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">💼</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>{t('home.footer.quick_links')}</h4>
              <ul className="footer-links">
                <li><a href="#home">{t('home.nav.home')}</a></li>
                <li><a href="#about">{t('home.nav.about')}</a></li>
                <li><a href="#services">{t('home.nav.services')}</a></li>
                <li><a href="#contact">{t('home.nav.contact')}</a></li>
                <li><a href="/crop-recommendation">Crop Recommendation</a></li>
                <li><a href="/disease-pest-dashboard">Disease & Pest Dashboard</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>{t('home.footer.services')}</h4>
              <ul className="footer-links">
                <li><a href="/soil-analysis">{t('home.features.soil_analysis.title')}</a></li>
                <li><a href="/chat/soil">Soil Chat</a></li>
                <li><a href="/chat/pest">{t('home.features.disease_detector.title')}</a></li>
                <li><a href="/chat/weather">Weather Forecast</a></li>
                <li><a href="/chat/finance">Financial Planning</a></li>
                <li><a href="/crop-recommendation">{t('home.features.crop_advisor.title')}</a></li>
                <li><a href="/disease-pest-dashboard">Disease Dashboard</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>{t('home.footer.contact_info')}</h4>
              <div className="contact-info">
                <p>📧 support@agrowork.com</p>
                <p>📞 +91 98765 43210</p>
                <p>📍 Bangalore, India</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} AGROWORK. {t('home.footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

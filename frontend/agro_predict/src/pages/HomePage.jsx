import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../App";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">🌱</span>
            <span className="logo-text">AGROWORK</span>
          </div>
          
          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            <a href="#services" onClick={() => scrollToSection('services')}>Services</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
          
          <div className="nav-actions">
            <div className="user-info">
              <span className="user-name">Welcome, {user?.name || 'Farmer'}!</span>
            </div>
            <button className="btn-logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
          
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
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
              Empowering Farmers with
              <span className="gradient-text"> AI</span>
            </h1>
            <p className="hero-subtitle">
              Get real-time support for soil analysis, pest detection, weather forecasting, and financial planning. 
              Transform your farming with intelligent insights.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={handleGetStarted}>
                Get Started
                <span className="btn-icon">→</span>
              </button>
              <button className="btn-secondary">
                Watch Demo
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
            <h2 className="section-title">AI-Powered Tools</h2>
            <p className="section-subtitle">
              Comprehensive solutions designed specifically for modern agriculture
            </p>
          </div>
          
          <div className="features-grid">
            <div 
              className="feature-card" 
              onClick={() => navigate('/crop-recommendation')}
              style={{ cursor: 'pointer' }}
            >
              <div className="feature-icon">🌱</div>
              <h3 className="feature-title">Crop Advisor</h3>
              <p className="feature-description">
                Get personalized crop recommendations based on your soil and climate conditions.
              </p>
              <div className="feature-btn">
                Get Started
                <span className="btn-icon">→</span>
              </div>
            </div>
            
            <div 
              className="feature-card" 
              onClick={() => navigate('/soil-analysis')}
              style={{ cursor: 'pointer' }}
            >
              <div className="feature-icon">🧪</div>
              <h3 className="feature-title">Soil Analysis</h3>
              <p className="feature-description">
                Get detailed soil health report and fertilizer recommendations.
              </p>
              <div className="feature-btn">
                Analyze Now
                <span className="btn-icon">→</span>
              </div>
            </div>
            
            <div className="feature-card" onClick={() => navigate('/disease-pest-dashboard')}>
              <div className="feature-icon">🔍</div>
              <h3 className="feature-title">Disease Detector</h3>
              <p className="feature-description">
                Upload plant images to identify diseases and get treatment recommendations.
              </p>
              <button className="feature-btn">
                Start Chat
                <span className="btn-icon">→</span>
              </button>
            </div>
          
            
            <div className="feature-card" onClick={() => navigate('/environmental-monitoring')}>
              <div className="feature-icon">🌍</div>
              <h3 className="feature-title">Environmental Monitoring</h3>
              <p className="feature-description">
                Monitor and analyze environmental conditions for optimal crop growth.
              </p>
              <div className="feature-btn">
                Monitor Now
                <span className="btn-icon">→</span>
              </div>
            </div>
            
            <div className="feature-card" onClick={() => navigate('/financial-assistance')}>
              <div className="feature-icon">💰</div>
              <h3 className="feature-title">Financial Assistance</h3>
              <p className="feature-description">
                Explore government schemes and calculate your potential benefits.
              </p>
              <button className="feature-btn">
                Explore Now
                <span className="btn-icon">→</span>
              </button>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Get started in just three simple steps
            </p>
          </div>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-icon">👤</div>
              <h3 className="step-title">Create Account</h3>
              <p className="step-description">
                Sign up for free and get instant access to all AI tools
              </p>
            </div>
            
            <div className="step-connector"></div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-icon">💬</div>
              <h3 className="step-title">Ask Questions</h3>
              <p className="step-description">
                Chat with our AI assistants about any farming concern
              </p>
            </div>
            
            <div className="step-connector"></div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-icon">🎯</div>
              <h3 className="step-title">Get Solutions</h3>
              <p className="step-description">
                Receive instant, accurate advice tailored to your needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Farmers Say</h2>
            <p className="section-subtitle">
              Join thousands of farmers who trust AGROWORK
            </p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"AGROWORK helped me increase my crop yield by 30% with their soil analysis recommendations."</p>
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
                <p>"The pest detection feature saved my entire tomato crop. Highly recommended!"</p>
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
                <p>"Weather predictions are spot-on. I plan my irrigation schedule perfectly now."</p>
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
                Empowering farmers with AI-driven insights for sustainable and profitable agriculture.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">💼</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="/crop-recommendation">Crop Recommendation</a></li>
                <li><a href="/disease-pest-dashboard">Disease & Pest Dashboard</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="/soil-analysis">Soil Analysis</a></li>
                <li><a href="/chat/soil">Soil Chat</a></li>
                <li><a href="/chat/pest">Pest Detection</a></li>
                <li><a href="/chat/weather">Weather Forecast</a></li>
                <li><a href="/chat/finance">Financial Planning</a></li>
                <li><a href="/crop-recommendation">Crop Recommendation</a></li>
                <li><a href="/disease-pest-dashboard">Disease Dashboard</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <p>📧 support@agrowork.com</p>
                <p>📞 +91 98765 43210</p>
                <p>📍 Bangalore, India</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 AGROWORK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

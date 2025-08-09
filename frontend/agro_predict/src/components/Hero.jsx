import React from 'react';

const Hero = ({ navigateToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">Empowering Farmers Across India</h1>
            <p className="hero__description">
              Access comprehensive financial assistance through 27+ government schemes. 
              Join 9.7 crore farmers already benefiting from ₹10+ lakh crore investment.
            </p>
            <div className="hero__actions">
              <button 
                className="btn btn--primary btn--lg" 
                onClick={() => navigateToSection('calculator')}
              >
                Calculate Benefits
              </button>
              <button 
                className="btn btn--outline btn--lg" 
                onClick={() => navigateToSection('schemes')}
              >
                Explore Schemes
              </button>
            </div>
          </div>
          <div className="hero__stats">
            <div className="stat-card">
              <div className="stat-card__number">₹10+</div>
              <div className="stat-card__label">Lakh Crore Investment</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__number">9.7</div>
              <div className="stat-card__label">Crore Beneficiaries</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__number">27+</div>
              <div className="stat-card__label">Schemes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

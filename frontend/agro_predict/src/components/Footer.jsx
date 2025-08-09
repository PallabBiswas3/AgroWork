import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Farmer Financial Assistance Portal</h3>
            <p className="footer__description">
              Empowering farmers across India with access to government schemes and financial assistance programs.
            </p>
          </div>
          
          <div className="footer__section">
            <h4 className="footer__subtitle">Quick Links</h4>
            <ul className="footer__links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a></li>
              <li><a href="#schemes">Schemes</a></li>
              <li><a href="#calculator">Benefit Calculator</a></li>
              <li><a href="#eligibility">Check Eligibility</a></li>
            </ul>
          </div>
          
          <div className="footer__section">
            <h4 className="footer__subtitle">Contact Us</h4>
            <ul className="footer__contact">
              <li>📞 Kisan Call Center: <a href="tel:18001801551">1800-180-1551</a></li>
              <li>📧 Email: <a href="mailto:kisan-ict@gov.in">kisan-ict@gov.in</a></li>
              <li>📍 Ministry of Agriculture & Farmers Welfare, New Delhi</li>
            </ul>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Government of India. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="footer__divider">|</span>
            <a href="#terms">Terms of Service</a>
            <span className="footer__divider">|</span>
            <a href="#accessibility">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

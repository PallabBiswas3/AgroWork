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

        {activeSection === 'apply' && (
          <section id="apply-assist" className="apply">
            <div className="container">
              <h2 className="section-title">Get Assistance to Apply</h2>
              <p className="section-subtitle">Use these channels to apply for schemes and get on-ground help.</p>

              <div className="assist-grid">
                <div className="assist-card">
                  <h3>Banks & Credit</h3>
                  <ul>
                    <li><strong>Kisan Credit Card (KCC):</strong> Apply at your nearest bank branch. Collateral-free up to ₹2 lakh (typical).</li>
                    <li><strong>SHG/JLG:</strong> Join a Self-Help Group or Joint Liability Group for collateral-free loans and KCC access.</li>
                    <li><strong>Cooperatives/PACS:</strong> Short/medium-term credit, inputs and marketing support.</li>
                  </ul>
                </div>

                <div className="assist-card">
                  <h3>Government Offices</h3>
                  <ul>
                    <li><strong>District Agriculture Office (DAO):</strong> Help for PM-KISAN, PMFBY, SMAM, PKVY, Soil Health Card.</li>
                    <li><strong>Common Service Centers (CSC):</strong> Assisted online applications and document upload.</li>
                    <li><strong>e-NAM:</strong> Visit your mandi office to enroll and access national markets.</li>
                  </ul>
                </div>

                <div className="assist-card">
                  <h3>Tribal Support</h3>
                  <ul>
                    <li><strong>TRIFED / Van Dhan Kendras:</strong> Value-add training and market linkages for forest produce.</li>
                    <li><strong>PM-JANMAN / PVTG:</strong> Enroll via local tribal welfare office for targeted benefits.</li>
                    <li><strong>EMRS (education):</strong> Contact school admin for admissions and scholarships.</li>
                  </ul>
                </div>

                <div className="assist-card">
                  <h3>NGOs & CSR</h3>
                  <ul>
                    <li>Ambuja Foundation, WOTR, Swades, UVS: trainings, watershed, organic and market linkage.</li>
                    <li>HDFC Parivartan, Reliance Foundation, Tata, Mahindra: irrigation/drip, FPO creation, soil testing.</li>
                    <li>Ask your Panchayat or DAO for active NGOs in your block.</li>
                  </ul>
                </div>

                <div className="assist-card">
                  <h3>Digital Advisory</h3>
                  <ul>
                    <li><strong>TCS mKrishi:</strong> Weather, soil, market prices and expert advice in local languages.</li>
                    <li>Keep mobile number active for OTPs and scheme updates.</li>
                  </ul>
                </div>
              </div>

              <div className="assist-notes">
                <h4>What to carry</h4>
                <ul>
                  <li>Aadhaar card, bank passbook, recent photo</li>
                  <li>Land record (ROR/Khata/Patta) or tenancy proof (for JLG/tenant)</li>
                  <li>Category certificate (SC/ST/PVTG/Women), if applicable</li>
                </ul>

                <h4>Helpdesk</h4>
                <ul>
                  <li>Toll-free agri helpline: <a href="tel:18001801551">1800-180-1551</a></li>
                  <li>Visit nearest Bank / PACS / CSC / DAO for assisted application</li>
                </ul>
              </div>
            </div>
          </section>
        )}
        
        {/* Success Stories is always visible */}
        <SuccessStories />
      </main>
      
      <Footer />
    </div>
  );
};

export default Financial;
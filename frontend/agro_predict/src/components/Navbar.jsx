import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Box } from '@mui/material';
import '../styles/Navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">{t('navbar.brand')}</Link>
      </div>
      <div className="navbar-links" style={{ display: 'flex', alignItems: 'center' }}>
        {user ? (
          <>
            <Link to="/home">{t('navbar.home')}</Link>
            <Link to="/crop-recommendation">{t('navbar.crop_recommendation')}</Link>
            <Link to="/disease-pest">{t('navbar.disease_pest')}</Link>
            <Link to="/soil-analysis">{t('navbar.soil_analysis')}</Link>
            <Link to="/environmental-monitoring">{t('navbar.environmental_monitoring')}</Link>
            <Link to="/financial">{t('navbar.financial')}</Link>
            <button onClick={handleLogout} className="logout-btn">{t('navbar.logout')}</button>
            <Box sx={{ ml: 2 }}>
              <LanguageSwitcher />
            </Box>
          </>
        ) : (
          <>
            <Link to="/login">{t('navbar.login')}</Link>
            <Link to="/register" className="register-btn">{t('navbar.register')}</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

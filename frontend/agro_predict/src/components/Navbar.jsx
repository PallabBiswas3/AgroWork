import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">AgroWork</Link>
      </div>
      <div className="navbar-links">
        {user ? (
          <>
            <Link to="/home">Home</Link>
            <Link to="/crop-recommendation">Crop Recommendation</Link>
            <Link to="/disease-pest">Disease & Pest</Link>
            <Link to="/soil-analysis">Soil Analysis</Link>
            <Link to="/environmental-monitoring">Environmental Monitoring</Link>
            <Link to="/financial">Financial Assistance</Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="register-btn">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

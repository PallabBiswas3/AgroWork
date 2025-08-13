import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    farmType: 'general'
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all required fields.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const result = await register({
        name: formData.name.trim(),
        email: formData.email,
        password: formData.password,
        farmType: formData.farmType
      });
      
      if (result.success) {
        navigate('/home');
      } else {
        setError(result.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.message || 'An error occurred during registration. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="background-animation">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="register-card">
        <div className="register-header">
          <div className="logo-container">
            <div className="logo-icon">🌱</div>
            <h1>AgroWork</h1>
          </div>
          <p className="welcome-text">Join thousands of farmers using AI to improve their yields!</p>
        </div>

        {error && <div className="error-alert">{error}</div>}

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-row">
            <div className="input-group">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address *</label>
            <div className="input-wrapper">
              <span className="input-icon">📧</span>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="farmType">Farm Type</label>
            <div className="input-wrapper">
              <span className="input-icon">🌾</span>
              <select
                id="farmType"
                name="farmType"
                value={formData.farmType}
                onChange={handleChange}
                className="select-input"
              >
                <option value="general">General Farming</option>
                <option value="crop">Crop Farming</option>
                <option value="dairy">Dairy Farming</option>
                <option value="poultry">Poultry Farming</option>
                <option value="organic">Organic Farming</option>
                <option value="horticulture">Horticulture</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="password">Password *</label>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password *</label>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
          </div>

          <div className="terms-checkbox">
            <input
              type="checkbox"
              id="terms"
              required
            />
            <label htmlFor="terms">
              I agree to the <a href="#" className="terms-link">Terms of Service</a> and <a href="#" className="terms-link">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="register-btn" disabled={isLoading}>
            {isLoading ? (
              <span className="loading-spinner">⏳</span>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <div className="register-footer">
          <p>Already have an account? <a href="/login" className="login-link">Sign in</a></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage; 
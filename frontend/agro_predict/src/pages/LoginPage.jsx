import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('LoginPage: handleLogin called');
    
    if (!email || !password) {
      const errorMsg = 'Email and password are required.';
      console.log('LoginPage: Validation error -', errorMsg);
      setError(errorMsg);
      return;
    }

    setIsLoading(true);
    setError('');
    console.log('LoginPage: Attempting to log in...');

    try {
      console.log('LoginPage: Calling login function with email:', email);
      const result = await login(email, password);
      console.log('LoginPage: login result:', result);
      
      if (result.success) {
        console.log('LoginPage: Login successful, navigating to /home');
        navigate('/home', { replace: true });
      } else {
        const errorMsg = result.message || 'Invalid email or password';
        console.error('LoginPage: Login failed -', errorMsg, result);
        setError(errorMsg);
      }
    } catch (err) {
      const errorMsg = 'An error occurred during login. Please try again.';
      console.error('LoginPage: Error during login:', {
        message: err.message,
        error: err,
        response: err.response?.data
      });
      setError(errorMsg);
    } finally {
      console.log('LoginPage: Login attempt completed');
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!forgotEmail) {
      setError('Please enter your email address.');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Password reset link has been sent to your email!');
      setShowForgotPassword(false);
      setForgotEmail('');
    } catch (err) {
      setError('Failed to send reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="background-animation">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="login-card">
        <div className="login-header">
          <div className="logo-container">
            <div className="logo-icon">🌱</div>
            <h1>AgroWork</h1>
          </div>
          <p className="welcome-text">Welcome back! Please sign in to your account.</p>
        </div>

        {error && <div className="error-alert">{error}</div>}

        {!showForgotPassword ? (
          <form onSubmit={handleLogin} className="login-form">
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <span className="input-icon">📧</span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <div className="form-options">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <button
                type="button"
                className="forgot-link"
                onClick={() => setShowForgotPassword(true)}
              >
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="login-btn" disabled={isLoading}>
              {isLoading ? (
                <span className="loading-spinner">⏳</span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        ) : (
          <form onSubmit={handleForgotPassword} className="forgot-form">
            <div className="forgot-header">
              <button
                type="button"
                className="back-btn"
                onClick={() => setShowForgotPassword(false)}
              >
                ← Back to Login
              </button>
              <h3>Reset Password</h3>
              <p>Enter your email address and we'll send you a link to reset your password.</p>
            </div>

            <div className="input-group">
              <label htmlFor="forgot-email">Email Address</label>
              <div className="input-wrapper">
                <span className="input-icon">📧</span>
                <input
                  id="forgot-email"
                  type="email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <button type="submit" className="reset-btn" disabled={isLoading}>
              {isLoading ? (
                <span className="loading-spinner">⏳</span>
              ) : (
                'Send Reset Link'
              )}
            </button>
          </form>
        )}

        <div className="login-footer">
          <p>Don't have an account? <a href="/register" className="signup-link">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

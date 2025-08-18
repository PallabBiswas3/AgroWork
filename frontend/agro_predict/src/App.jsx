import React, { Suspense } from 'react';
import './i18n';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Components
import Navbar from './components/Navbar';

// Pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import DiseasePestDashboard from './pages/DiseasePestDashboard';
import Financial from './pages/Financial';
import SoilAnalysis from './pages/SoilAnalysis';
import EnvironmentalMonitoring from './pages/EnvironmentalMonitoring';
import CropRecommendation from './pages/CropRecommendation';
import NotFound from './pages/NotFound';
import Chatbot from './pages/Chatbot';

// Styles
import './App.css';
import './styles/NotFound.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <ConditionalNavbar />
          <main className="main-content">
            <Routes>
              {/* Public Routes */}
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              
              {/* Protected Routes */}
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/disease-pest-dashboard"
                element={
                  <ProtectedRoute>
                    <DiseasePestDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/financial"
                element={
                  <ProtectedRoute>
                    <Financial />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/chatbot"
                element={
                  <ProtectedRoute>
                    <Chatbot />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/soil-analysis"
                element={
                  <ProtectedRoute>
                    <SoilAnalysis />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/environmental-monitoring"
                element={
                  <ProtectedRoute>
                    <EnvironmentalMonitoring />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/crop-recommendation"
                element={
                  <ProtectedRoute>
                    <CropRecommendation />
                  </ProtectedRoute>
                }
              />
              
              {/* Default and 404 Routes */}
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

// Hide Navbar on certain routes (e.g., financial portal has its own header)
const ConditionalNavbar = () => {
  const location = useLocation();
  const hideOnRoutes = ['/financial'];
  if (hideOnRoutes.includes(location.pathname)) {
    return null;
  }
  return <Navbar />;
};

// Public Route Component - Redirects to home if user is already logged in
const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }
  
  console.log('PublicRoute - User state:', { user, loading });
  
  if (user) {
    console.log('PublicRoute: User is authenticated, redirecting to /home');
    return <Navigate to="/home" replace />;
  }
  
  console.log('PublicRoute: No user, rendering public content');
  return children;
};

export default App;

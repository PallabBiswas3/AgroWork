import React, { createContext, useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import DiseasePestDashboard from "./pages/DiseasePestDashboard";
import Financial from "./pages/Financial";
import SoilAnalysis from "./pages/SoilAnalysis";
import EnvironmentalMonitoring from "./pages/EnvironmentalMonitoring";
import CropRecommendation from "./pages/CropRecommendation";
import "./App.css";

// Authentication Context
const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Auth Provider Component
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check localStorage for existing login state
    const savedAuth = localStorage.getItem('agrowork-auth');
    if (savedAuth) {
      const authData = JSON.parse(savedAuth);
      setIsAuthenticated(authData.isAuthenticated);
      setUser(authData.user);
    }
  }, []);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem('agrowork-auth', JSON.stringify({
      isAuthenticated: true,
      user: userData
    }));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('agrowork-auth');
  };

  const register = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem('agrowork-auth', JSON.stringify({
      isAuthenticated: true,
      user: userData
    }));
  };

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
    register
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Protected Routes */}
            <Route path="/home" element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } />
            <Route path="/crop-recommendation" element={
              <ProtectedRoute>
                <CropRecommendation />
              </ProtectedRoute>
            } />
            <Route path="/disease-pest-dashboard" element={
              <ProtectedRoute>
                <DiseasePestDashboard />
              </ProtectedRoute>
            } />
            <Route path="/soil-analysis" element={
              <ProtectedRoute>
                <SoilAnalysis />
              </ProtectedRoute>
            } />
            <Route path="/financial-assistance" element={
              <ProtectedRoute>
                <Financial />
              </ProtectedRoute>
            } />
            <Route path="/environmental-monitoring" element={
              <ProtectedRoute>
                <EnvironmentalMonitoring />
              </ProtectedRoute>
            } />
            
            {/* Default redirects */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

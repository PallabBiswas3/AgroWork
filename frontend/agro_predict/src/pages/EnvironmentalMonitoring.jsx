import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EnvironmentalMonitoring.css';

const EnvironmentalMonitoring = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: '',
    soilMoisture: ''
  });
  const [environmentalData, setEnvironmentalData] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    // Basic validation
    if (!formData.location.trim()) {
      setError('Please enter a location');
      return;
    }
    
    const soilMoisture = parseFloat(formData.soilMoisture);
    if (isNaN(soilMoisture) || soilMoisture < 0 || soilMoisture > 100) {
      setError('Please enter a valid soil moisture percentage (0-100)');
      return;
    }

    try {
      setIsLoading(true);
      
      // Fetch weather data from OpenWeatherMap
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(formData.location)}&units=metric&appid=1c4d46bf5bfb38c54d22ed487189b9ca`
      );
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch weather data');
      }
      
      const weatherData = await response.json();
      
      // Process and store the environmental data
      const newEnvironmentalData = {
        temperature: { 
          current: Math.round(weatherData.main.temp * 10) / 10, 
          optimal: { min: 20, max: 28 }, 
          unit: "°C" 
        },
        humidity: { 
          current: weatherData.main.humidity, 
          optimal: { min: 50, max: 70 }, 
          unit: "%" 
        },
        soil_moisture: { 
          current: soilMoisture, 
          optimal: { min: 40, max: 60 }, 
          unit: "%" 
        },
        cloudy: { 
          current: weatherData.clouds?.all || 0, 
          optimal: { min: 20, max: 40 }, 
          unit: "%" 
        }
      };
      
      setEnvironmentalData(newEnvironmentalData);
      generateRecommendations(newEnvironmentalData);
      setSuccess('Environmental data updated successfully!');
      
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'Failed to fetch weather data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const generateRecommendations = (envData) => {
    const recs = [];

    // Temperature recommendations
    if (envData.temperature.current > 30) {
      recs.push({
        type: 'Temperature Management',
        message: 'Consider shade nets or increased irrigation to cool soil and plants',
        priority: 'medium'
      });
    } else if (envData.temperature.current < 18) {
      recs.push({
        type: 'Temperature Management',
        message: 'Consider row covers or mulching to maintain soil temperature',
        priority: 'medium'
      });
    }

    // Humidity recommendations
    if (envData.humidity.current > 80) {
      recs.push({
        type: 'Humidity Control',
        message: 'Improve air circulation and reduce irrigation frequency to prevent fungal diseases',
        priority: 'high'
      });
    } else if (envData.humidity.current < 40) {
      recs.push({
        type: 'Humidity Control',
        message: 'Increase irrigation or use misting systems to raise humidity levels',
        priority: 'medium'
      });
    }

    // Soil moisture recommendations
    if (envData.soil_moisture.current < 35) {
      recs.push({
        type: 'Irrigation',
        message: 'Immediate irrigation needed - soil moisture is critically low',
        priority: 'high'
      });
    } else if (envData.soil_moisture.current > 70) {
      recs.push({
        type: 'Drainage',
        message: 'Improve drainage to prevent waterlogging and root rot',
        priority: 'high'
      });
    }

    // Cloud cover recommendations
    if (envData.cloudy.current < 10) {
      recs.push({
        type: 'Cloud Cover Management',
        message: 'Very low cloud cover - risk of high evaporation, consider mulching',
        priority: 'medium'
      });
    } else if (envData.cloudy.current > 70) {
      recs.push({
        type: 'Cloud Cover Management',
        message: 'High cloud cover - may reduce photosynthesis, monitor crop growth',
        priority: 'low'
      });
    }

    setRecommendations(recs);
  };

  const getStatusClass = (value, optimal) => {
    if (value >= optimal.min && value <= optimal.max) return 'status-optimal';
    if (value >= optimal.min - 5 && value <= optimal.max + 5) return 'status-moderate';
    return 'status-poor';
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return '';
    }
  };

  return (
    <div className="environmental-monitoring">
      <div className="container">
        <div className="page-header">
          <h1>Environmental Monitoring</h1>
          <p>Monitor and analyze environmental conditions for optimal crop growth</p>
        </div>

        <div className="environmental-form-section">
          <div className="card">
            <h2>Check Environmental Conditions</h2>
            
            {error && <div className="alert alert-error">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter city name"
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="soilMoisture">Soil Moisture (%)</label>
                <input
                  type="number"
                  id="soilMoisture"
                  value={formData.soilMoisture}
                  onChange={handleInputChange}
                  placeholder="Enter soil moisture percentage (0-100)"
                  min="0"
                  max="100"
                  step="0.1"
                  disabled={isLoading}
                />
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Check Conditions'}
              </button>
            </form>
          </div>
        </div>

        {environmentalData && (
          <div className="environmental-results">
            <div className="card">
              <h2>Current Environmental Conditions</h2>
              
              <div className="environmental-metrics">
                <div className={`metric-card ${getStatusClass(environmentalData.temperature.current, environmentalData.temperature.optimal)}`}>
                  <div className="metric-icon">🌡️</div>
                  <div className="metric-value">
                    {environmentalData.temperature.current}°C
                    <span className="metric-optimal">
                      (Optimal: {environmentalData.temperature.optimal.min}°-{environmentalData.temperature.optimal.max}°)
                    </span>
                  </div>
                  <div className="metric-label">Temperature</div>
                </div>
                
                <div className={`metric-card ${getStatusClass(environmentalData.humidity.current, environmentalData.humidity.optimal)}`}>
                  <div className="metric-icon">💧</div>
                  <div className="metric-value">
                    {environmentalData.humidity.current}%
                    <span className="metric-optimal">
                      (Optimal: {environmentalData.humidity.optimal.min}%-{environmentalData.humidity.optimal.max}%)
                    </span>
                  </div>
                  <div className="metric-label">Humidity</div>
                </div>
                
                <div className={`metric-card ${getStatusClass(environmentalData.soil_moisture.current, environmentalData.soil_moisture.optimal)}`}>
                  <div className="metric-icon">🌱</div>
                  <div className="metric-value">
                    {environmentalData.soil_moisture.current}%
                    <span className="metric-optimal">
                      (Optimal: {environmentalData.soil_moisture.optimal.min}%-{environmentalData.soil_moisture.optimal.max}%)
                    </span>
                  </div>
                  <div className="metric-label">Soil Moisture</div>
                </div>
                
                <div className={`metric-card ${getStatusClass(environmentalData.cloudy.current, environmentalData.cloudy.optimal)}`}>
                  <div className="metric-icon">☁️</div>
                  <div className="metric-value">
                    {environmentalData.cloudy.current}%
                    <span className="metric-optimal">
                      (Optimal: {environmentalData.cloudy.optimal.min}%-{environmentalData.cloudy.optimal.max}%)
                    </span>
                  </div>
                  <div className="metric-label">Cloud Cover</div>
                </div>
              </div>
            </div>
            
            {recommendations.length > 0 && (
              <div className="recommendations">
                <h3>Recommendations</h3>
                <div className="recommendations-grid">
                  {recommendations.map((rec, index) => (
                    <div key={index} className={`recommendation-card ${getPriorityClass(rec.priority)}`}>
                      <div className="recommendation-type">{rec.type}</div>
                      <div className="recommendation-message">{rec.message}</div>
                      <div className="recommendation-priority">
                        Priority: <span className={`priority-${rec.priority}`}>{rec.priority}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnvironmentalMonitoring;

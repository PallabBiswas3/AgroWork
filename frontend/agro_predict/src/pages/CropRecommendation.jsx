import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './CropRecommendation.css';

const CROP_DATABASE = {
    rice: {
        name: "Rice",
        description: "Primary cereal crop, requires high water availability",
        optimal_conditions: "High rainfall, warm temperature, acidic to neutral soil",
        season: "Kharif, Rabi",
        tips: "Ensure proper water management and soil preparation"
    },
    maize: {
        name: "Maize (Corn)",
        description: "Versatile cereal crop, good for fodder and food",
        optimal_conditions: "Moderate rainfall, warm temperature, well-drained soil",
        season: "Kharif, Rabi",
        tips: "Plant after last frost, ensure good drainage"
    },
    cotton: {
        name: "Cotton",
        description: "Important cash crop for textile industry",
        optimal_conditions: "Moderate rainfall, high temperature, alkaline soil",
        season: "Kharif",
        tips: "Requires warm weather and pest management"
    },
    wheat: {
        name: "Wheat",
        description: "Major food grain crop, winter staple",
        optimal_conditions: "Low to moderate rainfall, cool temperature",
        season: "Rabi",
        tips: "Plant in winter, harvest before summer heat"
    },
    sugarcane: {
        name: "Sugarcane",
        description: "Cash crop for sugar production",
        optimal_conditions: "High rainfall, high temperature, rich soil",
        season: "Whole Year",
        tips: "Requires abundant water and fertile soil"
    },
    groundnut: {
        name: "Groundnut (Peanut)",
        description: "Oilseed and protein rich legume",
        optimal_conditions: "Moderate rainfall, warm temperature, sandy soil",
        season: "Kharif, Rabi",
        tips: "Avoid waterlogged conditions, ensure calcium availability"
    },
    jute: {
        name: "Jute",
        description: "Fiber crop for making sacks and ropes",
        optimal_conditions: "High rainfall, high humidity, alluvial soil",
        season: "Kharif",
        tips: "Requires warm, humid climate and fertile soil"
    },
    lentil: {
        name: "Lentil",
        description: "Protein-rich pulse crop",
        optimal_conditions: "Low rainfall, cool temperature, alkaline soil",
        season: "Rabi",
        tips: "Drought tolerant, good for crop rotation"
    },
    chickpea: {
        name: "Chickpea",
        description: "Important pulse crop, high protein",
        optimal_conditions: "Low rainfall, cool temperature, well-drained soil",
        season: "Rabi",
        tips: "Avoid excess moisture, plant in winter"
    },
    coconut: {
        name: "Coconut",
        description: "Tropical tree crop, multiple uses",
        optimal_conditions: "High rainfall, high humidity, coastal areas",
        season: "Whole Year",
        tips: "Requires coastal climate and regular watering"
    },
    coffee: {
        name: "Coffee",
        description: "Cash crop, beverage plant",
        optimal_conditions: "High rainfall, moderate temperature, acidic soil",
        season: "Whole Year",
        tips: "Shade-loving crop, requires processing facilities"
    },
    papaya: {
        name: "Papaya",
        description: "Fruit crop, year-round production",
        optimal_conditions: "Moderate rainfall, warm temperature, well-drained soil",
        season: "Whole Year",
        tips: "Fast growing, requires protection from strong winds"
    },
    mothbeans: {
        name: "Moth Beans",
        description: "Drought-resistant legume crop",
        optimal_conditions: "Low rainfall, high temperature, sandy soil",
        season: "Kharif",
        tips: "Extremely drought tolerant, good for arid regions"
    },
    pigeonpeas: {
        name: "Pigeon Peas",
        description: "Perennial legume, soil improvement",
        optimal_conditions: "Moderate rainfall, warm temperature",
        season: "Kharif",
        tips: "Good for intercropping, improves soil fertility"
    },
    mungbean: {
        name: "Mung Bean",
        description: "Short duration pulse crop",
        optimal_conditions: "Moderate rainfall, warm temperature",
        season: "Kharif, Summer",
        tips: "Fast growing, good for crop rotation"
    }
};

const DEFAULT_VALUES = {
    N: 50,
    P: 53,
    K: 48,
    temperature: 26,
    humidity: 71,
    ph: 6.5,
    rainfall: 103
};

const CLIMATE_ZONES = {
    tropical: { temp_min: 25, temp_max: 35, rainfall_min: 200 },
    subtropical: { temp_min: 15, temp_max: 30, rainfall_min: 50 },
    temperate: { temp_min: 10, temp_max: 25, rainfall_min: 30 },
    arid: { temp_min: 20, temp_max: 40, rainfall_max: 100 }
};

function getClimateZone(temperature, rainfall) {
  if (temperature >= CLIMATE_ZONES.tropical.temp_min && temperature <= CLIMATE_ZONES.tropical.temp_max && rainfall >= CLIMATE_ZONES.tropical.rainfall_min) {
    return { zone: 'Tropical', description: 'High temperature, high rainfall - Ideal for rice, sugarcane, coconut' };
  } else if (temperature >= CLIMATE_ZONES.arid.temp_min && temperature <= CLIMATE_ZONES.arid.temp_max && rainfall <= (CLIMATE_ZONES.arid.rainfall_max || 100)) {
    return { zone: 'Arid', description: 'Hot and dry - Suitable for drought-resistant crops like moth beans' };
  } else if (temperature >= CLIMATE_ZONES.temperate.temp_min && temperature <= CLIMATE_ZONES.temperate.temp_max) {
    return { zone: 'Temperate', description: 'Cool temperature - Ideal for wheat, chickpea, lentil' };
  }
  return { zone: 'Subtropical', description: 'Moderate temperature - Good for diverse crops like maize, cotton' };
}

function generateRecommendations(formData) {
  const { N, P, K, temperature, humidity, ph, rainfall, season } = formData;
  const crops = [];
  if (N || P || K || temperature || humidity || ph || rainfall) {
    if (rainfall > 150 && ph < 6.5) {
      crops.push({ crop: 'rice', confidence: 95, reason: 'High rainfall + acidic soil' });
      crops.push({ crop: 'coconut', confidence: 90, reason: 'High rainfall + acidic soil' });
    }
    if (rainfall < 100 && ph > 7.5) {
      crops.push({ crop: 'lentil', confidence: 92, reason: 'Low rainfall + alkaline soil' });
      crops.push({ crop: 'mothbeans', confidence: 88, reason: 'Low rainfall + alkaline soil' });
      crops.push({ crop: 'chickpea', confidence: 85, reason: 'Low rainfall + alkaline soil' });
    }
    if (N > 70 && P > 50 && K > 50) {
      crops.push({ crop: 'jute', confidence: 89, reason: 'High NPK + moderate conditions' });
      crops.push({ crop: 'papaya', confidence: 86, reason: 'High NPK + moderate conditions' });
      crops.push({ crop: 'coffee', confidence: 83, reason: 'High NPK + moderate conditions' });
    }
    if (season === 'Rabi') {
      crops.push({ crop: 'wheat', confidence: 87, reason: 'Rabi season crop' });
      crops.push({ crop: 'chickpea', confidence: 84, reason: 'Rabi season crop' });
      crops.push({ crop: 'lentil', confidence: 82, reason: 'Rabi season crop' });
    }
    if (season === 'Kharif') {
      crops.push({ crop: 'rice', confidence: 90, reason: 'Kharif season crop' });
      crops.push({ crop: 'cotton', confidence: 86, reason: 'Kharif season crop' });
      crops.push({ crop: 'maize', confidence: 84, reason: 'Kharif season crop' });
    }
    if (humidity > 80) {
      crops.push({ crop: 'jute', confidence: 85, reason: 'High humidity' });
    }
    if (temperature > 30) {
      crops.push({ crop: 'cotton', confidence: 82, reason: 'High temperature' });
      crops.push({ crop: 'mothbeans', confidence: 80, reason: 'High temperature' });
    }
    if (temperature < 20) {
      crops.push({ crop: 'wheat', confidence: 88, reason: 'Cool temperature' });
    }
    if (crops.length < 3) {
      crops.push({ crop: 'maize', confidence: 80, reason: 'Balanced conditions' });
      crops.push({ crop: 'cotton', confidence: 78, reason: 'Balanced conditions' });
      crops.push({ crop: 'sugarcane', confidence: 75, reason: 'Balanced conditions' });
      crops.push({ crop: 'groundnut', confidence: 73, reason: 'Balanced conditions' });
      crops.push({ crop: 'rice', confidence: 70, reason: 'Common staple crop' });
    }
  }
  const uniqueCrops = [];
  const seen = new Set();
  crops.forEach(item => {
    if (!seen.has(item.crop) && CROP_DATABASE[item.crop]) {
      seen.add(item.crop);
      uniqueCrops.push(item);
    }
  });
  uniqueCrops.sort((a, b) => b.confidence - a.confidence);
  return uniqueCrops.slice(0, 5).map(item => {
    const cropData = CROP_DATABASE[item.crop];
    return {
      name: cropData.name,
      description: cropData.description,
      season: cropData.season,
      tips: cropData.tips,
      confidence: item.confidence,
      confidenceLevel: item.confidence >= 85 ? 'high' : item.confidence >= 70 ? 'medium' : 'low',
      reason: item.reason
    };
  });
}

function CropRecommendation() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ ...DEFAULT_VALUES, season: 'Kharif', state: 'Maharashtra' });
  const [recommendations, setRecommendations] = useState(() => generateRecommendations({ ...DEFAULT_VALUES, season: 'Kharif', state: 'Maharashtra' }));
  const [showExport, setShowExport] = useState(false);
  const exportTextRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updated = { ...prev, [name]: name === 'ph' || name === 'temperature' || name === 'humidity' || name === 'rainfall' ? parseFloat(value) : name === 'N' || name === 'P' || name === 'K' ? parseInt(value) : value };
      setRecommendations(generateRecommendations(updated));
      return updated;
    });
  };

  const handleUseDefaults = () => {
    setFormData({ ...DEFAULT_VALUES, season: 'Kharif', state: 'Maharashtra' });
    setRecommendations(generateRecommendations({ ...DEFAULT_VALUES, season: 'Kharif', state: 'Maharashtra' }));
  };

  const handleReset = () => {
    setFormData({ N: 50, P: 53, K: 48, temperature: 26, humidity: 71, ph: 6.5, rainfall: 103, season: '', state: '' });
    setRecommendations([]);
  };

  const handleExport = () => setShowExport(true);
  const handleCloseExport = () => setShowExport(false);

  const handleCopy = async () => {
    if (exportTextRef.current) {
      await navigator.clipboard.writeText(exportTextRef.current.value);
    }
  };

  const handleDownload = () => {
    if (exportTextRef.current) {
      const blob = new Blob([exportTextRef.current.value], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `crop-recommendations-${new Date().toISOString().split('T')[0]}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      setShowExport(false);
    }
  };

  const exportText = () => {
    const timestamp = new Date().toLocaleString();
    let text = `SMART CROP RECOMMENDATION REPORT\n`;
    text += `Generated on: ${timestamp}\n`;
    text += `${'='.repeat(50)}\n\n`;
    text += `INPUT PARAMETERS:\n`;
    text += `- Nitrogen (N): ${formData.N} ppm\n`;
    text += `- Phosphorus (P): ${formData.P} ppm\n`;
    text += `- Potassium (K): ${formData.K} ppm\n`;
    text += `- Temperature: ${formData.temperature}°C\n`;
    text += `- Humidity: ${formData.humidity}%\n`;
    text += `- Soil pH: ${formData.ph}\n`;
    text += `- Rainfall: ${formData.rainfall} mm\n`;
    text += `- Season: ${formData.season || 'Not specified'}\n`;
    text += `- State: ${formData.state || 'Not specified'}\n\n`;
    text += `TOP CROP RECOMMENDATIONS:\n`;
    text += `${'-'.repeat(30)}\n`;
    recommendations.forEach((rec, index) => {
      text += `${index + 1}. ${rec.name} (${rec.confidence}% confidence)\n`;
      text += `   Description: ${rec.description}\n`;
      text += `   Season: ${rec.season}\n`;
      text += `   Tips: ${rec.tips}\n\n`;
    });
    text += `\nDISCLAIMER:\n`;
    text += `These recommendations are based on agricultural analysis and should be\n`;
    text += `considered alongside local conditions, expert advice, and market factors.\n`;
    return text;
  };

  const { zone, description } = getClimateZone(formData.temperature, formData.rainfall);

  return (
    <div className="container crop-recommendation-container">
      <header className="header">
        <div className="header-content">
          <h1>🌾 Smart Crop Recommendation System</h1>
          <p>Make data-driven planting decisions with advanced agricultural insights</p>
          <button className="btn btn--outline btn--sm" onClick={() => navigate('/home')} style={{marginTop: '1rem'}}>
            ← Back to Home
          </button>
        </div>
      </header>
      <div className="main-content">
        <div className="input-section">
          <div className="card">
            <div className="card__header">
              <h2>Agricultural Parameters</h2>
              <div className="form-actions">
                <button type="button" className="btn btn--secondary btn--sm" onClick={handleUseDefaults}>Use Default Values</button>
                <button type="button" className="btn btn--outline btn--sm" onClick={handleReset}>Reset Form</button>
              </div>
            </div>
            <div className="card__body">
              <form id="cropForm" onSubmit={e => e.preventDefault()}>
                {/* Soil Nutrients Section */}
                <div className="form-section">
                  <h3>Soil Nutrients</h3>
                  <div className="nutrient-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="nitrogen">Nitrogen (N)</label>
                      <input type="range" id="nitrogen" name="N" min="0" max="200" value={formData.N} className="slider" onChange={handleInputChange} />
                      <div className="slider-value"><span>{formData.N}</span> ppm</div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phosphorus">Phosphorus (P)</label>
                      <input type="range" id="phosphorus" name="P" min="0" max="200" value={formData.P} className="slider" onChange={handleInputChange} />
                      <div className="slider-value"><span>{formData.P}</span> ppm</div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="potassium">Potassium (K)</label>
                      <input type="range" id="potassium" name="K" min="0" max="200" value={formData.K} className="slider" onChange={handleInputChange} />
                      <div className="slider-value"><span>{formData.K}</span> ppm</div>
                    </div>
                  </div>
                </div>
                {/* Environmental Conditions Section */}
                <div className="form-section">
                  <h3>Environmental Conditions</h3>
                  <div className="environmental-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="temperature">Temperature</label>
                      <input type="number" id="temperature" name="temperature" min="0" max="50" value={formData.temperature} className="form-control" onChange={handleInputChange} />
                      <small>°C</small>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="humidity">Humidity</label>
                      <input type="number" id="humidity" name="humidity" min="0" max="100" value={formData.humidity} className="form-control" onChange={handleInputChange} />
                      <small>%</small>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="ph">Soil pH</label>
                      <input type="number" id="ph" name="ph" min="3" max="10" step="0.1" value={formData.ph} className="form-control" onChange={handleInputChange} />
                      <small>pH scale</small>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="rainfall">Rainfall</label>
                      <input type="number" id="rainfall" name="rainfall" min="0" max="500" value={formData.rainfall} className="form-control" onChange={handleInputChange} />
                      <small>mm</small>
                    </div>
                  </div>
                </div>
                {/* Location and Timing Section */}
                <div className="form-section">
                  <h3>Location & Timing</h3>
                  <div className="location-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="season">Season</label>
                      <select id="season" name="season" className="form-control" value={formData.season} onChange={handleInputChange}>
                        <option value="">Select Season</option>
                        <option value="Kharif">Kharif (Monsoon)</option>
                        <option value="Rabi">Rabi (Winter)</option>
                        <option value="Whole Year">Whole Year</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="state">State</label>
                      <select id="state" name="state" className="form-control" value={formData.state} onChange={handleInputChange}>
                        <option value="">Select State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Climate Zone Indicator */}
          <div className="climate-zone card">
            <div className="card__body">
              <h3>🌡️ Climate Zone</h3>
              <div className="climate-info">
                <span className="climate-badge">{zone}</span>
                <span style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 4 }}>{description}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Results Section */}
        <div className="results-section">
          {/* Input Summary */}
          <div className="card input-summary">
            <div className="card__header">
              <h3>📊 Input Summary</h3>
            </div>
            <div className="card__body">
              <div className="summary-grid">
                <div className="summary-item"><div className="summary-label">Nitrogen</div><div className="summary-value">{formData.N} ppm</div></div>
                <div className="summary-item"><div className="summary-label">Phosphorus</div><div className="summary-value">{formData.P} ppm</div></div>
                <div className="summary-item"><div className="summary-label">Potassium</div><div className="summary-value">{formData.K} ppm</div></div>
                <div className="summary-item"><div className="summary-label">Temperature</div><div className="summary-value">{formData.temperature}°C</div></div>
                <div className="summary-item"><div className="summary-label">Humidity</div><div className="summary-value">{formData.humidity}%</div></div>
                <div className="summary-item"><div className="summary-label">pH</div><div className="summary-value">{formData.ph}</div></div>
                <div className="summary-item"><div className="summary-label">Rainfall</div><div className="summary-value">{formData.rainfall} mm</div></div>
                <div className="summary-item"><div className="summary-label">Season</div><div className="summary-value">{formData.season || 'Not set'}</div></div>
              </div>
            </div>
          </div>
          {/* Crop Recommendations */}
          <div className="card recommendations">
            <div className="card__header">
              <h3>🌱 Top Crop Recommendations</h3>
              <button type="button" className="btn btn--outline btn--sm" onClick={handleExport}>Export Results</button>
            </div>
            <div className="card__body">
              <div className="recommendations-grid">
                {recommendations.length === 0 ? (
                  <div className="empty-state"><div>Enter your agricultural parameters to get crop recommendations</div></div>
                ) : (
                  recommendations.map((rec, index) => (
                    <div className="recommendation-item" key={rec.name} style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="recommendation-rank">{index + 1}</div>
                      <div className="recommendation-content">
                        <div className="recommendation-name">{rec.name}</div>
                        <div className="recommendation-description">{rec.description}</div>
                        <div className="recommendation-details">
                          <div className="recommendation-season"><strong>Season:</strong> {rec.season}</div>
                          <div className="recommendation-tips">💡 {rec.tips}</div>
                        </div>
                      </div>
                      <div className="confidence-indicator">
                        <div className="confidence-bar">
                          <div className={`confidence-fill ${rec.confidenceLevel}`} style={{ width: `${rec.confidence}%` }}></div>
                        </div>
                        <div className="confidence-text">{rec.confidence}%</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          {/* Analysis Charts */}
          <div className="card analysis-section">
            <div className="card__header">
              <h3>📈 Agricultural Analysis</h3>
            </div>
            <div className="card__body">
              <div className="charts-grid">
                <div className="chart-item">
                  <h4>Feature Importance</h4>
                  <img src="/feature_importance_crop_recommendation.png" alt="Feature Importance Chart" className="analysis-chart" />
                </div>
                <div className="chart-item">
                  <h4>Model Performance</h4>
                  <img src="/model_performance_comparison.png" alt="Model Performance Chart" className="analysis-chart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Export Modal */}
      {showExport && (
        <div className="modal" style={{ display: 'flex' }}>
          <div className="modal-backdrop" onClick={handleCloseExport}></div>
          <div className="modal-content">
            <div className="modal-header">
              <h3>📋 Export Results</h3>
              <button className="modal-close" onClick={handleCloseExport}>&times;</button>
            </div>
            <div className="modal-body">
              <textarea ref={exportTextRef} className="form-control" rows={10} readOnly value={exportText()} />
            </div>
            <div className="modal-footer">
              <button className="btn btn--outline" onClick={handleCopy}>Copy to Clipboard</button>
              <button className="btn btn--primary" onClick={handleDownload}>Download as Text</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CropRecommendation;
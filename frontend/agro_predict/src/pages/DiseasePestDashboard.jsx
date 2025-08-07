import React, { useState, useRef } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './DiseasePestDashboard.css';

const initialData = {
  diseases: [
    { name: 'Tomato Late Blight', confidence: 94.2, severity: 'High', treatment: 'Copper-based fungicide', organic_option: 'Baking soda spray' },
    { name: 'Apple Scab', confidence: 87.5, severity: 'Medium', treatment: 'Captan fungicide', organic_option: 'Neem oil' },
    { name: 'Corn Rust', confidence: 91.8, severity: 'Medium', treatment: 'Propiconazole', organic_option: 'Trichoderma' },
    { name: 'Wheat Powdery Mildew', confidence: 88.9, severity: 'Low', treatment: 'Tebuconazole', organic_option: 'Milk spray' }
  ],
  pests: [
    { name: 'Aphids', risk_level: 'High', probability: 78, weather_factors: ['High humidity', 'Moderate temperature'], control: 'Insecticidal soap' },
    { name: 'Corn Borer', risk_level: 'Medium', probability: 45, weather_factors: ['Warm nights'], control: 'Bt spray' },
    { name: 'Spider Mites', risk_level: 'Low', probability: 23, weather_factors: ['Hot, dry conditions'], control: 'Predatory mites' }
  ],
  crops: ['Tomato', 'Apple', 'Corn', 'Wheat', 'Potato', 'Soybean', 'Rice', 'Cotton'],
  weather_data: { temperature: 24, humidity: 68, rainfall: 12, wind_speed: 8 },
  pesticides: [
    { name: 'Copper Sulfate', type: 'Fungicide', organic: true, crops: ['Tomato', 'Apple'], application_rate: '2-3 g/L' },
    { name: 'Neem Oil', type: 'Insecticide', organic: true, crops: ['All crops'], application_rate: '5-10 mL/L' },
    { name: 'Captan', type: 'Fungicide', organic: false, crops: ['Apple', 'Grape'], application_rate: '1.5-2 g/L' }
  ]
};

function DiseasePestDashboard() {
  // Navigation between sections
  const [activeSection, setActiveSection] = useState('dashboard');
  // Disease Detection
  const [detectionCount, setDetectionCount] = useState(0);
  const [diseaseResult, setDiseaseResult] = useState(null);
  const [diseaseImage, setDiseaseImage] = useState(null);
  const [loading, setLoading] = useState(false);
  // Pest Prediction
  const [pestForm, setPestForm] = useState({ crop: '', temperature: 24, humidity: 68, rainfall: 12 });
  const [pestResults, setPestResults] = useState([]);
  // Treatments
  const [treatments] = useState(initialData.pesticides);

  // Chart Data
  const pestTrendsData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Aphids',
        data: [65, 78, 82, 75],
        backgroundColor: '#1FB8CD',
        borderColor: '#1FB8CD',
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Corn Borer',
        data: [35, 45, 52, 48],
        backgroundColor: '#FFC185',
        borderColor: '#FFC185',
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Spider Mites',
        data: [15, 23, 28, 25],
        backgroundColor: '#B4413C',
        borderColor: '#B4413C',
        borderWidth: 2,
        fill: false
      }
    ]
  };

  // Disease Detection Handlers
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }
    setLoading(true);
    const reader = new FileReader();
    reader.onload = (ev) => {
      setDiseaseImage(ev.target.result);
      setTimeout(() => {
        // Simulate AI detection
        const randomDisease = initialData.diseases[Math.floor(Math.random() * initialData.diseases.length)];
        setDiseaseResult(randomDisease);
        setDetectionCount((c) => c + 1);
        setLoading(false);
      }, 2000);
    };
    reader.readAsDataURL(file);
  };

  // Pest Prediction Handlers
  const handlePestFormChange = (e) => {
    const { name, value } = e.target;
    setPestForm((prev) => ({ ...prev, [name]: name === 'crop' ? value : parseFloat(value) }));
  };
  const handlePestFormSubmit = (e) => {
    e.preventDefault();
    if (!pestForm.crop) {
      alert('Please select a crop type');
      return;
    }
    // Simulate pest risk calculation
    const risks = initialData.pests.map((pest) => {
      let riskMultiplier = 1;
      if (pest.name === 'Aphids') riskMultiplier = pestForm.humidity > 60 ? 1.3 : 0.8;
      else if (pest.name === 'Spider Mites') riskMultiplier = (pestForm.temperature > 25 && pestForm.humidity < 50) ? 1.5 : 0.6;
      else if (pest.name === 'Corn Borer') riskMultiplier = pestForm.temperature > 20 ? 1.2 : 0.7;
      const adjustedProbability = Math.min(100, Math.max(0, pest.probability * riskMultiplier));
      let adjustedRiskLevel = 'Low';
      if (adjustedProbability > 70) adjustedRiskLevel = 'High';
      else if (adjustedProbability > 40) adjustedRiskLevel = 'Medium';
      return {
        ...pest,
        probability: Math.round(adjustedProbability),
        risk_level: adjustedRiskLevel
      };
    });
    setPestResults(risks);
  };

  // Pest Results Chart Data
  const pestBarData = {
    labels: pestResults.map((p) => p.name),
    datasets: [
      {
        label: 'Risk Probability (%)',
        data: pestResults.map((p) => p.probability),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
        borderColor: ['#1FB8CD', '#FFC185', '#B4413C'],
        borderWidth: 1
      }
    ]
  };

  // Quick Stats
  const highRiskCount = pestResults.filter((p) => p.risk_level === 'High').length;

  return (
    <div className="container disease-pest-dashboard-container">
      <header className="header">
        <div className="header-content">
          <h1>🌱 Disease & Pest Management Dashboard</h1>
          <p>Monitor crop health, predict pest outbreaks, and manage treatments</p>
        </div>
        <nav className="dashboard-nav">
          <button className={activeSection === 'dashboard' ? 'active' : ''} onClick={() => setActiveSection('dashboard')}>Dashboard</button>
          <button className={activeSection === 'disease' ? 'active' : ''} onClick={() => setActiveSection('disease')}>Disease Detection</button>
          <button className={activeSection === 'pest' ? 'active' : ''} onClick={() => setActiveSection('pest')}>Pest Prediction</button>
          <button className={activeSection === 'treatments' ? 'active' : ''} onClick={() => setActiveSection('treatments')}>Treatments</button>
        </nav>
      </header>
      <main className="main">
        <div className="layout">
          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar__section">
              <h3>Quick Stats</h3>
              <div className="stat-card">
                <div className="stat-card__icon">🔍</div>
                <div className="stat-card__content">
                  <div className="stat-card__value">{detectionCount}</div>
                  <div className="stat-card__label">Detections Today</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-card__icon">⚠️</div>
                <div className="stat-card__content">
                  <div className="stat-card__value">{highRiskCount}</div>
                  <div className="stat-card__label">High Risk Pests</div>
                </div>
              </div>
            </div>
            <div className="sidebar__section">
              <h3>Weather Conditions</h3>
              <div className="weather-summary">
                <div className="weather-item">
                  <span className="weather-label">Temperature:</span>
                  <span className="weather-value">{pestForm.temperature}°C</span>
                </div>
                <div className="weather-item">
                  <span className="weather-label">Humidity:</span>
                  <span className="weather-value">{pestForm.humidity}%</span>
                </div>
                <div className="weather-item">
                  <span className="weather-label">Rainfall:</span>
                  <span className="weather-value">{pestForm.rainfall}mm</span>
                </div>
              </div>
            </div>
          </aside>
          {/* Content Area */}
          <div className="content">
            {/* Dashboard Section */}
            {activeSection === 'dashboard' && (
              <section className="section section--active">
                <div className="section__header">
                  <h2>Agricultural Management Dashboard</h2>
                  <p>Monitor crop health, predict pest outbreaks, and manage treatments</p>
                </div>
                <div className="dashboard-grid">
                  <div className="card dashboard-card">
                    <div className="card__body">
                      <h3>Disease Detection</h3>
                      <p>Upload plant images for AI-powered disease identification</p>
                      <button className="btn btn--primary" onClick={() => setActiveSection('disease')}>Start Detection</button>
                    </div>
                  </div>
                  <div className="card dashboard-card">
                    <div className="card__body">
                      <h3>Pest Risk Assessment</h3>
                      <p>Analyze weather data to predict pest outbreaks</p>
                      <button className="btn btn--primary" onClick={() => setActiveSection('pest')}>Check Risk</button>
                    </div>
                  </div>
                  <div className="card dashboard-card">
                    <div className="card__body">
                      <h3>Treatment Plans</h3>
                      <p>Get customized pesticide and treatment recommendations</p>
                      <button className="btn btn--primary" onClick={() => setActiveSection('treatments')}>View Treatments</button>
                    </div>
                  </div>
                </div>
                <div className="chart-container">
                  <div className="card">
                    <div className="card__header">
                      <h3>Pest Risk Trends</h3>
                    </div>
                    <div className="card__body">
                      <div className="chart-wrapper" style={{ position: 'relative', height: 300 }}>
                        <Line data={pestTrendsData} options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: { display: true, position: 'top' },
                            title: { display: true, text: 'Pest Risk Trends Over Time' }
                          },
                          scales: {
                            y: { beginAtZero: true, max: 100, title: { display: true, text: 'Risk Probability (%)' } },
                            x: { title: { display: true, text: 'Time Period' } }
                          }
                        }} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            {/* Disease Detection Section */}
            {activeSection === 'disease' && (
              <section className="section section--active">
                <div className="section__header">
                  <h2>Plant Disease Detection</h2>
                  <p>Upload plant images for AI-powered disease identification</p>
                </div>
                <div className="upload-section">
                  <div className="card">
                    <div className="card__body">
                      <div className="upload-area">
                        <div className="upload-placeholder">
                          <div className="upload-icon">📸</div>
                          <h3>Drop your plant image here</h3>
                          <p>
                            or <label className="upload-button" style={{ cursor: 'pointer', color: '#1FB8CD' }}>
                              browse files
                              <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
                            </label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {loading && (
                  <div className="modal" style={{ display: 'flex' }}>
                    <div className="modal__overlay"></div>
                    <div className="modal__content">
                      <div className="loading-spinner"></div>
                      <h3>Analyzing Image...</h3>
                      <p>Our AI is detecting diseases in your plant image</p>
                    </div>
                  </div>
                )}
                {diseaseResult && (
                  <div className="results-section">
                    <div className="card">
                      <div className="card__header">
                        <h3>Detection Results</h3>
                      </div>
                      <div className="card__body">
                        <div className="results-grid">
                          <div className="image-preview">
                            {diseaseImage && <img src={diseaseImage} alt="Uploaded plant" />}
                          </div>
                          <div className="detection-info">
                            <div className="disease-result">
                              <h4>{diseaseResult.name}</h4>
                              <div className="confidence-bar">
                                <div className="confidence-fill" style={{ width: `${diseaseResult.confidence}%` }}></div>
                                <span className="confidence-text">{diseaseResult.confidence}%</span>
                              </div>
                              <div className="severity-badge">
                                <span className={`status status--${diseaseResult.severity.toLowerCase()}`}>{diseaseResult.severity}</span>
                              </div>
                            </div>
                            <div className="treatment-preview">
                              <h5>Recommended Treatment:</h5>
                              <p>Chemical: {diseaseResult.treatment}. Organic: {diseaseResult.organic_option}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            )}
            {/* Pest Prediction Section */}
            {activeSection === 'pest' && (
              <section className="section section--active">
                <div className="section__header">
                  <h2>Pest Risk Prediction</h2>
                  <p>Analyze environmental conditions to predict pest outbreaks</p>
                </div>
                <div className="prediction-form">
                  <div className="card">
                    <div className="card__header">
                      <h3>Environmental Data Input</h3>
                    </div>
                    <div className="card__body">
                      <form onSubmit={handlePestFormSubmit}>
                        <div className="form-grid">
                          <div className="form-group">
                            <label className="form-label" htmlFor="crop-type">Crop Type</label>
                            <select className="form-control" id="crop-type" name="crop" value={pestForm.crop} onChange={handlePestFormChange}>
                              <option value="">Select crop type</option>
                              {initialData.crops.map((crop) => (
                                <option key={crop} value={crop}>{crop}</option>
                              ))}
                            </select>
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="temperature">Temperature (°C)</label>
                            <input type="number" className="form-control" id="temperature" name="temperature" min="0" max="50" value={pestForm.temperature} onChange={handlePestFormChange} />
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="humidity">Humidity (%)</label>
                            <input type="number" className="form-control" id="humidity" name="humidity" min="0" max="100" value={pestForm.humidity} onChange={handlePestFormChange} />
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="rainfall">Rainfall (mm)</label>
                            <input type="number" className="form-control" id="rainfall" name="rainfall" min="0" max="500" value={pestForm.rainfall} onChange={handlePestFormChange} />
                          </div>
                        </div>
                        <button type="submit" className="btn btn--primary btn--full-width">Analyze Pest Risk</button>
                      </form>
                    </div>
                  </div>
                </div>
                {pestResults.length > 0 && (
                  <div className="pest-results">
                    <div className="card">
                      <div className="card__header">
                        <h3>Pest Risk Assessment</h3>
                      </div>
                      <div className="card__body">
                        <div>
                          {pestResults.map((pest) => (
                            <div key={pest.name} className={`pest-risk-item pest-risk-item--${pest.risk_level.toLowerCase()}`}>
                              <div className="pest-info">
                                <h4>{pest.name}</h4>
                                <p>{pest.weather_factors.join(', ')}</p>
                                <p><strong>Control:</strong> {pest.control}</p>
                              </div>
                              <div className="pest-probability">
                                <div className="probability-value">{pest.probability}%</div>
                                <div className="probability-label">{pest.risk_level} Risk</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="chart-wrapper" style={{ position: 'relative', height: 300, marginTop: 20 }}>
                          <Bar data={pestBarData} options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                              legend: { display: false },
                              title: { display: true, text: 'Current Pest Risk Assessment' }
                            },
                            scales: {
                              y: { beginAtZero: true, max: 100, title: { display: true, text: 'Probability (%)' } }
                            }
                          }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            )}
            {/* Treatments Section */}
            {activeSection === 'treatments' && (
              <section className="section section--active">
                <div className="section__header">
                  <h2>Treatment Recommendations</h2>
                  <p>Comprehensive pesticide and organic treatment options</p>
                </div>
                <div className="treatments-grid">
                  {treatments.map((pesticide) => (
                    <div className="treatment-card" key={pesticide.name}>
                      <div className="treatment-header">
                        <h3>{pesticide.name}</h3>
                        <div className="treatment-type">{pesticide.type}</div>
                        {pesticide.organic && <span className="organic-badge">Organic</span>}
                      </div>
                      <div className="treatment-body">
                        <div className="treatment-detail">
                          <strong>Application Rate:</strong>
                          <span>{pesticide.application_rate}</span>
                        </div>
                        <div className="treatment-detail">
                          <strong>Suitable Crops:</strong>
                          <span>{pesticide.crops.join(', ')}</span>
                        </div>
                        <div className="treatment-detail">
                          <strong>Type:</strong>
                          <span>{pesticide.type}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default DiseasePestDashboard;
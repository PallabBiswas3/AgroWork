import React, { useState, useEffect } from 'react';
import './SoilAnalysis.css';
import { useNavigate } from 'react-router-dom';
import SoilAnalysisEngine from '../data/soilAnalysis';

const SoilAnalysis = () => {
  const navigate = useNavigate();
  const [analysisEngine] = useState(new SoilAnalysisEngine());

  const [formData, setFormData] = useState({
    nitrogen: '50',
    phosphorus: '25',
    potassium: '40',
    ph: '6.5',
    electricalConductivity: '0.8',
    organicCarbon: '0.75',
    temperature: '25',
    humidity: '65',
    landArea: '1' // Added land area for cost calculations
  });

  const [analysisResults, setAnalysisResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState('parameters');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnalyzing(true);

    // Simulate analysis time for better UX
    setTimeout(() => {
      const results = analysisEngine.generateDetailedReport(formData);
      results.costBenefit = analysisEngine.calculateCostBenefit(
        results.recommendations,
        parseFloat(formData.landArea) || 1
      );
      setAnalysisResults(results);
      setIsAnalyzing(false);
      setActiveTab('results');
    }, 2000);
  };

  const downloadReport = () => {
    if (!analysisResults) return;

    const reportData = {
      timestamp: new Date().toISOString(),
      farmDetails: { landArea: formData.landArea },
      soilParameters: formData,
      analysis: analysisResults
    };

    const dataStr = JSON.stringify(reportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileDefaultName = `soil-analysis-report-${Date.now()}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  // Icon components using SVG instead of react-icons
  const ArrowLeftIcon = () => (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );

  const DownloadIcon = () => (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );

  const LeafIcon = () => (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );

  const TargetIcon = () => (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );

  const DropletIcon = () => (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );

  const BarChartIcon = () => (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  );

  const ThermometerIcon = () => (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  );

  const InfoIcon = () => (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );

  const AlertCircleIcon = () => (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22,4 12,14.01 9,11.01" />
    </svg>
  );

  const DollarSignIcon = () => (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );

  const CalendarIcon = () => (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );

  const TrendingUpIcon = () => (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
      <polyline points="16,7 22,7 22,13" />
    </svg>
  );

  const getParameterIcon = (param) => {
    const icons = {
      nitrogen: <LeafIcon />,
      phosphorus: <TargetIcon />,
      potassium: <DropletIcon />,
      ph: <BarChartIcon />,
      electricalConductivity: <ThermometerIcon />,
      organicCarbon: <LeafIcon />
    };
    return icons[param] || <InfoIcon />;
  };

  const getPriorityIcon = (priority) => {
    const icons = {
      high: <AlertCircleIcon />,
      medium: <InfoIcon />,
      low: <CheckCircleIcon />
    };
    return icons[priority] || icons.medium;
  };

  return (
    <div className="soil-analysis-container">
      {/* Header */}
      <div className="analysis-header">
        <button className="btn btn--outline btn--back" onClick={() => navigate('/')}>
          <ArrowLeftIcon /> Back to Dashboard
        </button>
        <div className="header-content">
          <h1>🌱 Professional Soil Analysis</h1>
          <p>Advanced soil fertility assessment with AI-powered recommendations</p>
        </div>
        {analysisResults && (
          <button className="btn btn--secondary" onClick={downloadReport}>
            <DownloadIcon /> Download Report
          </button>
        )}
      </div>

      {/* Navigation Tabs */}
      <div className="tab-navigation">
        <button
          className={`tab-btn ${activeTab === 'parameters' ? 'active' : ''}`}
          onClick={() => setActiveTab('parameters')}
        >
          📊 Parameters
        </button>
        <button
          className={`tab-btn ${activeTab === 'results' ? 'active' : ''}`}
          onClick={() => setActiveTab('results')}
          disabled={!analysisResults}
        >
          📈 Results
        </button>
        <button
          className={`tab-btn ${activeTab === 'recommendations' ? 'active' : ''}`}
          onClick={() => setActiveTab('recommendations')}
          disabled={!analysisResults}
        >
          💡 Recommendations
        </button>
        <button
          className={`tab-btn ${activeTab === 'economics' ? 'active' : ''}`}
          onClick={() => setActiveTab('economics')}
          disabled={!analysisResults}
        >
          💰 Economics
        </button>
      </div>

      {/* Parameters Tab */}
      {activeTab === 'parameters' && (
        <section className="parameters-section">
          <div className="card">
            <div className="card__header">
              <h3>🧪 Soil Testing Parameters</h3>
            </div>
            <div className="card__body">
              <form className="analysis-form" onSubmit={handleSubmit}>
                {/* Primary Nutrients */}
                <div className="form-section">
                  <h4>🌿 Primary Nutrients</h4>
                  <div className="form-grid">
                    <div className="form-group enhanced">
                      <label className="form-label">
                        <LeafIcon />
                        Nitrogen (N)
                      </label>
                      <input
                        type="number"
                        id="nitrogen"
                        value={formData.nitrogen}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter value"
                        step="0.1"
                        min="0"
                      />
                      <span className="form-hint">kg/ha - Essential for protein synthesis</span>
                    </div>

                    <div className="form-group enhanced">
                      <label className="form-label">
                        <TargetIcon />
                        Phosphorus (P)
                      </label>
                      <input
                        type="number"
                        id="phosphorus"
                        value={formData.phosphorus}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter value"
                        step="0.1"
                        min="0"
                      />
                      <span className="form-hint">kg/ha - Root development & flowering</span>
                    </div>

                    <div className="form-group enhanced">
                      <label className="form-label">
                        <DropletIcon />
                        Potassium (K)
                      </label>
                      <input
                        type="number"
                        id="potassium"
                        value={formData.potassium}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter value"
                        step="0.1"
                        min="0"
                      />
                      <span className="form-hint">kg/ha - Water regulation & disease resistance</span>
                    </div>
                  </div>
                </div>

                {/* Soil Properties */}
                <div className="form-section">
                  <h4>🏔️ Soil Properties</h4>
                  <div className="form-grid">
                    <div className="form-group enhanced">
                      <label className="form-label">
                        <BarChartIcon />
                        pH Level
                      </label>
                      <input
                        type="number"
                        id="ph"
                        value={formData.ph}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="6.5"
                        step="0.1"
                        min="0"
                        max="14"
                      />
                      <span className="form-hint">Optimal: 6.0-7.5 - Nutrient availability</span>
                    </div>

                    <div className="form-group enhanced">
                      <label className="form-label">
                        <ThermometerIcon />
                        Electrical Conductivity (EC)
                      </label>
                      <input
                        type="number"
                        id="electricalConductivity"
                        value={formData.electricalConductivity}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="0.8"
                        step="0.01"
                        min="0"
                      />
                      <span className="form-hint">dS/m - Salt content indicator</span>
                    </div>

                    <div className="form-group enhanced">
                      <label className="form-label">
                        <LeafIcon />
                        Organic Carbon (OC)
                      </label>
                      <input
                        type="number"
                        id="organicCarbon"
                        value={formData.organicCarbon}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="0.75"
                        step="0.01"
                        min="0"
                      />
                      <span className="form-hint">% - Soil structure & fertility</span>
                    </div>
                  </div>
                </div>

                {/* Environmental Factors */}
                <div className="form-section">
                  <h4>🌤️ Environmental Conditions</h4>
                  <div className="form-grid">
                    <div className="form-group enhanced">
                      <label className="form-label">
                        <ThermometerIcon />
                        Temperature
                      </label>
                      <input
                        type="number"
                        id="temperature"
                        value={formData.temperature}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="25"
                        step="0.1"
                      />
                      <span className="form-hint">°C - Current soil temperature</span>
                    </div>

                    <div className="form-group enhanced">
                      <label className="form-label">
                        <DropletIcon />
                        Humidity
                      </label>
                      <input
                        type="number"
                        id="humidity"
                        value={formData.humidity}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="65"
                        step="1"
                        min="0"
                        max="100"
                      />
                      <span className="form-hint">% - Relative humidity</span>
                    </div>

                    <div className="form-group enhanced">
                      <label className="form-label">
                        <TargetIcon />
                        Land Area
                      </label>
                      <input
                        type="number"
                        id="landArea"
                        value={formData.landArea}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="1"
                        step="0.1"
                        min="0.1"
                      />
                      <span className="form-hint">hectares - For cost calculations</span>
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <button
                    type="submit"
                    className="btn btn--primary btn--large"
                    disabled={isAnalyzing}
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="spinner"></div>
                        Analyzing Soil...
                      </>
                    ) : (
                      <>
                        <BarChartIcon /> Generate Analysis
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Results Tab */}
      {activeTab === 'results' && analysisResults && (
        <section className="results-section">
          {/* Fertility Score Dashboard */}
          <div className="fertility-dashboard">
            <div className="fertility-score-card">
              <div className="score-display">
                <div className={`score-circle ${analysisResults.fertilityScore.classification.label.toLowerCase().replace(' ', '-')}`}>
                  <span className="score-number">{analysisResults.fertilityScore.score}</span>
                  <span className="score-suffix">/100</span>
                </div>
                <div className="score-details">
                  <h3 className="fertility-label">{analysisResults.fertilityScore.classification.label}</h3>
                  <p className="fertility-action">{analysisResults.fertilityScore.classification.action}</p>
                </div>
              </div>
            </div>

            <div className="health-indicators">
              <div className="indicator-card">
                <div className="indicator-icon">🧪</div>
                <div className="indicator-content">
                  <span className="indicator-value">{analysisResults.soilHealthIndex.indicators.chemical}/100</span>
                  <span className="indicator-label">Chemical Health</span>
                </div>
              </div>
              <div className="indicator-card">
                <div className="indicator-icon">🏗️</div>
                <div className="indicator-content">
                  <span className="indicator-value">{analysisResults.soilHealthIndex.indicators.physical}/100</span>
                  <span className="indicator-label">Physical Health</span>
                </div>
              </div>
              <div className="indicator-card">
                <div className="indicator-icon">🦠</div>
                <div className="indicator-content">
                  <span className="indicator-value">{analysisResults.soilHealthIndex.indicators.biological}/100</span>
                  <span className="indicator-label">Biological Health</span>
                </div>
              </div>
            </div>
          </div>

          {/* Parameter Analysis */}
          <div className="parameters-analysis">
            <h3>📊 Parameter Analysis</h3>
            <div className="parameter-cards">
              {Object.entries(analysisResults.analysisData).map(([key, data]) => (
                <div key={key} className={`parameter-card ${data.level?.toLowerCase()}`}>
                  <div className="parameter-header">
                    <div className="parameter-icon-wrapper">
                      {getParameterIcon(key)}
                    </div>
                    <div className="parameter-info">
                      <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                      <span className="parameter-unit">
                        {data.value} {data.unit}
                      </span>
                    </div>
                    <div className={`level-badge ${data.level?.toLowerCase()}`}>
                      {data.level}
                    </div>
                  </div>
                  <div className="parameter-body">
                    <div className="progress-bar">
                      <div
                        className={`progress-fill ${data.level?.toLowerCase()}`}
                        style={{ width: `${data.score}%` }}
                      ></div>
                    </div>
                    <p className="parameter-importance">{data.importance}</p>
                    {data.deficiency_symptoms && (
                      <p className="deficiency-symptoms">
                        <strong>Deficiency signs:</strong> {data.deficiency_symptoms}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recommendations Tab */}
      {activeTab === 'recommendations' && analysisResults && (
        <section className="recommendations-section">
          <div className="section-header">
            <h3>💡 Expert Recommendations</h3>
            <p>Prioritized action plan for optimal soil health</p>
          </div>

          <div className="recommendations-grid">
            {analysisResults.recommendations.map((rec, index) => (
              <div key={index} className={`recommendation-card ${rec.priority}`}>
                <div className="recommendation-header">
                  <div className={`priority-icon-wrapper ${rec.priority}`}>
                    {getPriorityIcon(rec.priority)}
                  </div>
                  <div className="recommendation-meta">
                    <span className={`priority-badge ${rec.priority}`}>
                      {rec.priority.toUpperCase()} PRIORITY
                    </span>
                    <span className="recommendation-type">{rec.type.replace('_', ' ')}</span>
                  </div>
                </div>

                <div className="recommendation-content">
                  <h4 className="recommendation-title">{rec.message}</h4>
                  <p className="recommendation-details">{rec.details}</p>

                  <div className="recommendation-footer">
                    <div className="cost-timeline">
                      {rec.cost > 0 && (
                        <div className="cost-info">
                          <DollarSignIcon />
                          <span>₹{rec.cost.toLocaleString()}</span>
                        </div>
                      )}
                      {rec.timeline && (
                        <div className="timeline-info">
                          <CalendarIcon />
                          <span>{rec.timeline}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Environmental Impact */}
          {analysisResults.environmentalImpact && analysisResults.environmentalImpact.length > 0 && (
            <div className="environmental-impact">
              <h4>🌍 Environmental Considerations</h4>
              <div className="impact-cards">
                {analysisResults.environmentalImpact.map((impact, index) => (
                  <div key={index} className={`impact-card ${impact.level}`}>
                    <div className="impact-header">
                      <span className="impact-factor">{impact.factor}</span>
                      <span className={`impact-level ${impact.level}`}>{impact.level} impact</span>
                    </div>
                    <p className="impact-description">{impact.impact}</p>
                    <p className="impact-recommendation">
                      <strong>Action:</strong> {impact.recommendation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Economics Tab */}
      {activeTab === 'economics' && analysisResults && (
        <section className="economics-section">
          <div className="section-header">
            <h3>💰 Economic Analysis</h3>
            <p>Investment analysis and return projections</p>
          </div>

          <div className="economics-dashboard">
            <div className="cost-benefit-cards">
              <div className="economic-card investment">
                <div className="card-icon">💸</div>
                <div className="card-content">
                  <h4>Total Investment</h4>
                  <span className="economic-value">₹{analysisResults.costBenefit.totalCost.toLocaleString()}</span>
                  <span className="economic-label">for {formData.landArea} hectare(s)</span>
                </div>
              </div>

              <div className="economic-card returns">
                <div className="card-icon">📈</div>
                <div className="card-content">
                  <h4>Expected Returns</h4>
                  <span className="economic-value">₹{analysisResults.costBenefit.expectedReturn.toLocaleString()}</span>
                  <span className="economic-label">annual increase</span>
                </div>
              </div>

              <div className="economic-card roi">
                <div className="card-icon">🎯</div>
                <div className="card-content">
                  <h4>Return on Investment</h4>
                  <span className="economic-value">{analysisResults.costBenefit.roi}x</span>
                  <span className="economic-label">ROI multiplier</span>
                </div>
              </div>

              <div className="economic-card yield">
                <div className="card-icon">🌾</div>
                <div className="card-content">
                  <h4>Yield Increase</h4>
                  <span className="economic-value">{analysisResults.costBenefit.yieldIncrease}%</span>
                  <span className="economic-label">expected improvement</span>
                </div>
              </div>
            </div>

            <div className="payback-analysis">
              <div className="card">
                <div className="card__header">
                  <h4>📊 Investment Timeline</h4>
                </div>
                <div className="card__body">
                  <div className="payback-info">
                    <div className="payback-item">
                      <span className="payback-label">Payback Period:</span>
                      <span className="payback-value">
                        {analysisResults.costBenefit.paybackPeriod} year(s)
                      </span>
                    </div>
                    <div className="payback-item">
                      <span className="payback-label">Break-even Point:</span>
                      <span className="payback-value">
                        Year {Math.ceil(analysisResults.costBenefit.paybackPeriod)}
                      </span>
                    </div>
                  </div>

                  <div className="investment-recommendation">
                    {analysisResults.costBenefit.roi > 2 ? (
                      <div className="recommendation-positive">
                        <TrendingUpIcon />
                        <p><strong>Highly Recommended:</strong> Excellent ROI with significant yield improvements expected.</p>
                      </div>
                    ) : analysisResults.costBenefit.roi > 1 ? (
                      <div className="recommendation-moderate">
                        <BarChartIcon />
                        <p><strong>Recommended:</strong> Good returns with manageable investment risk.</p>
                      </div>
                    ) : (
                      <div className="recommendation-cautious">
                        <AlertCircleIcon />
                        <p><strong>Consider Carefully:</strong> Moderate returns, prioritize high-impact recommendations.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SoilAnalysis;
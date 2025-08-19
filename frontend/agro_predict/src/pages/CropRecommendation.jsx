import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CROP_DATABASE, INDIAN_STATES, INDIAN_SEASONS, classifyAgroClimaticZone } from '../data/indiaCrops';
import './CropRecommendation.css';

const CropRecommendation = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        // Soil nutrients (with sensible defaults)
        nitrogen: 60,
        phosphorus: 45,
        potassium: 50,
        ph: 6.8,

        // Environmental conditions (with sensible defaults)
        temperature: 28,
        humidity: 75,
        rainfall: 120,

        // Location and timing (start empty so no recommendations until selected)
        season: '',
        state: '',
        district: ''
    });

    const [recommendations, setRecommendations] = useState([]);
    const [climateZone, setClimateZone] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [showExportModal, setShowExportModal] = useState(false);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'number' ? (value === '' ? '' : parseFloat(value)) : value
        }));
    };

    // Calculate crop suitability score
    const calculateCropScore = (cropKey, cropData) => {
        let score = 0;
        const maxScore = 100;

        // State suitability (25 points)
        if (cropData.states.includes(formData.state)) {
            score += 25;
        }

        // Season suitability (25 points)
        if (cropData.seasons.includes(formData.season)) {
            score += 25;
        }

        // Climate zone suitability (25 points)
        const zone = classifyAgroClimaticZone(formData.temperature, formData.rainfall);
        if (cropData.zones.includes(zone)) {
            score += 25;
        }

        // NPK suitability (25 points)
        const npkScore = calculateNPKScore(cropData);
        score += npkScore;

        return Math.min(score, maxScore) / 100;
    };

    // Calculate NPK compatibility score
    const calculateNPKScore = (cropData) => {
        let npkScore = 0;
        const { N, P, K } = cropData.npk_requirements;

        // Check if current NPK values are within optimal range
        const nScore = isInRange(formData.nitrogen, N[0], N[1]) ? 8.33 :
            getProximityScore(formData.nitrogen, N[0], N[1]) * 8.33;
        const pScore = isInRange(formData.phosphorus, P[0], P[1]) ? 8.33 :
            getProximityScore(formData.phosphorus, P[0], P[1]) * 8.33;
        const kScore = isInRange(formData.potassium, K[0], K[1]) ? 8.34 :
            getProximityScore(formData.potassium, K[0], K[1]) * 8.34;

        return nScore + pScore + kScore;
    };

    // Check if value is in range
    const isInRange = (value, min, max) => value >= min && value <= max;

    // Get proximity score (how close to optimal range)
    const getProximityScore = (value, min, max) => {
        const optimalMid = (min + max) / 2;
        const maxDeviation = Math.max(Math.abs(min - optimalMid), Math.abs(max - optimalMid)) * 2;
        const deviation = Math.abs(value - optimalMid);
        return Math.max(0, 1 - (deviation / maxDeviation));
    };

    // Generate crop recommendations
    const generateRecommendations = () => {
        setIsAnalyzing(true);

        // Simulate analysis time for better UX
        setTimeout(() => {
            const scored = Object.entries(CROP_DATABASE).map(([key, data]) => ({
                crop: key,
                data: data,
                score: calculateCropScore(key, data)
            }));

            // Sort by score and take top recommendations
            const sorted = scored.sort((a, b) => b.score - a.score).slice(0, 8);
            setRecommendations(sorted);

            // Update climate zone
            const zone = classifyAgroClimaticZone(formData.temperature, formData.rainfall);
            setClimateZone(zone);

            setIsAnalyzing(false);
        }, 1500);
    };

    // Use default values for quick testing
    const useDefaultValues = () => {
        setFormData({
            nitrogen: 60,
            phosphorus: 45,
            potassium: 50,
            ph: 6.8,
            temperature: 28,
            humidity: 75,
            rainfall: 120,
            season: 'Kharif',
            state: 'KA',
            district: 'Bangalore Rural'
        });
    };

    // Reset form
    const resetForm = () => {
        setFormData({
            nitrogen: 0,
            phosphorus: 0,
            potassium: 0,
            ph: '',
            temperature: '',
            humidity: '',
            rainfall: '',
            season: '',
            state: '',
            district: ''
        });
        setRecommendations([]);
        setClimateZone('');
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Require basic details before generating
        const requiredFilled =
            formData.state && formData.season &&
            Number(formData.nitrogen) > 0 && Number(formData.phosphorus) > 0 && Number(formData.potassium) > 0 &&
            Number(formData.temperature) > 0 && Number(formData.rainfall) > 0;
        if (!requiredFilled) {
            setRecommendations([]);
            return;
        }
        generateRecommendations();
    };

    // Export functionality
    const generateExportText = () => {
        return `🇮🇳 SMART CROP RECOMMENDATION REPORT - INDIA\n\n` +
            `📍 LOCATION DETAILS:\n` +
            `State: ${INDIAN_STATES[formData.state] || formData.state}\n` +
            `District: ${formData.district || 'Not specified'}\n` +
            `Season: ${formData.season} (${INDIAN_SEASONS[formData.season]?.period || ''})\n` +
            `Agro-climatic Zone: ${climateZone}\n\n` +
            `🧪 SOIL ANALYSIS:\n` +
            `- Nitrogen (N): ${formData.nitrogen} ppm\n` +
            `- Phosphorus (P): ${formData.phosphorus} ppm\n` +
            `- Potassium (K): ${formData.potassium} ppm\n` +
            `- Soil pH: ${formData.ph}\n\n` +
            `🌡️ ENVIRONMENTAL CONDITIONS:\n` +
            `- Temperature: ${formData.temperature}°C\n` +
            `- Humidity: ${formData.humidity}%\n` +
            `- Rainfall: ${formData.rainfall} mm/month\n\n` +
            `🌾 TOP CROP RECOMMENDATIONS:\n` +
            recommendations.slice(0, 5).map((rec, index) =>
                `${index + 1}. ${rec.data.name}\n` +
                `   Suitability: ${(rec.score * 100).toFixed(1)}%\n` +
                `   Duration: ${rec.data.duration}\n` +
                `   Expected Yield: ${rec.data.yield}\n` +
                `   Tips: ${rec.data.tips}\n`
            ).join('\n') +
            `\n📊 Generated on: ${new Date().toLocaleDateString('en-IN')}\n` +
            `💡 This report is generated based on scientific crop suitability analysis for Indian agriculture.`;
    };

    const copyResults = () => {
        navigator.clipboard.writeText(generateExportText());
        alert('Results copied to clipboard! 📋');
    };

    const downloadResults = () => {
        const element = document.createElement('a');
        const file = new Blob([generateExportText()], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `crop-recommendation-${formData.state}-${Date.now()}.txt`;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    // Auto-generate recommendations when form data changes
    useEffect(() => {
        const timer = setTimeout(() => {
            const canAnalyze =
                Number(formData.nitrogen) > 0 && Number(formData.phosphorus) > 0 && Number(formData.potassium) > 0 &&
                Number(formData.temperature) > 0 && Number(formData.rainfall) > 0 &&
                formData.state && formData.season;
            if (canAnalyze) {
                generateRecommendations();
            } else {
                setRecommendations([]);
                setClimateZone('');
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [formData]);

    return (
        <div className="crop-recommendation-india">
            <div className="container">
                {/* Header */}
                <div className="page-header">
                    <h1>🇮🇳 भारतीय कृषि सलाहकार</h1>
                    <h2>Smart Crop Recommendation System for India</h2>
                    <p>राज्य, मौसम और मिट्टी के आधार पर सबसे उपयुक्त फसलों की सिफारिश प्राप्त करें</p>
                    <p>Get scientifically-backed crop recommendations based on your state, season & soil conditions</p>
                </div>

                <div className="main-grid">
                    {/* Input Section */}
                    <div className="input-section">
                        <div className="card enhanced-card">
                            <div className="card__header">
                                <h3>📋 कृषि मापदंड | Agricultural Parameters</h3>
                                <div className="form-actions">
                                    <button
                                        type="button"
                                        className="btn btn--secondary btn--sm"
                                        onClick={useDefaultValues}
                                    >
                                        🔄 Default Values
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn--outline btn--sm"
                                        onClick={resetForm}
                                    >
                                        🗑️ Reset
                                    </button>
                                </div>
                            </div>

                            <div className="card__body">
                                <form onSubmit={handleSubmit} className="india-form">
                                    {/* Location Section */}
                                    <div className="form-section location-section">
                                        <h4>📍 स्थान और मौसम | Location & Season</h4>
                                        <div className="form-grid location-grid">
                                            <div className="form-group enhanced">
                                                <label className="form-label">
                                                    🏛️ राज्य | State
                                                </label>
                                                <select
                                                    name="state"
                                                    value={formData.state}
                                                    onChange={handleInputChange}
                                                    className="form-control enhanced-select"
                                                >
                                                    <option value="" disabled>
                                                        Select State / राज्य चुनें
                                                    </option>
                                                    {Object.entries(INDIAN_STATES).map(([code, name]) => (
                                                        <option key={code} value={code}>{name} ({code})</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="form-group enhanced">
                                                <label className="form-label">
                                                    🌾 मौसम | Season
                                                </label>
                                                <select
                                                    name="season"
                                                    value={formData.season}
                                                    onChange={handleInputChange}
                                                    className="form-control enhanced-select"
                                                >
                                                    <option value="" disabled>
                                                        Select Season / मौसम चुनें
                                                    </option>
                                                    {Object.entries(INDIAN_SEASONS).map(([key, season]) => (
                                                        <option key={key} value={key}>{season.name}</option>
                                                    ))}
                                                </select>
                                                <small className="form-hint">
                                                    {INDIAN_SEASONS[formData.season]?.description}
                                                </small>
                                            </div>

                                            <div className="form-group enhanced">
                                                <label className="form-label">
                                                    🏘️ जिला | District
                                                </label>
                                                <input
                                                    type="text"
                                                    name="district"
                                                    value={formData.district}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter district name"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Soil Nutrients */}
                                    <div className="form-section nutrients-section">
                                        <h4>🧪 मिट्टी के पोषक तत्व | Soil Nutrients (ppm)</h4>
                                        <div className="form-grid nutrients-grid">
                                            <div className="form-group enhanced">
                                                <label className="form-label">
                                                    <span className="nutrient-icon n-icon">N</span>
                                                    Nitrogen | नाइट्रोजन
                                                    <span className="slider-value">{formData.nitrogen} ppm</span>
                                                </label>
                                                <input
                                                    type="range"
                                                    name="nitrogen"
                                                    min="0"
                                                    max="200"
                                                    value={formData.nitrogen}
                                                    onChange={handleInputChange}
                                                    className="slider nitrogen-slider"
                                                />
                                                <div className="slider-labels">
                                                    <span>0</span>
                                                    <span>200</span>
                                                </div>
                                            </div>

                                            <div className="form-group enhanced">
                                                <label className="form-label">
                                                    <span className="nutrient-icon p-icon">P</span>
                                                    Phosphorus | फॉस्फोरस
                                                    <span className="slider-value">{formData.phosphorus} ppm</span>
                                                </label>
                                                <input
                                                    type="range"
                                                    name="phosphorus"
                                                    min="0"
                                                    max="100"
                                                    value={formData.phosphorus}
                                                    onChange={handleInputChange}
                                                    className="slider phosphorus-slider"
                                                />
                                                <div className="slider-labels">
                                                    <span>0</span>
                                                    <span>100</span>
                                                </div>
                                            </div>

                                            <div className="form-group enhanced">
                                                <label className="form-label">
                                                    <span className="nutrient-icon k-icon">K</span>
                                                    Potassium | पोटेशियम
                                                    <span className="slider-value">{formData.potassium} ppm</span>
                                                </label>
                                                <input
                                                    type="range"
                                                    name="potassium"
                                                    min="0"
                                                    max="200"
                                                    value={formData.potassium}
                                                    onChange={handleInputChange}
                                                    className="slider potassium-slider"
                                                />
                                                <div className="slider-labels">
                                                    <span>0</span>
                                                    <span>200</span>
                                                </div>
                                            </div>

                                            <div className="form-group enhanced">
                                                <label className="form-label">
                                                    🧪 Soil pH | मिट्टी का pH
                                                </label>
                                                <input
                                                    type="number"
                                                    name="ph"
                                                    min="3"
                                                    max="10"
                                                    step="0.1"
                                                    value={formData.ph}
                                                    onChange={handleInputChange}
                                                    className="form-control"
                                                    placeholder="6.5"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Environmental Conditions */}
                                    <div className="form-section environment-section">
                                        <h4>🌡️ पर्यावरणीय स्थितियां | Environmental Conditions</h4>
                                        <div className="form-grid environment-grid">
                                            <div className="form-group enhanced">
                                                <label className="form-label">
                                                    🌡️ Temperature | तापमान (°C)
                                                </label>
                                                <input
                                                    type="number"
                                                    name="temperature"
                                                    min="0"
                                                    max="50"
                                                    value={formData.temperature}
                                                    onChange={handleInputChange}
                                                    className="form-control"
                                                />
                                            </div>

                                            <div className="form-group enhanced">
                                                <label className="form-label">
                                                    💧 Humidity | आर्द्रता (%)
                                                </label>
                                                <input
                                                    type="number"
                                                    name="humidity"
                                                    min="0"
                                                    max="100"
                                                    value={formData.humidity}
                                                    onChange={handleInputChange}
                                                    className="form-control"
                                                />
                                            </div>

                                            <div className="form-group enhanced">
                                                <label className="form-label">
                                                    🌧️ Rainfall | वर्षा (mm/month)
                                                </label>
                                                <input
                                                    type="number"
                                                    name="rainfall"
                                                    min="0"
                                                    max="500"
                                                    value={formData.rainfall}
                                                    onChange={handleInputChange}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-actions submit-section">
                                        <button
                                            type="submit"
                                            className="btn btn--primary btn--large analyze-btn"
                                            disabled={isAnalyzing}
                                        >
                                            {isAnalyzing ? (
                                                <>
                                                    <div className="spinner"></div>
                                                    विश्लेषण हो रहा है... | Analyzing...
                                                </>
                                            ) : (
                                                <>
                                                    🎯 फसल की सिफारिश प्राप्त करें | Get Crop Recommendations
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Climate Zone Card (only after required details) */}
                        {(Number(formData.nitrogen) > 0 && Number(formData.phosphorus) > 0 && Number(formData.potassium) > 0 &&
                          Number(formData.temperature) > 0 && Number(formData.rainfall) > 0 && formData.state && formData.season) && (
                            <div className="climate-zone-card card enhanced-card">
                                <div className="card__body">
                                    <h4>🌍 कृषि जलवायु क्षेत्र | Agro-climatic Zone</h4>
                                    <div className="climate-zone-content">
                                        <div className="climate-zone-icon">
                                            {climateZone === 'Humid' && '🌴'}
                                            {climateZone === 'Sub-Humid' && '🌳'}
                                            {climateZone === 'Semi-Arid' && '🌾'}
                                            {climateZone === 'Arid' && '🏜️'}
                                            {!climateZone && '🌍'}
                                        </div>
                                        <div className="climate-zone-info">
                                            <h5>{climateZone || 'Zone not determined'}</h5>
                                            <p>
                                                {climateZone
                                                    ? `आपका क्षेत्र ${climateZone} जलवायु क्षेत्र में वर्गीकृत है।`
                                                    : 'पूर्ण जानकारी दर्ज करें।'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Results Section */}
                    <div className="results-section">
                        <div className="card enhanced-card results-card">
                            <div className="card__header">
                                <h3>🏆 फसल सिफारिशें | Crop Recommendations</h3>
                                {recommendations.length > 0 && (
                                    <button
                                        className="btn btn--outline btn--sm"
                                        onClick={() => setShowExportModal(true)}
                                    >
                                        📤 Export Results
                                    </button>
                                )}
                            </div>

                            <div className="card__body">
                                {recommendations.length > 0 ? (
                                    <div className="recommendations-container">
                                        {/* Summary */}
                                        <div className="recommendation-summary">
                                            <div className="summary-card">
                                                <h4>📊 विश्लेषण सारांश | Analysis Summary</h4>
                                                <div className="summary-stats">
                                                    <div className="stat-item">
                                                        <span className="stat-label">राज्य | State:</span>
                                                        <span className="stat-value">{INDIAN_STATES[formData.state]}</span>
                                                    </div>
                                                    <div className="stat-item">
                                                        <span className="stat-label">मौसम | Season:</span>
                                                        <span className="stat-value">{formData.season}</span>
                                                    </div>
                                                    <div className="stat-item">
                                                        <span className="stat-label">जलवायु क्षेत्र:</span>
                                                        <span className="stat-value">{climateZone}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Recommendations List */}
                                        <div className="recommendations-list">
                                            {recommendations.map((rec, index) => (
                                                <div
                                                    key={rec.crop}
                                                    className={`recommendation-card stagger-item ${rec.score >= 0.8 ? 'high-match' :
                                                            rec.score >= 0.6 ? 'medium-match' : 'low-match'
                                                        }`}
                                                >
                                                    <div className="rec-header">
                                                        <div className="rec-rank">{index + 1}</div>
                                                        <div className="rec-title">
                                                            <h4>{rec.data.name}</h4>
                                                            <div className="rec-score">
                                                                <div
                                                                    className="score-bar"
                                                                    style={{ width: `${rec.score * 100}%` }}
                                                                ></div>
                                                                <span className="score-text">
                                                                    {(rec.score * 100).toFixed(1)}% उपयुक्त
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="rec-badge">
                                                            {rec.score >= 0.8 && <span className="badge high">उत्तम</span>}
                                                            {rec.score >= 0.6 && rec.score < 0.8 && <span className="badge medium">अच्छा</span>}
                                                            {rec.score < 0.6 && <span className="badge low">संभावित</span>}
                                                        </div>
                                                    </div>

                                                    <div className="rec-body">
                                                        <p className="rec-description">{rec.data.description}</p>

                                                        <div className="rec-details">
                                                            <div className="detail-item">
                                                                <strong>⏱️ Duration:</strong> {rec.data.duration}
                                                            </div>
                                                            <div className="detail-item">
                                                                <strong>📈 Expected Yield:</strong> {rec.data.yield}
                                                            </div>
                                                            <div className="detail-item">
                                                                <strong>🌡️ Conditions:</strong> {rec.data.optimal_conditions}
                                                            </div>
                                                        </div>

                                                        <div className="rec-tips">
                                                            <strong>💡 Tips:</strong> {rec.data.tips}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="no-results">
                                        <div className="no-results-icon">🌱</div>
                                        <h4>कृषि मापदंड दर्ज करें</h4>
                                        <p>अपनी मिट्टी और पर्यावरणीय जानकारी भरें ताकि हम आपके लिए सबसे उपयुक्त फसलों की सिफारिश कर सकें।</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Export Modal */}
                {showExportModal && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <div className="modal-header">
                                <h3>📤 Export Recommendations</h3>
                                <button
                                    className="modal-close"
                                    onClick={() => setShowExportModal(false)}
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Choose how you'd like to export your crop recommendations:</p>
                                <div className="export-options">
                                    <button
                                        className="btn btn--outline"
                                        onClick={copyResults}
                                    >
                                        📋 Copy to Clipboard
                                    </button>
                                    <button
                                        className="btn btn--primary"
                                        onClick={downloadResults}
                                    >
                                        💾 Download Report
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CropRecommendation;
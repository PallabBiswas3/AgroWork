import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DISEASE_DATABASE,
  CROP_DISEASES,
  MINERAL_DEFICIENCY_SYMPTOMS,
  PREDICTION_WEIGHTS,
  STATE_DISEASE_PREVALENCE
} from '../data/diseaseDatabase';
import './DiseasePestDashboard.css';

const DiseasePredictor = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Basic Information
    crop: 'Rice',
    state: 'UP',
    growth_stage: 'vegetative',

    // Leaf Symptoms
    leaf_color: 'normal_green',
    leaf_spots: 'none',
    leaf_texture: 'normal',
    leaf_shape: 'normal',
    leaf_edges: 'normal',

    // Stem/Root Symptoms
    stem_condition: 'healthy',
    stem_color: 'normal_green',
    root_condition: 'healthy',
    root_color: 'white_cream',

    // Environmental Conditions
    temperature: 25,
    humidity: 70,
    rainfall: 'moderate',
    irrigation: 'adequate',

    // Mineral Status
    nitrogen_status: 'adequate',
    phosphorus_status: 'adequate',
    potassium_status: 'adequate',
    calcium_status: 'adequate',
    magnesium_status: 'adequate',
    iron_status: 'adequate',

    // Additional Information
    pest_presence: 'none',
    recent_weather: 'normal',
    field_drainage: 'good'
  });

  const [predictions, setPredictions] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState('input');
  const [showDetails, setShowDetails] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Calculate disease probability based on symptoms and conditions
  const calculateDiseaseProbability = (diseaseKey, diseaseData) => {
    let totalScore = 0;
    let maxPossibleScore = 100;

    // Leaf symptoms matching (35% weight)
    const leafScore = calculateSymptomScore(diseaseData.symptoms.leaf, 'leaf');
    totalScore += leafScore * PREDICTION_WEIGHTS.leaf_symptoms;

    // Stem symptoms matching (25% weight)
    const stemScore = calculateSymptomScore(diseaseData.symptoms.stem, 'stem');
    totalScore += stemScore * PREDICTION_WEIGHTS.stem_symptoms;

    // Root symptoms matching (15% weight)
    const rootScore = calculateSymptomScore(diseaseData.symptoms.root, 'root');
    totalScore += rootScore * PREDICTION_WEIGHTS.root_symptoms;

    // Mineral deficiency correlation (15% weight)
    const mineralScore = calculateMineralScore(diseaseData.mineral_deficiency);
    totalScore += mineralScore * PREDICTION_WEIGHTS.mineral_deficiency;

    // Environmental factors (10% weight)
    const envScore = calculateEnvironmentalScore(diseaseData.environmental_factors);
    totalScore += envScore * PREDICTION_WEIGHTS.environmental_factors;

    // State-specific prevalence bonus
    const stateBonus = STATE_DISEASE_PREVALENCE[formData.state]?.includes(diseaseKey) ? 10 : 0;
    totalScore += stateBonus;

    return Math.min(totalScore, 100);
  };

  // Calculate symptom matching score
  const calculateSymptomScore = (diseaseSymptoms, bodyPart) => {
    let score = 0;

    if (bodyPart === 'leaf') {
      // Leaf color matching
      if (formData.leaf_color !== 'normal_green') {
        if (diseaseSymptoms.some(symptom =>
          symptom.toLowerCase().includes('yellow') && formData.leaf_color.includes('yellow') ||
          symptom.toLowerCase().includes('brown') && formData.leaf_color.includes('brown') ||
          symptom.toLowerCase().includes('purple') && formData.leaf_color.includes('purple')
        )) {
          score += 30;
        }
      }

      // Leaf spots matching
      if (formData.leaf_spots !== 'none') {
        if (diseaseSymptoms.some(symptom =>
          symptom.toLowerCase().includes('spot') ||
          symptom.toLowerCase().includes('lesion') ||
          symptom.toLowerCase().includes('blight')
        )) {
          score += 40;
        }
      }

      // Leaf texture and shape
      if (formData.leaf_texture !== 'normal' || formData.leaf_shape !== 'normal') {
        if (diseaseSymptoms.some(symptom =>
          symptom.toLowerCase().includes('distort') ||
          symptom.toLowerCase().includes('curl') ||
          symptom.toLowerCase().includes('wilt')
        )) {
          score += 30;
        }
      }
    }

    if (bodyPart === 'stem') {
      if (formData.stem_condition !== 'healthy') {
        if (diseaseSymptoms.some(symptom =>
          symptom.toLowerCase().includes('lesion') ||
          symptom.toLowerCase().includes('rot') ||
          symptom.toLowerCase().includes('brown') ||
          symptom.toLowerCase().includes('black')
        )) {
          score += 50;
        }
      }
    }

    if (bodyPart === 'root') {
      if (formData.root_condition !== 'healthy') {
        if (diseaseSymptoms.some(symptom =>
          symptom.toLowerCase().includes('rot') ||
          symptom.toLowerCase().includes('brown') ||
          symptom.toLowerCase().includes('discolor')
        )) {
          score += 60;
        }
      }
    }

    return score;
  };

  // Calculate mineral deficiency correlation
  const calculateMineralScore = (mineralDeficiency) => {
    let score = 0;
    const deficiencies = [...(mineralDeficiency.primary || []), ...(mineralDeficiency.secondary || [])];

    deficiencies.forEach(deficiency => {
      const mineral = deficiency.toLowerCase().split(' ')[0];
      if (formData[`${mineral}_status`] === 'deficient' || formData[`${mineral}_status`] === 'excess') {
        score += deficiency.includes('deficiency') ? 40 : 20;
      }
    });

    return Math.min(score, 100);
  };

  // Calculate environmental factor score
  const calculateEnvironmentalScore = (envFactors) => {
    let score = 0;

    // Temperature matching
    if (envFactors.temperature) {
      const [minTemp, maxTemp] = envFactors.temperature;
      if (formData.temperature >= minTemp && formData.temperature <= maxTemp) {
        score += 40;
      }
    }

    // Humidity matching
    if (envFactors.humidity) {
      const [minHum, maxHum] = envFactors.humidity;
      if (formData.humidity >= minHum && formData.humidity <= maxHum) {
        score += 40;
      }
    }

    // Weather conditions
    if (envFactors.conditions) {
      envFactors.conditions.forEach(condition => {
        if (condition.toLowerCase().includes('high humidity') && formData.humidity > 80) score += 10;
        if (condition.toLowerCase().includes('waterlog') && formData.field_drainage === 'poor') score += 10;
        if (condition.toLowerCase().includes('cool') && formData.temperature < 20) score += 10;
        if (condition.toLowerCase().includes('warm') && formData.temperature > 25) score += 10;
      });
    }

    return Math.min(score, 100);
  };

  // Generate disease predictions
  const generatePredictions = () => {
    setIsAnalyzing(true);

    setTimeout(() => {
      const cropDiseases = CROP_DISEASES[formData.crop] || [];
      const predictions = [];

      cropDiseases.forEach(diseaseKey => {
        const diseaseData = DISEASE_DATABASE[diseaseKey];
        if (diseaseData) {
          const probability = calculateDiseaseProbability(diseaseKey, diseaseData);

          if (probability > 15) { // Only show diseases with >15% probability
            predictions.push({
              diseaseKey,
              diseaseData,
              probability,
              riskLevel: probability > 70 ? 'High' : probability > 40 ? 'Medium' : 'Low'
            });
          }
        }
      });

      // Sort by probability
      predictions.sort((a, b) => b.probability - a.probability);

      setPredictions(predictions.slice(0, 6)); // Show top 6 predictions
      setIsAnalyzing(false);
      setActiveTab('results');
    }, 2000);
  };

  // Toggle disease details
  const toggleDetails = (diseaseKey) => {
    setShowDetails(prev => ({
      ...prev,
      [diseaseKey]: !prev[diseaseKey]
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    generatePredictions();
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      crop: 'Rice',
      state: 'UP',
      growth_stage: 'vegetative',
      leaf_color: 'normal_green',
      leaf_spots: 'none',
      leaf_texture: 'normal',
      leaf_shape: 'normal',
      leaf_edges: 'normal',
      stem_condition: 'healthy',
      stem_color: 'normal_green',
      root_condition: 'healthy',
      root_color: 'white_cream',
      temperature: 25,
      humidity: 70,
      rainfall: 'moderate',
      irrigation: 'adequate',
      nitrogen_status: 'adequate',
      phosphorus_status: 'adequate',
      potassium_status: 'adequate',
      calcium_status: 'adequate',
      magnesium_status: 'adequate',
      iron_status: 'adequate',
      pest_presence: 'none',
      recent_weather: 'normal',
      field_drainage: 'good'
    });
    setPredictions([]);
    setActiveTab('input');
  };

  return (
    <div className="disease-predictor">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1>🔬 AI Disease Predictor</h1>
          <h2>बीमारी पूर्वानुमान प्रणाली</h2>
          <p>Advanced plant disease prediction system for Indian crops</p>
        </div>

        {/* Navigation Tabs */}
        <div className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === 'input' ? 'active' : ''}`}
            onClick={() => setActiveTab('input')}
          >
            📋 Input Symptoms
          </button>
          <button
            className={`tab-btn ${activeTab === 'results' ? 'active' : ''}`}
            onClick={() => setActiveTab('results')}
            disabled={predictions.length === 0}
          >
            🎯 Disease Predictions
          </button>
          <button
            className={`tab-btn ${activeTab === 'treatment' ? 'active' : ''}`}
            onClick={() => setActiveTab('treatment')}
            disabled={predictions.length === 0}
          >
            💊 Treatment Guide
          </button>
        </div>

        {/* Input Tab */}
        {activeTab === 'input' && (
          <div className="input-section">
            <form onSubmit={handleSubmit} className="disease-form">
              <div className="form-grid">

                {/* Basic Information */}
                <div className="form-section">
                  <h3>📍 Basic Information | बुनियादी जानकारी</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Crop | फसल</label>
                      <select name="crop" value={formData.crop} onChange={handleInputChange}>
                        <option value="Rice">Rice (धान)</option>
                        <option value="Wheat">Wheat (गेहूं)</option>
                        <option value="Cotton">Cotton (कपास)</option>
                        <option value="Maize">Maize (मक्का)</option>
                        <option value="Tomato">Tomato (टमाटर)</option>
                        <option value="Sugarcane">Sugarcane (गन्ना)</option>
                        <option value="Mustard">Mustard (सरसों)</option>
                        <option value="Tea">Tea (चाय)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>State | राज्य</label>
                      <select name="state" value={formData.state} onChange={handleInputChange}>
                        <option value="UP">Uttar Pradesh</option>
                        <option value="PB">Punjab</option>
                        <option value="MH">Maharashtra</option>
                        <option value="GJ">Gujarat</option>
                        <option value="RJ">Rajasthan</option>
                        <option value="WB">West Bengal</option>
                        <option value="AS">Assam</option>
                        <option value="KA">Karnataka</option>
                        <option value="AP">Andhra Pradesh</option>
                        <option value="TN">Tamil Nadu</option>
                        <option value="KL">Kerala</option>
                        <option value="OR">Odisha</option>
                        <option value="BR">Bihar</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Growth Stage | वृद्धि अवस्था</label>
                      <select name="growth_stage" value={formData.growth_stage} onChange={handleInputChange}>
                        <option value="seedling">Seedling (अंकुरण)</option>
                        <option value="vegetative">Vegetative (वानस्पतिक)</option>
                        <option value="flowering">Flowering (फूल)</option>
                        <option value="fruiting">Fruiting (फल)</option>
                        <option value="maturity">Maturity (परिपक्वता)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Leaf Symptoms */}
                <div className="form-section">
                  <h3>🍃 Leaf Symptoms | पत्ती के लक्षण</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Leaf Color | पत्ती का रंग</label>
                      <select name="leaf_color" value={formData.leaf_color} onChange={handleInputChange}>
                        <option value="normal_green">Normal Green (सामान्य हरा)</option>
                        <option value="light_green">Light Green (हल्का हरा)</option>
                        <option value="dark_green">Dark Green (गहरा हरा)</option>
                        <option value="yellow_green">Yellowish Green (पीला हरा)</option>
                        <option value="yellow">Yellow (पीला)</option>
                        <option value="brown_yellow">Brown-Yellow (भूरा-पीला)</option>
                        <option value="brown">Brown (भूरा)</option>
                        <option value="purple">Purple (बैंगनी)</option>
                        <option value="red_brown">Reddish Brown (लाल भूरा)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Leaf Spots | पत्ती पर धब्बे</label>
                      <select name="leaf_spots" value={formData.leaf_spots} onChange={handleInputChange}>
                        <option value="none">None (कोई नहीं)</option>
                        <option value="small_brown">Small Brown Spots (छोटे भूरे धब्बे)</option>
                        <option value="large_brown">Large Brown Spots (बड़े भूरे धब्बे)</option>
                        <option value="water_soaked">Water-soaked Lesions (पानी भरे घाव)</option>
                        <option value="target_spots">Target Spots (निशाना धब्बे)</option>
                        <option value="white_spots">White Spots (सफेद धब्बे)</option>
                        <option value="black_spots">Black Spots (काले धब्बे)</option>
                        <option value="rust_pustules">Rust Pustules (किट्ट के दाने)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Leaf Texture | पत्ती की बनावट</label>
                      <select name="leaf_texture" value={formData.leaf_texture} onChange={handleInputChange}>
                        <option value="normal">Normal (सामान्य)</option>
                        <option value="wilted">Wilted (मुरझाया)</option>
                        <option value="curled">Curled (मुड़ा हुआ)</option>
                        <option value="brittle">Brittle (भंगुर)</option>
                        <option value="thick">Thick (मोटा)</option>
                        <option value="thin">Thin (पतला)</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Leaf Shape | पत्ती का आकार</label>
                      <select name="leaf_shape" value={formData.leaf_shape} onChange={handleInputChange}>
                        <option value="normal">Normal (सामान्य)</option>
                        <option value="distorted">Distorted (विकृत)</option>
                        <option value="stunted">Stunted (बौना)</option>
                        <option value="enlarged">Enlarged (बड़ा)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Leaf Edges | पत्ती के किनारे</label>
                      <select name="leaf_edges" value={formData.leaf_edges} onChange={handleInputChange}>
                        <option value="normal">Normal (सामान्य)</option>
                        <option value="brown_edges">Brown Edges (भूरे किनारे)</option>
                        <option value="burnt_edges">Burnt Edges (जले किनारे)</option>
                        <option value="torn_edges">Torn Edges (फटे किनारे)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Stem and Root Symptoms */}
                <div className="form-section">
                  <h3>🌾 Stem & Root Symptoms | तना और जड़ के लक्षण</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Stem Condition | तने की स्थिति</label>
                      <select name="stem_condition" value={formData.stem_condition} onChange={handleInputChange}>
                        <option value="healthy">Healthy (स्वस्थ)</option>
                        <option value="lesions">Lesions (घाव)</option>
                        <option value="cankers">Cankers (कैंकर)</option>
                        <option value="soft_rot">Soft Rot (नरम सड़न)</option>
                        <option value="discoloration">Discoloration (रंग बदलाव)</option>
                        <option value="cracking">Cracking (दरारें)</option>
                        <option value="girdling">Girdling (घेरना)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Stem Color | तने का रंग</label>
                      <select name="stem_color" value={formData.stem_color} onChange={handleInputChange}>
                        <option value="normal_green">Normal Green (सामान्य हरा)</option>
                        <option value="brown">Brown (भूरा)</option>
                        <option value="black">Black (काला)</option>
                        <option value="red_brown">Red-Brown (लाल भूरा)</option>
                        <option value="yellow">Yellow (पीला)</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Root Condition | जड़ की स्थिति</label>
                      <select name="root_condition" value={formData.root_condition} onChange={handleInputChange}>
                        <option value="healthy">Healthy (स्वस्थ)</option>
                        <option value="root_rot">Root Rot (जड़ सड़न)</option>
                        <option value="poor_development">Poor Development (कम विकास)</option>
                        <option value="discolored">Discolored (रंग बदला)</option>
                        <option value="stunted">Stunted (बौनी)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Root Color | जड़ का रंग</label>
                      <select name="root_color" value={formData.root_color} onChange={handleInputChange}>
                        <option value="white_cream">White/Cream (सफेद/क्रीम)</option>
                        <option value="brown">Brown (भूरा)</option>
                        <option value="black">Black (काला)</option>
                        <option value="reddish">Reddish (लालिमा लिए)</option>
                        <option value="yellow">Yellow (पीला)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Environmental Conditions */}
                <div className="form-section">
                  <h3>🌡️ Environmental Conditions | पर्यावरणीय स्थितियां</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Temperature (°C) | तापमान</label>
                      <input
                        type="range"
                        name="temperature"
                        min="10"
                        max="45"
                        value={formData.temperature}
                        onChange={handleInputChange}
                        className="slider"
                      />
                      <span className="slider-value">{formData.temperature}°C</span>
                    </div>
                    <div className="form-group">
                      <label>Humidity (%) | आर्द्रता</label>
                      <input
                        type="range"
                        name="humidity"
                        min="30"
                        max="100"
                        value={formData.humidity}
                        onChange={handleInputChange}
                        className="slider"
                      />
                      <span className="slider-value">{formData.humidity}%</span>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Recent Rainfall | हाल की बारिश</label>
                      <select name="rainfall" value={formData.rainfall} onChange={handleInputChange}>
                        <option value="none">None (कोई नहीं)</option>
                        <option value="light">Light (हल्की)</option>
                        <option value="moderate">Moderate (मध्यम)</option>
                        <option value="heavy">Heavy (भारी)</option>
                        <option value="excessive">Excessive (अत्यधिक)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Field Drainage | खेत की जल निकासी</label>
                      <select name="field_drainage" value={formData.field_drainage} onChange={handleInputChange}>
                        <option value="excellent">Excellent (उत्कृष्ट)</option>
                        <option value="good">Good (अच्छी)</option>
                        <option value="moderate">Moderate (मध्यम)</option>
                        <option value="poor">Poor (खराब)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Mineral Status */}
                <div className="form-section">
                  <h3>🧪 Mineral Status | खनिज स्थिति</h3>
                  <div className="mineral-grid">
                    <div className="form-group">
                      <label>Nitrogen (N) | नाइट्रोजन</label>
                      <select name="nitrogen_status" value={formData.nitrogen_status} onChange={handleInputChange}>
                        <option value="deficient">Deficient (कमी)</option>
                        <option value="adequate">Adequate (पर्याप्त)</option>
                        <option value="excess">Excess (अधिक)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Phosphorus (P) | फॉस्फोरस</label>
                      <select name="phosphorus_status" value={formData.phosphorus_status} onChange={handleInputChange}>
                        <option value="deficient">Deficient (कमी)</option>
                        <option value="adequate">Adequate (पर्याप्त)</option>
                        <option value="excess">Excess (अधिक)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Potassium (K) | पोटेशियम</label>
                      <select name="potassium_status" value={formData.potassium_status} onChange={handleInputChange}>
                        <option value="deficient">Deficient (कमी)</option>
                        <option value="adequate">Adequate (पर्याप्त)</option>
                        <option value="excess">Excess (अधिक)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Calcium (Ca) | कैल्शियम</label>
                      <select name="calcium_status" value={formData.calcium_status} onChange={handleInputChange}>
                        <option value="deficient">Deficient (कमी)</option>
                        <option value="adequate">Adequate (पर्याप्त)</option>
                        <option value="excess">Excess (अधिक)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Magnesium (Mg) | मैग्नीशियम</label>
                      <select name="magnesium_status" value={formData.magnesium_status} onChange={handleInputChange}>
                        <option value="deficient">Deficient (कमी)</option>
                        <option value="adequate">Adequate (पर्याप्त)</option>
                        <option value="excess">Excess (अधिक)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Iron (Fe) | आयरन</label>
                      <select name="iron_status" value={formData.iron_status} onChange={handleInputChange}>
                        <option value="deficient">Deficient (कमी)</option>
                        <option value="adequate">Adequate (पर्याप्त)</option>
                        <option value="excess">Excess (अधिक)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="form-actions">
                <button type="button" className="btn btn-secondary" onClick={resetForm}>
                  🔄 Reset Form
                </button>
                <button
                  type="submit"
                  className="btn btn-primary analyze-btn"
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <div className="spinner"></div>
                      Analyzing... | विश्लेषण हो रहा है...
                    </>
                  ) : (
                    <>🔬 Predict Disease | रोग की भविष्यवाणी करें</>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Results Tab */}
        {activeTab === 'results' && (
          <div className="results-section">
            <div className="results-header">
              <h2>🎯 Disease Predictions | रोग पूर्वानुमान</h2>
              <p>Crop: <strong>{formData.crop}</strong> | State: <strong>{formData.state}</strong></p>
            </div>

            {predictions.length > 0 ? (
              <div className="predictions-grid">
                {predictions.map((prediction, index) => (
                  <div
                    key={prediction.diseaseKey}
                    className={`prediction-card ${prediction.riskLevel.toLowerCase()}-risk`}
                  >
                    <div className="prediction-header">
                      <div className="prediction-rank">#{index + 1}</div>
                      <div className="prediction-info">
                        <h3>{prediction.diseaseData.disease_name}</h3>
                        <div className="disease-meta">
                          <span className={`disease-type ${prediction.diseaseData.type.toLowerCase()}`}>
                            {prediction.diseaseData.type}
                          </span>
                          <span className={`severity-badge ${prediction.diseaseData.severity.toLowerCase()}`}>
                            {prediction.diseaseData.severity} Severity
                          </span>
                        </div>
                      </div>
                      <div className="probability-display">
                        <div className="probability-circle">
                          <span className="probability-value">{Math.round(prediction.probability)}%</span>
                        </div>
                        <div className={`risk-level ${prediction.riskLevel.toLowerCase()}`}>
                          {prediction.riskLevel} Risk
                        </div>
                      </div>
                    </div>

                    <div className="prediction-body">
                      <p className="disease-description">{prediction.diseaseData.description}</p>

                      <div className="symptoms-preview">
                        <h4>🔍 Key Symptoms:</h4>
                        <ul>
                          {prediction.diseaseData.symptoms.leaf.slice(0, 2).map((symptom, idx) => (
                            <li key={idx}>🍃 {symptom}</li>
                          ))}
                          {prediction.diseaseData.symptoms.stem.slice(0, 1).map((symptom, idx) => (
                            <li key={idx}>🌾 {symptom}</li>
                          ))}
                        </ul>
                      </div>

                      <button
                        className="toggle-details-btn"
                        onClick={() => toggleDetails(prediction.diseaseKey)}
                      >
                        {showDetails[prediction.diseaseKey] ? '▼ Hide Details' : '▶ View Details'}
                      </button>

                      {showDetails[prediction.diseaseKey] && (
                        <div className="disease-details">
                          <div className="detail-section">
                            <h4>🍃 Leaf Symptoms:</h4>
                            <ul>
                              {prediction.diseaseData.symptoms.leaf.map((symptom, idx) => (
                                <li key={idx}>{symptom}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="detail-section">
                            <h4>🌾 Stem/Root Symptoms:</h4>
                            <ul>
                              {prediction.diseaseData.symptoms.stem.map((symptom, idx) => (
                                <li key={idx}>{symptom}</li>
                              ))}
                              {prediction.diseaseData.symptoms.root.map((symptom, idx) => (
                                <li key={idx}>{symptom}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="detail-section">
                            <h4>🧪 Associated Mineral Issues:</h4>
                            <ul>
                              {prediction.diseaseData.mineral_deficiency.primary.map((def, idx) => (
                                <li key={idx} className="primary-deficiency">{def}</li>
                              ))}
                              {prediction.diseaseData.mineral_deficiency.secondary?.map((def, idx) => (
                                <li key={idx} className="secondary-deficiency">{def}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="detail-section">
                            <h4>🌡️ Favorable Conditions:</h4>
                            <p>Temperature: {prediction.diseaseData.environmental_factors.temperature?.[0]}°C - {prediction.diseaseData.environmental_factors.temperature?.[1]}°C</p>
                            <p>Humidity: {prediction.diseaseData.environmental_factors.humidity?.[0]}% - {prediction.diseaseData.environmental_factors.humidity?.[1]}%</p>
                            <ul>
                              {prediction.diseaseData.environmental_factors.conditions.map((condition, idx) => (
                                <li key={idx}>{condition}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-predictions">
                <div className="no-predictions-icon">🔬</div>
                <h3>No Disease Predictions Available</h3>
                <p>Please fill in the symptom information and run the analysis.</p>
              </div>
            )}
          </div>
        )}

        {/* Treatment Tab */}
        {activeTab === 'treatment' && predictions.length > 0 && (
          <div className="treatment-section">
            <div className="treatment-header">
              <h2>💊 Treatment & Management Guide</h2>
              <p>उपचार और प्रबंधन गाइड</p>
            </div>

            <div className="treatment-cards">
              {predictions.slice(0, 3).map((prediction, index) => (
                <div key={prediction.diseaseKey} className="treatment-card">
                  <div className="treatment-header-card">
                    <h3>{prediction.diseaseData.disease_name}</h3>
                    <span className={`probability-badge ${prediction.riskLevel.toLowerCase()}`}>
                      {Math.round(prediction.probability)}% Probability
                    </span>
                  </div>

                  <div className="treatment-sections">
                    <div className="treatment-section-item">
                      <h4>🧪 Chemical Treatment</h4>
                      <ul>
                        {prediction.diseaseData.treatment.chemical.map((treatment, idx) => (
                          <li key={idx}>{treatment}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="treatment-section-item">
                      <h4>🌿 Organic Treatment</h4>
                      <ul>
                        {prediction.diseaseData.treatment.organic.map((treatment, idx) => (
                          <li key={idx}>{treatment}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="treatment-section-item">
                      <h4>🚜 Management Practices</h4>
                      <ul>
                        {prediction.diseaseData.treatment.management.map((practice, idx) => (
                          <li key={idx}>{practice}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="prevention-section">
                      <h4>🛡️ Prevention</h4>
                      <p>{prediction.diseaseData.prevention}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseasePredictor;
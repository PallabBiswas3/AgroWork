// Soil Analysis Logic - Based on SOIL project implementation

export const calculateFertilityScore = (data) => {
  // Base score calculation based on soil properties
  let score = 50; // Base score
  
  // Adjust score based on nutrient levels (values in kg/ha)
  if (data.nitrogen > 200) score += 10;
  if (data.phosphorus > 15) score += 10;
  if (data.potassium > 300) score += 10;
  
  // Adjust score based on pH level (optimal range: 6.0 - 7.5)
  const ph = parseFloat(data.pH);
  if (ph >= 6 && ph <= 7.5) score += 20;
  
  // Adjust for organic carbon if available
  if (data.organicCarbon && data.organicCarbon > 0.8) score += 10;
  
  // Ensure score is within 0-100 range
  return Math.min(100, Math.max(0, score));
};

export const generateRecommendations = (data) => {
  const recommendations = [];
  
  // Nitrogen recommendations
  if (data.nitrogen < 200) {
    recommendations.push({
      type: 'fertilizer',
      message: `Apply ${Math.ceil((250 - data.nitrogen) / 5)} kg/ha of urea to improve nitrogen levels`,
      priority: 'high',
      icon: '🌱'
    });
  }
  
  // Phosphorus recommendations
  if (data.phosphorus < 15) {
    recommendations.push({
      type: 'fertilizer',
      message: 'Apply DAP or SSP to improve phosphorus levels',
      priority: 'medium',
      icon: '🌿'
    });
  }
  
  // Potassium recommendations
  if (data.potassium < 250) {
    recommendations.push({
      type: 'fertilizer',
      message: 'Apply MOP or SOP to improve potassium levels',
      priority: 'medium',
      icon: '🌿'
    });
  }
  
  // pH recommendations
  const ph = parseFloat(data.pH);
  if (ph < 6) {
    recommendations.push({
      type: 'pH',
      message: 'Add agricultural lime to raise soil pH',
      priority: 'high',
      icon: '⚖️'
    });
  } else if (ph > 7.5) {
    recommendations.push({
      type: 'pH',
      message: 'Add sulfur to lower soil pH',
      priority: 'high',
      icon: '⚖️'
    });
  }
  
  // Organic matter recommendations
  if (data.organicCarbon && data.organicCarbon < 0.8) {
    recommendations.push({
      type: 'organic',
      message: 'Add organic compost to improve soil organic matter',
      priority: 'medium',
      icon: '♻️'
    });
  }
  
  return recommendations;
};

export const getFertilityLevel = (score) => {
  if (score === undefined || score === null) return 'Not Analyzed';
  if (score < 40) return 'Low';
  if (score < 70) return 'Medium';
  return 'High';
};

export const getFertilityClass = (score) => {
  if (score === undefined || score === null) return 'neutral';
  if (score < 40) return 'low';
  if (score < 70) return 'medium';
  return 'high';
};

export const getCropRecommendations = (soilData) => {
  // This is a simplified version - you can expand this with more detailed crop data
  const crops = [
    { name: 'Wheat', suitability: 0.8 },
    { name: 'Rice', suitability: 0.7 },
    { name: 'Corn', suitability: 0.75 },
    { name: 'Soybean', suitability: 0.65 },
    { name: 'Potato', suitability: 0.7 }
  ];
  
  // Sort crops by suitability (in a real app, this would be more sophisticated)
  return crops
    .sort((a, b) => b.suitability - a.suitability)
    .slice(0, 3) // Return top 3
    .map(crop => crop.name);
};

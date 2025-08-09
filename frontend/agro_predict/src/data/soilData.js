// Soil type characteristics and recommendations
export const soilTypes = {
  clay: {
    name: 'Clay',
    description: 'Heavy soil with small particles, holds water well but drains poorly.',
    idealPH: { min: 5.5, max: 7.0 },
    improvementTips: [
      'Add organic matter like compost to improve drainage',
      'Avoid working with clay soil when wet',
      'Use raised beds for better root development'
    ]
  },
  sandy: {
    name: 'Sandy',
    description: 'Light soil with large particles, drains quickly but doesn\'t retain nutrients well.',
    idealPH: { min: 5.5, max: 6.5 },
    improvementTips: [
      'Add organic matter to improve water retention',
      'Use mulch to reduce water evaporation',
      'Fertilize more frequently with smaller amounts'
    ]
  },
  loamy: {
    name: 'Loamy',
    description: 'Ideal soil type with a balance of sand, silt, and clay.',
    idealPH: { min: 6.0, max: 7.0 },
    improvementTips: [
      'Maintain organic matter with regular compost additions',
      'Practice crop rotation',
      'Use cover crops in off-seasons'
    ]
  },
  silty: {
    name: 'Silty',
    description: 'Smooth, fertile soil that holds moisture well.',
    idealPH: { min: 6.0, max: 7.5 },
    improvementTips: [
      'Add organic matter to prevent compaction',
      'Avoid over-tilling',
      'Use cover crops to prevent erosion'
    ]
  },
  peaty: {
    name: 'Peaty',
    description: 'Dark, high in organic matter, retains moisture well.',
    idealPH: { min: 5.0, max: 6.5 },
    improvementTips: [
      'Add lime to reduce acidity if needed',
      'Improve drainage with organic matter',
      'Use raised beds for better root development'
    ]
  },
  chalky: {
    name: 'Chalky',
    description: 'Alkaline soil with high calcium carbonate content.',
    idealPH: { min: 7.0, max: 8.5 },
    improvementTips: [
      'Add organic matter to improve water retention',
      'Use acidifying fertilizers for acid-loving plants',
      'Choose plants that thrive in alkaline conditions'
    ]
  }
};

// Nutrient level recommendations (in ppm - parts per million)
export const nutrientRecommendations = {
  nitrogen: {
    low: { min: 0, max: 20, recommendation: 'Add nitrogen-rich fertilizer or compost' },
    medium: { min: 21, max: 50, recommendation: 'Maintain current nitrogen levels' },
    high: { min: 51, max: 200, recommendation: 'Avoid adding more nitrogen' }
  },
  phosphorus: {
    low: { min: 0, max: 10, recommendation: 'Add phosphorus-rich fertilizer or bone meal' },
    medium: { min: 11, max: 30, recommendation: 'Maintain current phosphorus levels' },
    high: { min: 31, max: 100, recommendation: 'Avoid adding more phosphorus' }
  },
  potassium: {
    low: { min: 0, max: 100, recommendation: 'Add potassium-rich fertilizer or wood ash' },
    medium: { min: 101, max: 200, recommendation: 'Maintain current potassium levels' },
    high: { min: 201, max: 500, recommendation: 'Avoid adding more potassium' }
  }
};

// pH level recommendations
export const phRecommendations = {
  veryAcidic: { min: 0, max: 4.5, status: 'Very Acidic', recommendation: 'Add lime to raise pH' },
  acidic: { min: 4.6, max: 5.5, status: 'Acidic', recommendation: 'Add lime if growing plants that prefer neutral pH' },
  slightlyAcidic: { min: 5.6, max: 6.5, status: 'Slightly Acidic', recommendation: 'Ideal for most plants' },
  neutral: { min: 6.6, max: 7.3, status: 'Neutral', recommendation: 'Ideal for most plants' },
  alkaline: { min: 7.4, max: 8.4, status: 'Alkaline', recommendation: 'Add sulfur or organic matter to lower pH' },
  veryAlkaline: { min: 8.5, max: 14, status: 'Very Alkaline', recommendation: 'Add sulfur or organic matter to lower pH' }
};

// Common crops and their preferred soil conditions
export const cropsData = {
  wheat: {
    name: 'Wheat',
    idealPH: { min: 6.0, max: 7.0 },
    soilTypes: ['loamy', 'silty'],
    nutrientNeeds: {
      nitrogen: 'medium',
      phosphorus: 'medium',
      potassium: 'medium'
    }
  },
  corn: {
    name: 'Corn',
    idealPH: { min: 5.8, max: 6.5 },
    soilTypes: ['loamy', 'silty'],
    nutrientNeeds: {
      nitrogen: 'high',
      phosphorus: 'medium',
      potassium: 'medium'
    }
  },
  rice: {
    name: 'Rice',
    idealPH: { min: 5.0, max: 6.5 },
    soilTypes: ['clay', 'silty'],
    nutrientNeeds: {
      nitrogen: 'high',
      phosphorus: 'medium',
      potassium: 'medium'
    }
  },
  potatoes: {
    name: 'Potatoes',
    idealPH: { min: 4.5, max: 6.0 },
    soilTypes: ['sandy', 'loamy'],
    nutrientNeeds: {
      nitrogen: 'medium',
      phosphorus: 'high',
      potassium: 'high'
    }
  },
  tomatoes: {
    name: 'Tomatoes',
    idealPH: { min: 5.5, max: 7.0 },
    soilTypes: ['loamy', 'silty'],
    nutrientNeeds: {
      nitrogen: 'medium',
      phosphorus: 'high',
      potassium: 'high'
    }
  }
};

// Function to analyze soil and provide recommendations
export const analyzeSoil = (soilType, phLevel, nutrients) => {
  // Get soil type info
  const soilInfo = soilTypes[soilType] || {};
  
  // Analyze pH level
  let phAnalysis = {};
  for (const [key, range] of Object.entries(phRecommendations)) {
    if (phLevel >= range.min && phLevel <= range.max) {
      phAnalysis = {
        status: range.status,
        recommendation: range.recommendation,
        isOptimal: phLevel >= 5.5 && phLevel <= 7.0
      };
      break;
    }
  }
  
  // Analyze nutrients
  const nutrientAnalysis = {};
  for (const [nutrient, value] of Object.entries(nutrients)) {
    const levels = nutrientRecommendations[nutrient];
    if (!levels) continue;
    
    for (const [level, range] of Object.entries(levels)) {
      if (value >= range.min && value <= range.max) {
        nutrientAnalysis[nutrient] = {
          level,
          recommendation: range.recommendation,
          isOptimal: level === 'medium'
        };
        break;
      }
    }
  }
  
  // Determine soil health
  const phScore = phAnalysis.isOptimal ? 1 : 0;
  const nutrientScores = Object.values(nutrientAnalysis)
    .filter(n => n.isOptimal).length;
  const totalScore = phScore + nutrientScores;
  
  let soilHealth;
  if (totalScore === 4) soilHealth = 'Excellent';
  else if (totalScore >= 2) soilHealth = 'Good';
  else if (totalScore >= 1) soilHealth = 'Fair';
  else soilHealth = 'Poor';
  
  // Get suitable crops
  const suitableCrops = [];
  for (const [cropKey, crop] of Object.entries(cropsData)) {
    const phSuitable = phLevel >= crop.idealPH.min && phLevel <= crop.idealPH.max;
    const soilSuitable = crop.soilTypes.includes(soilType);
    
    if (phSuitable && soilSuitable) {
      suitableCrops.push(crop.name);
    }
    
    // Limit to 5 crops for display
    if (suitableCrops.length >= 5) break;
  }
  
  // Generate recommendations
  const recommendations = [];
  
  // Add pH recommendation if not optimal
  if (!phAnalysis.isOptimal) {
    recommendations.push(phAnalysis.recommendation);
  }
  
  // Add nutrient recommendations
  Object.entries(nutrientAnalysis).forEach(([nutrient, analysis]) => {
    if (!analysis.isOptimal) {
      recommendations.push(analysis.recommendation);
    }
  });
  
  // Add soil type specific recommendations
  if (soilInfo.improvementTips) {
    recommendations.push(...soilInfo.improvementTips);
  }
  
  return {
    soilHealth,
    recommendations: [...new Set(recommendations)], // Remove duplicates
    suitableCrops: suitableCrops.length > 0 ? suitableCrops : ['No specific crop recommendations available'],
    analysisDetails: {
      ph: phAnalysis,
      nutrients: nutrientAnalysis,
      soilType: soilInfo
    }
  };
};

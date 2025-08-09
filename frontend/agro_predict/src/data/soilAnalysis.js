// Fixed Soil Analysis Engine - Matches Component Form Data
class SoilAnalysisEngine {
    constructor() {
        // Load soil parameters and thresholds
        this.parameters = this.initializeParameters();
    }

    initializeParameters() {
        return {
            nitrogen: {
                low: 200,
                medium: 400,
                high: 600,
                unit: 'kg/ha',
                importance: 'Essential for protein synthesis and chlorophyll production'
            },
            phosphorus: {
                low: 15,
                medium: 30,
                high: 50,
                unit: 'kg/ha',
                importance: 'Critical for root development and energy transfer'
            },
            potassium: {
                low: 150,
                medium: 300,
                high: 500,
                unit: 'kg/ha',
                importance: 'Essential for water regulation and disease resistance'
            },
            ph: {
                low: 5.5,
                medium: 7.0,
                high: 8.0,
                unit: '',
                importance: 'Controls nutrient availability and soil chemistry'
            },
            electricalConductivity: {
                low: 1.0,
                medium: 2.0,
                high: 4.0,
                unit: 'dS/m',
                importance: 'Indicates soil salinity levels'
            },
            organicCarbon: {
                low: 0.5,
                medium: 0.75,
                high: 1.5,
                unit: '%',
                importance: 'Improves soil structure and nutrient retention'
            }
        };
    }

    // Analyze individual parameter
    analyzeParameter(paramName, value) {
        const param = this.parameters[paramName];
        if (!param) return null;

        const numValue = parseFloat(value) || 0;
        let level, score;

        if (numValue < param.low) {
            level = 'Low';
            score = (numValue / param.low) * 33;
        } else if (numValue < param.medium) {
            level = 'Medium';
            score = 33 + ((numValue - param.low) / (param.medium - param.low)) * 34;
        } else if (numValue < param.high) {
            level = 'High';
            score = 67 + ((numValue - param.medium) / (param.high - param.medium)) * 33;
        } else {
            level = 'High';
            score = 100;
        }

        return {
            value: numValue,
            unit: param.unit,
            level: level,
            score: Math.min(Math.max(score, 0), 100),
            importance: param.importance,
            deficiency_symptoms: this.getDeficiencySymptoms(paramName, level)
        };
    }

    getDeficiencySymptoms(paramName, level) {
        if (level !== 'Low') return null;

        const symptoms = {
            nitrogen: 'Yellowing of older leaves, stunted growth, reduced tillering',
            phosphorus: 'Purple leaf coloration, poor root development, delayed flowering',
            potassium: 'Brown leaf edges, weak stems, increased disease susceptibility',
            ph: 'Nutrient deficiencies, poor microbial activity',
            electricalConductivity: 'Salt stress, reduced water uptake',
            organicCarbon: 'Poor soil structure, reduced water retention'
        };

        return symptoms[paramName] || null;
    }

    // Calculate overall fertility score - FIXED VERSION
    calculateFertilityScore(analysisData) {
        const weights = {
            nitrogen: 0.25,
            phosphorus: 0.20,
            potassium: 0.20,
            ph: 0.15,
            organicCarbon: 0.12,
            electricalConductivity: 0.08
        };

        let totalScore = 0;
        let totalWeight = 0;

        // FIXED: Check if analysisData exists and iterate properly
        if (!analysisData || typeof analysisData !== 'object') {
            return {
                score: 0,
                classification: this.getFertilityClassification(0)
            };
        }

        Object.keys(weights).forEach(param => {
            if (analysisData[param] && analysisData[param].score !== undefined) {
                totalScore += analysisData[param].score * weights[param];
                totalWeight += weights[param];
            }
        });

        const score = totalWeight > 0 ? Math.round(totalScore / totalWeight) : 0;

        return {
            score: score,
            classification: this.getFertilityClassification(score)
        };
    }

    getFertilityClassification(score) {
        if (score >= 80) {
            return {
                label: 'Excellent Fertility',
                action: 'Maintain current practices',
                color: '#10b981'
            };
        } else if (score >= 65) {
            return {
                label: 'Good Fertility',
                action: 'Minor improvements needed',
                color: '#22c55e'
            };
        } else if (score >= 50) {
            return {
                label: 'Fair Fertility',
                action: 'Moderate improvements required',
                color: '#eab308'
            };
        } else if (score >= 35) {
            return {
                label: 'Poor Fertility',
                action: 'Significant improvements needed',
                color: '#f97316'
            };
        } else {
            return {
                label: 'Very Poor Fertility',
                action: 'Major rehabilitation required',
                color: '#ef4444'
            };
        }
    }

    // Generate recommendations based on analysis - FIXED VERSION
    generateRecommendations(analysisData) {
        const recommendations = [];

        // FIXED: Check if analysisData exists
        if (!analysisData || typeof analysisData !== 'object') {
            return [{
                type: 'error',
                priority: 'high',
                message: 'Unable to generate recommendations',
                details: 'Please check your input data and try again.',
                cost: 0,
                timeline: 'N/A'
            }];
        }

        // Check each parameter and generate specific recommendations
        Object.keys(analysisData).forEach(param => {
            const data = analysisData[param];
            if (!data || data.level === undefined) return;

            const recs = this.getParameterRecommendations(param, data);
            recommendations.push(...recs);
        });

        // Add default recommendation if no specific ones generated
        if (recommendations.length === 0) {
            recommendations.push({
                type: 'maintenance',
                priority: 'low',
                message: 'Continue current soil management practices',
                details: 'Your soil parameters appear to be in acceptable ranges. Monitor regularly and maintain current practices.',
                cost: 0,
                timeline: 'Ongoing'
            });
        }

        // Sort by priority
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        return recommendations.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    }

    getParameterRecommendations(paramName, data) {
        const recommendations = [];

        if (data.level === 'Low') {
            switch (paramName) {
                case 'nitrogen':
                    recommendations.push({
                        type: 'nutrient_management',
                        priority: 'high',
                        message: 'Apply nitrogen fertilizer to address deficiency',
                        details: `Apply 50-100 kg/ha of urea or equivalent nitrogen source. Split application: 50% at base, 25% at tillering, 25% at flowering stage.`,
                        cost: 5000,
                        timeline: '2-3 weeks'
                    });
                    break;

                case 'phosphorus':
                    recommendations.push({
                        type: 'nutrient_management',
                        priority: 'high',
                        message: 'Increase phosphorus levels for better root development',
                        details: `Apply 40-60 kg/ha of single super phosphate (SSP) or diammonium phosphate (DAP) as basal application.`,
                        cost: 4000,
                        timeline: '1-2 weeks'
                    });
                    break;

                case 'potassium':
                    recommendations.push({
                        type: 'nutrient_management',
                        priority: 'medium',
                        message: 'Apply potassium fertilizer for disease resistance',
                        details: `Apply 30-50 kg/ha of muriate of potash (MOP). Split application: 50% at base, 50% at flowering.`,
                        cost: 3500,
                        timeline: '2-3 weeks'
                    });
                    break;

                case 'ph':
                    if (data.value < 6.0) {
                        recommendations.push({
                            type: 'soil_amendment',
                            priority: 'high',
                            message: 'Apply lime to correct soil acidity',
                            details: `Apply 2-3 tonnes/ha of agricultural lime. Best applied 2-3 months before sowing for proper reaction.`,
                            cost: 8000,
                            timeline: '2-3 months'
                        });
                    } else if (data.value > 8.0) {
                        recommendations.push({
                            type: 'soil_amendment',
                            priority: 'high',
                            message: 'Apply gypsum to reduce alkalinity',
                            details: `Apply 1-2 tonnes/ha of gypsum. Can be applied before monsoon for better leaching effect.`,
                            cost: 6000,
                            timeline: '1-2 months'
                        });
                    }
                    break;

                case 'organicCarbon':
                    recommendations.push({
                        type: 'organic_management',
                        priority: 'medium',
                        message: 'Increase organic matter content',
                        details: `Apply 10-15 tonnes/ha of well-decomposed farmyard manure or compost. Incorporate green manure crops in rotation.`,
                        cost: 12000,
                        timeline: '3-6 months'
                    });
                    break;

                case 'electricalConductivity':
                    if (data.value > 2.0) {
                        recommendations.push({
                            type: 'soil_amendment',
                            priority: 'high',
                            message: 'Manage soil salinity levels',
                            details: `Improve drainage and apply gypsum (1-2 t/ha). Leach salts with excess irrigation if water quality is good.`,
                            cost: 7000,
                            timeline: '2-4 months'
                        });
                    }
                    break;
            }
        }

        return recommendations;
    }

    // Calculate soil health indices - FIXED VERSION
    calculateSoilHealthIndex(analysisData) {
        // FIXED: Check if analysisData exists
        if (!analysisData || typeof analysisData !== 'object') {
            return {
                overall: 50,
                indicators: {
                    chemical: 50,
                    physical: 50,
                    biological: 50
                }
            };
        }

        // Chemical health (based on pH, EC, nutrients)
        const chemicalParams = ['nitrogen', 'phosphorus', 'potassium', 'ph', 'electricalConductivity'];
        const chemicalScores = chemicalParams.map(param =>
            analysisData[param] ? analysisData[param].score : 50
        );
        const chemical = Math.round(chemicalScores.reduce((a, b) => a + b, 0) / chemicalScores.length);

        // Physical health (based on organic carbon and structure)
        const physical = analysisData.organicCarbon ? Math.round(analysisData.organicCarbon.score) : 50;

        // Biological health (estimated from organic carbon and pH)
        const biological = Math.round((physical + (analysisData.ph ? analysisData.ph.score : 50)) / 2);

        return {
            overall: Math.round((chemical + physical + biological) / 3),
            indicators: {
                chemical: chemical,
                physical: physical,
                biological: biological
            }
        };
    }

    // Calculate cost-benefit analysis
    calculateCostBenefit(recommendations = [], landArea = 1) {
        // FIXED: Handle empty or undefined recommendations
        if (!Array.isArray(recommendations)) {
            recommendations = [];
        }

        const totalCost = recommendations.reduce((sum, rec) => sum + (rec.cost || 0), 0) * landArea;

        // Estimate yield increase based on recommendations
        let yieldIncrease = 0;
        recommendations.forEach(rec => {
            if (rec.priority === 'high') yieldIncrease += 15;
            else if (rec.priority === 'medium') yieldIncrease += 8;
            else yieldIncrease += 3;
        });

        yieldIncrease = Math.min(yieldIncrease, 50); // Cap at 50% increase

        // Estimate economic returns (assuming average crop value)
        const averageCropValuePerHa = 80000; // INR per hectare
        const expectedReturn = (averageCropValuePerHa * landArea * yieldIncrease) / 100;

        const roi = expectedReturn > 0 && totalCost > 0 ? parseFloat((expectedReturn / totalCost).toFixed(1)) : 0;
        const paybackPeriod = roi > 0 ? parseFloat((1 / roi).toFixed(1)) : 0;

        return {
            totalCost: Math.round(totalCost),
            expectedReturn: Math.round(expectedReturn),
            roi: roi,
            yieldIncrease: Math.round(yieldIncrease),
            paybackPeriod: paybackPeriod
        };
    }

    // Generate environmental impact assessment
    generateEnvironmentalImpact(analysisData = {}, recommendations = []) {
        const impacts = [];

        // FIXED: Handle undefined parameters
        if (!Array.isArray(recommendations)) {
            recommendations = [];
        }

        // Check for high fertilizer recommendations
        const fertilizerRecs = recommendations.filter(rec =>
            rec.type === 'nutrient_management' && rec.priority === 'high'
        );

        if (fertilizerRecs.length > 2) {
            impacts.push({
                factor: 'Nutrient Runoff Risk',
                level: 'medium',
                impact: 'High fertilizer application may increase risk of nutrient runoff to water bodies',
                recommendation: 'Use split application and consider slow-release fertilizers'
            });
        }

        // Check pH modification needs
        const pHData = analysisData.ph;
        if (pHData && (pHData.value < 5.5 || pHData.value > 8.5)) {
            impacts.push({
                factor: 'Soil Chemistry',
                level: 'high',
                impact: 'Extreme pH levels affect nutrient availability and microbial activity',
                recommendation: 'Gradual pH correction with appropriate amendments'
            });
        }

        // Organic matter benefits
        const ocData = analysisData.organicCarbon;
        if (ocData && ocData.level === 'Low') {
            impacts.push({
                factor: 'Carbon Sequestration',
                level: 'medium',
                impact: 'Low organic matter reduces soil carbon storage potential',
                recommendation: 'Increase organic inputs and practice conservation tillage'
            });
        }

        return impacts;
    }

    // Main method to generate complete analysis report - FIXED VERSION
    generateDetailedReport(formData) {
        console.log('Generating report for:', formData); // Debug log

        // FIXED: Check if formData exists
        if (!formData || typeof formData !== 'object') {
            console.error('Invalid form data provided');
            return this.getErrorReport();
        }

        // Analyze each parameter
        const analysisData = {};
        const paramKeys = ['nitrogen', 'phosphorus', 'potassium', 'ph', 'electricalConductivity', 'organicCarbon'];

        paramKeys.forEach(param => {
            if (formData[param] && formData[param] !== '') {
                analysisData[param] = this.analyzeParameter(param, formData[param]);
                console.log(`Analyzed ${param}:`, analysisData[param]); // Debug log
            }
        });

        console.log('Analysis data:', analysisData); // Debug log

        // Calculate overall scores and recommendations
        const fertilityScore = this.calculateFertilityScore(analysisData);
        const soilHealthIndex = this.calculateSoilHealthIndex(analysisData);
        const recommendations = this.generateRecommendations(analysisData);
        const environmentalImpact = this.generateEnvironmentalImpact(analysisData, recommendations);

        console.log('Final report generated successfully'); // Debug log

        return {
            analysisData: analysisData,
            fertilityScore: fertilityScore,
            soilHealthIndex: soilHealthIndex,
            recommendations: recommendations,
            environmentalImpact: environmentalImpact,
            timestamp: new Date().toISOString(),
            inputData: formData
        };
    }

    // Error report fallback
    getErrorReport() {
        return {
            analysisData: {},
            fertilityScore: {
                score: 0,
                classification: {
                    label: 'Unable to Analyze',
                    action: 'Please check input data',
                    color: '#6b7280'
                }
            },
            soilHealthIndex: {
                overall: 0,
                indicators: {
                    chemical: 0,
                    physical: 0,
                    biological: 0
                }
            },
            recommendations: [{
                type: 'error',
                priority: 'high',
                message: 'Analysis Error',
                details: 'Unable to analyze soil data. Please ensure all required fields are filled with valid numbers.',
                cost: 0,
                timeline: 'N/A'
            }],
            environmentalImpact: [],
            timestamp: new Date().toISOString(),
            inputData: {}
        };
    }
}

export default SoilAnalysisEngine;
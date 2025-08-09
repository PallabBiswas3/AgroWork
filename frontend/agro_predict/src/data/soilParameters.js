// Comprehensive Soil Parameters Database
const soilParameters = {
    soil_parameters: {
        primary_nutrients: {
            "N (Nitrogen)": {
                unit: "kg/ha",
                ranges: {
                    Low: { max: 200, label: "<200" },
                    Medium: { min: 200, max: 400, label: "200-400" },
                    High: { min: 400, label: ">400" }
                },
                optimal_range: { min: 200, max: 400, label: "200-400" },
                importance: "Essential for protein synthesis, chlorophyll production, and overall plant growth",
                deficiency_symptoms: "Yellowing of older leaves (chlorosis), stunted growth, reduced tillering",
                excess_symptoms: "Excessive vegetative growth, delayed maturity, lodging, increased disease susceptibility",
                functions: [
                    "Component of amino acids, proteins, and enzymes",
                    "Essential for chlorophyll synthesis",
                    "Promotes vegetative growth and tillering",
                    "Influences grain protein content"
                ],
                sources: {
                    organic: ["Farmyard manure", "Compost", "Green manure", "Crop residues"],
                    inorganic: ["Urea", "Ammonium sulfate", "CAN", "DAP"]
                },
                application_timing: [
                    "Basal: 50% at sowing/transplanting",
                    "First top-dress: 25% at tillering/30 DAS",
                    "Second top-dress: 25% at panicle initiation/45 DAS"
                ],
                crop_specific: {
                    rice: "120-150 kg/ha",
                    wheat: "80-120 kg/ha",
                    maize: "120-180 kg/ha",
                    cotton: "100-150 kg/ha"
                }
            },
            "P (Phosphorus)": {
                unit: "kg/ha",
                ranges: {
                    Low: { max: 15, label: "<15" },
                    Medium: { min: 15, max: 30, label: "15-30" },
                    High: { min: 30, label: ">30" }
                },
                optimal_range: { min: 15, max: 30, label: "15-30" },
                importance: "Critical for root development, energy transfer (ATP), and reproductive growth",
                deficiency_symptoms: "Purple/reddish leaf coloration, poor root development, delayed flowering",
                excess_symptoms: "Reduced availability of zinc and iron, potential environmental concerns",
                functions: [
                    "Energy storage and transfer (ATP, ADP)",
                    "Root development and establishment",
                    "Flower and seed formation",
                    "Early plant vigor"
                ],
                sources: {
                    organic: ["Rock phosphate", "Bone meal", "Compost"],
                    inorganic: ["Single Super Phosphate (SSP)", "Triple Super Phosphate (TSP)", "DAP", "MAP"]
                },
                application_timing: [
                    "Basal application before sowing/transplanting",
                    "Band placement near seed/seedling for efficiency"
                ],
                crop_specific: {
                    rice: "40-60 kg/ha",
                    wheat: "40-60 kg/ha",
                    maize: "60-90 kg/ha",
                    cotton: "50-75 kg/ha"
                }
            },
            "K (Potassium)": {
                unit: "kg/ha",
                ranges: {
                    Low: { max: 150, label: "<150" },
                    Medium: { min: 150, max: 300, label: "150-300" },
                    High: { min: 300, label: ">300" }
                },
                optimal_range: { min: 150, max: 300, label: "150-300" },
                importance: "Essential for water regulation, disease resistance, and grain quality",
                deficiency_symptoms: "Yellowing and browning of leaf margins, weak stems, increased disease susceptibility",
                excess_symptoms: "Reduced uptake of magnesium and calcium",
                functions: [
                    "Osmotic regulation and water management",
                    "Enzyme activation and protein synthesis",
                    "Disease and stress resistance",
                    "Grain filling and quality improvement"
                ],
                sources: {
                    organic: ["Wood ash", "Kelp meal", "Banana peels compost"],
                    inorganic: ["Muriate of Potash (MOP)", "Sulphate of Potash (SOP)", "Potassium nitrate"]
                },
                application_timing: [
                    "Basal: 50% at sowing/transplanting",
                    "Top-dress: 50% at flowering/grain filling stage"
                ],
                crop_specific: {
                    rice: "40-60 kg/ha",
                    wheat: "40-50 kg/ha",
                    maize: "40-60 kg/ha",
                    cotton: "50-75 kg/ha"
                }
            }
        },
        soil_properties: {
            "pH": {
                ranges: {
                    "Strongly Acidic": { max: 5.0, label: "<5.0" },
                    "Moderately Acidic": { min: 5.0, max: 5.5, label: "5.0-5.5" },
                    "Slightly Acidic": { min: 5.5, max: 6.5, label: "5.5-6.5" },
                    "Neutral": { min: 6.5, max: 7.5, label: "6.5-7.5" },
                    "Slightly Alkaline": { min: 7.5, max: 8.5, label: "7.5-8.5" },
                    "Moderately Alkaline": { min: 8.5, max: 9.0, label: "8.5-9.0" },
                    "Strongly Alkaline": { min: 9.0, label: ">9.0" }
                },
                optimal_range: { min: 6.0, max: 7.5, label: "6.0-7.5" },
                importance: "Controls nutrient availability, microbial activity, and chemical reactions",
                effects: {
                    acidic: {
                        problems: ["Aluminum and manganese toxicity", "Reduced phosphorus availability", "Poor nodulation in legumes"],
                        solutions: ["Lime application", "Organic matter addition", "Use of acid-tolerant varieties"]
                    },
                    alkaline: {
                        problems: ["Iron and zinc deficiency", "Reduced phosphorus availability", "Poor organic matter decomposition"],
                        solutions: ["Sulfur application", "Organic matter addition", "Iron chelate application"]
                    }
                },
                management: {
                    soil_testing: "Annual testing recommended",
                    lime_requirement: "LR = (Target pH - Current pH) × Buffer capacity",
                    gypsum_application: "For sodic soils with high sodium"
                }
            },
            "EC (Electrical Conductivity)": {
                unit: "dS/m",
                ranges: {
                    "Non-saline": { max: 2, label: "<2" },
                    "Slightly saline": { min: 2, max: 4, label: "2-4" },
                    "Moderately saline": { min: 4, max: 8, label: "4-8" },
                    "Highly saline": { min: 8, max: 16, label: "8-16" },
                    "Extremely saline": { min: 16, label: ">16" }
                },
                optimal_range: { max: 2, label: "<2 dS/m" },
                importance: "Indicates soil salinity level affecting water uptake and plant growth",
                effects: {
                    low_salinity: "Normal plant growth and development",
                    moderate_salinity: "Reduced yields in sensitive crops, need for salt-tolerant varieties",
                    high_salinity: "Severe yield reduction, limited crop options"
                },
                management: {
                    leaching: "Apply excess water to leach salts below root zone",
                    drainage: "Improve soil drainage to prevent salt accumulation",
                    amendments: "Use gypsum for sodic soils, organic matter for structure"
                },
                crop_tolerance: {
                    sensitive: ["Beans", "Onion", "Carrot", "Strawberry"],
                    moderately_tolerant: ["Corn", "Wheat", "Soybean", "Rice"],
                    tolerant: ["Barley", "Cotton", "Sugar beet", "Date palm"]
                }
            },
            "OC (Organic Carbon)": {
                unit: "%",
                ranges: {
                    Low: { max: 0.5, label: "<0.5" },
                    Medium: { min: 0.5, max: 0.75, label: "0.5-0.75" },
                    High: { min: 0.75, label: ">0.75" }
                },
                optimal_range: { min: 0.75, label: ">0.75%" },
                importance: "Indicates soil organic matter content, affects nutrient cycling and soil health",
                benefits: [
                    "Improves soil structure and aggregation",
                    "Enhances water holding capacity",
                    "Provides slow-release nutrients",
                    "Supports beneficial microorganisms",
                    "Increases cation exchange capacity"
                ],
                improvement_strategies: [
                    "Regular addition of farmyard manure (5-10 t/ha)",
                    "Incorporation of crop residues",
                    "Growing green manure crops",
                    "Reduced tillage practices",
                    "Cover cropping"
                ],
                calculation: "Organic Matter (%) = Organic Carbon (%) × 1.724"
            }
        },
        micronutrients: {
            "Zn (Zinc)": {
                unit: "ppm",
                ranges: {
                    Deficient: { max: 0.6, label: "<0.6" },
                    Adequate: { min: 0.6, max: 1.2, label: "0.6-1.2" },
                    High: { min: 1.2, label: ">1.2" }
                },
                optimal_range: { min: 0.6, max: 1.2, label: "0.6-1.2 ppm" },
                importance: "Essential for enzyme systems, protein synthesis, and growth regulation",
                deficiency_symptoms: "Interveinal chlorosis, stunted growth, reduced grain size",
                sources: ["Zinc sulfate", "Zinc chelate", "Zinc oxide"],
                application: "Soil: 25 kg ZnSO4/ha, Foliar: 0.5% ZnSO4 solution"
            },
            "Fe (Iron)": {
                unit: "ppm",
                ranges: {
                    Deficient: { max: 4.5, label: "<4.5" },
                    Adequate: { min: 4.5, max: 9.0, label: "4.5-9.0" },
                    High: { min: 9.0, label: ">9.0" }
                },
                optimal_range: { min: 4.5, max: 9.0, label: "4.5-9.0 ppm" },
                importance: "Essential for chlorophyll synthesis and electron transport",
                deficiency_symptoms: "Interveinal chlorosis of young leaves, reduced photosynthesis",
                sources: ["Iron sulfate", "Iron chelate (EDTA/EDDHA)", "Iron pyrite"],
                application: "Soil: 50 kg FeSO4/ha, Foliar: 1% FeSO4 solution"
            },
            "Mn (Manganese)": {
                unit: "ppm",
                ranges: {
                    Deficient: { max: 2.0, label: "<2.0" },
                    Adequate: { min: 2.0, max: 5.0, label: "2.0-5.0" },
                    High: { min: 5.0, label: ">5.0" }
                },
                optimal_range: { min: 2.0, max: 5.0, label: "2.0-5.0 ppm" },
                importance: "Involved in photosynthesis, nitrogen metabolism, and disease resistance",
                deficiency_symptoms: "Interveinal chlorosis, necrotic spots, poor grain filling",
                sources: ["Manganese sulfate", "Manganese chelate", "Manganese oxide"],
                application: "Soil: 20 kg MnSO4/ha, Foliar: 0.5% MnSO4 solution"
            },
            "Cu (Copper)": {
                unit: "ppm",
                ranges: {
                    Deficient: { max: 0.3, label: "<0.3" },
                    Adequate: { min: 0.3, max: 0.8, label: "0.3-0.8" },
                    High: { min: 0.8, label: ">0.8" }
                },
                optimal_range: { min: 0.3, max: 0.8, label: "0.3-0.8 ppm" },
                importance: "Essential for enzyme systems and lignin synthesis",
                deficiency_symptoms: "Tip dieback, poor grain formation, increased disease susceptibility",
                sources: ["Copper sulfate", "Copper chelate", "Copper oxide"],
                application: "Soil: 25 kg CuSO4/ha, Foliar: 0.2% CuSO4 solution"
            },
            "B (Boron)": {
                unit: "ppm",
                ranges: {
                    Deficient: { max: 0.5, label: "<0.5" },
                    Adequate: { min: 0.5, max: 1.0, label: "0.5-1.0" },
                    High: { min: 1.0, label: ">1.0" }
                },
                optimal_range: { min: 0.5, max: 1.0, label: "0.5-1.0 ppm" },
                importance: "Essential for cell wall formation and reproductive development",
                deficiency_symptoms: "Hollow stem, poor seed set, cracked fruits",
                sources: ["Borax", "Boric acid", "Boron chelate"],
                application: "Soil: 10 kg Borax/ha, Foliar: 0.1% Borax solution"
            },
            "Mo (Molybdenum)": {
                unit: "ppm",
                ranges: {
                    Deficient: { max: 0.15, label: "<0.15" },
                    Adequate: { min: 0.15, max: 0.50, label: "0.15-0.50" },
                    High: { min: 0.50, label: ">0.50" }
                },
                optimal_range: { min: 0.15, max: 0.50, label: "0.15-0.50 ppm" },
                importance: "Essential for nitrogen fixation and nitrate reduction",
                deficiency_symptoms: "Pale green to yellow leaves, poor nodulation in legumes",
                sources: ["Ammonium molybdate", "Sodium molybdate"],
                application: "Soil: 1-2 kg/ha, Seed treatment: 2-4 g/kg seed"
            }
        }
    },
    environmental_factors: {
        temperature: {
            unit: "°C",
            ranges: {
                "Very Cold": { max: 5, label: "<5°C" },
                "Cold": { min: 5, max: 15, label: "5-15°C" },
                "Cool": { min: 15, max: 20, label: "15-20°C" },
                "Optimal": { min: 20, max: 30, label: "20-30°C" },
                "Warm": { min: 30, max: 35, label: "30-35°C" },
                "Hot": { min: 35, max: 40, label: "35-40°C" },
                "Very Hot": { min: 40, label: ">40°C" }
            },
            optimal_range: { min: 20, max: 30, label: "20-30°C" },
            impact: "Affects microbial activity, nutrient mineralization, and root growth",
            effects: {
                low_temperature: ["Reduced microbial activity", "Slow nutrient release", "Poor root growth"],
                high_temperature: ["Increased evaporation", "Heat stress", "Reduced nutrient uptake"]
            }
        },
        moisture: {
            unit: "%",
            ranges: {
                "Very Dry": { max: 10, label: "<10%" },
                "Dry": { min: 10, max: 25, label: "10-25%" },
                "Adequate": { min: 25, max: 40, label: "25-40%" },
                "Optimal": { min: 40, max: 60, label: "40-60%" },
                "Moist": { min: 60, max: 75, label: "60-75%" },
                "Wet": { min: 75, max: 85, label: "75-85%" },
                "Waterlogged": { min: 85, label: ">85%" }
            },
            optimal_range: { min: 40, max: 60, label: "40-60%" },
            impact: "Controls nutrient mobility, root development, and plant water uptake"
        },
        humidity: {
            unit: "%",
            ranges: {
                "Very Low": { max: 30, label: "<30%" },
                "Low": { min: 30, max: 50, label: "30-50%" },
                "Moderate": { min: 50, max: 70, label: "50-70%" },
                "High": { min: 70, max: 85, label: "70-85%" },
                "Very High": { min: 85, label: ">85%" }
            },
            optimal_range: { min: 50, max: 70, label: "50-70%" },
            impact: "Affects disease pressure, transpiration rate, and nutrient uptake efficiency"
        },
        rainfall: {
            unit: "mm",
            ranges: {
                "Arid": { max: 250, label: "<250mm" },
                "Semi-arid": { min: 250, max: 500, label: "250-500mm" },
                "Sub-humid": { min: 500, max: 750, label: "500-750mm" },
                "Humid": { min: 750, max: 1000, label: "750-1000mm" },
                "Very Humid": { min: 1000, label: ">1000mm" }
            },
            seasonal_distribution: {
                monsoon: "75% during June-September",
                winter: "15% during October-February",
                summer: "10% during March-May"
            },
            impact: "Determines cropping patterns, irrigation needs, and nutrient leaching"
        }
    },
    fertility_assessment: {
        scoring_methodology: {
            primary_nutrients: {
                weight: 0.55,
                components: {
                    nitrogen: 0.25,
                    phosphorus: 0.15,
                    potassium: 0.15
                }
            },
            soil_properties: {
                weight: 0.35,
                components: {
                    pH: 0.15,
                    organic_carbon: 0.12,
                    electrical_conductivity: 0.08
                }
            },
            micronutrients: {
                weight: 0.10,
                components: {
                    zinc: 0.04,
                    iron: 0.03,
                    others: 0.03
                }
            }
        },
        scoring_ranges: {
            excellent: { min: 85, max: 100, label: "85-100", color: "#10b981", action: "Maintain current practices" },
            good: { min: 70, max: 84, label: "70-84", color: "#22c55e", action: "Minor improvements needed" },
            fair: { min: 55, max: 69, label: "55-69", color: "#eab308", action: "Moderate improvements required" },
            poor: { min: 40, max: 54, label: "40-54", color: "#f97316", action: "Significant improvements needed" },
            very_poor: { min: 0, max: 39, label: "0-39", color: "#ef4444", action: "Major rehabilitation required" }
        },
        interpretation: {
            excellent: {
                description: "Exceptional soil fertility with optimal nutrient balance",
                recommendations: ["Maintain current fertilization program", "Monitor soil health annually", "Continue organic matter additions"]
            },
            good: {
                description: "Good soil fertility with minor nutrient imbalances",
                recommendations: ["Fine-tune fertilizer applications", "Address specific nutrient deficiencies", "Maintain soil organic matter"]
            },
            fair: {
                description: "Moderate soil fertility requiring targeted improvements",
                recommendations: ["Implement balanced fertilization program", "Increase organic matter content", "Address pH issues if present"]
            },
            poor: {
                description: "Poor soil fertility with significant nutrient limitations",
                recommendations: ["Comprehensive soil improvement program", "Major nutrient corrections needed", "Soil structure improvement priority"]
            },
            very_poor: {
                description: "Very poor soil fertility requiring major rehabilitation",
                recommendations: ["Complete soil rehabilitation program", "Address multiple limiting factors", "Consider soil amendments and organic inputs"]
            }
        }
    },
    crop_recommendations: {
        nutrient_based: {
            high_nitrogen: {
                suitable_crops: ["Leafy vegetables", "Maize", "Sugarcane", "Rice"],
                management: "Monitor for excessive vegetative growth, balance with P and K"
            },
            high_phosphorus: {
                suitable_crops: ["Root vegetables", "Legumes", "Oilseeds"],
                management: "Excellent for establishment phase, may reduce Zn availability"
            },
            high_potassium: {
                suitable_crops: ["Fruits", "Tuber crops", "Quality grains"],
                management: "Good for stress resistance and quality parameters"
            }
        },
        pH_based: {
            acidic_soils: {
                ph_range: "5.0-6.0",
                suitable_crops: ["Rice", "Tea", "Coffee", "Potato", "Blueberries"],
                management: ["Liming for sensitive crops", "Use of acid-tolerant varieties", "Al-toxicity management"]
            },
            neutral_soils: {
                ph_range: "6.5-7.5",
                suitable_crops: ["Most crops", "Wheat", "Maize", "Cotton", "Vegetables"],
                management: ["Maintain pH through balanced fertilization", "Regular monitoring"]
            },
            alkaline_soils: {
                ph_range: "7.5-8.5",
                suitable_crops: ["Barley", "Sugar beet", "Alfalfa", "Mustard"],
                management: ["Iron deficiency management", "Use of sulfur amendments", "Organic matter addition"]
            }
        }
    },
    soil_improvement_recommendations: {
        organic_amendments: {
            farmyard_manure: {
                application_rate: "10-15 t/ha",
                nutrient_content: "N: 0.5%, P: 0.2%, K: 0.5%",
                benefits: ["Improves soil structure", "Increases water holding capacity", "Slow nutrient release"],
                application_timing: "2-3 weeks before sowing"
            },
            compost: {
                application_rate: "5-8 t/ha",
                nutrient_content: "N: 1.5%, P: 0.5%, K: 1.0%",
                benefits: ["Balanced nutrition", "Disease suppression", "Improved soil biology"],
                application_timing: "At field preparation"
            },
            green_manure: {
                application_rate: "15-20 t/ha fresh weight",
                recommended_crops: ["Dhaincha", "Sunhemp", "Cowpea", "Sesbania"],
                benefits: ["Nitrogen fixation", "Soil structure improvement", "Weed suppression"],
                incorporation_time: "45-50 days after sowing or at 50% flowering"
            }
        },
        inorganic_amendments: {
            lime: {
                application_rate: "2-5 t/ha",
                purpose: "Neutralize soil acidity",
                calculation: "Lime requirement = (Target pH - Current pH) × Soil buffer capacity",
                timing: "2-3 months before crop season"
            },
            gypsum: {
                application_rate: "1-2 t/ha",
                purpose: "Improve sodic soils and provide sulfur",
                benefits: ["Reduces sodium toxicity", "Improves water infiltration", "Supplies calcium and sulfur"],
                timing: "Before monsoon for better leaching"
            }
        }
    }
};

export default soilParameters;
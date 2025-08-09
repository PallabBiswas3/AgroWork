export const DISEASE_DATABASE = {
    // Rice Diseases
    rice_blast: {
        crop: "Rice",
        disease_name: "Rice Blast (Pyricularia oryzae)",
        severity: "High",
        type: "Fungal",
        description: "One of the most destructive rice diseases worldwide, affecting leaves, nodes, and panicles",
        symptoms: {
            leaf: ["Gray-green lesions with white centers", "Diamond-shaped spots", "Brown borders around lesions", "Yellowing of affected areas"],
            stem: ["Dark brown lesions on nodes", "Breaking of culms at nodes", "Black streaks on internodes"],
            root: ["Generally not affected", "Secondary root rot possible"],
            other: ["Neck blast causes panicle breakage", "Poor grain filling"]
        },
        mineral_deficiency: {
            primary: ["Excessive nitrogen", "Silicon deficiency", "Potassium deficiency"],
            secondary: ["Phosphorus imbalance", "Calcium deficiency"]
        },
        environmental_factors: {
            temperature: [20, 30],
            humidity: [85, 100],
            conditions: ["High humidity", "Warm temperatures", "Dense planting", "Excessive nitrogen"]
        },
        treatment: {
            chemical: ["Tricyclazole", "Carbendazim", "Propiconazole"],
            organic: ["Neem oil", "Trichoderma", "Pseudomonas"],
            management: ["Balanced fertilization", "Proper spacing", "Water management", "Resistant varieties"]
        },
        prevention: "Use resistant varieties, balanced fertilization, avoid excessive nitrogen",
        affected_parts: ["leaves", "stem", "panicles"]
    },

    rice_bacterial_blight: {
        crop: "Rice",
        disease_name: "Bacterial Leaf Blight (Xanthomonas oryzae)",
        severity: "High",
        type: "Bacterial",
        description: "Most serious bacterial disease of rice causing significant yield losses",
        symptoms: {
            leaf: ["Water-soaked lesions", "Yellow streaks along leaf veins", "Wilting from leaf tips", "Kresek symptom in seedlings"],
            stem: ["Systemic infection", "Yellowing of entire tillers", "Stunting"],
            root: ["Root rot in severe cases", "Poor root development"],
            other: ["Bacterial ooze from cut surfaces", "Foul smell"]
        },
        mineral_deficiency: {
            primary: ["Excessive nitrogen", "Potassium deficiency"],
            secondary: ["Phosphorus imbalance", "Micronutrient deficiency"]
        },
        environmental_factors: {
            temperature: [25, 34],
            humidity: [70, 90],
            conditions: ["High humidity", "Wounds", "Dense planting", "Flooding"]
        },
        treatment: {
            chemical: ["Copper oxychloride", "Streptomycin", "Bacteriophage"],
            organic: ["Pseudomonas fluorescens", "Plant extracts"],
            management: ["Resistant varieties", "Crop rotation", "Proper drainage"]
        },
        prevention: "Use certified seeds, avoid injuries, proper water management",
        affected_parts: ["leaves", "stem", "entire plant"]
    },

    // Wheat Diseases
    wheat_rust: {
        crop: "Wheat",
        disease_name: "Wheat Rust (Puccinia species)",
        severity: "Very High",
        type: "Fungal",
        description: "Three types of rust affect wheat: leaf rust, stem rust, and stripe rust",
        symptoms: {
            leaf: ["Orange-red pustules", "Yellowish streaks", "Premature yellowing", "Circular rust pustules"],
            stem: ["Reddish-brown pustules", "Black pustules later", "Stem breaking", "Lodging"],
            root: ["Not directly affected", "Nutrient uptake reduced"],
            other: ["Reduced grain weight", "Shriveled grains", "Poor quality"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency", "Phosphorus deficiency"],
            secondary: ["Micronutrient imbalance", "Excessive nitrogen"]
        },
        environmental_factors: {
            temperature: [15, 25],
            humidity: [70, 100],
            conditions: ["Cool moist weather", "Dew formation", "Wind dispersal"]
        },
        treatment: {
            chemical: ["Propiconazole", "Mancozeb", "Tebuconazole"],
            organic: ["Sulfur spray", "Neem extract"],
            management: ["Resistant varieties", "Early sowing", "Proper spacing"]
        },
        prevention: "Use rust-resistant varieties, avoid late planting",
        affected_parts: ["leaves", "stem", "spikes"]
    },

    wheat_powdery_mildew: {
        crop: "Wheat",
        disease_name: "Powdery Mildew (Erysiphe graminis)",
        severity: "Medium",
        type: "Fungal",
        description: "Common disease causing white powdery growth on leaves and stems",
        symptoms: {
            leaf: ["White powdery coating", "Yellowing of leaves", "Stunted growth", "Chlorotic patches"],
            stem: ["White fungal growth", "Reduced vigor"],
            root: ["Not affected directly", "Poor nutrient uptake"],
            other: ["Reduced photosynthesis", "Poor grain filling"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency", "Silicon deficiency"],
            secondary: ["Excessive nitrogen", "Phosphorus imbalance"]
        },
        environmental_factors: {
            temperature: [15, 22],
            humidity: [50, 70],
            conditions: ["Cool humid weather", "Dense canopy", "Poor air circulation"]
        },
        treatment: {
            chemical: ["Sulfur", "Propiconazole", "Triadimefon"],
            organic: ["Milk spray", "Baking soda", "Neem oil"],
            management: ["Proper spacing", "Avoid excessive nitrogen"]
        },
        prevention: "Good ventilation, balanced fertilization",
        affected_parts: ["leaves", "stem"]
    },

    // Cotton Diseases
    cotton_wilt: {
        crop: "Cotton",
        disease_name: "Cotton Wilt (Fusarium oxysporum)",
        severity: "Very High",
        type: "Fungal",
        description: "Soil-borne fungal disease causing vascular wilt",
        symptoms: {
            leaf: ["Yellowing from bottom", "Wilting", "Brown veins", "Leaf drop"],
            stem: ["Brown discoloration in vascular bundles", "Stunting", "Cracking"],
            root: ["Root rot", "Brown discoloration", "Poor root development"],
            other: ["Internal browning of stem", "Plant death"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency", "Calcium deficiency"],
            secondary: ["Excessive nitrogen", "Phosphorus imbalance"]
        },
        environmental_factors: {
            temperature: [24, 28],
            humidity: [60, 80],
            conditions: ["Soil temperature 24-28°C", "Poor drainage", "Acidic soil"]
        },
        treatment: {
            chemical: ["Carbendazim", "Trichoderma", "Soil drenching"],
            organic: ["Pseudomonas", "Bacillus subtilis", "Organic amendments"],
            management: ["Resistant varieties", "Crop rotation", "Soil solarization"]
        },
        prevention: "Use wilt-resistant varieties, improve soil health",
        affected_parts: ["leaves", "stem", "root", "entire plant"]
    },

    cotton_bollworm: {
        crop: "Cotton",
        disease_name: "Cotton Bollworm Complex",
        severity: "High",
        type: "Pest",
        description: "Major pest complex affecting cotton bolls and leaves",
        symptoms: {
            leaf: ["Circular holes", "Feeding damage", "Defoliation", "Chewed margins"],
            stem: ["Boring holes", "Entry holes in bolls", "Frass deposits"],
            root: ["Generally not affected", "Secondary infections possible"],
            other: ["Damaged bolls", "Reduced lint quality", "Yield loss"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency makes plants susceptible"],
            secondary: ["Excessive nitrogen attracts pests"]
        },
        environmental_factors: {
            temperature: [25, 35],
            humidity: [60, 80],
            conditions: ["Warm weather", "Favorable breeding conditions"]
        },
        treatment: {
            chemical: ["Bt sprays", "Chlorpyrifos", "Emamectin benzoate"],
            organic: ["NPV", "Trichogramma", "Neem-based products"],
            management: ["Bt cotton varieties", "Pheromone traps", "Timely sowing"]
        },
        prevention: "Use Bt varieties, monitor pest population",
        affected_parts: ["leaves", "bolls", "squares"]
    },

    // Maize Diseases
    maize_blight: {
        crop: "Maize",
        disease_name: "Northern Corn Leaf Blight (Exserohilum turcicum)",
        severity: "High",
        type: "Fungal",
        description: "Important foliar disease of maize causing elongated lesions",
        symptoms: {
            leaf: ["Long elliptical lesions", "Gray-green color", "Tan centers", "Dark borders"],
            stem: ["Lesions on lower internodes", "Reduced plant vigor"],
            root: ["Not directly affected", "Nutrient stress"],
            other: ["Premature senescence", "Reduced grain filling"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency", "Nitrogen excess"],
            secondary: ["Phosphorus imbalance", "Micronutrient deficiency"]
        },
        environmental_factors: {
            temperature: [18, 27],
            humidity: [80, 100],
            conditions: ["High humidity", "Moderate temperatures", "Prolonged leaf wetness"]
        },
        treatment: {
            chemical: ["Mancozeb", "Propiconazole", "Azoxystrobin"],
            organic: ["Trichoderma", "Bacillus subtilis"],
            management: ["Resistant hybrids", "Crop rotation", "Residue management"]
        },
        prevention: "Use resistant varieties, proper plant spacing",
        affected_parts: ["leaves", "stem"]
    },

    // Tomato Diseases
    tomato_early_blight: {
        crop: "Tomato",
        disease_name: "Early Blight (Alternaria solani)",
        severity: "High",
        type: "Fungal",
        description: "Common tomato disease causing characteristic target-spot lesions",
        symptoms: {
            leaf: ["Concentric ring patterns", "Target-spot lesions", "Yellowing", "Defoliation"],
            stem: ["Dark lesions", "Girdling of stem", "Cankers"],
            root: ["Crown rot possible", "Root discoloration"],
            other: ["Fruit rot with concentric rings", "Reduced yield"]
        },
        mineral_deficiency: {
            primary: ["Calcium deficiency", "Potassium deficiency"],
            secondary: ["Magnesium deficiency", "Boron deficiency"]
        },
        environmental_factors: {
            temperature: [24, 29],
            humidity: [80, 90],
            conditions: ["High humidity", "Warm temperatures", "Long wet periods"]
        },
        treatment: {
            chemical: ["Mancozeb", "Chlorothalonil", "Azoxystrobin"],
            organic: ["Copper fungicides", "Trichoderma", "Neem oil"],
            management: ["Drip irrigation", "Mulching", "Crop rotation"]
        },
        prevention: "Avoid overhead irrigation, provide good air circulation",
        affected_parts: ["leaves", "stem", "fruit"]
    },

    tomato_late_blight: {
        crop: "Tomato",
        disease_name: "Late Blight (Phytophthora infestans)",
        severity: "Very High",
        type: "Oomycete",
        description: "Most destructive tomato disease, can destroy entire crop quickly",
        symptoms: {
            leaf: ["Water-soaked lesions", "White sporulation", "Rapid browning", "Foul odor"],
            stem: ["Dark streaks", "Soft rot", "Collapse"],
            root: ["Root rot", "Brown discoloration"],
            other: ["Fruit rot", "Total plant collapse", "White mold on undersides"]
        },
        mineral_deficiency: {
            primary: ["Calcium deficiency", "Potassium deficiency"],
            secondary: ["Excessive nitrogen", "Poor drainage"]
        },
        environmental_factors: {
            temperature: [15, 25],
            humidity: [90, 100],
            conditions: ["Cool wet weather", "High humidity", "Poor air circulation"]
        },
        treatment: {
            chemical: ["Metalaxyl", "Copper compounds", "Mancozeb"],
            organic: ["Bordeaux mixture", "Copper sulfate"],
            management: ["Resistant varieties", "Improved drainage", "Avoid overhead irrigation"]
        },
        prevention: "Use resistant varieties, ensure good drainage",
        affected_parts: ["leaves", "stem", "fruit", "entire plant"]
    },

    // Sugarcane Diseases
    sugarcane_red_rot: {
        crop: "Sugarcane",
        disease_name: "Red Rot (Colletotrichum falcatum)",
        severity: "Very High",
        type: "Fungal",
        description: "Most destructive sugarcane disease causing internal reddening",
        symptoms: {
            leaf: ["Reddish streaks", "Yellowing", "Drying from tips", "Red midrib"],
            stem: ["Internal red discoloration", "Cross bands", "Hollow internodes", "Alcoholic smell"],
            root: ["Root rot", "Poor development"],
            other: ["Stunting", "Reduced sugar content", "Easy breaking of canes"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency", "Silicon deficiency"],
            secondary: ["Excessive nitrogen", "Phosphorus imbalance"]
        },
        environmental_factors: {
            temperature: [25, 32],
            humidity: [70, 90],
            conditions: ["High temperature and humidity", "Waterlogging", "Wounds"]
        },
        treatment: {
            chemical: ["Carbendazim", "Propiconazole", "Hot water treatment of setts"],
            organic: ["Trichoderma treatment", "Pseudomonas"],
            management: ["Resistant varieties", "Healthy seed canes", "Avoid waterlogging"]
        },
        prevention: "Use disease-free setts, proper drainage",
        affected_parts: ["leaves", "stem", "root"]
    },

    // Mustard Diseases
    mustard_white_rust: {
        crop: "Mustard",
        disease_name: "White Rust (Albugo candida)",
        severity: "Medium",
        type: "Oomycete",
        description: "Common disease of cruciferous crops causing white pustules",
        symptoms: {
            leaf: ["White pustules on underside", "Yellowing", "Distortion", "Premature drop"],
            stem: ["Swelling", "Distortion", "Hypertrophy"],
            root: ["Generally not affected"],
            other: ["Reduced seed yield", "Poor oil content"]
        },
        mineral_deficiency: {
            primary: ["Sulfur deficiency", "Potassium deficiency"],
            secondary: ["Excessive nitrogen", "Poor calcium"]
        },
        environmental_factors: {
            temperature: [10, 18],
            humidity: [80, 95],
            conditions: ["Cool humid weather", "Dense planting", "Poor air circulation"]
        },
        treatment: {
            chemical: ["Metalaxyl", "Ridomil", "Copper fungicides"],
            organic: ["Bordeaux mixture", "Neem extract"],
            management: ["Early sowing", "Proper spacing", "Field sanitation"]
        },
        prevention: "Early sowing, avoid dense planting",
        affected_parts: ["leaves", "stem", "inflorescence"]
    },

    // Tea Diseases
    tea_blister_blight: {
        crop: "Tea",
        disease_name: "Blister Blight (Exobasidium vexans)",
        severity: "High",
        type: "Fungal",
        description: "Major tea disease causing blister-like spots on leaves",
        symptoms: {
            leaf: ["Translucent spots", "Blister formation", "White sporulation", "Premature drop"],
            stem: ["Young shoots affected", "Dieback"],
            root: ["Not affected"],
            other: ["Reduced tea quality", "Yield loss", "Defoliation"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency", "Calcium deficiency"],
            secondary: ["Excessive nitrogen", "Magnesium deficiency"]
        },
        environmental_factors: {
            temperature: [20, 25],
            humidity: [80, 100],
            conditions: ["High humidity", "Cool weather", "Prolonged leaf wetness"]
        },
        treatment: {
            chemical: ["Copper fungicides", "Bordeaux mixture"],
            organic: ["Trichoderma", "Plant extracts"],
            management: ["Pruning", "Proper spacing", "Drainage"]
        },
        prevention: "Good drainage, avoid excessive humidity",
        affected_parts: ["leaves", "young shoots"]
    }
};

// Crop-specific common diseases mapping
export const CROP_DISEASES = {
    "Rice": ["rice_blast", "rice_bacterial_blight"],
    "Wheat": ["wheat_rust", "wheat_powdery_mildew"],
    "Cotton": ["cotton_wilt", "cotton_bollworm"],
    "Maize": ["maize_blight"],
    "Tomato": ["tomato_early_blight", "tomato_late_blight"],
    "Sugarcane": ["sugarcane_red_rot"],
    "Mustard": ["mustard_white_rust"],
    "Tea": ["tea_blister_blight"]
};

// Mineral deficiency symptoms
export const MINERAL_DEFICIENCY_SYMPTOMS = {
    nitrogen: {
        symptoms: ["Yellowing of older leaves", "Stunted growth", "Pale green coloration", "Reduced tillering"],
        crops_affected: ["Rice", "Wheat", "Maize", "Tomato"],
        severity: "High"
    },
    phosphorus: {
        symptoms: ["Purple leaf coloration", "Poor root development", "Delayed flowering", "Stunted growth"],
        crops_affected: ["All crops"],
        severity: "Medium"
    },
    potassium: {
        symptoms: ["Brown leaf edges", "Weak stems", "Increased disease susceptibility", "Poor fruit quality"],
        crops_affected: ["Cotton", "Tomato", "Sugarcane"],
        severity: "High"
    },
    calcium: {
        symptoms: ["Blossom end rot", "Tip burn", "Poor root development", "Weak cell walls"],
        crops_affected: ["Tomato", "Cotton"],
        severity: "Medium"
    },
    magnesium: {
        symptoms: ["Interveinal chlorosis", "Yellowing between veins", "Purple leaf coloration"],
        crops_affected: ["Rice", "Tea", "Tomato"],
        severity: "Medium"
    },
    iron: {
        symptoms: ["Interveinal chlorosis", "Yellow leaves with green veins", "Stunted growth"],
        crops_affected: ["Rice", "Tea"],
        severity: "Medium"
    },
    sulfur: {
        symptoms: ["Uniform yellowing", "Delayed maturity", "Poor protein content"],
        crops_affected: ["Mustard", "Wheat"],
        severity: "Medium"
    },
    zinc: {
        symptoms: ["White bud", "Small leaves", "Stunted growth", "Internode shortening"],
        crops_affected: ["Rice", "Maize"],
        severity: "High"
    }
};

// Disease prediction algorithm weights
export const PREDICTION_WEIGHTS = {
    leaf_symptoms: 0.35,
    stem_symptoms: 0.25,
    root_symptoms: 0.15,
    mineral_deficiency: 0.15,
    environmental_factors: 0.10
};

// Indian states crop disease prevalence
export const STATE_DISEASE_PREVALENCE = {
    "UP": ["wheat_rust", "rice_blast", "sugarcane_red_rot"],
    "PB": ["wheat_rust", "rice_blast"],
    "MH": ["cotton_wilt", "sugarcane_red_rot"],
    "GJ": ["cotton_wilt", "cotton_bollworm"],
    "RJ": ["mustard_white_rust", "wheat_rust"],
    "WB": ["rice_blast", "rice_bacterial_blight", "tea_blister_blight"],
    "AS": ["tea_blister_blight", "rice_blast"],
    "KA": ["cotton_wilt", "tomato_early_blight"],
    "AP": ["rice_blast", "cotton_wilt", "tomato_late_blight"],
    "TN": ["rice_blast", "tomato_early_blight", "sugarcane_red_rot"],
    "KL": ["tea_blister_blight"],
    "OR": ["rice_blast", "rice_bacterial_blight"],
    "BR": ["wheat_rust", "rice_blast", "maize_blight"]
};

export default DISEASE_DATABASE;
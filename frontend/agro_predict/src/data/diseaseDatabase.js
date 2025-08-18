export const DISEASE_DATABASE = {

    // Rice Diseases
    rice_blast: {
        crop: "Rice",
        disease_name: "Rice Blast (Magnaporthe grisea)",
        severity: "High",
        type: "Fungal",
        description: "Most destructive rice disease worldwide, affecting leaves, nodes, and panicles",
        symptoms: {
            leaf: ["Spindle-shaped spots with dark brown margin", "Grey centers", "Yellow halos", "Coalescing lesions"],
            stem: ["Necrotic black lesions on nodes", "Breaking of nodes", "Weakening of internodes"],
            root: ["Generally not affected", "Secondary root problems possible"],
            other: ["Neck blast causes panicle breakage", "Chaffy grains", "Reduced yield"]
        },
        mineral_deficiency: {
            primary: ["Excessive nitrogen", "Silicon deficiency"],
            secondary: ["Potassium deficiency", "Phosphorus imbalance"]
        },
        environmental_factors: {
            temperature: [15, 26],
            humidity: [93, 99],
            conditions: ["Intermittent drizzles", "Cloudy weather", "Long dew duration", "Low night temperature"]
        },
        treatment: {
            chemical: ["Carbendazim 50WP", "Tricyclazole 75WP", "Metominostrobin 20SC", "Azoxystrobin 25SC"],
            organic: ["Pseudomonas fluorescens", "Trichoderma", "Neem oil"],
            management: ["Resistant varieties", "Balanced nitrogen", "Remove weed hosts", "Proper spacing"]
        },
        prevention: "Use resistant varieties, avoid excessive nitrogen, remove collateral hosts",
        affected_parts: ["leaves", "stem", "panicles"]
    },

    rice_brown_spot: {
        crop: "Rice",
        disease_name: "Brown Leaf Spot (Helminthosporium oryzae)",
        severity: "Medium",
        type: "Fungal",
        description: "Sesame leaf spot disease causing brown lesions on leaves and grains",
        symptoms: {
            leaf: ["Rectangular or oval brown spots", "Resembling sesame seed", "Discrete margins", "Yellow halos"],
            stem: ["No prominent symptoms"],
            root: ["Not affected"],
            other: ["Brown lesions on glumes", "Grain discoloration", "Reduced quality"]
        },
        mineral_deficiency: {
            primary: ["Excessive nitrogen"],
            secondary: ["Potassium deficiency"]
        },
        environmental_factors: {
            temperature: [25, 30],
            humidity: [80, 100],
            conditions: ["High humidity", "Warm temperatures", "Excess nitrogen application"]
        },
        treatment: {
            chemical: ["Metominostrobin"],
            organic: ["Balanced fertilization"],
            management: ["Proper nitrogen management", "Field sanitation"]
        },
        prevention: "Balanced nutrition, avoid excessive nitrogen",
        affected_parts: ["leaves", "grains"]
    },

    rice_sheath_blight: {
        crop: "Rice",
        disease_name: "Sheath Blight (Rhizoctonia solani)",
        severity: "High",
        type: "Fungal",
        description: "Affects lower leaves and leaf sheaths, can cause lodging",
        symptoms: {
            leaf: ["Oval greyish green lesions", "Greyish white centers", "Brown margins", "Rapid spread"],
            stem: ["Sheath rot", "Culm infection", "Sclerotia formation"],
            root: ["Secondary root rot possible"],
            other: ["Lodging in severe cases", "Poor tillering", "Yield reduction"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Excessive nitrogen"]
        },
        environmental_factors: {
            temperature: [30, 32],
            humidity: [96, 97],
            conditions: ["High humidity", "Dense planting", "Heavy nitrogen application"]
        },
        treatment: {
            chemical: ["Validamycin", "Hexaconazole", "Carbendazim", "Azoxystrobin"],
            organic: ["Trichoderma", "Pseudomonas fluorescens", "Neem oil"],
            management: ["Water management", "Balanced fertilization", "Proper spacing"]
        },
        prevention: "Good water and fertilizer management, avoid dense planting",
        affected_parts: ["leaves", "stem", "sheath"]
    },

    rice_bacterial_blight: {
        crop: "Rice",
        disease_name: "Bacterial Leaf Blight (Xanthomonas oryzae)",
        severity: "High",
        type: "Bacterial",
        description: "Most serious bacterial disease causing significant yield losses",
        symptoms: {
            leaf: ["Water-soaked lesions at leaf tips", "Straw colored areas", "Wavy margins", "Bacterial ooze"],
            stem: ["Systemic infection", "Yellowing of tillers"],
            root: ["Poor development in severe cases"],
            other: ["Kresek phase in seedlings", "Plant death", "Foul smell"]
        },
        mineral_deficiency: {
            primary: ["Excessive nitrogen"],
            secondary: ["Potassium deficiency"]
        },
        environmental_factors: {
            temperature: [25, 30],
            humidity: [70, 90],
            conditions: ["Heavy rain", "Flooding", "Wounds", "Deep irrigation"]
        },
        treatment: {
            chemical: ["Copper hydroxide", "Streptomycin"],
            organic: ["Fresh cowdung extract", "Neem oil"],
            management: ["Resistant varieties", "Avoid injuries", "Proper drainage"]
        },
        prevention: "Use certified seeds, avoid tip clipping, proper water management",
        affected_parts: ["leaves", "stem", "entire plant"]
    },

    // Wheat Diseases
    wheat_yellow_rust: {
        crop: "Wheat",
        disease_name: "Yellow Rust (Puccinia striiformis)",
        severity: "Very High",
        type: "Fungal",
        description: "Stripe rust causing yellow pustules arranged in linear rows",
        symptoms: {
            leaf: ["Bright yellow pustules", "Linear stripe arrangement", "Orange-yellow stripes"],
            stem: ["Less common than leaf infection"],
            root: ["Not affected"],
            other: ["Dull black teliospores", "Reduced grain weight", "Poor quality"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Phosphorus deficiency", "Excessive nitrogen"]
        },
        environmental_factors: {
            temperature: [15, 20],
            humidity: [70, 100],
            conditions: ["Cool moist weather", "Dew formation", "Wind dispersal"]
        },
        treatment: {
            chemical: ["Mancozeb", "Propiconazole", "Tebuconazole"],
            organic: ["Sulfur spray"],
            management: ["Resistant varieties", "Early detection", "Fungicide rotation"]
        },
        prevention: "Use rust-resistant varieties, monitor regularly",
        affected_parts: ["leaves", "stem"]
    },

    wheat_brown_rust: {
        crop: "Wheat",
        disease_name: "Brown Rust (Puccinia triticina)",
        severity: "High",
        type: "Fungal",
        description: "Leaf rust causing orange-red pustules on leaves",
        symptoms: {
            leaf: ["Orange colored spots on upper surface", "Dark brown color later", "Scattered pustules"],
            stem: ["Occasional stem infection"],
            root: ["Not affected"],
            other: ["Up to 30% yield reduction", "Premature senescence"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Phosphorus deficiency"]
        },
        environmental_factors: {
            temperature: [15, 25],
            humidity: [70, 90],
            conditions: ["Moderate temperatures", "High humidity", "Dew formation"]
        },
        treatment: {
            chemical: ["Dithane M-45", "Propiconazole", "Mancozeb"],
            organic: ["Sulfur applications"],
            management: ["Resistant varieties", "Crop rotation"]
        },
        prevention: "Use resistant varieties, proper crop management",
        affected_parts: ["leaves"]
    },

    wheat_black_rust: {
        crop: "Wheat",
        disease_name: "Black Rust (Puccinia graminis)",
        severity: "Very High",
        type: "Fungal",
        description: "Stem rust causing dark brown to black pustules",
        symptoms: {
            leaf: ["Dark brown spots initially", "Black pustules later"],
            stem: ["Reddish-brown pustules", "Black pustules", "Stem breaking"],
            root: ["Not directly affected"],
            other: ["Lodging", "Severe yield loss", "Poor grain filling"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Phosphorus deficiency"]
        },
        environmental_factors: {
            temperature: [20, 30],
            humidity: [70, 90],
            conditions: ["Temperature above 20°C", "High humidity", "Wind dispersal"]
        },
        treatment: {
            chemical: ["Tebuconazole 250 EC", "Propiconazole"],
            organic: ["Sulfur sprays"],
            management: ["Resistant varieties", "Early sowing"]
        },
        prevention: "Use resistant varieties, avoid late planting",
        affected_parts: ["leaves", "stem"]
    },

    wheat_karnal_bunt: {
        crop: "Wheat",
        disease_name: "Karnal Bunt (Tilletia indica)",
        severity: "Medium",
        type: "Fungal",
        description: "Affects wheat grains causing black powdery masses",
        symptoms: {
            leaf: ["No visible symptoms"],
            stem: ["No visible symptoms"],
            root: ["Not affected"],
            other: ["Black powdery masses in grains", "Foul fishy odor", "Reduced market value"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency", "Phosphorus deficiency"],
            secondary: ["Zinc deficiency"]
        },
        environmental_factors: {
            temperature: [15, 30],
            humidity: [45, 90],
            conditions: ["Cool nights", "High humidity at heading", "Irrigation during heading"]
        },
        treatment: {
            chemical: ["Tebuconazole", "Carbendazim", "Propiconazole"],
            organic: ["Neem extract", "Trichoderma"],
            management: ["Crop rotation", "Deep ploughing", "Avoid irrigation during heading"]
        },
        prevention: "Use resistant varieties, avoid irrigating during heading",
        affected_parts: ["grain"]
    },

    wheat_powdery_mildew: {
        crop: "Wheat",
        disease_name: "Powdery Mildew (Erysiphe graminis)",
        severity: "Medium",
        type: "Fungal",
        description: "White powdery growth on leaves and stems",
        symptoms: {
            leaf: ["White powdery coating", "Yellowing", "Chlorotic patches"],
            stem: ["White fungal growth", "Reduced vigor"],
            root: ["Not affected"],
            other: ["Reduced photosynthesis", "Poor grain filling"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency", "Silicon deficiency"],
            secondary: ["Excessive nitrogen"]
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

    wheat_blight: {
        crop: "Wheat",
        disease_name: "Wheat Blight Complex",
        severity: "Medium",
        type: "Fungal",
        description: "Various fungal pathogens causing leaf and head blight",
        symptoms: {
            leaf: ["Brown lesions", "Blighting", "Premature senescence"],
            stem: ["Stem lesions in severe cases"],
            root: ["Root rot possible"],
            other: ["Head blight", "Shriveled grains", "Mycotoxin contamination"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Phosphorus deficiency"]
        },
        environmental_factors: {
            temperature: [20, 28],
            humidity: [80, 95],
            conditions: ["High humidity", "Wet weather", "Dense canopy"]
        },
        treatment: {
            chemical: ["Carbendazim", "Propiconazole", "Mancozeb"],
            organic: ["Trichoderma", "Plant extracts"],
            management: ["Crop rotation", "Residue management"]
        },
        prevention: "Use resistant varieties, proper field sanitation",
        affected_parts: ["leaves", "stem", "head"]
    },

    wheat_wilt: {
        crop: "Wheat",
        disease_name: "Wheat Wilt Complex",
        severity: "Medium",
        type: "Fungal",
        description: "Soil-borne pathogens causing vascular wilt",
        symptoms: {
            leaf: ["Yellowing", "Wilting", "Premature drying"],
            stem: ["Vascular discoloration", "Stunting"],
            root: ["Root rot", "Brown discoloration"],
            other: ["Plant death", "Reduced tillering"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Calcium deficiency"]
        },
        environmental_factors: {
            temperature: [25, 30],
            humidity: [60, 80],
            conditions: ["High soil temperature", "Moisture stress"]
        },
        treatment: {
            chemical: ["Carbendazim soil drench", "Trichoderma"],
            organic: ["Pseudomonas", "Organic amendments"],
            management: ["Crop rotation", "Soil solarization"]
        },
        prevention: "Use resistant varieties, improve soil health",
        affected_parts: ["leaves", "stem", "root"]
    },

    // Cotton Diseases
    cotton_wilt: {
        crop: "Cotton",
        disease_name: "Cotton Wilt (Fusarium oxysporum)",
        severity: "Very High",
        type: "Fungal",
        description: "Soil-borne vascular wilt causing plant death",
        symptoms: {
            leaf: ["Yellowing from bottom upward", "Wilting", "Premature drop"],
            stem: ["Brown vascular streaks", "Stunting", "Cracking"],
            root: ["Root rot", "Brown discoloration", "Poor development"],
            other: ["Internal browning", "Plant death", "Yield loss"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency", "Calcium deficiency"],
            secondary: ["Excessive nitrogen"]
        },
        environmental_factors: {
            temperature: [20, 30],
            humidity: [60, 80],
            conditions: ["Hot dry periods followed by rain", "Alkaline soil", "Nematode wounds"]
        },
        treatment: {
            chemical: ["Carbendazim", "Spot drenching"],
            organic: ["Trichoderma", "Pseudomonas", "Organic manures"],
            management: ["Resistant varieties", "Crop rotation", "Deep ploughing"]
        },
        prevention: "Use wilt-resistant varieties, balanced fertilization",
        affected_parts: ["leaves", "stem", "root", "entire plant"]
    },

    cotton_bacterial_blight: {
        crop: "Cotton",
        disease_name: "Bacterial Blight (Xanthomonas axonopodis)",
        severity: "High",
        type: "Bacterial",
        description: "Angular leaf spot, black arm, and boll rot disease",
        symptoms: {
            leaf: ["Angular brown to black spots", "Water-soaked lesions", "Vein blight"],
            stem: ["Elongate black lesions", "Black arm symptoms", "Branch breaking"],
            root: ["Generally not affected"],
            other: ["Boll rot", "Premature boll opening", "Yellow lint"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Excessive nitrogen"]
        },
        environmental_factors: {
            temperature: [28, 40],
            humidity: [85, 95],
            conditions: ["High temperature", "High humidity", "Rain followed by sunshine"]
        },
        treatment: {
            chemical: ["Streptomycin + Tetracycline", "Copper oxychloride"],
            organic: ["Avoid infected debris"],
            management: ["Resistant varieties", "Proper spacing", "Avoid late irrigation"]
        },
        prevention: "Use disease-free seeds, proper field sanitation",
        affected_parts: ["leaves", "stem", "bolls"]
    },

    cotton_alternaria_blight: {
        crop: "Cotton",
        disease_name: "Alternaria Leaf Blight (Alternaria macrospora)",
        severity: "Medium",
        type: "Fungal",
        description: "Leaf blight causing brown spots with concentric rings",
        symptoms: {
            leaf: ["Brown round to irregular spots", "Concentric rings", "Merging patches"],
            stem: ["Occasional stem lesions"],
            root: ["Not affected"],
            other: ["Leaf withering", "Defoliation", "Reduced photosynthesis"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Calcium deficiency"]
        },
        environmental_factors: {
            temperature: [25, 28],
            humidity: [80, 90],
            conditions: ["High humidity", "Intermittent rains", "Moderate temperature"]
        },
        treatment: {
            chemical: ["Mancozeb", "Chlorothalonil", "Difenaconazole"],
            organic: ["Bacillus subtilis"],
            management: ["Balanced fertilization", "Proper spacing"]
        },
        prevention: "Good air circulation, balanced nutrition",
        affected_parts: ["leaves"]
    },

    cotton_grey_mildew: {
        crop: "Cotton",
        disease_name: "Grey Mildew (Ramularia areola)",
        severity: "Medium",
        type: "Fungal",
        description: "Angular lesions with white growth on leaf undersides",
        symptoms: {
            leaf: ["Irregular angular spots", "Pale white lesions", "Frosty white growth on underside"],
            stem: ["Occasional infection"],
            root: ["Not affected"],
            other: ["Chlorosis", "Yellowing", "Premature defoliation"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Excessive nitrogen"]
        },
        environmental_factors: {
            temperature: [20, 30],
            humidity: [80, 95],
            conditions: ["Wet humid conditions", "Cool weather", "Dense planting"]
        },
        treatment: {
            chemical: ["Carbendazim", "Mancozeb", "Chlorothalonil"],
            organic: ["Copper-based fungicides"],
            management: ["Early sowing", "Proper spacing"]
        },
        prevention: "Avoid dense planting, good drainage",
        affected_parts: ["leaves"]
    },

    cotton_root_rot: {
        crop: "Cotton",
        disease_name: "Root Rot (Rhizoctonia solani)",
        severity: "High",
        type: "Fungal",
        description: "Sudden wilting and decay of root system",
        symptoms: {
            leaf: ["Sudden wilting", "Yellowing"],
            stem: ["Lower stem rot", "Bark shredding"],
            root: ["Root decay", "Shredded bark", "Sclerotia formation"],
            other: ["Plant collapse", "Poor stand"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Excessive nitrogen"]
        },
        environmental_factors: {
            temperature: [35, 39],
            humidity: [60, 80],
            conditions: ["Dry weather after heavy rains", "High soil temperature", "Nematode wounds"]
        },
        treatment: {
            chemical: ["Carbendazim spot drench"],
            organic: ["Trichoderma", "Pseudomonas", "Neem cake"],
            management: ["Crop rotation", "Organic amendments"]
        },
        prevention: "Improve soil health, avoid waterlogging",
        affected_parts: ["root", "stem", "entire plant"]
    },

    // Maize Diseases
    maize_downy_mildew: {
        crop: "Maize",
        disease_name: "Downy Mildew (Peronosclerospora sorghi)",
        severity: "High",
        type: "Oomycete",
        description: "Systemic infection causing chlorotic streaks and stunting",
        symptoms: {
            leaf: ["Chlorotic streaks", "White downy growth", "Yellowing"],
            stem: ["Stunted growth", "Shortened internodes", "Bushy appearance"],
            root: ["Poor development"],
            other: ["Crazy top symptoms", "Leafy tassel", "No grain formation"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Zinc deficiency"]
        },
        environmental_factors: {
            temperature: [21, 33],
            humidity: [90, 100],
            conditions: ["High humidity", "Cool weather", "Drizzling rain"]
        },
        treatment: {
            chemical: ["Metalaxyl", "Mancozeb", "Metalaxyl + Mancozeb"],
            organic: ["Trichoderma"],
            management: ["Resistant varieties", "Rogue infected plants"]
        },
        prevention: "Use resistant varieties, seed treatment",
        affected_parts: ["leaves", "stem", "tassel"]
    },

    maize_blight: {
        crop: "Maize",
        disease_name: "Northern Corn Leaf Blight (Exserohilum turcicum)",
        severity: "High",
        type: "Fungal",
        description: "Foliar disease causing elongated cigar-shaped lesions",
        symptoms: {
            leaf: ["Long elliptical lesions", "Cigar-shaped spots", "Tan colored centers", "Dark borders"],
            stem: ["Lower internode lesions"],
            root: ["Not affected"],
            other: ["Premature senescence", "Reduced grain filling"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency", "Excessive nitrogen"],
            secondary: ["Phosphorus imbalance"]
        },
        environmental_factors: {
            temperature: [18, 27],
            humidity: [80, 100],
            conditions: ["High humidity", "Prolonged leaf wetness", "Cool weather"]
        },
        treatment: {
            chemical: ["Mancozeb", "Propiconazole", "Azoxystrobin"],
            organic: ["Trichoderma", "Bacillus subtilis"],
            management: ["Resistant hybrids", "Crop rotation"]
        },
        prevention: "Use resistant varieties, residue management",
        affected_parts: ["leaves", "stem"]
    },

    maize_rust: {
        crop: "Maize",
        disease_name: "Common Rust (Puccinia sorghi)",
        severity: "Medium",
        type: "Fungal",
        description: "Brown pustules on both leaf surfaces",
        symptoms: {
            leaf: ["Brown pustules on both surfaces", "Uredosori formation"],
            stem: ["Occasional infection"],
            root: ["Not affected"],
            other: ["Premature senescence", "Yield reduction"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Phosphorus deficiency"]
        },
        environmental_factors: {
            temperature: [15, 25],
            humidity: [70, 90],
            conditions: ["Cool temperature", "High humidity", "Presence of alternate host"]
        },
        treatment: {
            chemical: ["Wettable sulfur", "Mancozeb"],
            organic: ["Sulfur applications"],
            management: ["Resistant varieties", "Remove alternate hosts"]
        },
        prevention: "Use resistant varieties, proper timing",
        affected_parts: ["leaves"]
    },

    maize_stalk_rot: {
        crop: "Maize",
        disease_name: "Charcoal Rot (Macrophomina phaseolina)",
        severity: "High",
        type: "Fungal",
        description: "Post-flowering stalk rot causing lodging",
        symptoms: {
            leaf: ["Premature senescence"],
            stem: ["Greyish streaks", "Shredded pith", "Black sclerotia in vascular bundles"],
            root: ["Root bark shredding", "Disintegration"],
            other: ["Stalk breaking", "Lodging", "Poor grain filling"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Phosphorus deficiency"]
        },
        environmental_factors: {
            temperature: [30, 35],
            humidity: [40, 60],
            conditions: ["High temperature", "Low soil moisture", "Drought stress"]
        },
        treatment: {
            chemical: ["Preventive measures preferred"],
            organic: ["Pseudomonas fluorescens", "FYM application"],
            management: ["Avoid water stress", "Balanced fertilization", "Potash application"]
        },
        prevention: "Avoid drought stress, apply potash",
        affected_parts: ["stem", "root"]
    },

    maize_mosaic: {
        crop: "Maize",
        disease_name: "Maize Mosaic Virus",
        severity: "Medium",
        type: "Viral",
        description: "Viral disease causing mosaic patterns and stunting",
        symptoms: {
            leaf: ["Yellow/white mosaic streaks", "Distorted leaves", "Mottling"],
            stem: ["Stunted growth", "Weak stems"],
            root: ["Poor development"],
            other: ["Failure in grain filling", "Deformed plants"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Zinc deficiency"]
        },
        environmental_factors: {
            temperature: [20, 28],
            humidity: [70, 90],
            conditions: ["Vector presence", "Hot humid conditions"]
        },
        treatment: {
            chemical: ["Vector control insecticides"],
            organic: ["Remove infected plants"],
            management: ["Resistant varieties", "Control vectors"]
        },
        prevention: "Control vector population, use resistant varieties",
        affected_parts: ["leaves", "stem"]
    },

    // Potato Diseases
    potato_late_blight: {
        crop: "Potato",
        disease_name: "Late Blight (Phytophthora infestans)",
        severity: "Very High",
        type: "Oomycete",
        description: "Most destructive potato disease causing total crop loss",
        symptoms: {
            leaf: ["Water-soaked lesions", "White sporulation on undersides", "Rapid browning"],
            stem: ["Dark streaks", "Soft rot"],
            root: ["Tuber rot", "Brown discoloration"],
            other: ["Foul odor", "Total plant collapse", "Tuber infection"]
        },
        mineral_deficiency: {
            primary: ["Calcium deficiency", "Potassium deficiency"],
            secondary: ["Excessive nitrogen"]
        },
        environmental_factors: {
            temperature: [15, 25],
            humidity: [90, 100],
            conditions: ["Cool wet weather", "High humidity", "Poor air circulation"]
        },
        treatment: {
            chemical: ["Metalaxyl", "Copper compounds", "Mancozeb"],
            organic: ["Bordeaux mixture", "Copper sulfate"],
            management: ["Resistant varieties", "Improved drainage"]
        },
        prevention: "Use resistant varieties, ensure good drainage",
        affected_parts: ["leaves", "stem", "tubers"]
    },

    potato_early_blight: {
        crop: "Potato",
        disease_name: "Early Blight (Alternaria solani)",
        severity: "High",
        type: "Fungal",
        description: "Common disease causing target-spot lesions",
        symptoms: {
            leaf: ["Concentric ring patterns", "Target-spot lesions", "Yellowing"],
            stem: ["Dark lesions", "Girdling"],
            root: ["Tuber lesions"],
            other: ["Defoliation", "Reduced yield", "Tuber rot"]
        },
        mineral_deficiency: {
            primary: ["Calcium deficiency", "Potassium deficiency"],
            secondary: ["Magnesium deficiency"]
        },
        environmental_factors: {
            temperature: [24, 29],
            humidity: [80, 90],
            conditions: ["Warm humid weather", "Long wet periods"]
        },
        treatment: {
            chemical: ["Mancozeb", "Chlorothalonil", "Azoxystrobin"],
            organic: ["Copper fungicides", "Trichoderma"],
            management: ["Crop rotation", "Mulching"]
        },
        prevention: "Proper spacing, good air circulation",
        affected_parts: ["leaves", "stem", "tubers"]
    },

    potato_wart: {
        crop: "Potato",
        disease_name: "Potato Wart (Synchytrium endobioticum)",
        severity: "Very High",
        type: "Fungal",
        description: "Quarantine disease producing warty outgrowths",
        symptoms: {
            leaf: ["No visible symptoms"],
            stem: ["Occasional swellings"],
            root: ["Root warts"],
            other: ["Warty growth on tubers", "Malformed potatoes", "Reduced market value"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Calcium deficiency"]
        },
        environmental_factors: {
            temperature: [12, 18],
            humidity: [80, 100],
            conditions: ["Humid climate", "Wet soil", "Cool temperatures"]
        },
        treatment: {
            chemical: ["No effective chemical control"],
            organic: ["Field sanitation", "Liming acidic soils"],
            management: ["Resistant varieties", "Quarantine measures"]
        },
        prevention: "Plant certified seed, field quarantine",
        affected_parts: ["tubers", "roots"]
    },

    potato_scab: {
        crop: "Potato",
        disease_name: "Common Scab (Streptomyces scabies)",
        severity: "Medium",
        type: "Bacterial",
        description: "Superficial scab lesions on tuber surface",
        symptoms: {
            leaf: ["No symptoms"],
            stem: ["No symptoms"],
            root: ["Superficial lesions on tubers"],
            other: ["Corky scab lesions", "Reduced market quality", "Cosmetic damage"]
        },
        mineral_deficiency: {
            primary: ["Calcium deficiency"],
            secondary: ["Magnesium deficiency"]
        },
        environmental_factors: {
            temperature: [20, 25],
            humidity: [40, 60],
            conditions: ["Alkaline soil", "Dry conditions during tuber formation"]
        },
        treatment: {
            chemical: ["pH management"],
            organic: ["Organic matter addition", "Sulfur application"],
            management: ["Maintain soil pH 5.2-5.8", "Adequate moisture"]
        },
        prevention: "Maintain proper soil pH, adequate irrigation",
        affected_parts: ["tubers"]
    },

    // Tomato Diseases
    tomato_early_blight: {
        crop: "Tomato",
        disease_name: "Early Blight (Alternaria solani)",
        severity: "High",
        type: "Fungal",
        description: "Common disease causing target-spot lesions",
        symptoms: {
            leaf: ["Concentric ring patterns", "Target-spot lesions", "Yellowing", "Defoliation"],
            stem: ["Dark lesions", "Girdling of stem", "Cankers"],
            root: ["Crown rot possible"],
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
        description: "Most destructive disease causing rapid plant death",
        symptoms: {
            leaf: ["Water-soaked lesions", "White sporulation", "Rapid browning", "Foul odor"],
            stem: ["Dark streaks", "Soft rot", "Collapse"],
            root: ["Root rot", "Brown discoloration"],
            other: ["Fruit rot", "Total plant collapse", "White mold"]
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
            management: ["Resistant varieties", "Improved drainage"]
        },
        prevention: "Use resistant varieties, ensure good drainage",
        affected_parts: ["leaves", "stem", "fruit", "entire plant"]
    },

    tomato_leaf_curl: {
        crop: "Tomato",
        disease_name: "Tomato Leaf Curl Virus",
        severity: "High",
        type: "Viral",
        description: "Viral disease causing severe leaf deformation",
        symptoms: {
            leaf: ["Curling", "Crinkling", "Yellowing", "Reduced size"],
            stem: ["Stunting", "Thin stems"],
            root: ["Poorly developed"],
            other: ["No fruit set", "Poor yield", "Plant stunting"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Magnesium deficiency"]
        },
        environmental_factors: {
            temperature: [20, 28],
            humidity: [60, 90],
            conditions: ["High vector activity", "Whitefly presence", "Humid weather"]
        },
        treatment: {
            chemical: ["Imidacloprid for vectors"],
            organic: ["Neem oil", "Yellow sticky traps"],
            management: ["Resistant varieties", "Remove infected plants"]
        },
        prevention: "Monitor for vectors, remove infected plants",
        affected_parts: ["leaves", "stem"]
    },

    tomato_mosaic: {
        crop: "Tomato",
        disease_name: "Tomato Mosaic Virus",
        severity: "Medium",
        type: "Viral",
        description: "Viral infection causing mosaic patterns",
        symptoms: {
            leaf: ["Mosaic patterns", "Light and dark green areas", "Distortion"],
            stem: ["Stunted growth"],
            root: ["Normal development"],
            other: ["Reduced fruit size", "Mottled fruit", "Yield reduction"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Nitrogen deficiency"]
        },
        environmental_factors: {
            temperature: [18, 25],
            humidity: [60, 80],
            conditions: ["Mechanical transmission", "Contact spread"]
        },
        treatment: {
            chemical: ["No direct control"],
            organic: ["Remove infected plants", "Sanitation"],
            management: ["Resistant varieties", "Tool sanitation"]
        },
        prevention: "Use virus-free seeds, tool sanitation",
        affected_parts: ["leaves", "fruit"]
    },

    tomato_fruit_rot: {
        crop: "Tomato",
        disease_name: "Fruit Rot Complex",
        severity: "Medium",
        type: "Fungal",
        description: "Various pathogens causing fruit decay",
        symptoms: {
            leaf: ["Usually not affected"],
            stem: ["Occasional infection"],
            root: ["Not affected"],
            other: ["Soft rot of fruits", "Water-soaked lesions", "Secondary bacterial infection"]
        },
        mineral_deficiency: {
            primary: ["Calcium deficiency"],
            secondary: ["Potassium deficiency"]
        },
        environmental_factors: {
            temperature: [25, 30],
            humidity: [80, 95],
            conditions: ["High humidity", "Fruit injuries", "Overripe fruits"]
        },
        treatment: {
            chemical: ["Copper fungicides", "Mancozeb"],
            organic: ["Proper harvesting", "Cold storage"],
            management: ["Careful handling", "Proper storage"]
        },
        prevention: "Careful handling, proper storage conditions",
        affected_parts: ["fruit"]
    },

    // Mustard Diseases
    mustard_white_rust: {
        crop: "Mustard",
        disease_name: "White Rust (Albugo candida)",
        severity: "Medium",
        type: "Oomycete",
        description: "White pustules on leaf undersides causing distortion",
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

    mustard_downy_mildew: {
        crop: "Mustard",
        disease_name: "Downy Mildew (Peronospora parasitica)",
        severity: "Medium",
        type: "Oomycete",
        description: "Downy growth on leaf undersides",
        symptoms: {
            leaf: ["Yellow patches on upper surface", "White downy growth underneath", "Chlorosis"],
            stem: ["Occasional infection"],
            root: ["Not affected"],
            other: ["Reduced photosynthesis", "Poor seed formation"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Sulfur deficiency"]
        },
        environmental_factors: {
            temperature: [12, 20],
            humidity: [85, 95],
            conditions: ["Cool humid weather", "High moisture", "Dense planting"]
        },
        treatment: {
            chemical: ["Metalaxyl", "Copper oxychloride"],
            organic: ["Neem oil", "Plant extracts"],
            management: ["Proper spacing", "Good drainage"]
        },
        prevention: "Good air circulation, avoid excess moisture",
        affected_parts: ["leaves"]
    },

    mustard_alternaria_blight: {
        crop: "Mustard",
        disease_name: "Alternaria Blight (Alternaria brassicae)",
        severity: "High",
        type: "Fungal",
        description: "Dark spots with concentric rings on leaves",
        symptoms: {
            leaf: ["Dark brown to black spots", "Concentric rings", "Target-like appearance"],
            stem: ["Elongated lesions", "Cankers"],
            root: ["Generally not affected"],
            other: ["Pod infection", "Seed infection", "Yield reduction"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Sulfur deficiency"]
        },
        environmental_factors: {
            temperature: [20, 25],
            humidity: [80, 90],
            conditions: ["High humidity", "Warm temperatures", "Extended leaf wetness"]
        },
        treatment: {
            chemical: ["Mancozeb", "Carbendazim", "Propiconazole"],
            organic: ["Trichoderma", "Neem oil"],
            management: ["Crop rotation", "Resistant varieties"]
        },
        prevention: "Use healthy seeds, crop rotation",
        affected_parts: ["leaves", "stem", "pods"]
    },

    // Pulses Diseases
    pulses_wilt: {
        crop: "Pulses",
        disease_name: "Fusarium Wilt (Fusarium oxysporum)",
        severity: "High",
        type: "Fungal",
        description: "Vascular wilt affecting various pulse crops",
        symptoms: {
            leaf: ["Yellowing", "Wilting", "Drooping", "Premature drying"],
            stem: ["Vascular browning", "Stunting", "Split stems"],
            root: ["Root rot", "Brown discoloration"],
            other: ["Plant death", "Reduced yield"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Calcium deficiency"]
        },
        environmental_factors: {
            temperature: [24, 32],
            humidity: [60, 80],
            conditions: ["High soil temperature", "High soil moisture", "Poor drainage"]
        },
        treatment: {
            chemical: ["Carbendazim drench", "Thiram seed treatment"],
            organic: ["Trichoderma", "Pseudomonas"],
            management: ["Crop rotation", "Resistant varieties"]
        },
        prevention: "Use resistant varieties, seed treatment",
        affected_parts: ["leaves", "stem", "root"]
    },

    pulses_leaf_spot: {
        crop: "Pulses",
        disease_name: "Leaf Spot Complex (Cercospora spp.)",
        severity: "Medium",
        type: "Fungal",
        description: "Circular spots on leaves causing defoliation",
        symptoms: {
            leaf: ["Circular reddish spots", "Gray centers", "Shot holes", "Defoliation"],
            stem: ["Lesions on petioles and stems"],
            root: ["Not affected"],
            other: ["Reduced photosynthesis", "Yield loss"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Calcium deficiency"]
        },
        environmental_factors: {
            temperature: [22, 28],
            humidity: [80, 90],
            conditions: ["High humidity", "Dense plant population", "Poor air circulation"]
        },
        treatment: {
            chemical: ["Carbendazim", "Mancozeb"],
            organic: ["Neem oil", "Trichoderma"],
            management: ["Proper spacing", "Crop rotation"]
        },
        prevention: "Good air circulation, proper spacing",
        affected_parts: ["leaves", "stem"]
    },

    pulses_root_rot: {
        crop: "Pulses",
        disease_name: "Root Rot (Rhizoctonia bataticola)",
        severity: "High",
        type: "Fungal",
        description: "Dry root rot causing plant death",
        symptoms: {
            leaf: ["Drooping", "Yellowing", "Premature drying"],
            stem: ["Basal browning", "Bark shredding"],
            root: ["Root rot", "Black sclerotia", "Shredded bark"],
            other: ["Plant death", "Poor stand"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Calcium deficiency"]
        },
        environmental_factors: {
            temperature: [30, 35],
            humidity: [40, 60],
            conditions: ["High temperature", "Moisture stress", "Post-flowering stage"]
        },
        treatment: {
            chemical: ["Carbendazim spot drench"],
            organic: ["Trichoderma", "Pseudomonas"],
            management: ["Early sowing", "Irrigation management"]
        },
        prevention: "Avoid moisture stress, balanced fertilization",
        affected_parts: ["root", "stem"]
    },

    pulses_rust: {
        crop: "Pulses",
        disease_name: "Pulse Rust (Uromyces spp.)",
        severity: "Medium",
        type: "Fungal",
        description: "Rust pustules on leaves causing yield loss",
        symptoms: {
            leaf: ["Brown pustules on lower surface", "Yellow lesions", "Premature senescence"],
            stem: ["Occasional infection"],
            root: ["Not affected"],
            other: ["Reduced photosynthesis", "Yield reduction"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Phosphorus deficiency"]
        },
        environmental_factors: {
            temperature: [21, 26],
            humidity: [75, 85],
            conditions: ["Cloudy humid weather", "Heavy dews", "Moderate temperatures"]
        },
        treatment: {
            chemical: ["Mancozeb", "Wettable sulfur", "Propiconazole"],
            organic: ["Sulfur applications"],
            management: ["Destroy weed hosts", "Resistant varieties"]
        },
        prevention: "Use resistant varieties, remove alternate hosts",
        affected_parts: ["leaves"]
    },

    pulses_mosaic: {
        crop: "Pulses",
        disease_name: "Yellow Mosaic Virus",
        severity: "High",
        type: "Viral",
        description: "Viral disease causing yellow mosaic patterns",
        symptoms: {
            leaf: ["Yellow patches", "Mosaic patterns", "Complete yellowing"],
            stem: ["Stunting"],
            root: ["Poor development"],
            other: ["Small distorted pods", "Reduced yield"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Phosphorus deficiency"]
        },
        environmental_factors: {
            temperature: [22, 30],
            humidity: [70, 90],
            conditions: ["Whitefly activity", "Summer conditions", "Humid weather"]
        },
        treatment: {
            chemical: ["Vector control insecticides"],
            organic: ["Neem oil", "Yellow sticky traps"],
            management: ["Resistant varieties", "Remove infected plants"]
        },
        prevention: "Control vector population, use resistant varieties",
        affected_parts: ["leaves", "pods"]
    },

    pulses_leaf_crinkle: {
        crop: "Pulses",
        disease_name: "Leaf Crinkle Virus",
        severity: "Medium",
        type: "Viral",
        description: "Viral disease causing leaf deformation",
        symptoms: {
            leaf: ["Puckered leaves", "Curled margins", "Crinkling"],
            stem: ["Stunting", "Bushy appearance", "Short internodes"],
            root: ["Poor development"],
            other: ["Deformed inflorescence", "Poor flowering"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Magnesium deficiency"]
        },
        environmental_factors: {
            temperature: [20, 28],
            humidity: [60, 80],
            conditions: ["Vector activity", "Continuous cropping", "Weed hosts"]
        },
        treatment: {
            chemical: ["Vector control"],
            organic: ["Remove infected plants", "Neem oil"],
            management: ["Crop rotation", "Remove weed hosts"]
        },
        prevention: "Remove weed hosts, crop rotation",
        affected_parts: ["leaves", "stem"]
    },

    // Groundnut Diseases
    groundnut_tikka: {
        crop: "Groundnut",
        disease_name: "Tikka Disease (Cercospora spp.)",
        severity: "Medium",
        type: "Fungal",
        description: "Early and late leaf spot causing premature defoliation",
        symptoms: {
            leaf: ["Round brown spots", "Yellow halos", "Concentric rings", "Premature defoliation"],
            stem: ["Reduced vigor"],
            root: ["Not visible"],
            other: ["Yield reduction", "Poor oil content"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Calcium deficiency"]
        },
        environmental_factors: {
            temperature: [22, 30],
            humidity: [80, 100],
            conditions: ["Wet weather", "High humidity", "Poor air circulation"]
        },
        treatment: {
            chemical: ["Mancozeb", "Chlorothalonil", "Carbendazim"],
            organic: ["Neem oil", "Trichoderma"],
            management: ["Crop rotation", "Resistant varieties"]
        },
        prevention: "Proper spacing, field sanitation",
        affected_parts: ["leaves"]
    },

    groundnut_collar_rot: {
        crop: "Groundnut",
        disease_name: "Collar Rot (Aspergillus niger)",
        severity: "High",
        type: "Fungal",
        description: "Seedling disease causing collar rot and crown rot",
        symptoms: {
            leaf: ["Yellowing in crown rot"],
            stem: ["Circular brown spots on collar", "Soft rot", "Black conidia mass"],
            root: ["Crown rot symptoms"],
            other: ["Seedling death", "Poor germination", "Blackening"]
        },
        mineral_deficiency: {
            primary: ["Calcium deficiency"],
            secondary: ["Potassium deficiency"]
        },
        environmental_factors: {
            temperature: [25, 35],
            humidity: [70, 90],
            conditions: ["High soil moisture", "Poor drainage", "Soil-borne inoculum"]
        },
        treatment: {
            chemical: ["Seed treatment with fungicides"],
            organic: ["Trichoderma", "Pseudomonas"],
            management: ["Improve drainage", "Seed treatment"]
        },
        prevention: "Use healthy seeds, improve soil drainage",
        affected_parts: ["stem", "root", "seedlings"]
    },

    groundnut_rust: {
        crop: "Groundnut",
        disease_name: "Rust (Puccinia arachidis)",
        severity: "Medium",
        type: "Fungal",
        description: "Orange-brown rust pustules causing defoliation",
        symptoms: {
            leaf: ["Orange-brown pustules on lower surface", "Rapid defoliation", "Necrotic areas"],
            stem: ["Occasional infection"],
            root: ["Not affected"],
            other: ["Over 50% yield loss possible", "Leaves remain attached"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Calcium deficiency"]
        },
        environmental_factors: {
            temperature: [20, 25],
            humidity: [80, 95],
            conditions: ["High humidity", "Heavy rainfall", "Moderate temperatures"]
        },
        treatment: {
            chemical: ["Tridemorph", "Chlorothalonil"],
            organic: ["Sulfur applications"],
            management: ["Resistant varieties", "Proper spacing"]
        },
        prevention: "Monitor weather conditions, use resistant varieties",
        affected_parts: ["leaves"]
    },

    groundnut_bud_necrosis: {
        crop: "Groundnut",
        disease_name: "Bud Necrosis (TSWV)",
        severity: "High",
        type: "Viral",
        description: "Thrips-transmitted viral disease causing bud death",
        symptoms: {
            leaf: ["Ring spots", "Small rounded leaves", "Mosaic mottling", "Necrotic spots"],
            stem: ["Necrotic streaks", "Stunting", "Short internodes"],
            root: ["Normal development"],
            other: ["Bud necrosis", "Reduced flowering", "Small wrinkled seeds"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Calcium deficiency"]
        },
        environmental_factors: {
            temperature: [20, 30],
            humidity: [60, 80],
            conditions: ["Thrips activity", "Weed hosts presence", "Favorable weather for vectors"]
        },
        treatment: {
            chemical: ["Dimethoate", "Imidacloprid for vector control"],
            organic: ["Neem oil", "Remove infected plants"],
            management: ["Tolerant varieties", "Close spacing", "Remove weed hosts"]
        },
        prevention: "Control thrips population, remove infected plants",
        affected_parts: ["leaves", "stem", "buds"]
    },

    // Chilli Diseases
    chilli_leaf_curl: {
        crop: "Chilli",
        disease_name: "Chilli Leaf Curl Virus",
        severity: "High",
        type: "Viral",
        description: "Viral disease causing severe leaf deformation",
        symptoms: {
            leaf: ["Curling", "Crinkling", "Yellowing", "Reduced size"],
            stem: ["Stunting", "Thin stems"],
            root: ["Poorly developed roots"],
            other: ["No fruit set", "Poor yield", "Plant stunting"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Magnesium deficiency"]
        },
        environmental_factors: {
            temperature: [20, 28],
            humidity: [60, 90],
            conditions: ["High vector activity", "Whitefly presence", "Humid weather"]
        },
        treatment: {
            chemical: ["Imidacloprid for vectors"],
            organic: ["Neem oil", "Yellow sticky traps"],
            management: ["Resistant varieties", "Remove infected plants"]
        },
        prevention: "Monitor for vectors, remove infected plants",
        affected_parts: ["leaves", "stem"]
    },

    chilli_anthracnose: {
        crop: "Chilli",
        disease_name: "Anthracnose (Colletotrichum capsici)",
        severity: "High",
        type: "Fungal",
        description: "Fruit rot disease causing significant losses",
        symptoms: {
            leaf: ["Small brown water-soaked spots", "Yellow halos", "Die-back symptoms"],
            stem: ["Die-back from tips", "Progressive death"],
            root: ["Root rot in severe cases"],
            other: ["Sunken necrotic fruit lesions", "Concentric rings", "Acervuli formation"]
        },
        mineral_deficiency: {
            primary: ["Calcium deficiency", "Potassium deficiency"],
            secondary: ["Magnesium deficiency"]
        },
        environmental_factors: {
            temperature: [25, 30],
            humidity: [80, 95],
            conditions: ["High humidity", "Warm temperatures", "Fruit injuries"]
        },
        treatment: {
            chemical: ["Copper fungicides", "Mancozeb", "Carbendazim"],
            organic: ["Trichoderma", "Pseudomonas fluorescens"],
            management: ["Proper spacing", "Avoid overhead irrigation"]
        },
        prevention: "Good air circulation, proper handling",
        affected_parts: ["leaves", "stem", "fruit"]
    },

    chilli_damping_off: {
        crop: "Chilli",
        disease_name: "Damping-off (Pythium spp.)",
        severity: "High",
        type: "Oomycete",
        description: "Seedling disease causing damping-off",
        symptoms: {
            leaf: ["Seedling blight symptoms"],
            stem: ["Water-soaked lesions at soil level", "Collapse of seedlings"],
            root: ["Root rot", "Poor development"],
            other: ["Pre and post-emergence damping-off", "Poor germination"]
        },
        mineral_deficiency: {
            primary: ["Calcium deficiency"],
            secondary: ["Potassium deficiency"]
        },
        environmental_factors: {
            temperature: [20, 25],
            humidity: [85, 95],
            conditions: ["Excess moisture", "Poor drainage", "Cool temperatures"]
        },
        treatment: {
            chemical: ["Metalaxyl", "Copper oxychloride"],
            organic: ["Bacillus subtilis", "Trichoderma"],
            management: ["Improve drainage", "Seed treatment"]
        },
        prevention: "Good drainage, proper seed treatment",
        affected_parts: ["stem", "root", "seedlings"]
    },

    // Sugarcane Diseases
    sugarcane_red_rot: {
        crop: "Sugarcane",
        disease_name: "Red Rot (Colletotrichum falcatum)",
        severity: "Very High",
        type: "Fungal",
        description: "Most destructive sugarcane disease causing internal reddening",
        symptoms: {
            leaf: ["Yellowing of 3rd or 4th leaf", "Reddish lesions on midrib", "Dark margins"],
            stem: ["Internal red discoloration", "White cross patches", "Alcoholic smell", "Hollow stalks"],
            root: ["Root rot in severe cases"],
            other: ["Longitudinal shrinkage", "Black fruiting bodies", "Reduced sugar content"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency", "Silicon deficiency"],
            secondary: ["Excessive nitrogen", "Phosphorus imbalance"]
        },
        environmental_factors: {
            temperature: [25, 32],
            humidity: [70, 90],
            conditions: ["High temperature and humidity", "Waterlogging", "Wounds", "Insect injuries"]
        },
        treatment: {
            chemical: ["Carbendazim sett treatment", "Triademefon"],
            organic: ["Aerated steam therapy", "Hot water treatment"],
            management: ["Resistant varieties", "Healthy setts", "Crop rotation"]
        },
        prevention: "Use disease-free setts, proper drainage",
        affected_parts: ["leaves", "stem", "root"]
    },

    sugarcane_grassy_shoot: {
        crop: "Sugarcane",
        disease_name: "Grassy Shoot (Phytoplasma)",
        severity: "High",
        type: "Phytoplasma",
        description: "Phytoplasma disease causing grass-like tillering",
        symptoms: {
            leaf: ["Pale yellow to chlorotic", "Thin and narrow", "Grass-like appearance"],
            stem: ["Numerous lanky tillers", "Bushy appearance", "Shortened internodes"],
            root: ["Aerial roots at lower nodes"],
            other: ["Premature tillering", "No cane formation", "Stunted growth"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Nitrogen deficiency"]
        },
        environmental_factors: {
            temperature: [25, 30],
            humidity: [70, 85],
            conditions: ["Leafhopper activity", "Continuous rationing", "Vector presence"]
        },
        treatment: {
            chemical: ["Hot water treatment of setts", "Vector control insecticides"],
            organic: ["Remove infected plants"],
            management: ["Healthy setts", "Control vectors", "Avoid infected areas"]
        },
        prevention: "Use healthy setts, control leafhopper vectors",
        affected_parts: ["leaves", "stem", "entire plant"]
    },

    sugarcane_smut: {
        crop: "Sugarcane",
        disease_name: "Smut (Ustilago scitaminea)",
        severity: "High",
        type: "Fungal",
        description: "Smut disease producing black whip-like structures",
        symptoms: {
            leaf: ["No prominent symptoms"],
            stem: ["Whip-like black structure from growing point"],
            root: ["Not affected"],
            other: ["Black spore masses", "Reduced tillering", "No cane formation"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Phosphorus deficiency"]
        },
        environmental_factors: {
            temperature: [25, 30],
            humidity: [70, 90],
            conditions: ["High humidity", "Wounds", "Young tissue infection"]
        },
        treatment: {
            chemical: ["Hot water treatment", "Fungicidal sett treatment"],
            organic: ["Remove and burn infected plants"],
            management: ["Resistant varieties", "Healthy setts"]
        },
        prevention: "Use resistant varieties, treat setts",
        affected_parts: ["stem", "growing point"]
    },

    sugarcane_mosaic: {
        crop: "Sugarcane",
        disease_name: "Sugarcane Mosaic Virus",
        severity: "Medium",
        type: "Viral",
        description: "Viral disease causing chlorotic stripes",
        symptoms: {
            leaf: ["Chlorotic or yellowish stripes", "Alternate green and yellow areas"],
            stem: ["Yellow stripes on leaf sheath and stalks", "Stunting"],
            root: ["Not affected"],
            other: ["Elongated necrotic lesions", "Stem splitting", "Reduced growth"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Nitrogen deficiency"]
        },
        environmental_factors: {
            temperature: [20, 30],
            humidity: [60, 80],
            conditions: ["Vector activity", "Mechanical transmission", "Infected setts"]
        },
        treatment: {
            chemical: ["Vector control", "Aerated steam therapy"],
            organic: ["Remove infected plants"],
            management: ["Resistant varieties", "Healthy setts", "Rogue infected plants"]
        },
        prevention: "Use virus-free setts, control vectors",
        affected_parts: ["leaves", "stem"]
    },

    sugarcane_leaf_scorch: {
        crop: "Sugarcane",
        disease_name: "Leaf Scorch (Stagonospora sacchari)",
        severity: "Medium",
        type: "Fungal",
        description: "Fungal disease causing leaf scorching",
        symptoms: {
            leaf: ["Reddish-brown lesions", "Scorched appearance", "Premature drying"],
            stem: ["Reduced vigor"],
            root: ["Not affected"],
            other: ["Reduced photosynthesis", "Poor cane quality"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Calcium deficiency"]
        },
        environmental_factors: {
            temperature: [25, 35],
            humidity: [60, 80],
            conditions: ["Hot dry weather", "Water stress", "Poor nutrition"]
        },
        treatment: {
            chemical: ["Copper fungicides"],
            organic: ["Balanced nutrition"],
            management: ["Proper irrigation", "Balanced fertilization"]
        },
        prevention: "Adequate irrigation, balanced nutrition",
        affected_parts: ["leaves"]
    },

    sugarcane_wilt: {
        crop: "Sugarcane",
        disease_name: "Sugarcane Wilt (Cephalosporium sacchari)",
        severity: "High",
        type: "Fungal",
        description: "Vascular wilt causing plant death",
        symptoms: {
            leaf: ["Yellowing", "Wilting", "Drying from tips"],
            stem: ["Vascular discoloration", "Stunting", "Poor growth"],
            root: ["Root rot", "Poor development"],
            other: ["Plant death", "Reduced sugar content"]
        },
        mineral_deficiency: {
            primary: ["Potassium deficiency"],
            secondary: ["Calcium deficiency"]
        },
        environmental_factors: {
            temperature: [25, 30],
            humidity: [70, 85],
            conditions: ["High soil moisture", "Poor drainage", "Wounds"]
        },
        treatment: {
            chemical: ["Fungicidal sett treatment"],
            organic: ["Trichoderma", "Organic amendments"],
            management: ["Resistant varieties", "Improve drainage"]
        },
        prevention: "Use healthy setts, improve soil drainage",
        affected_parts: ["leaves", "stem", "root", "entire plant"]
    }
};

// Crop-specific common diseases mapping (comprehensive)
export const CROP_DISEASES = {
    "Rice": ["rice_blast", "rice_brown_spot", "rice_sheath_blight", "rice_bacterial_blight"],
    "Wheat": ["wheat_yellow_rust", "wheat_brown_rust", "wheat_black_rust", "wheat_karnal_bunt", "wheat_powdery_mildew", "wheat_blight", "wheat_wilt"],
    "Cotton": ["cotton_wilt", "cotton_bacterial_blight", "cotton_alternaria_blight", "cotton_grey_mildew", "cotton_root_rot"],
    "Maize": ["maize_downy_mildew", "maize_blight", "maize_rust", "maize_stalk_rot", "maize_mosaic"],
    "Potato": ["potato_late_blight", "potato_early_blight", "potato_wart", "potato_scab"],
    "Tomato": ["tomato_early_blight", "tomato_late_blight", "tomato_leaf_curl", "tomato_mosaic", "tomato_fruit_rot"],
    "Mustard": ["mustard_white_rust", "mustard_downy_mildew", "mustard_alternaria_blight"],
    "Pulses": ["pulses_wilt", "pulses_leaf_spot", "pulses_root_rot", "pulses_rust", "pulses_mosaic", "pulses_leaf_crinkle"],
    "Groundnut": ["groundnut_tikka", "groundnut_collar_rot", "groundnut_rust", "groundnut_bud_necrosis"],
    "Chilli": ["chilli_leaf_curl", "chilli_anthracnose", "chilli_damping_off"],
    "Sugarcane": ["sugarcane_red_rot", "sugarcane_grassy_shoot", "sugarcane_smut", "sugarcane_mosaic", "sugarcane_leaf_scorch", "sugarcane_wilt"]
};

// Mineral deficiency symptoms (comprehensive)
export const MINERAL_DEFICIENCY_SYMPTOMS = {
    nitrogen: {
        symptoms: ["Yellowing of older leaves", "Stunted growth", "Pale green coloration", "Reduced tillering"],
        crops_affected: ["Rice", "Wheat", "Maize", "Cotton", "Tomato", "Potato", "Pulses", "Groundnut", "Chilli", "Sugarcane"],
        severity: "High"
    },
    phosphorus: {
        symptoms: ["Purple leaf coloration", "Poor root development", "Delayed flowering", "Stunted growth"],
        crops_affected: ["All crops"],
        severity: "Medium"
    },
    potassium: {
        symptoms: ["Brown leaf edges", "Weak stems", "Increased disease susceptibility", "Poor fruit quality"],
        crops_affected: ["Rice", "Wheat", "Maize", "Cotton", "Tomato", "Potato", "Pulses", "Groundnut", "Chilli", "Sugarcane"],
        severity: "High"
    },
    calcium: {
        symptoms: ["Blossom end rot", "Tip burn", "Poor root development", "Weak cell walls"],
        crops_affected: ["Tomato", "Cotton", "Potato", "Chilli", "Groundnut", "Pulses"],
        severity: "Medium"
    },
    magnesium: {
        symptoms: ["Interveinal chlorosis", "Yellowing between veins", "Purple leaf coloration"],
        crops_affected: ["Rice", "Tomato", "Chilli", "Maize", "Cotton"],
        severity: "Medium"
    },
    iron: {
        symptoms: ["Interveinal chlorosis", "Yellow leaves with green veins", "Stunted growth"],
        crops_affected: ["Rice", "Potato", "Groundnut", "Pulses"],
        severity: "Medium"
    },
    sulfur: {
        symptoms: ["Uniform yellowing", "Delayed maturity", "Poor protein content"],
        crops_affected: ["Mustard", "Wheat", "Pulses", "Potato"],
        severity: "Medium"
    },
    zinc: {
        symptoms: ["White bud", "Small leaves", "Stunted growth", "Internode shortening"],
        crops_affected: ["Rice", "Maize", "Wheat", "Pulses", "Groundnut"],
        severity: "High"
    },
    boron: {
        symptoms: ["Death of terminal growth", "Thickened curled leaves", "Poor pollination"],
        crops_affected: ["Cotton", "Groundnut", "Tomato"],
        severity: "Medium"
    },
    manganese: {
        symptoms: ["Interveinal chlorosis", "Necrotic spots", "Poor growth"],
        crops_affected: ["Rice", "Wheat", "Pulses"],
        severity: "Medium"
    }
};

// Prediction weights (unchanged)
export const PREDICTION_WEIGHTS = {
    leaf_symptoms: 0.35,
    stem_symptoms: 0.25,
    root_symptoms: 0.15,
    mineral_deficiency: 0.15,
    environmental_factors: 0.10
};

// State crop disease prevalence (comprehensive)
export const STATE_DISEASE_PREVALENCE = {
    "UP": ["wheat_yellow_rust", "rice_blast", "sugarcane_red_rot", "wheat_karnal_bunt", "potato_late_blight", "pulses_wilt"],
    "PB": ["wheat_yellow_rust", "rice_blast", "wheat_karnal_bunt", "maize_blight", "cotton_wilt"],
    "MH": ["cotton_wilt", "sugarcane_red_rot", "cotton_bacterial_blight", "chilli_leaf_curl", "groundnut_tikka"],
    "GJ": ["cotton_wilt", "cotton_bacterial_blight", "groundnut_tikka", "chilli_anthracnose"],
    "RJ": ["mustard_white_rust", "wheat_yellow_rust", "cotton_wilt", "pulses_wilt"],
    "WB": ["rice_blast", "rice_bacterial_blight", "rice_sheath_blight", "maize_downy_mildew", "potato_late_blight"],
    "AS": ["rice_blast", "rice_sheath_blight"],
    "KA": ["cotton_wilt", "tomato_early_blight", "chilli_leaf_curl", "groundnut_rust", "sugarcane_red_rot"],
    "AP": ["rice_blast", "cotton_wilt", "tomato_late_blight", "groundnut_tikka", "chilli_anthracnose"],
    "TN": ["rice_blast", "tomato_early_blight", "sugarcane_red_rot", "groundnut_tikka", "cotton_wilt"],
    "KL": ["rice_blast", "rice_sheath_blight"],
    "OR": ["rice_blast", "rice_bacterial_blight", "maize_downy_mildew"],
    "BR": ["wheat_yellow_rust", "rice_blast", "maize_blight", "pulses_wilt", "potato_late_blight"],
    "MP": ["cotton_wilt", "wheat_yellow_rust", "groundnut_tikka", "pulses_wilt"],
    "HR": ["wheat_yellow_rust", "wheat_karnal_bunt", "mustard_white_rust", "cotton_wilt"],
    "JH": ["rice_blast", "wheat_yellow_rust", "maize_blight"],
    "CG": ["rice_blast", "maize_blight", "groundnut_tikka"],
    "JK": ["wheat_yellow_rust", "maize_downy_mildew", "potato_late_blight"]
};

export default DISEASE_DATABASE;

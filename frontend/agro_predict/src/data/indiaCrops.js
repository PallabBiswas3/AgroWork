export const CROP_DATABASE = {
    // Food Grains
    rice: {
        name: "Rice (Chawal)",
        description: "Primary cereal crop, staple food for over 65% of Indians",
        seasons: ["Kharif", "Rabi"],
        zones: ["Humid", "Sub-Humid"],
        states: ["WB", "UP", "PB", "AP", "TN", "OR", "AS", "BR", "CT", "KA"],
        npk_requirements: { N: [80, 120], P: [40, 60], K: [40, 60] },
        optimal_conditions: "Temperature: 20-37°C, Rainfall: 100-200cm, pH: 5.5-6.5",
        tips: "Requires flooded fields, high water availability, and warm climate",
        yield: "3000-4000 kg/hectare",
        duration: "110-150 days"
    },
    wheat: {
        name: "Wheat (Gehun)",
        description: "Major rabi crop, primary food grain in northern India",
        seasons: ["Rabi"],
        zones: ["Sub-Humid", "Semi-Arid"],
        states: ["UP", "PB", "HR", "RJ", "MP", "BR", "GJ", "MH"],
        npk_requirements: { N: [60, 80], P: [30, 40], K: [30, 40] },
        optimal_conditions: "Temperature: 15-25°C, Rainfall: 75-100cm, pH: 6.0-7.5",
        tips: "Cool growing season, avoid waterlogging, requires irrigation",
        yield: "2500-3500 kg/hectare",
        duration: "100-130 days"
    },
    maize: {
        name: "Maize (Makka)",
        description: "Versatile cereal crop, food and fodder use",
        seasons: ["Kharif", "Rabi"],
        zones: ["Humid", "Sub-Humid", "Semi-Arid"],
        states: ["KA", "AP", "TG", "MH", "BR", "UP", "MP", "RJ", "GJ"],
        npk_requirements: { N: [80, 100], P: [40, 50], K: [40, 50] },
        optimal_conditions: "Temperature: 21-27°C, Rainfall: 50-100cm, pH: 5.5-7.0",
        tips: "Well-drained soil, avoid waterlogging, pest management crucial",
        yield: "2000-3000 kg/hectare",
        duration: "90-120 days"
    },
    bajra: {
        name: "Bajra (Pearl Millet)",
        description: "Drought-resistant millet, ideal for arid regions",
        seasons: ["Kharif"],
        zones: ["Arid", "Semi-Arid"],
        states: ["RJ", "GJ", "MH", "UP", "HR", "KA", "TN"],
        npk_requirements: { N: [40, 60], P: [20, 30], K: [20, 30] },
        optimal_conditions: "Temperature: 25-35°C, Rainfall: 25-60cm, pH: 6.5-8.0",
        tips: "Extremely drought tolerant, sandy soils preferred, heat resistant",
        yield: "800-1200 kg/hectare",
        duration: "75-90 days"
    },
    jowar: {
        name: "Jowar (Sorghum)",
        description: "Important dryland cereal, dual purpose crop",
        seasons: ["Kharif", "Rabi"],
        zones: ["Semi-Arid", "Arid"],
        states: ["MH", "KA", "AP", "TG", "MP", "RJ", "GJ"],
        npk_requirements: { N: [50, 70], P: [25, 35], K: [25, 35] },
        optimal_conditions: "Temperature: 26-30°C, Rainfall: 40-100cm, pH: 5.5-8.5",
        tips: "Drought tolerant, good for poor soils, dual purpose grain-fodder",
        yield: "1000-1500 kg/hectare",
        duration: "90-120 days"
    },
    ragi: {
        name: "Ragi (Finger Millet)",
        description: "Nutritious millet rich in calcium and iron",
        seasons: ["Kharif"],
        zones: ["Humid", "Sub-Humid"],
        states: ["KA", "TN", "AP", "OR", "MH"],
        npk_requirements: { N: [40, 50], P: [20, 25], K: [15, 20] },
        optimal_conditions: "Temperature: 20-27°C, Rainfall: 50-75cm, pH: 5.0-8.2",
        tips: "Highly nutritious, good storage quality, suitable for hilly areas",
        yield: "1000-1500 kg/hectare",
        duration: "90-120 days"
    },

    // Oil Seeds
    groundnut: {
        name: "Groundnut (Moongfali)",
        description: "Major oilseed crop, protein and oil source",
        seasons: ["Kharif", "Rabi"],
        zones: ["Semi-Arid", "Sub-Humid"],
        states: ["GJ", "AP", "TG", "TN", "KA", "MH", "RJ"],
        npk_requirements: { N: [20, 25], P: [50, 60], K: [50, 75] },
        optimal_conditions: "Temperature: 20-30°C, Rainfall: 50-125cm, pH: 6.0-7.0",
        tips: "Calcium requirement high, avoid waterlogging, harvest timely",
        yield: "1200-2000 kg/hectare",
        duration: "90-120 days"
    },
    mustard: {
        name: "Mustard (Sarson)",
        description: "Important rabi oilseed, edible oil source",
        seasons: ["Rabi"],
        zones: ["Semi-Arid", "Sub-Humid"],
        states: ["RJ", "HR", "UP", "MP", "GJ", "PB", "WB"],
        npk_requirements: { N: [60, 80], P: [30, 40], K: [40, 50] },
        optimal_conditions: "Temperature: 10-25°C, Rainfall: 25-40cm, pH: 6.0-7.5",
        tips: "Cool weather crop, requires irrigation, good for crop rotation",
        yield: "800-1200 kg/hectare",
        duration: "90-120 days"
    },
    sunflower: {
        name: "Sunflower (Surajmukhi)",
        description: "Important oilseed with high oil content",
        seasons: ["Kharif", "Rabi"],
        zones: ["Semi-Arid", "Sub-Humid"],
        states: ["KA", "AP", "TG", "MH", "BR", "OR"],
        npk_requirements: { N: [60, 80], P: [60, 80], K: [40, 60] },
        optimal_conditions: "Temperature: 20-25°C, Rainfall: 50-75cm, pH: 6.0-8.0",
        tips: "Day length sensitive, requires well-drained soil, wind protection needed",
        yield: "800-1200 kg/hectare",
        duration: "85-110 days"
    },

    // Pulses
    arhar: {
        name: "Arhar/Tur (Pigeon Pea)",
        description: "Major pulse crop, protein source and nitrogen fixer",
        seasons: ["Kharif"],
        zones: ["Semi-Arid", "Sub-Humid"],
        states: ["MH", "KA", "UP", "MP", "GJ", "RJ", "AP", "OR"],
        npk_requirements: { N: [20, 25], P: [50, 60], K: [20, 25] },
        optimal_conditions: "Temperature: 20-30°C, Rainfall: 60-160cm, pH: 5.5-8.4",
        tips: "Long duration crop, good for intercropping, drought tolerant",
        yield: "800-1200 kg/hectare",
        duration: "150-210 days"
    },
    chana: {
        name: "Chana (Chickpea)",
        description: "Important rabi pulse, high protein content",
        seasons: ["Rabi"],
        zones: ["Semi-Arid", "Sub-Humid"],
        states: ["MP", "RJ", "MH", "UP", "KA", "AP", "BR"],
        npk_requirements: { N: [20, 25], P: [50, 60], K: [20, 30] },
        optimal_conditions: "Temperature: 20-30°C, Rainfall: 30-40cm, pH: 6.0-7.5",
        tips: "Avoid excess moisture, cool weather preferred, good nitrogen fixer",
        yield: "800-1200 kg/hectare",
        duration: "90-120 days"
    },
    moong: {
        name: "Moong (Green Gram)",
        description: "Short duration pulse, multiple cropping possible",
        seasons: ["Kharif", "Zaid"],
        zones: ["Semi-Arid", "Sub-Humid"],
        states: ["RJ", "MH", "KA", "UP", "AP", "OR", "BR"],
        npk_requirements: { N: [15, 20], P: [40, 50], K: [15, 20] },
        optimal_conditions: "Temperature: 25-35°C, Rainfall: 30-75cm, pH: 6.2-7.2",
        tips: "Short duration, good for crop rotation, heat tolerant",
        yield: "400-800 kg/hectare",
        duration: "60-90 days"
    },

    // Cash Crops
    cotton: {
        name: "Cotton (Kapas)",
        description: "Important fiber crop, textile industry raw material",
        seasons: ["Kharif"],
        zones: ["Semi-Arid"],
        states: ["GJ", "MH", "AP", "TG", "KA", "PB", "HR", "RJ"],
        npk_requirements: { N: [100, 150], P: [50, 75], K: [50, 75] },
        optimal_conditions: "Temperature: 21-30°C, Rainfall: 50-100cm, pH: 5.8-8.0",
        tips: "Long growing season, pest management critical, good drainage needed",
        yield: "300-500 kg/hectare",
        duration: "160-200 days"
    },
    sugarcane: {
        name: "Sugarcane (Ganna)",
        description: "Important cash crop for sugar and jaggery production",
        seasons: ["Perennial"],
        zones: ["Humid", "Sub-Humid"],
        states: ["UP", "MH", "KA", "TN", "AP", "PB", "GJ", "BR"],
        npk_requirements: { N: [200, 300], P: [80, 100], K: [150, 200] },
        optimal_conditions: "Temperature: 20-30°C, Rainfall: 75-150cm, pH: 6.0-7.5",
        tips: "High water requirement, long duration crop, requires heavy fertilization",
        yield: "60000-80000 kg/hectare",
        duration: "300-365 days"
    },

    // Plantation & Perennial
    coconut: {
        name: "Coconut (Nariyal)",
        description: "Versatile palm crop, multiple product uses",
        seasons: ["Perennial"],
        zones: ["Humid"],
        states: ["KL", "TN", "KA", "AP", "OR", "WB", "GJ"],
        npk_requirements: { N: [400, 600], P: [200, 300], K: [800, 1200] },
        optimal_conditions: "Temperature: 20-32°C, Rainfall: 130-250cm, pH: 5.2-8.0",
        tips: "Coastal climate preferred, high potassium requirement, long gestation",
        yield: "8000-12000 nuts/hectare/year",
        duration: "Perennial (starts bearing after 5-6 years)"
    },
    coffee: {
        name: "Coffee",
        description: "Important plantation crop, beverage industry",
        seasons: ["Perennial"],
        zones: ["Humid"],
        states: ["KA", "KL", "TN"],
        npk_requirements: { N: [150, 200], P: [50, 75], K: [150, 200] },
        optimal_conditions: "Temperature: 15-28°C, Rainfall: 150-250cm, pH: 4.5-6.5",
        tips: "Shade crop, high altitude preferred, acidic soil suitable",
        yield: "800-1200 kg/hectare",
        duration: "Perennial (starts bearing after 3-4 years)"
    },
    tea: {
        name: "Tea (Chai)",
        description: "Important beverage crop, export commodity",
        seasons: ["Perennial"],
        zones: ["Humid"],
        states: ["AS", "WB", "TN", "KL", "KA"],
        npk_requirements: { N: [300, 400], P: [100, 150], K: [100, 150] },
        optimal_conditions: "Temperature: 13-30°C, Rainfall: 150-300cm, pH: 4.5-5.8",
        tips: "Acidic soil preferred, high altitude, good drainage essential",
        yield: "1500-2500 kg/hectare",
        duration: "Perennial (plucking starts after 3-4 years)"
    },
    // -------- VEGETABLES --------
  tomato: {
        name: "Tomato (Tamatar)",
        description: "Widely grown vegetable for table and processing",
        seasons: ["Kharif", "Rabi", "Zaid"],
        zones: ["Humid", "Sub-Humid", "Semi-Arid"],
        states: ["MH", "KA", "AP", "TG", "TN", "MP", "UP", "BR"],
        npk_requirements: { N: [100, 150], P: [50, 60], K: [50, 80] },
        optimal_conditions: "Temperature: 20-30°C, Rainfall: 50-125cm, pH: 6.0-7.0",
        tips: "Use staking/trellising and mulching to reduce fruit rot and weeds",
        yield: "25000-35000 kg/hectare",
        duration: "90-120 days",
        sowing_techniques: "Raise nursery; transplant 25-30 day seedlings at 60x45 cm; 1-2 cm depth",
        pest_management: "Fruit borer, aphids, early blight; use pheromone traps, neem-based sprays, rotate fungicides",
        market_price_range: "₹10-40/kg (seasonal)"
    },
    potato: {
        name: "Potato (Aloo)",
        description: "Major tuber crop for food and processing",
        seasons: ["Rabi", "Kharif (hills)"],
        zones: ["Sub-Humid", "Semi-Arid"],
        states: ["UP", "WB", "BR", "PB", "HR", "MP", "GJ"],
        npk_requirements: { N: [120, 180], P: [60, 80], K: [80, 120] },
        optimal_conditions: "Temperature: 15-22°C, Rainfall: 50-100cm, pH: 5.5-7.0",
        tips: "Use disease-free seed tubers; maintain ridge-furrow and timely earthing up",
        yield: "20000-30000 kg/hectare",
        duration: "90-110 days",
        sowing_techniques: "Plant 25-50 g seed pieces at 60x20-25 cm; 5-8 cm depth on ridges",
        pest_management: "Late blight, cutworm; prophylactic fungicide schedule, field sanitation",
        market_price_range: "₹12-40/kg"
    },
    onion: {
        name: "Onion (Pyaz)",
        description: "Bulb vegetable with high storage and processing demand",
        seasons: ["Rabi", "Kharif"],
        zones: ["Semi-Arid", "Sub-Humid"],
        states: ["MH", "KA", "GJ", "RJ", "MP", "TG", "AP"],
        npk_requirements: { N: [80, 120], P: [40, 60], K: [60, 80] },
        optimal_conditions: "Temperature: 15-25°C (bulbing), Rainfall: 50-75cm, pH: 6.0-7.5",
        tips: "Cure bulbs well post-harvest for long storage",
        yield: "20000-30000 kg/hectare",
        duration: "110-130 days",
        sowing_techniques: "Nursery raising; transplant 6-8 week seedlings at 15x10 cm; shallow placement",
        pest_management: "Thrips, purple blotch; reflective mulches, need-based insecticides/fungicides",
        market_price_range: "₹15-40/kg"
    },
    garlic: {
        name: "Garlic (Lahsun)",
        description: "Aromatic bulb crop used as spice and medicine",
        seasons: ["Rabi"],
        zones: ["Semi-Arid", "Sub-Humid"],
        states: ["MP", "RJ", "UP", "GJ", "MH"],
        npk_requirements: { N: [80, 100], P: [50, 60], K: [50, 60] },
        optimal_conditions: "Temperature: 12-20°C, Rainfall: 50-75cm, pH: 6.0-7.5",
        tips: "Use healthy cloves; avoid waterlogging",
        yield: "6000-10000 kg/hectare",
        duration: "150-180 days",
        sowing_techniques: "Plant cloves at 15x10 cm; 3-4 cm depth on raised beds",
        pest_management: "Stemphylium, thrips; crop rotation and preventive sprays",
        market_price_range: "₹80-200/kg"
    },
    brinjal: {
        name: "Brinjal (Baingan/Eggplant)",
        description: "Popular solanaceous vegetable with year-round demand",
        seasons: ["Kharif", "Rabi", "Zaid"],
        zones: ["Humid", "Sub-Humid", "Semi-Arid"],
        states: ["WB", "BR", "UP", "MH", "KA", "AP", "TG"],
        npk_requirements: { N: [100, 150], P: [60, 80], K: [60, 80] },
        optimal_conditions: "Temperature: 22-30°C, Rainfall: 60-100cm, pH: 6.0-7.5",
        tips: "Regular harvesting increases yield; stake for larger fruited types",
        yield: "20000-30000 kg/hectare",
        duration: "110-140 days",
        sowing_techniques: "Transplant 30-35 day seedlings at 60x45 cm; raised beds",
        pest_management: "Shoot & fruit borer; pheromone traps, rogue infested shoots, need-based sprays",
        market_price_range: "₹15-40/kg"
    },
    okra: {
        name: "Okra (Bhindi)",
        description: "Warm-season vegetable rich in fiber",
        seasons: ["Kharif", "Zaid"],
        zones: ["Humid", "Sub-Humid", "Semi-Arid"],
        states: ["UP", "BR", "WB", "MH", "KA", "TN", "AP", "TG"],
        npk_requirements: { N: [80, 100], P: [40, 60], K: [40, 60] },
        optimal_conditions: "Temperature: 24-32°C, Rainfall: 60-100cm, pH: 6.0-7.5",
        tips: "Harvest tender pods every 2-3 days",
        yield: "8000-12000 kg/hectare",
        duration: "60-80 days",
        sowing_techniques: "Direct sowing at 45x30 cm; seed priming improves germination",
        pest_management: "Yellow mosaic virus, jassids; resistant varieties, vector control",
        market_price_range: "₹20-50/kg"
    },
    cauliflower: {
        name: "Cauliflower (Phool Gobhi)",
        description: "Cool-season cole crop, staggered maturity groups",
        seasons: ["Rabi"],
        zones: ["Sub-Humid"],
        states: ["BR", "WB", "UP", "HR", "PB", "MP"],
        npk_requirements: { N: [120, 150], P: [60, 80], K: [60, 80] },
        optimal_conditions: "Temperature: 15-20°C, Rainfall: 50-75cm, pH: 6.0-7.0",
        tips: "Blanch curds if needed; maintain uniform moisture",
        yield: "15000-25000 kg/hectare",
        duration: "90-120 days",
        sowing_techniques: "Transplant 4-5 week seedlings at 60x45 cm",
        pest_management: "Diamondback moth, downy mildew; traps and rotation of bio/chemical controls",
        market_price_range: "₹15-40/kg"
    },

    // -------- FRUITS --------
    mango: {
        name: "Mango (Aam)",
        description: "Leading tropical fruit, fresh and processed",
        seasons: ["Perennial (harvest in summer)"],
        zones: ["Humid", "Sub-Humid", "Semi-Arid"],
        states: ["UP", "AP", "TG", "KA", "GJ", "WB", "BR"],
        npk_requirements: { N: [100, 200], P: [50, 100], K: [100, 200] },
        optimal_conditions: "Temperature: 24-32°C, Rainfall: 75-250cm, pH: 5.5-7.5",
        tips: "Prune lightly after harvest; use mulch to conserve moisture",
        yield: "10000-15000 kg/hectare",
        duration: "Perennial (bearing from 5-6 years)",
        sowing_techniques: "Grafted plants at 8x8 to 10x10 m; pits enriched with FYM",
        pest_management: "Hoppers, fruit fly, powdery mildew; sanitation, traps, timely sprays",
        market_price_range: "₹40-120/kg (variety/season)"
    },
    banana: {
        name: "Banana (Kela)",
        description: "Year-round fruit with high K requirement",
        seasons: ["Perennial (staggered planting)"],
        zones: ["Humid", "Sub-Humid"],
        states: ["TN", "KA", "KL", "AP", "TG", "AS", "MH", "GJ"],
        npk_requirements: { N: [150, 250], P: [60, 80], K: [200, 300] },
        optimal_conditions: "Temperature: 25-32°C, Rainfall: 100-200cm, pH: 5.5-7.5",
        tips: "Propping and de-suckering improve bunch size; maintain drainage",
        yield: "25000-35000 kg/hectare",
        duration: "8-10 months to harvest",
        sowing_techniques: "Tissue culture/suckers at 1.8x1.5 m; pits with FYM",
        pest_management: "Sigatoka, nematodes; resistant varieties, leaf sanitation, nematicides",
        market_price_range: "₹20-40/kg (retail bunch equivalent)"
    },
    papaya: {
        name: "Papaya",
        description: "Fast-bearing fruit, table and processing",
        seasons: ["Perennial (best planted Feb–Mar or Jun–Jul)"],
        zones: ["Humid", "Sub-Humid"],
        states: ["MH", "KA", "AP", "TG", "TN", "GJ", "WB"],
        npk_requirements: { N: [150, 250], P: [60, 100], K: [150, 250] },
        optimal_conditions: "Temperature: 22-30°C, Rainfall: 100-150cm, pH: 6.0-7.5",
        tips: "Select gynodioecious varieties; avoid waterlogging",
        yield: "30000-50000 kg/hectare",
        duration: "8-10 months to first harvest",
        sowing_techniques: "Plant at 2x2 m; thin seedlings to strongest plant per pit",
        pest_management: "Papaya ring spot virus, mites; remove infected plants, vector control",
        market_price_range: "₹15-40/kg"
    },
    grapes: {
        name: "Grapes (Angoor)",
        description: "Table and raisin/wine types; needs training",
        seasons: ["Perennial (harvest depends on pruning time)"],
        zones: ["Semi-Arid", "Sub-Humid"],
        states: ["MH", "KA", "TG"],
        npk_requirements: { N: [80, 120], P: [40, 60], K: [120, 200] },
        optimal_conditions: "Temperature: 20-32°C, Rainfall: 50-75cm, pH: 6.5-7.5",
        tips: "Canopy management critical; ensure good drainage",
        yield: "10000-20000 kg/hectare",
        duration: "Bearing from 2-3 years",
        sowing_techniques: "Hardwood cuttings grafted; plant with trellis/wires at ~3x2 m",
        pest_management: "Thrips, powdery mildew; canopy ventilation and scheduled sprays",
        market_price_range: "₹40-120/kg"
    },

    // -------- SPICES --------
    turmeric: {
        name: "Turmeric (Haldi)",
        description: "Rhizome spice for food and pharma",
        seasons: ["Kharif"],
        zones: ["Humid", "Sub-Humid"],
        states: ["TG", "AP", "KA", "TN", "OR", "MH"],
        npk_requirements: { N: [100, 150], P: [50, 60], K: [100, 150] },
        optimal_conditions: "Temperature: 20-30°C, Rainfall: 100-150cm, pH: 5.5-7.5",
        tips: "High organic manure improves curcumin content",
        yield: "8000-12000 kg/hectare (dry equivalent lower)",
        duration: "200-300 days",
        sowing_techniques: "Rhizome pieces on ridges at 30x20 cm; mulch after planting",
        pest_management: "Rhizome rot, leaf spot; seed treatment and well-drained soil",
        market_price_range: "₹80-200/kg (dry)"
    },
    ginger: {
        name: "Ginger (Adrak)",
        description: "Aromatic rhizome used fresh and dry",
        seasons: ["Kharif"],
        zones: ["Humid", "Sub-Humid"],
        states: ["KA", "KL", "AS", "OR", "MH", "ME"],
        npk_requirements: { N: [75, 100], P: [50, 60], K: [50, 100] },
        optimal_conditions: "Temperature: 20-30°C, Rainfall: 150-300cm, pH: 5.5-6.5",
        tips: "Heavy mulching for moisture and weed control",
        yield: "6000-10000 kg/hectare (green)",
        duration: "180-210 days",
        sowing_techniques: "Seed rhizomes at 30x20 cm on raised beds; 4-5 cm depth",
        pest_management: "Soft rot, shoot borer; seed treatment, drainage, need-based sprays",
        market_price_range: "₹80-250/kg (green)"
    },
    chilli: {
        name: "Chilli (Mirchi)",
        description: "Spice and vegetable; red dry and green markets",
        seasons: ["Kharif", "Rabi"],
        zones: ["Semi-Arid", "Sub-Humid"],
        states: ["AP", "TG", "KA", "MH", "RJ", "MP"],
        npk_requirements: { N: [80, 120], P: [40, 60], K: [60, 80] },
        optimal_conditions: "Temperature: 20-30°C, Rainfall: 50-100cm, pH: 6.0-7.5",
        tips: "Mulch and drip help reduce flower drop",
        yield: "1000-1500 kg/hectare (dry) or 8000-12000 kg/hectare (green)",
        duration: "120-150 days",
        sowing_techniques: "Nursery raising; transplant at 60x45 cm",
        pest_management: "Thrips, fruit rot; blue/yellow sticky traps, prophylactic sprays",
        market_price_range: "₹60-250/kg (green/dry varies)"
    },
    cardamom: {
        name: "Cardamom (Elaichi)",
        description: "High-value shade-loving spice",
        seasons: ["Perennial (harvest Aug–Feb)"],
        zones: ["Humid"],
        states: ["KL", "KA", "TN"],
        npk_requirements: { N: [75, 150], P: [40, 60], K: [75, 150] },
        optimal_conditions: "Temperature: 15-25°C, Rainfall: 150-300cm, pH: 4.5-6.0",
        tips: "Requires shade and mulch; maintain windbreaks",
        yield: "800-1200 kg/hectare (dry capsules)",
        duration: "Bearing from 2-3 years",
        sowing_techniques: "Sucker/seedlings under shade at ~2x2 m spacing",
        pest_management: "Shoot/capsule borers, fungal rots; pruning, drainage and targeted sprays",
        market_price_range: "₹1500-3000/kg"
    },
    black_pepper: {
        name: "Black Pepper (Kali Mirch)",
        description: "Climbing vine grown on live standards",
        seasons: ["Perennial (harvest Dec–Mar)"],
        zones: ["Humid"],
        states: ["KL", "KA", "TN"],
        npk_requirements: { N: [75, 120], P: [30, 50], K: [75, 120] },
        optimal_conditions: "Temperature: 20-30°C, Rainfall: 200-300cm, pH: 5.0-6.5",
        tips: "Provide standards (arecanut/gliricidia) and good shade",
        yield: "1000-1500 kg/hectare (dry)",
        duration: "Bearing from 2-3 years",
        sowing_techniques: "Rooted cuttings near standards at 2-3 m spacing",
        pest_management: "Pollu beetle, quick wilt; sanitation, organic mulches, need-based insecticides",
        market_price_range: "₹400-800/kg"
    },
    cumin: {
        name: "Cumin (Jeera)",
        description: "Aromatic seed spice of arid/semi-arid regions",
        seasons: ["Rabi"],
        zones: ["Arid", "Semi-Arid"],
        states: ["RJ", "GJ"],
        npk_requirements: { N: [30, 50], P: [20, 30], K: [20, 30] },
        optimal_conditions: "Temperature: 15-25°C, Rainfall: 20-40cm, pH: 6.5-8.0",
        tips: "Needs dry climate at maturity for quality",
        yield: "600-1000 kg/hectare",
        duration: "100-120 days",
        sowing_techniques: "Direct sowing at 30x10 cm; shallow depth",
        pest_management: "Blight, aphids; seed treatment and timely fungicide/insecticide",
        market_price_range: "₹300-700/kg"
    },
    coriander: {
        name: "Coriander (Dhaniya)",
        description: "Leaf and seed spice; quick cash crop",
        seasons: ["Rabi", "Zaid"],
        zones: ["Semi-Arid", "Sub-Humid"],
        states: ["RJ", "MP", "AP", "TG", "GJ"],
        npk_requirements: { N: [30, 50], P: [20, 30], K: [20, 30] },
        optimal_conditions: "Temperature: 15-25°C, Rainfall: 30-60cm, pH: 6.0-7.5",
        tips: "Split seeds before sowing for better germination",
        yield: "800-1200 kg/hectare (seed) or 5000-8000 kg/hectare (leaf)",
        duration: "75-110 days",
        sowing_techniques: "Broadcast/drill at 30x10 cm; shallow cover",
        pest_management: "Aphids, powdery mildew; need-based sprays and sanitation",
        market_price_range: "₹40-150/kg (seed/leaf varies)"
    },

    // -------- PULSES (additional) --------
    urad: {
        name: "Urad (Black Gram)",
        description: "Short-duration pulse for Kharif/Rabi in some regions",
        seasons: ["Kharif", "Rabi (limited)"],
        zones: ["Semi-Arid", "Sub-Humid"],
        states: ["MP", "UP", "RJ", "MH", "KA", "AP", "TG"],
        npk_requirements: { N: [15, 20], P: [40, 50], K: [20, 30] },
        optimal_conditions: "Temperature: 25-35°C, Rainfall: 30-70cm, pH: 6.0-7.5",
        tips: "Inoculate seed with Rhizobium; avoid waterlogging",
        yield: "600-900 kg/hectare",
        duration: "65-90 days",
        sowing_techniques: "Direct sowing at ~30x10 cm; shallow depth",
        pest_management: "YMV, hairy caterpillar; vector control and timely sprays",
        market_price_range: "₹70-120/kg"
    },
    masoor: {
        name: "Masoor (Lentil)",
        description: "Cool-season Rabi pulse for northern plains",
        seasons: ["Rabi"],
        zones: ["Sub-Humid", "Semi-Arid"],
        states: ["UP", "MP", "BR", "WB"],
        npk_requirements: { N: [20, 25], P: [40, 50], K: [20, 30] },
        optimal_conditions: "Temperature: 15-22°C, Rainfall: 25-40cm, pH: 6.0-7.5",
        tips: "Sow on residual moisture post-paddy for low irrigation need",
        yield: "600-1000 kg/hectare",
        duration: "100-120 days",
        sowing_techniques: "Drill at 30x10 cm on well-prepared seedbed",
        pest_management: "Pod borer, wilt; resistant varieties and seed treatment",
        market_price_range: "₹75-110/kg"
    },

    // -------- OILSEEDS / CASH-CROPS (additional) --------
    soybean: {
        name: "Soybean",
        description: "Major kharif oilseed and protein source",
        seasons: ["Kharif"],
        zones: ["Sub-Humid", "Semi-Arid"],
        states: ["MP", "MH", "RJ", "CG"],
        npk_requirements: { N: [20, 30], P: [60, 80], K: [40, 60] },
        optimal_conditions: "Temperature: 20-30°C, Rainfall: 60-120cm, pH: 6.0-7.5",
        tips: "Seed inoculation with Rhizobium; avoid waterlogging",
        yield: "1500-2500 kg/hectare",
        duration: "90-110 days",
        sowing_techniques: "Drill at 45x5-7 cm; 3-5 cm depth; timely weeding",
        pest_management: "Girdle beetle, defoliators; pheromone traps and IPM",
        market_price_range: "₹35-80/kg"
    },
    barley: {
        name: "Barley (Jau)",
        description: "Rabi cereal for feed, malt, and food",
        seasons: ["Rabi"],
        zones: ["Semi-Arid", "Sub-Humid"],
        states: ["RJ", "HR", "PB", "UP", "MP"],
        npk_requirements: { N: [60, 80], P: [30, 40], K: [20, 30] },
        optimal_conditions: "Temperature: 10-20°C, Rainfall: 40-60cm, pH: 6.5-8.0",
        tips: "Low input, tolerant to salinity/alkalinity",
        yield: "2000-3000 kg/hectare",
        duration: "110-130 days",
        sowing_techniques: "Line sowing at 22-23 cm row spacing; 4-6 cm depth",
        pest_management: "Rusts and aphids; resistant varieties and timely sprays",
        market_price_range: "₹20-35/kg"
    },

    // -------- PLANTATION / PERENNIAL (additional) --------
    rubber: {
        name: "Rubber (Hevea)",
        description: "Industrial latex crop; long-duration plantation",
        seasons: ["Perennial"],
        zones: ["Humid"],
        states: ["KL", "TN", "KA", "TR", "AS"],
        npk_requirements: { N: [60, 120], P: [30, 60], K: [60, 120] },
        optimal_conditions: "Temperature: 25-34°C, Rainfall: 200-300cm, pH: 4.5-6.5",
        tips: "Good drainage and windbreaks; start tapping ~6 years",
        yield: "1500-3000 kg/hectare (dry rubber/yr)",
        duration: "Economic life 25-30 years",
        sowing_techniques: "Budded stumps/polybag plants at ~7x3 m; contour planting on slopes",
        pest_management: "White root rot, leaf fall; sanitation, fungicide dips",
        market_price_range: "₹120-200/kg (dry rubber)"
    },
    cashew: {
        name: "Cashew (Kaju)",
        description: "Tropical nut tree; coastal belts and plateaus",
        seasons: ["Perennial (harvest Feb–May)"],
        zones: ["Humid", "Sub-Humid"],
        states: ["GA", "KA", "KL", "MH", "OR", "AP", "TG"],
        npk_requirements: { N: [60, 100], P: [40, 60], K: [60, 100] },
        optimal_conditions: "Temperature: 24-32°C, Rainfall: 100-200cm, pH: 5.0-7.5",
        tips: "High-density planting with pruning improves yield",
        yield: "800-1500 kg/hectare (raw nuts)",
        duration: "Bearing from 3-4 years",
        sowing_techniques: "Grafted plants at 7x7 to 8x8 m; pit planting with FYM",
        pest_management: "Tea mosquito bug, stem/root borers; sanitation and need-based sprays",
        market_price_range: "₹150-400/kg (raw) | higher for kernels"
    },
    arecanut: {
        name: "Arecanut (Supari)",
        description: "Plantation nut grown under high rainfall",
        seasons: ["Perennial"],
        zones: ["Humid"],
        states: ["KA", "KL", "TN", "AS"],
        npk_requirements: { N: [100, 200], P: [40, 60], K: [140, 240] },
        optimal_conditions: "Temperature: 20-30°C, Rainfall: 200-300cm, pH: 5.5-7.0",
        tips: "Requires irrigation in dry spells; intercrop with pepper/banana",
        yield: "1000-1500 kg/hectare (dry kernels)",
        duration: "Bearing from 5-6 years",
        sowing_techniques: "Transplant seedlings at 2.7x2.7 m; provide shade in early years",
        pest_management: "Koleroga (fruit rot), spindle bug; sanitation and protective sprays",
        market_price_range: "₹200-350/kg"
    }
};

// Indian States mapping
export const INDIAN_STATES = {
    "AP": "Andhra Pradesh",
    "AR": "Arunachal Pradesh",
    "AS": "Assam",
    "BR": "Bihar",
    "CT": "Chhattisgarh",
    "GA": "Goa",
    "GJ": "Gujarat",
    "HR": "Haryana",
    "HP": "Himachal Pradesh",
    "JK": "Jammu & Kashmir",
    "JH": "Jharkhand",
    "KA": "Karnataka",
    "KL": "Kerala",
    "MP": "Madhya Pradesh",
    "MH": "Maharashtra",
    "MN": "Manipur",
    "ML": "Meghalaya",
    "MZ": "Mizoram",
    "NL": "Nagaland",
    "OR": "Odisha",
    "PB": "Punjab",
    "RJ": "Rajasthan",
    "SK": "Sikkim",
    "TN": "Tamil Nadu",
    "TG": "Telangana",
    "TR": "Tripura",
    "UP": "Uttar Pradesh",
    "UK": "Uttarakhand",
    "WB": "West Bengal"
};

// Agro-climatic zones classification
export function classifyAgroClimaticZone(temperature, rainfall) {
    // Based on Indian agro-climatic zones
    if (temperature >= 28 && rainfall >= 150) {
        return "Humid";
    } else if (temperature >= 24 && rainfall >= 75) {
        return "Sub-Humid";
    } else if (temperature >= 20 && rainfall >= 50 && rainfall < 75) {
        return "Semi-Arid";
    } else {
        return "Arid";
    }
}

// Seasonal mapping for Indian agriculture
export const INDIAN_SEASONS = {
    "Kharif": {
        name: "Kharif (Monsoon Season)",
        period: "June - October",
        description: "Crops sown during monsoon and harvested in autumn"
    },
    "Rabi": {
        name: "Rabi (Winter Season)",
        period: "November - April",
        description: "Crops sown in winter and harvested in spring"
    },
    "Zaid": {
        name: "Zaid (Summer Season)",
        period: "March - June",
        description: "Crops grown during summer with irrigation"
    },
    "Perennial": {
        name: "Perennial",
        period: "Year Round",
        description: "Long-term crops that produce over multiple years"
    }
};

export default CROP_DATABASE;
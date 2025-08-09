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
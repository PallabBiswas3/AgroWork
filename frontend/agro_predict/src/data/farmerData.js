export const farmerData = {
    schemes: {
        PM_KISAN: {
            name: "PM Kisan Samman Nidhi",
            amount: 6000,
            frequency: "Annual",
            installments: 3,
            beneficiaries: "11+ crore (as of 2024)",
            disbursed: "₹X lakh crore",
            eligibility: "Land-holding farmers",
            exclusions: ["Income tax payers", "Pensioners >₹10,000/month"],
            description: "Income support of ₹6,000 per year in three installments to farmer families."
        },
        KCC: {
            name: "Kisan Credit Card",
            limit: 300000,
            interest_rate: 7,
            subvention_rate: 3,
            effective_rate: 4,
            cards_issued: "46.5 lakh",
            credit_sanctioned: "₹5.7 lakh crore",
            description: "Timely credit access for farmers with a 2–3% interest subvention (effective ~4%)."
        },
        PMFBY: {
            name: "Pradhan Mantri Fasal Bima Yojana",
            premium_rates: { kharif: 2, rabi: 1.5, commercial: 5 },
            applications: "55.49 lakh",
            claims_paid: "₹1.50 lakh crore",
            description: "Comprehensive crop insurance covering 50+ crops; protects farmers from yield and price risks."
        },
        SMAM: {
            name: "Sub-Mission on Agricultural Mechanization",
            subsidy_range: "50-80%",
            released: "₹6,749 crore",
            machines: "15.8 lakh",
            chc: "23,472",
            description: "Financial assistance for affordable farm machinery (tractors, harvesters, etc.) for small/marginal farmers."
        },
        PKVY: {
            name: "Paramparagat Krishi Vikas Yojana",
            assistance: 31500,
            direct_payment: 15000,
            area_covered: "14.99 lakh hectares",
            farmers: "25 lakh",
            description: "Organic farming support (cluster approach) with per-hectare aid (₹31,500 over 3 years):contentReference[oaicite:13]{index=13}:contentReference[oaicite:14]{index=14}."
        },

        /* New central/state schemes */
        RYTHU_BANDHU: {
            name: "Rythu Bandhu (Telangana)",
            amount_per_acre_per_season: 5000,
            seasons_per_year: 2,
            beneficiaries: "58.33 lakh (farmers)",
            description: "Telangana investment support: ₹5,000 per acre per crop season (₹10,000/year) to all landholding farmers:contentReference[oaicite:15]{index=15}."
        },
        ANNADATA_SUKHIBHAVA: {
            name: "Annadata Sukhibhava (Andhra Pradesh)",
            amount: 20000,
            central_share: 6000,
            state_share: 14000,
            frequency: "Annual",
            description: "Andhra scheme (formerly YSR Rythu Bharosa): ₹20,000 per farmer per year (₹6,000 central + ₹14,000 state):contentReference[oaicite:16]{index=16}."
        },
        RYTHU_BIMA_TELANGANA: {
            name: "Telangana Rythu Bima (Farmer Insurance)",
            launched: 2018,
            cover: 500000,
            description: "Telangana farmer life insurance: ₹5 lakh paid to nominee on death of an enrolled farmer:contentReference[oaicite:17]{index=17}."
        },
        SOIL_HEALTH_CARD: {
            name: "Soil Health Card Scheme",
            launched: 2015,
            cards_distributed: "25 crore+ (by 2025)",
            labs: 8272,
            description: "Printed soil nutrient analysis reports for farmers (issued every 2–3 years) to guide fertiliser use:contentReference[oaicite:18]{index=18}:contentReference[oaicite:19]{index=19}."
        },
        eNAM: {
            name: "e-NAM (National Agriculture Market)",
            launched: 2016,
            mandis_integrated: 1389,
            farmers_registered: "1.78 crore",
            trading_value: "₹3.79 lakh crore",
            description: "National online market platform linking APMC mandis: 1,389 mandis (23 states) integrated, 1.78 crore farmers on board:contentReference[oaicite:20]{index=20}."
        },
        AIF: {
            name: "Agricultural Infrastructure Fund",
            launched: 2020,
            loan_limit: 200000000,  // Rs 2 crore
            interest_subvention: 3,
            subvention_tenure_years: 7,
            description: "Medium/long-term credit (up to ₹2 crore loans) for post-harvest infrastructure; 3% interest subsidy for up to 7 years:contentReference[oaicite:21]{index=21}."
        },
        PM_KUSUM: {
            name: "PM-KUSUM",
            launched: 2019,
            pumps_installed: "Standalone & grid-connected",
            subsidy_rate: "30% (50% for NE/Hilly)",
            description: "Subsidies for solar pumps and irrigation (30–50% CFA): reduces diesel use and raises farm incomes:contentReference[oaicite:22]{index=22}."
        },
        PMKMY: {
            name: "PM-Kisan Maandhan Yojana",
            launched: 2019,
            pension_amount: 3000,
            contribution_range: "₹55–200 per month",
            beneficiaries: "23.38 lakh (enrolled by Aug 2024)",
            description: "Voluntary pension scheme for small/marginal farmers: farmers (age 18–40) pay ₹55–200/month, matched by govt; receive ₹3,000/month pension from age 60:contentReference[oaicite:23]{index=23}:contentReference[oaicite:24]{index=24}."
        },
        RKVY: {
            name: "Rashtriya Krishi Vikas Yojana (RKVY)",
            launched: 2007,
            description: "Central scheme funding state agriculture projects and infrastructure to boost farm incomes and productivity:contentReference[oaicite:25]{index=25}."
        }
    },
    farmer_profiles: {
        small: {
            land: 1.5,
            pm_kisan: 6000,
            kcc_saving: 4500,
            pmfby_premium: 1200,
            smam_subsidy: 50000,
            pkvy_assistance: 31500
        },
        medium: {
            land: 4,
            pm_kisan: 6000,
            kcc_saving: 12000,
            pmfby_premium: 3000,
            smam_subsidy: 125000,
            pkvy_assistance: 31500
        },
        large: {
            land: 10,
            pm_kisan: 6000,
            kcc_saving: 30000,
            pmfby_premium: 7500,
            smam_subsidy: 300000,
            pkvy_assistance: 31500
        }
    },
    successStories: [
        {
            id: 1,
            name: "Rajesh Kumar",
            location: "Punjab",
            story: "With PM-KISAN support, I could buy better seeds and fertilizers, increasing my yield by 40%.",
            image: "farmer1.jpg"
        },
        {
            id: 2,
            name: "Sunita Devi",
            location: "Bihar",
            story: "The Kisan Credit Card helped me invest in a new irrigation system, making my farm drought-resistant.",
            image: "farmer2.jpg"
        },
        {
            id: 3,
            name: "Vijay Reddy",
            location: "Andhra Pradesh",
            story: "PMFBY saved my farm from complete loss during unexpected floods last season.",
            image: "farmer3.jpg"
        }
    ]
};

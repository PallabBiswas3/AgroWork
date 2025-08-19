export const farmerData = {
    schemes: {
        // Existing Central Government Schemes
        PM_KISAN: {
            name: "PM Kisan Samman Nidhi",
            amount: 6000,
            frequency: "Annual",
            installments: 3,
            beneficiaries: "11+ crore (as of 2024)",
            disbursed: "₹2.81 lakh crore",
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
            cards_issued: "465.42 lakh",
            credit_sanctioned: "₹5.7 lakh crore",
            collateral_free_limit: 200000, // Increased from ₹1.6 lakh to ₹2 lakh in 2024
            description: "Timely credit access for farmers with 2-3% interest subvention (effective ~4%)."
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
            description: "Financial assistance for affordable farm machinery for small/marginal farmers."
        },
        PKVY: {
            name: "Paramparagat Krishi Vikas Yojana",
            assistance: 31500,
            direct_payment: 15000,
            area_covered: "14.99 lakh hectares",
            farmers: "25 lakh",
            description: "Organic farming support with per-hectare aid (₹31,500 over 3 years)."
        },

        // State Government Schemes
        RYTHU_BANDHU: {
            name: "Rythu Bandhu (Telangana)",
            amount_per_acre_per_season: 5000,
            seasons_per_year: 2,
            beneficiaries: "58.33 lakh farmers",
            description: "Telangana investment support: ₹5,000 per acre per crop season (₹10,000/year)."
        },
        ANNADATA_SUKHIBHAVA: {
            name: "Annadata Sukhibhava (Andhra Pradesh)",
            amount: 20000,
            central_share: 6000,
            state_share: 14000,
            frequency: "Annual",
            description: "₹20,000 per farmer per year (₹6,000 central + ₹14,000 state)."
        },
        RYTHU_BIMA_TELANGANA: {
            name: "Telangana Rythu Bima (Farmer Insurance)",
            launched: 2018,
            cover: 500000,
            description: "₹5 lakh life insurance paid to nominee on death of enrolled farmer."
        },

        // Extended Central Schemes
        SOIL_HEALTH_CARD: {
            name: "Soil Health Card Scheme",
            launched: 2015,
            cards_distributed: "25 crore+",
            labs: 8272,
            description: "Soil nutrient analysis reports for farmers (issued every 2-3 years)."
        },
        eNAM: {
            name: "e-NAM (National Agriculture Market)",
            launched: 2016,
            mandis_integrated: 1389,
            farmers_registered: "1.78 crore",
            trading_value: "₹3.79 lakh crore",
            description: "National online market platform linking APMC mandis."
        },
        AIF: {
            name: "Agricultural Infrastructure Fund",
            launched: 2020,
            loan_limit: 20000000,
            interest_subvention: 3,
            subvention_tenure_years: 7,
            sanctioned: "₹33,209 crore for 44,912 projects",
            description: "Credit for post-harvest infrastructure; 3% interest subsidy for up to 7 years."
        },
        PM_KUSUM: {
            name: "PM-KUSUM",
            launched: 2019,
            subsidy_rate: "30% (50% for NE/Hilly)",
            description: "Solar pump subsidies: reduces diesel use and raises farm incomes."
        },
        PMKMY: {
            name: "PM-Kisan Maandhan Yojana",
            launched: 2019,
            pension_amount: 3000,
            contribution_range: "₹55-200 per month",
            beneficiaries: "23.38 lakh",
            description: "Voluntary pension: ₹3,000/month pension from age 60."
        },
        FPO_SCHEME: {
            name: "Formation & Promotion of 10,000 FPOs",
            launched: 2020,
            budget: "₹6,865 crore",
            financial_assistance: 1800000,
            equity_grant: 1500000,
            credit_guarantee: 20000000,
            description: "Support for Farmer Producer Organizations with financial assistance up to ₹18 lakh per FPO."
        },

        // Tribal Welfare Schemes
        PM_JUGA: {
            name: "PM Janjatiya Utkarsh Gram Abhiyan (Dharti Aaba)",
            launched: 2024,
            budget: "₹79,156 crore",
            beneficiaries: "5+ crore tribal people",
            villages_covered: "63,000",
            districts: 549,
            description: "Comprehensive tribal village development covering housing, roads, healthcare, education, and livelihood."
        },
        PM_JANMAN: {
            name: "PM Janjati Adivasi Nyaya Maha Abhiyan",
            target_groups: "Particularly Vulnerable Tribal Groups (PVTGs)",
            households_covered: "75,800+ electrified",
            mobile_medical_units: 275,
            van_dhan_kendras: 250,
            description: "Focused development for most vulnerable tribal communities."
        },
        PM_VAN_DHAN: {
            name: "Pradhan Mantri Van Dhan Yojana",
            target_kendras: 50000,
            beneficiaries: "10 lakh tribal entrepreneurs",
            funding_per_kendra: 1500000,
            members_per_kendra: 300,
            description: "Value addition to forest produce for tribal livelihood enhancement."
        },
        PVTG_DEVELOPMENT: {
            name: "PVTG Development Program",
            families_covered: "7 lakh PVTG families",
            habitations: 22000,
            districts: 200,
            focus_areas: ["Healthcare", "Education", "Clean water", "Electricity"],
            description: "Comprehensive development for Particularly Vulnerable Tribal Groups."
        },
        EMRS: {
            name: "Eklavya Model Residential Schools",
            schools_established: "40 new + 25 under construction",
            investment: "₹2,800+ crore",
            capacity_per_school: 480,
            classes: "VI to XII",
            description: "Quality residential education for tribal students in remote areas."
        },

        // Banking and Financial Institution Schemes
        NABARD_REFINANCE: {
            name: "NABARD Long-term Refinance",
            loan_period: "Up to 15 years",
            refinance_percentage: "90-95%",
            eligible_institutions: ["SCBs", "RRBs", "DCCBs", "PACS", "NBFCs"],
            automatic_refinance: "No upper ceiling",
            description: "Long-term refinance for investment in agriculture and allied activities."
        },
        SHG_BANK_LINKAGE: {
            name: "SHG-Bank Linkage Programme",
            launched: "1992-93",
            households_covered: "17.75 crore",
            women_groups_percentage: 83.52,
            loan_limit_collateral_free: 300000,
            interest_rate: "7% (4% effective with subvention)",
            description: "World's largest microfinance program linking Self-Help Groups with banks."
        },
        JLG_FINANCING: {
            name: "Joint Liability Group Financing",
            group_size: "4-10 members",
            target_borrowers: "Small/marginal/tenant farmers",
            loan_per_member: 25000,
            collateral: "Not required",
            description: "Credit groups for farmers without proper land titles."
        },
        COOPERATIVE_FINANCING: {
            name: "Primary Agricultural Credit Societies (PACS)",
            societies: "Thousands across India",
            loan_types: ["Short-term", "Medium-term", "Long-term"],
            services: ["Credit", "Input distribution", "Marketing"],
            max_loan_amount: 50000000,
            description: "Grassroots cooperative credit institutions serving rural borrowers."
        },

        // Private Sector & CSR Initiatives
        HDFC_PARIVARTAN: {
            name: "HDFC Bank Parivartan",
            focus: "Holistic Rural Development Programme",
            activities: ["Farm livelihood", "Water conservation", "FPO creation"],
            amount_spent: "₹92.78 crore",
            coverage: "Pan-India",
            description: "Comprehensive rural development focusing on agriculture and allied activities."
        },
        RELIANCE_FOUNDATION: {
            name: "Reliance Foundation Rural Transformation",
            services: ["Input support", "Technology transfer", "Market linkage"],
            beneficiaries: "60,000+ farming households",
            focus_areas: ["Agroforestry", "Nutrition gardens", "Fishery", "Poultry"],
            description: "Supporting farming households with technology and income enhancement."
        },
        TATA_AGRICULTURAL_INITIATIVES: {
            name: "Tata Sons Agricultural Programs",
            programs: ["Lakhpati Kisan", "Sukhi Baliraja", "MKRISHI"],
            milk_companies: "13 districts",
            youth_employed: "437 as AI technicians and transporters",
            description: "Comprehensive agricultural development and farmer welfare programs."
        },
        MAHINDRA_KRISHI_MITRA: {
            name: "Mahindra Krishi Mitra Program",
            beneficiaries: "49,635 farmers",
            services: ["Soil testing", "Drip irrigation", "Bio-dynamic farming"],
            amount_spent: "₹5.47 crore",
            description: "Training farmers in effective farming practices and productivity enhancement."
        },
        TCS_MKRISHI: {
            name: "TCS mKrishi Mobile Platform",
            subscribers: "20,000+ farmers",
            villages_covered: 400,
            languages: "Local languages including voice messaging",
            services: ["Weather", "Soil conditions", "Market prices", "Expert advice"],
            description: "Mobile agro-advisory system for personalized farming guidance."
        },

        // Technology & Startup Support
        AGRITECH_GRAND_CHALLENGE: {
            name: "Agriculture Grand Challenge",
            organizer: "Ministry of Agriculture & Invest India",
            problem_statements: 12,
            startup_categories: ["Idea stage", "Ready-market stage"],
            incubation_support: "3 months physical incubation",
            pilot_program: "Government pilot opportunities",
            description: "Supporting agri-tech startups to solve key agricultural challenges."
        },
        TDB_AGRITECH_SUPPORT: {
            name: "TDB Sustainable Agri-Tech Program",
            total_agreements: 27,
            funding_provided: "₹218 crore",
            focus_areas: ["Precision agriculture", "Post-harvest", "Supply chain"],
            loan_amount: "Up to ₹2 crore",
            description: "Technology Development Board support for agricultural innovation."
        },

        // NGO and Foundation Support
        AMBUJA_FOUNDATION: {
            name: "Ambuja Foundation Agriculture Program",
            farmers_supported: "2.1 lakh",
            fpos_established: 17,
            fpo_members: 7800,
            women_members: 4000,
            turnover: "₹152.6 million",
            description: "Farmer collectives, sustainable farming, and market linkage support."
        },
        UVS_AGRICULTURE: {
            name: "Universal Versatile Society",
            focus: "Sustainable agriculture and farmer empowerment",
            services: ["Organic farming", "Market linkage", "Skill development"],
            coverage: "Multiple states",
            description: "NGO working on sustainable agricultural practices and farmer welfare."
        },
        WOTR: {
            name: "Watershed Organisation Trust",
            focus: "Watershed development and climate resilience",
            services: ["Water conservation", "Soil health", "Climate adaptation"],
            coverage: "Maharashtra, Rajasthan, Madhya Pradesh",
            description: "Watershed management and sustainable agriculture practices."
        },
        SWADES_FOUNDATION: {
            name: "Swades Foundation",
            target: "1 million rural Indians every 5-6 years",
            farmers_benefited: "25,000+",
            team_size: "1,600 (including 1,300 volunteers)",
            focus: ["Irrigation", "Economic development", "Technology"],
            description: "Holistic rural development with focus on agricultural empowerment."
        },

        // International Aid & Development
        IFAD_INDIA: {
            name: "International Fund for Agricultural Development",
            working_since: "30+ years",
            target_groups: ["Marginal farmers", "Women", "Tribal communities", "Landless"],
            focus: "Doubling farmers' incomes by sustainable agriculture",
            approach: "Grassroots organizations and self-help groups",
            description: "UN agency supporting smallholder agriculture commercialization and women empowerment."
        },
        ROTARY_WATER_HARVESTS: {
            name: "Partners for Water Access and Better Harvests",
            grant_amount: "$2 million",
            beneficiaries: "60,000 farmers",
            income_increase: "25-30%",
            area_coverage: "4,100 hectares across 4 states",
            description: "Rotary Foundation program for rainwater harvesting and sustainable farming."
        },

        // Microfinance Institutions
        SIDBI_MICROFINANCE: {
            name: "SIDBI Micro Finance Program",
            corpus: "₹100 crore",
            mfis_network: 190,
            amount_sanctioned: "₹191 crore",
            beneficiaries: "9 lakh+",
            recovery_rate: "98%",
            description: "Microfinance for industry, service and business sectors including agriculture."
        },
        DCMSME_MICROFINANCE: {
            name: "DCMSME Micro-Finance Programme",
            target: "₹50,000 crore micro-credit requirement",
            implementing_agencies: ["NGOs", "SHGs", "MFIs"],
            focus: "Diversification of services",
            security_deposit_support: "Yes",
            description: "Government micro-finance support through NGOs and MFIs."
        },

        // Cooperative Banking
        FEDERAL_BANK_COOPERATIVE: {
            name: "Federal Bank Cooperative Society Financing",
            max_loan_amount: 50000000,
            margin_requirement: "20%",
            loan_period: "12 months",
            services: ["Produce purchase", "Storage facilities", "Infrastructure"],
            description: "Financing cooperative societies for agricultural activities."
        },
        UCO_BANK_AGRI: {
            name: "UCO Bank Agriculture Credit",
            individual_limit: 2500000,
            group_limit: 10000000,
            subsidy_rates: "36% general, 44% for women/SC/ST",
            collateral_free: "Up to ₹10 lakh",
            description: "Comprehensive agricultural credit for individuals and groups."
        }
    },

    farmer_profiles: {
        tribal_small: {
            land: 1.0,
            pm_kisan: 6000,
            van_dhan_support: 50000,
            pvtg_assistance: 30000,
            shg_loan: 50000,
            emrs_education: "Free residential education",
            mobile_medical: "Free healthcare"
        },
        small: {
            land: 1.5,
            pm_kisan: 6000,
            kcc_saving: 4500,
            pmfby_premium: 1200,
            smam_subsidy: 50000,
            pkvy_assistance: 31500,
            shg_access: 100000,
            fpo_support: "Available"
        },
        marginal_woman: {
            land: 0.8,
            pm_kisan: 6000,
            shg_loan: 150000,
            amsy_loan: 200000,
            interest_rate: "4%",
            kcc_access: 100000,
            skill_training: "Free through SHGs"
        },
        medium: {
            land: 4,
            pm_kisan: 6000,
            kcc_saving: 12000,
            pmfby_premium: 3000,
            smam_subsidy: 125000,
            pkvy_assistance: 31500,
            aif_loan: 2000000,
            cooperative_access: "Yes"
        },
        large: {
            land: 10,
            pm_kisan: 6000,
            kcc_saving: 30000,
            pmfby_premium: 7500,
            smam_subsidy: 300000,
            pkvy_assistance: 31500,
            aif_loan: 5000000,
            private_sector_tie_ups: "Available"
        },
        tenant_farmer: {
            land: "Cultivated: 2 acres",
            jlg_loan: 25000,
            shg_support: 75000,
            kcc_access: "Through JLG",
            skill_development: "Free training",
            input_support: "Through cooperatives"
        }
    },

    financial_support_matrix: {
        government_direct: {
            pm_kisan: 6000,
            state_schemes_additional: "₹5,000-14,000 annually",
            pension_support: 36000,
            insurance_coverage: 200000
        },
        credit_facilities: {
            kcc_limit: 300000,
            collateral_free: 200000,
            long_term_loans: 1000000,
            microfinance: 50000
        },
        subsidies: {
            machinery: "50-80%",
            solar_pumps: "30-50%",
            organic_farming: 31500,
            insurance_premium: "85-90%"
        },
        private_support: {
            csr_programs: "Various amounts",
            technology_platforms: "Free advisory",
            market_linkages: "Better prices",
            skill_development: "Free training"
        }
    },

    tribal_specific_support: {
        education: {
            emrs_schools: "480 students per school",
            scholarships: "Pre and post-matric",
            skill_development: "Van Dhan training"
        },
        livelihood: {
            van_dhan_kendras: 1500000,
            forest_produce_value_addition: "Training and infrastructure",
            tribal_cooperatives: "Marketing support"
        },
        healthcare: {
            mobile_medical_units: 275,
            sickle_cell_treatment: "Specialized centers",
            nutrition_support: "Enhanced Anganwadis"
        },
        infrastructure: {
            housing: "20 lakh pucca houses",
            roads: "25,000 km connectivity",
            electricity: "75,800+ household connections",
            water: "5,550+ villages with clean water"
        }
    },

    successStories: [
        {
            id: 1,
            name: "Rajesh Kumar",
            location: "Punjab",
            story: "With PM-KISAN and KCC support, I could buy better seeds and fertilizers, increasing my yield by 40%.",
            image: "farmer1.jpg"
        },
        {
            id: 2,
            name: "Sunita Devi",
            location: "Bihar",
            story: "SHG membership helped me access ₹1 lakh loan for irrigation system, making my farm drought-resistant.",
            image: "farmer2.jpg"
        },
        {
            id: 3,
            name: "Vijay Reddy",
            location: "Andhra Pradesh",
            story: "PMFBY and Rythu Bandhu saved my farm from complete loss during unexpected floods. Got ₹50,000 compensation plus ₹20,000 annual support.",
            image: "farmer3.jpg"
        },
        {
            id: 4,
            name: "Lalita Oraon",
            location: "Jharkhand (Tribal)",
            story: "Van Dhan Kendra training helped me add value to mahua flowers. Now earning ₹15,000 monthly instead of ₹3,000.",
            image: "tribal_farmer1.jpg"
        }
    ],

    support_categories: {
        government_central: ["PM-KISAN", "KCC", "PMFBY", "AIF", "PKVY", "SMAM", "eNAM"],
        government_state: ["Rythu Bandhu", "Annadata Sukhibhava", "State-specific schemes"],
        tribal_welfare: ["PM-JUGA", "PM-JANMAN", "Van Dhan", "EMRS", "PVTG Development"],
        banking_financial: ["NABARD", "SHG-Bank Linkage", "JLG", "PACS", "Cooperative Banks"],
        private_corporate: ["HDFC Parivartan", "Reliance Foundation", "Tata Programs", "Mahindra Krishi"],
        technology_support: ["TCS mKrishi", "Agriculture Grand Challenge", "TDB Programs"],
        ngo_foundation: ["Ambuja Foundation", "Swades Foundation", "WOTR", "UVS"],
        international_aid: ["IFAD", "Rotary Foundation", "UN Programs"],
        microfinance: ["SIDBI", "MFIs", "NGO-MFI partnerships"],
        cooperative_sector: ["Federal Bank Coop", "UCO Bank", "Regional Cooperatives"]
    }
};

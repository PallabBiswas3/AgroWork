export const farmerData = {
    schemes: {
        PM_KISAN: {
            name: "PM Kisan Samman Nidhi",
            amount: 6000,
            frequency: "Annual",
            installments: 3,
            beneficiaries: "9.7 crore",
            disbursed: "₹3.69 lakh crore",
            eligibility: "Land-holding farmers",
            exclusions: ["Income tax payers", "Pensioners >₹10,000/month"],
            description: "Income support of ₹6,000 per year in three equal installments to all farmer families across the country."
        },
        KCC: {
            name: "Kisan Credit Card",
            limit: 300000,
            interest_rate: 7,
            subvention_rate: 3,
            effective_rate: 4,
            cards_issued: "46.5 lakh",
            credit_sanctioned: "₹5.7 lakh crore",
            description: "Simplified credit access to farmers for their agricultural needs with interest subvention benefits."
        },
        PMFBY: {
            name: "Pradhan Mantri Fasal Bima Yojana",
            premium_rates: { kharif: 2, rabi: 1.5, commercial: 5 },
            applications: "55.49 lakh",
            claims_paid: "₹1.50 lakh crore",
            description: "Comprehensive insurance coverage against crop failure, helping farmers cope with agricultural risks."
        },
        SMAM: {
            name: "Sub-Mission on Agriculture Mechanization",
            subsidy_range: "50-80%",
            released: "₹6,749 crore",
            machines: "15.8 lakh",
            chc: "23,472",
            description: "Promoting agricultural mechanization among small and marginal farmers through financial assistance."
        },
        PKVY: {
            name: "Paramparagat Krishi Vikas Yojana",
            assistance: 31500,
            direct_payment: 15000,
            area_covered: "14.99 lakh hectares",
            farmers: "25 lakh",
            description: "Promoting organic farming through adoption of organic village by cluster approach."
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

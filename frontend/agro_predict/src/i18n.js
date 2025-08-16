import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Reusable English Home translations
const homeEn = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
  },
  hero: {
    title_prefix: 'Empowering Farmers with',
    title_accent: 'AI',
    subtitle: 'Get real-time support for soil analysis, pest detection, weather forecasting, and financial planning. Transform your farming with intelligent insights.',
    get_started: 'Get Started',
    watch_demo: 'Watch Demo',
  },
  features: {
    title: 'AI-Powered Tools',
    subtitle: 'Comprehensive solutions designed specifically for modern agriculture',
    crop_advisor: {
      title: 'Crop Advisor',
      desc: 'Get personalized crop recommendations based on your soil and climate conditions.',
      cta: 'Get Started',
    },
    soil_analysis: {
      title: 'Soil Analysis',
      desc: 'Get detailed soil health report and fertilizer recommendations.',
      cta: 'Analyze Now',
    },
    disease_detector: {
      title: 'Disease Detector',
      desc: 'Upload plant images to identify diseases and get treatment recommendations.',
      cta: 'Start Chat',
    },
    env_monitoring: {
      title: 'Environmental Monitoring',
      desc: 'Monitor and analyze environmental conditions for optimal crop growth.',
      cta: 'Monitor Now',
    },
    financial: {
      title: 'Financial Assistance',
      desc: 'Explore government schemes and calculate your potential benefits.',
      cta: 'Explore Now',
    },
  },
  how_it_works: {
    title: 'How It Works',
    subtitle: 'Get started in just three simple steps',
    step1_title: 'Create Account',
    step1_desc: 'Sign up for free and get instant access to all AI tools',
    step2_title: 'Ask Questions',
    step2_desc: 'Chat with our AI assistants about any farming concern',
    step3_title: 'Get Solutions',
    step3_desc: 'Receive instant, accurate advice tailored to your needs',
  },
  testimonials: {
    title: 'What Farmers Say',
    subtitle: 'Join thousands of farmers who trust AGROWORK',
    t1: 'AGROWORK helped me increase my crop yield by 30% with their soil analysis recommendations.',
    t2: 'The pest detection feature saved my entire tomato crop. Highly recommended!',
    t3: 'Weather predictions are spot-on. I plan my irrigation schedule perfectly now.',
  },
  footer: {
    quick_links: 'Quick Links',
    services: 'Services',
    contact_info: 'Contact Info',
    desc: 'Empowering farmers with AI-driven insights for sustainable and profitable agriculture.',
    copyright: 'All rights reserved.',
  },
  labels: {
    logout: 'Logout',
    welcome_user: 'Welcome, {{name}}!',
  },
};

// Reusable English Navbar translations
const navbarEn = {
  brand: 'AgroWork',
  home: 'Home',
  crop_recommendation: 'Crop Recommendation',
  disease_pest: 'Disease & Pest',
  soil_analysis: 'Soil Analysis',
  environmental_monitoring: 'Environmental Monitoring',
  financial: 'Financial Assistance',
  login: 'Login',
  register: 'Register',
  logout: 'Logout',
};

// Reusable English Financial (Hero) translations
const financialEn = {
  hero: {
    title: 'Empowering Farmers Across India',
    description:
      'Access comprehensive financial assistance through 27+ government schemes. Join 9.7 crore farmers already benefiting from ₹10+ lakh crore investment.',
    cta_calculate: 'Calculate Benefits',
    cta_explore: 'Explore Schemes',
    stats: {
      investment_value: '₹10+',
      investment_label: 'Lakh Crore Investment',
      beneficiaries_value: '9.7',
      beneficiaries_label: 'Crore Beneficiaries',
      schemes_value: '27+',
      schemes_label: 'Schemes',
    },
  },
  header: {
    title: '🇮🇳 Farmer Financial Assistance Portal',
    subtitle: 'Government of India',
    back_title: 'Back to Dashboard',
    back_label: '← Back to Dashboard',
    home: 'Portal Home',
    schemes: 'Schemes',
    calculator: 'Calculator',
    eligibility: 'Eligibility',
    apply: 'Apply',
  },
  schemes: {
    title: 'Government Schemes for Farmers',
    amount: 'Amount:',
    frequency: 'Frequency:',
    interest_rate: 'Interest Rate:',
    beneficiaries: 'Beneficiaries:',
    eligibility: 'Eligibility:',
    exclusions: 'Exclusions:',
    expand_plus: '+',
    expand_minus: '−',
  },
  calculator: {
    title: 'Benefit Calculator',
    land_label: 'Land Holding (in acres):',
    farmer_type_label: 'Farmer Type:',
    farmer_small: 'Small (0-2 ha)',
    farmer_medium: 'Medium (2-5 ha)',
    farmer_large: 'Large (5+ ha)',
    select_schemes: 'Select Schemes:',
    submit: 'Calculate Benefits',
    results_title: 'Estimated Annual Benefits',
    result_land: 'Land Holding:',
    result_farmer_type: 'Farmer Type:',
    benefits_breakdown: 'Benefits Breakdown:',
    total_label: 'Total Annual Benefits:',
    note: 'Note: These are estimated values. Actual benefits may vary based on specific eligibility criteria and government guidelines.',
    alert_select_one: 'Please select at least one scheme',
    type_small: 'Small',
    type_medium: 'Medium',
    type_large: 'Large',
    type_suffix_farmer: ' Farmer',
  },
  eligibility: {
    title: 'Check Your Eligibility',
    land_label: 'Land Ownership (in acres):',
    annual_income_label: 'Annual Income (in ₹):',
    family_income_label: 'Family Annual Income (in ₹):',
    category_label: 'Category:',
    cat_general: 'General',
    cat_obc: 'OBC',
    cat_sc: 'SC',
    cat_st: 'ST',
    gender_label: 'Gender:',
    male: 'Male',
    female: 'Female',
    other: 'Other',
    is_farmer_label: 'Are you a farmer?',
    yes: 'Yes',
    no: 'No',
    has_kcc_label: 'Do you already have a Kisan Credit Card?',
    is_pensioner_label: 'Are you a pensioner receiving more than ₹10,000/month?',
    pays_tax_label: 'Do you pay income tax?',
    submit: 'Check Eligibility',
    results_title: 'Eligibility Results',
    summary_text: 'Based on your profile, you are eligible for <strong>{{count}} government schemes</strong>.',
    eligible_title: 'Eligible Schemes:',
    next_steps_title: 'Next Steps:',
    next_1: "Click on 'Apply Now' next to any scheme to start your application",
    next_2: 'Gather necessary documents (Aadhaar, Land Records, Bank Details, etc.)',
    next_3: 'Visit your nearest Common Service Center (CSC) for assistance',
    next_4: 'For any queries, call Kisan Call Center: 1800-180-1551',
    no_eligibility_1: 'Based on the information provided, you may not be eligible for the major central government schemes at this time.',
    no_eligibility_2: 'However, you may still be eligible for state-specific schemes. Please visit your nearest agriculture office for more information.',
    no_eligibility_3: 'You may also want to check back later as scheme guidelines and eligibility criteria may change.',
    why_qualify: 'Why you qualify:',
  },
  success: {
    title: 'Success Stories',
    subtitle: 'Hear from farmers who have benefited from government schemes',
  },
  loading: {
    loading: 'Loading financial assistance portal...'
  }
};

// Translations
const resources = {
  en: {
    translation: {
      // Add your English translations here
      welcome: 'Welcome',
      login: 'Login',
      register: 'Register',
      // Add more translations as needed
      home: homeEn,
      navbar: navbarEn,
      financial: financialEn,
    }
  },
  hi: {
    translation: {
      welcome: 'स्वागत है',
      login: 'लॉग इन',
      register: 'रजिस्टर करें',
      // Add more translations as needed
      home: {
        nav: {
          home: 'होम',
          about: 'हमारे बारे में',
          services: 'सेवाएं',
          contact: 'संपर्क',
        },
        hero: {
          title_prefix: 'किसानों को सशक्त बना रहे हैं',
          title_accent: 'एआई',
          subtitle: 'मिट्टी विश्लेषण, कीट पहचान, मौसम पूर्वानुमान और वित्तीय योजना के लिए रियल-टाइम सहायता प्राप्त करें। बुद्धिमान जानकारियों के साथ अपनी खेती को बदलें।',
          get_started: 'शुरू करें',
          watch_demo: 'डेमो देखें',
        },
        features: {
          title: 'एआई संचालित उपकरण',
          subtitle: 'आधुनिक कृषि के लिए विशेष रूप से डिज़ाइन किए गए व्यापक समाधान',
          crop_advisor: {
            title: 'फसल सलाहकार',
            desc: 'आपकी मिट्टी और जलवायु परिस्थितियों के आधार पर व्यक्तिगत फसल सिफारिशें प्राप्त करें।',
            cta: 'शुरू करें',
          },
          soil_analysis: {
            title: 'मिट्टी विश्लेषण',
            desc: 'विस्तृत मिट्टी स्वास्थ्य रिपोर्ट और उर्वरक सिफारिशें प्राप्त करें।',
            cta: 'अभी विश्लेषण करें',
          },
          disease_detector: {
            title: 'रोग पहचान',
            desc: 'रोगों की पहचान के लिए पौधों की छवियां अपलोड करें और उपचार सिफारिशें प्राप्त करें।',
            cta: 'चैट शुरू करें',
          },
          env_monitoring: {
            title: 'पर्यावरण निगरानी',
            desc: 'इष्टतम फसल वृद्धि के लिए पर्यावरणीय स्थितियों की निगरानी और विश्लेषण करें।',
            cta: 'अभी मॉनिटर करें',
          },
          financial: {
            title: 'वित्तीय सहायता',
            desc: 'सरकारी योजनाओं का अन्वेषण करें और अपने संभावित लाभों की गणना करें।',
            cta: 'अभी देखें',
          },
        },
        how_it_works: {
          title: 'यह कैसे काम करता है',
          subtitle: 'सिर्फ तीन सरल चरणों में शुरू करें',
          step1_title: 'खाता बनाएं',
          step1_desc: 'मुफ्त में साइन अप करें और सभी एआई टूल्स तक तुरंत पहुंच प्राप्त करें',
          step2_title: 'प्रश्न पूछें',
          step2_desc: 'किसी भी कृषि संबंधी चिंता के बारे में हमारे एआई सहायक से चैट करें',
          step3_title: 'समाधान प्राप्त करें',
          step3_desc: 'आपकी जरूरतों के अनुसार तत्काल, सटीक सलाह प्राप्त करें',
        },
        testimonials: {
          title: 'किसान क्या कहते हैं',
          subtitle: 'हज़ारों किसानों में शामिल हों जो AGROWORK पर भरोसा करते हैं',
          t1: 'AGROWORK ने मिट्टी विश्लेषण सिफारिशों के साथ मेरी फसल की पैदावार 30% बढ़ाने में मदद की।',
          t2: 'कीट पहचान फीचर ने मेरी पूरी टमाटर फसल को बचाया। अत्यधिक अनुशंसित!',
          t3: 'मौसम पूर्वानुमान बिल्कुल सही हैं। अब मैं अपनी सिंचाई अनुसूची पूरी तरह से योजना बनाता हूँ।',
        },
        footer: {
          quick_links: 'त्वरित लिंक',
          services: 'सेवाएं',
          contact_info: 'संपर्क जानकारी',
          desc: 'सतत और लाभदायक कृषि के लिए एआई-संचालित अंतर्दृष्टि के साथ किसानों को सशक्त बनाना।',
          copyright: 'सर्वाधिकार सुरक्षित।',
        },
        labels: {
          logout: 'लॉगआउट',
          welcome_user: 'स्वागत है, {{name}}!',
        },
      },
      navbar: {
        brand: 'AgroWork',
        home: 'होम',
        crop_recommendation: 'फसल सिफारिश',
        disease_pest: 'रोग और कीट',
        soil_analysis: 'मिट्टी विश्लेषण',
        environmental_monitoring: 'पर्यावरण निगरानी',
        financial: 'वित्तीय सहायता',
        login: 'लॉग इन',
        register: 'रजिस्टर करें',
        logout: 'लॉगआउट',
      },
      financial: {
        hero: {
          title: 'भारत भर के किसानों को सशक्त बनाना',
          description:
            '27+ सरकारी योजनाओं के माध्यम से व्यापक वित्तीय सहायता प्राप्त करें। ₹10+ लाख करोड़ निवेश से पहले ही 9.7 करोड़ किसान लाभान्वित हो चुके हैं।',
          cta_calculate: 'लाभ की गणना करें',
          cta_explore: 'योजनाएं देखें',
          stats: {
            investment_value: '₹10+',
            investment_label: 'लाख करोड़ निवेश',
            beneficiaries_value: '9.7',
            beneficiaries_label: 'करोड़ लाभार्थी',
            schemes_value: '27+',
            schemes_label: 'योजनाएं',
          },
        },
        header: {
          title: '🇮🇳 किसान वित्तीय सहायता पोर्टल',
          subtitle: 'भारत सरकार',
          back_title: 'डैशबोर्ड पर वापस जाएँ',
          back_label: '← डैशबोर्ड पर वापस',
          home: 'पोर्टल होम',
          schemes: 'योजनाएं',
          calculator: 'कैलकुलेटर',
          eligibility: 'पात्रता',
          apply: 'आवेदन करें',
        },
        schemes: {
          title: 'किसानों के लिए सरकारी योजनाएं',
          amount: 'राशि:',
          frequency: 'आवृत्ति:',
          interest_rate: 'ब्याज दर:',
          beneficiaries: 'लाभार्थी:',
          eligibility: 'पात्रता:',
          exclusions: 'अपवर्जन:',
          expand_plus: '+',
          expand_minus: '−',
        },
        calculator: {
          title: 'लाभ कैलकुलेटर',
          land_label: 'भूमि स्वामित्व (एकड़ में):',
          farmer_type_label: 'किसान का प्रकार:',
          farmer_small: 'छोटा (0-2 हे.)',
          farmer_medium: 'मध्यम (2-5 हे.)',
          farmer_large: 'बड़ा (5+ हे.)',
          select_schemes: 'योजनाएं चुनें:',
          submit: 'लाभ की गणना करें',
          results_title: 'अनुमानित वार्षिक लाभ',
          result_land: 'भूमि स्वामित्व:',
          result_farmer_type: 'किसान का प्रकार:',
          benefits_breakdown: 'लाभ का विवरण:',
          total_label: 'कुल वार्षिक लाभ:',
          note: 'नोट: ये अनुमानित मान हैं। वास्तविक लाभ विशिष्ट पात्रता मानदंड और सरकारी दिशानिर्देशों के आधार पर भिन्न हो सकते हैं।',
          alert_select_one: 'कृपया कम से कम एक योजना चुनें',
          type_small: 'छोटा',
          type_medium: 'मध्यम',
          type_large: 'बड़ा',
          type_suffix_farmer: ' किसान',
        },
        eligibility: {
          title: 'अपनी पात्रता जांचें',
          land_label: 'भूमि स्वामित्व (एकड़ में):',
          annual_income_label: 'वार्षिक आय (₹ में):',
          family_income_label: 'पारिवारिक वार्षिक आय (₹ में):',
          category_label: 'श्रेणी:',
          cat_general: 'सामान्य',
          cat_obc: 'ओबीसी',
          cat_sc: 'एससी',
          cat_st: 'एसटी',
          gender_label: 'लिंग:',
          male: 'पुरुष',
          female: 'महिला',
          other: 'अन्य',
          is_farmer_label: 'क्या आप किसान हैं?',
          yes: 'हाँ',
          no: 'नहीं',
          has_kcc_label: 'क्या आपके पास पहले से किसान क्रेडिट कार्ड है?',
          is_pensioner_label: 'क्या आप ₹10,000/माह से अधिक पेंशन प्राप्त करते हैं?',
          pays_tax_label: 'क्या आप आयकर देते हैं?',
          submit: 'पात्रता जांचें',
          results_title: 'पात्रता परिणाम',
          summary_text: 'आपकी प्रोफ़ाइल के आधार पर, आप <strong>{{count}} सरकारी योजनाओं</strong> के लिए पात्र हैं।',
          eligible_title: 'पात्र योजनाएं:',
          next_steps_title: 'अगले कदम:',
          next_1: "किसी भी योजना के पास 'अभी आवेदन करें' पर क्लिक करें और आवेदन शुरू करें",
          next_2: 'आवश्यक दस्तावेज़ जुटाएँ (आधार, भूमि रिकॉर्ड, बैंक विवरण, आदि)',
          next_3: 'सहायता के लिए अपने निकटतम कॉमन सर्विस सेंटर (CSC) जाएँ',
          next_4: 'किसी भी प्रश्न के लिए किसान कॉल सेंटर: 1800-180-1551 पर कॉल करें',
          no_eligibility_1: 'दिए गए विवरण के आधार पर, आप इस समय प्रमुख केंद्रीय सरकारी योजनाओं के लिए पात्र नहीं हो सकते हैं।',
          no_eligibility_2: 'हालाँकि, आप राज्य-विशिष्ट योजनाओं के लिए पात्र हो सकते हैं। अधिक जानकारी के लिए अपने निकटतम कृषि कार्यालय जाएँ।',
          no_eligibility_3: 'आप बाद में फिर से जाँच कर सकते हैं क्योंकि योजनाओं के दिशा-निर्देश और पात्रता मानदंड बदल सकते हैं।',
          why_qualify: 'आप क्यों पात्र हैं:',
        },
        success: {
          title: 'सफलता की कहानियाँ',
          subtitle: 'उन किसानों से सुनें जिन्हें सरकारी योजनाओं से लाभ हुआ है',
        },
        loading: {
          loading: 'वित्तीय सहायता पोर्टल लोड हो रहा है...'
        }
      },
    }
  },
  // Placeholder translations for other Indian languages - copies of English
  ta: {
    translation: {
      welcome: 'Welcome',
      login: 'Login',
      register: 'Register',
      home: homeEn,
      navbar: navbarEn,
      financial: financialEn,
    }
  },
  te: {
    translation: {
      welcome: 'Welcome',
      login: 'Login',
      register: 'Register',
      home: homeEn,
      navbar: navbarEn,
      financial: financialEn,
    }
  },
  kn: {
    translation: {
      welcome: 'Welcome',
      login: 'Login',
      register: 'Register',
      home: homeEn,
      navbar: navbarEn,
      financial: financialEn,
    }
  },
  ml: {
    translation: {
      welcome: 'Welcome',
      login: 'Login',
      register: 'Register',
      home: homeEn,
      navbar: navbarEn,
      financial: financialEn,
    }
  },
  bn: {
    translation: {
      welcome: 'Welcome',
      login: 'Login',
      register: 'Register',
      home: homeEn,
      navbar: navbarEn,
      financial: financialEn,
    }
  },
  mr: {
    translation: {
      welcome: 'Welcome',
      login: 'Login',
      register: 'Register',
      home: homeEn,
      navbar: navbarEn,
      financial: financialEn,
    }
  },
  gu: {
    translation: {
      welcome: 'Welcome',
      login: 'Login',
      register: 'Register',
      home: homeEn,
      navbar: navbarEn,
      financial: financialEn,
    }
  },
  pa: {
    translation: {
      welcome: 'Welcome',
      login: 'Login',
      register: 'Register',
      home: homeEn,
      navbar: navbarEn,
      financial: financialEn,
    }
  },
  // Add more languages as needed
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    supportedLngs: ['en', 'hi', 'ta', 'te', 'kn', 'ml', 'bn', 'mr', 'gu', 'pa'],
    lowerCaseLng: true,
    nonExplicitSupportedLngs: true,
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;

// Translation Configuration
export const translationConfig = {
  // Set to true to use Google Cloud Translate API, false for LibreTranslate
  useGoogleTranslate: false,
  
  // Google Cloud Translate API Key (required if using Google Translate)
  // Get your API key from: https://console.cloud.google.com/apis/credentials
  googleApiKey: import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY || '',
  
  // LibreTranslate URL (optional, defaults to free instance)
  libreTranslateUrl: import.meta.env.VITE_LIBRE_TRANSLATE_URL || 'https://libretranslate.de/translate',
  
  // Default language
  defaultLanguage: 'en',
  
  // Supported languages (fallback if API fails)
  supportedLanguages: {
    'en': 'English',
    'es': 'Spanish',
    'fr': 'French',
    'de': 'German',
    'hi': 'Hindi',
    'bn': 'Bengali',
    'te': 'Telugu',
    'ta': 'Tamil',
    'mr': 'Marathi',
    'gu': 'Gujarati',
    'kn': 'Kannada',
    'ml': 'Malayalam',
    'pa': 'Punjabi',
    'ur': 'Urdu',
    'zh': 'Chinese',
    'ja': 'Japanese',
    'ko': 'Korean',
    'ar': 'Arabic',
    'ru': 'Russian',
    'pt': 'Portuguese'
  }
};
// Translation service using Google Cloud Translate API or LibreTranslate
import { translationConfig } from '../config/translationConfig';

class TranslationService {
  constructor() {
    // You can switch between Google Cloud Translate and LibreTranslate
    this.useGoogleTranslate = translationConfig.useGoogleTranslate;
    this.googleApiKey = translationConfig.googleApiKey;
    this.libreTranslateUrl = translationConfig.libreTranslateUrl;
  }

  // Detect language of input text
  async detectLanguage(text) {
    if (!text || text.trim() === '') return 'en';

    try {
      if (this.useGoogleTranslate && this.googleApiKey) {
        return await this.detectLanguageGoogle(text);
      } else {
        return await this.detectLanguageLibre(text);
      }
    } catch (error) {
      console.error('Language detection failed:', error);
      return 'en'; // Default to English
    }
  }

  // Detect language using Google Cloud Translate
  async detectLanguageGoogle(text) {
    try {
      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2/detect?key=${this.googleApiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: text
          })
        }
      );

      if (!response.ok) {
        throw new Error(`Google API error: ${response.status}`);
      }

      const data = await response.json();
      return data.data.detections[0][0].language;
    } catch (error) {
      console.error('Google language detection failed:', error);
      return 'en';
    }
  }

  // Detect language using LibreTranslate
  async detectLanguageLibre(text) {
    try {
      const response = await fetch('https://libretranslate.de/detect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text
        })
      });

      if (!response.ok) {
        throw new Error(`LibreTranslate API error: ${response.status}`);
      }

      const data = await response.json();
      return data[0].language;
    } catch (error) {
      console.error('LibreTranslate language detection failed:', error);
      return 'en';
    }
  }

  // Translate text from source language to target language
  async translateText(text, sourceLang, targetLang) {
    if (!text || text.trim() === '') return text;
    if (sourceLang === targetLang) return text;

    try {
      if (this.useGoogleTranslate && this.googleApiKey) {
        return await this.translateGoogle(text, sourceLang, targetLang);
      } else {
        return await this.translateLibre(text, sourceLang, targetLang);
      }
    } catch (error) {
      console.error('Translation failed:', error);
      return text; // Return original text if translation fails
    }
  }

  // Translate using Google Cloud Translate
  async translateGoogle(text, sourceLang, targetLang) {
    try {
      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${this.googleApiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: text,
            source: sourceLang,
            target: targetLang
          })
        }
      );

      if (!response.ok) {
        throw new Error(`Google API error: ${response.status}`);
      }

      const data = await response.json();
      return data.data.translations[0].translatedText;
    } catch (error) {
      console.error('Google translation failed:', error);
      return text;
    }
  }

  // Translate using LibreTranslate
  async translateLibre(text, sourceLang, targetLang) {
    try {
      const response = await fetch(this.libreTranslateUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          source: sourceLang,
          target: targetLang
        })
      });

      if (!response.ok) {
        throw new Error(`LibreTranslate API error: ${response.status}`);
      }

      const data = await response.json();
      return data.translatedText;
    } catch (error) {
      console.error('LibreTranslate translation failed:', error);
      return text;
    }
  }

  // Get supported languages for LibreTranslate
  async getSupportedLanguages() {
    try {
      const response = await fetch('https://libretranslate.de/languages');
      
      if (!response.ok) {
        throw new Error(`LibreTranslate API error: ${response.status}`);
      }
      
      const languages = await response.json();
      return languages.reduce((acc, lang) => {
        acc[lang.code] = lang.name;
        return acc;
      }, {});
    } catch (error) {
      console.error('Failed to get supported languages:', error);
      return translationConfig.supportedLanguages; // Fallback to config
    }
  }
}

export default new TranslationService(); 
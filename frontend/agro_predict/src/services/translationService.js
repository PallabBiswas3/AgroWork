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
  // Detect language of input text
async detectLanguage(text) {
  if (!text || text.trim() === '') return 'en';

  // First, try simple character-based detection for common languages
  const detectedByChars = this.detectLanguageByCharacters(text);
  if (detectedByChars) {
    return detectedByChars;
  }

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
// Simple character-based language detection
detectLanguageByCharacters(text) {
  // Bengali characters range: 0980-09FF
  const bengaliRegex = /[\u0980-\u09FF]/;
  if (bengaliRegex.test(text)) {
    return 'bn';
  }

  // Hindi characters range: 0900-097F
  const hindiRegex = /[\u0900-\u097F]/;
  if (hindiRegex.test(text)) {
    return 'hi';
  }

  // Telugu characters range: 0C00-0C7F
  const teluguRegex = /[\u0C00-\u0C7F]/;
  if (teluguRegex.test(text)) {
    return 'te';
  }

  // Tamil characters range: 0B80-0BFF
  const tamilRegex = /[\u0B80-\u0BFF]/;
  if (tamilRegex.test(text)) {
    return 'ta';
  }

  // Marathi characters range: 0900-097F (same as Hindi, but we can distinguish by common words)
  const marathiRegex = /[\u0900-\u097F]/;
  if (marathiRegex.test(text)) {
    // Check for Marathi-specific words to distinguish from Hindi
    const marathiWords = ['आहे', 'करतो', 'मी', 'तू', 'आम्ही'];
    const hasMarathiWords = marathiWords.some(word => text.includes(word));
    if (hasMarathiWords) {
      return 'mr';
    }
    return 'hi'; // Default to Hindi if no Marathi-specific words
  }

  // Gujarati characters range: 0A80-0AFF
  const gujaratiRegex = /[\u0A80-\u0AFF]/;
  if (gujaratiRegex.test(text)) {
    return 'gu';
  }

  // Kannada characters range: 0C80-0CFF
  const kannadaRegex = /[\u0C80-\u0CFF]/;
  if (kannadaRegex.test(text)) {
    return 'kn';
  }

  // Malayalam characters range: 0D00-0D7F
  const malayalamRegex = /[\u0D00-\u0D7F]/;
  if (malayalamRegex.test(text)) {
    return 'ml';
  }

  // Punjabi characters range: 0A00-0A7F
  const punjabiRegex = /[\u0A00-\u0A7F]/;
  if (punjabiRegex.test(text)) {
    return 'pa';
  }

  // Urdu characters range: 0600-06FF (Arabic script)
  const urduRegex = /[\u0600-\u06FF]/;
  if (urduRegex.test(text)) {
    // Check for Urdu-specific characters or words
    const urduSpecificChars = /[\u0670-\u06D4\u06D5\u06D6-\u06ED\u06EE\u06EF]/;
    if (urduSpecificChars.test(text)) {
      return 'ur';
    }
    return 'ar'; // Default to Arabic if no Urdu-specific characters
  }

  // Odia (Oriya) characters range: 0B00-0B7F
  const odiaRegex = /[\u0B00-\u0B7F]/;
  if (odiaRegex.test(text)) {
    return 'or';
  }

  // Assamese characters range: 0980-09FF (same as Bengali, but we can distinguish by common words)
  const assameseRegex = /[\u0980-\u09FF]/;
  if (assameseRegex.test(text)) {
    // Check for Assamese-specific words to distinguish from Bengali
    const assameseWords = ['মই', 'তই', 'আমি', 'তুমি'];
    const hasAssameseWords = assameseWords.some(word => text.includes(word));
    if (hasAssameseWords) {
      return 'as';
    }
    return 'bn'; // Default to Bengali if no Assamese-specific words
  }

  // Sanskrit characters range: 0900-097F (same as Hindi)
  const sanskritRegex = /[\u0900-\u097F]/;
  if (sanskritRegex.test(text)) {
    // Check for Sanskrit-specific words
    const sanskritWords = ['अहं', 'त्वं', 'सः', 'सा', 'तत्'];
    const hasSanskritWords = sanskritWords.some(word => text.includes(word));
    if (hasSanskritWords) {
      return 'sa';
    }
    return 'hi'; // Default to Hindi if no Sanskrit-specific words
  }

  // Other major world languages
  // Arabic characters range: 0600-06FF
  const arabicRegex = /[\u0600-\u06FF]/;
  if (arabicRegex.test(text)) {
    return 'ar';
  }

  // Chinese characters range: 4E00-9FFF
  const chineseRegex = /[\u4E00-\u9FFF]/;
  if (chineseRegex.test(text)) {
    return 'zh';
  }

  // Japanese characters: Hiragana (3040-309F) and Katakana (30A0-30FF)
  const japaneseRegex = /[\u3040-\u309F\u30A0-\u30FF]/;
  if (japaneseRegex.test(text)) {
    return 'ja';
  }

  // Korean characters range: AC00-D7AF
  const koreanRegex = /[\uAC00-\uD7AF]/;
  if (koreanRegex.test(text)) {
    return 'ko';
  }

  // Thai characters range: 0E00-0E7F
  const thaiRegex = /[\u0E00-\u0E7F]/;
  if (thaiRegex.test(text)) {
    return 'th';
  }

  // Russian characters range: 0400-04FF
  const russianRegex = /[\u0400-\u04FF]/;
  if (russianRegex.test(text)) {
    return 'ru';
  }

  // Greek characters range: 0370-03FF
  const greekRegex = /[\u0370-\u03FF]/;
  if (greekRegex.test(text)) {
    return 'el';
  }

  // If no specific script is detected, return null to use API detection
  return null;
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

  // Chat translation workflow methods
  // Step 1: Translate user message to English
  async translateToEnglish(text, sourceLang) {
    if (!text || text.trim() === '') return text;
    
    try {
      if (this.useGoogleTranslate && this.googleApiKey) {
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
              target: 'en',
              format: 'text'
            })
          }
        );

        if (!response.ok) {
          throw new Error(`Google API error: ${response.status}`);
        }

        const data = await response.json();
        return data.data.translations[0].translatedText;
      } else {
        // Use LibreTranslate
        const response = await fetch(this.libreTranslateUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: text,
            source: sourceLang,
            target: 'en'
          })
        });

        if (!response.ok) {
          throw new Error(`LibreTranslate API error: ${response.status}`);
        }

        const data = await response.json();
        return data.translatedText;
      }
    } catch (error) {
      console.error('Translation to English failed:', error);
      return text; // Return original text if translation fails
    }
  }

  // Step 2: Get ChatGPT reply (this would typically be handled by your backend)
  async getChatGPTReply(englishText, apiKey) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: "user", content: englishText }],
          max_tokens: 1000,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('ChatGPT API call failed:', error);
      throw error;
    }
  }

  // Step 3: Translate response back to user's language
  async translateToUserLanguage(text, targetLang) {
    if (!text || text.trim() === '') return text;
    
    try {
      if (this.useGoogleTranslate && this.googleApiKey) {
        const response = await fetch(
          `https://translation.googleapis.com/language/translate/v2?key=${this.googleApiKey}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              q: text,
              target: targetLang,
              format: 'text'
            })
          }
        );

        if (!response.ok) {
          throw new Error(`Google API error: ${response.status}`);
        }

        const data = await response.json();
        return data.data.translations[0].translatedText;
      } else {
        // Use LibreTranslate
        const response = await fetch(this.libreTranslateUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: text,
            target: targetLang
          })
        });

        if (!response.ok) {
          throw new Error(`LibreTranslate API error: ${response.status}`);
        }

        const data = await response.json();
        return data.translatedText;
      }
    } catch (error) {
      console.error('Translation to user language failed:', error);
      return text; // Return original text if translation fails
    }
  }

  // Complete chat translation workflow
  async processChatMessage(userMessage, userLanguage, openaiApiKey) {
    try {
      // Step 1: Detect language if not provided
      const detectedLang = userLanguage || await this.detectLanguage(userMessage);
      
      // Step 2: Translate user message to English
      const englishMessage = await this.translateToEnglish(userMessage, detectedLang);
      
      // Step 3: Get ChatGPT response
      const englishResponse = await this.getChatGPTReply(englishMessage, openaiApiKey);
      
      // Step 4: Translate response back to user's language
      const translatedResponse = await this.translateToUserLanguage(englishResponse, detectedLang);
      
      return {
        originalMessage: userMessage,
        englishMessage: englishMessage,
        englishResponse: englishResponse,
        translatedResponse: translatedResponse,
        detectedLanguage: detectedLang
      };
    } catch (error) {
      console.error('Chat translation workflow failed:', error);
      throw error;
    }
  }
}

export default new TranslationService(); 
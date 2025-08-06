import React, { useState } from 'react';
import translationService from '../services/translationService';
import './TranslationDemo.css';

const TranslationDemo = () => {
  const [inputText, setInputText] = useState('');
  const [detectedLanguage, setDetectedLanguage] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const testLanguages = [
    { code: 'es', name: 'Spanish', example: 'Hola, ¿cómo estás?' },
    { code: 'fr', name: 'French', example: 'Bonjour, comment allez-vous?' },
    { code: 'de', name: 'German', example: 'Hallo, wie geht es dir?' },
    { code: 'hi', name: 'Hindi', example: 'नमस्ते, कैसे हो आप?' },
    { code: 'bn', name: 'Bengali', example: 'হ্যালো, আপনি কেমন আছেন?' },
    { code: 'te', name: 'Telugu', example: 'నమస్కారం, మీరు ఎలా ఉన్నారు?' },
    { code: 'ta', name: 'Tamil', example: 'வணக்கம், நீங்கள் எப்படி இருக்கிறீர்கள்?' },
    { code: 'mr', name: 'Marathi', example: 'नमस्कार, तुम्ही कसे आहात?' }
  ];

  const handleDetectLanguage = async () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    try {
      const detected = await translationService.detectLanguage(inputText);
      setDetectedLanguage(detected);
    } catch (error) {
      console.error('Language detection failed:', error);
      setDetectedLanguage('Error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    try {
      const detected = await translationService.detectLanguage(inputText);
      const translated = await translationService.translateText(inputText, detected, 'en');
      setTranslatedText(translated);
      setDetectedLanguage(detected);
    } catch (error) {
      console.error('Translation failed:', error);
      setTranslatedText('Translation failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (example) => {
    setInputText(example);
  };

  return (
    <div className="translation-demo">
      <h2>Translation Demo</h2>
      <p>Test the multi-language translation functionality</p>
      
      <div className="demo-section">
        <h3>Quick Test Examples</h3>
        <div className="example-buttons">
          {testLanguages.map((lang) => (
            <button
              key={lang.code}
              className="example-button"
              onClick={() => handleExampleClick(lang.example)}
              title={`Test ${lang.name}`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>

      <div className="demo-section">
        <h3>Input Text</h3>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type or paste text in any language..."
          rows="4"
          className="demo-textarea"
        />
        
        <div className="demo-actions">
          <button 
            onClick={handleDetectLanguage}
            disabled={!inputText.trim() || isLoading}
            className="demo-button"
          >
            {isLoading ? 'Detecting...' : 'Detect Language'}
          </button>
          
          <button 
            onClick={handleTranslate}
            disabled={!inputText.trim() || isLoading}
            className="demo-button"
          >
            {isLoading ? 'Translating...' : 'Translate to English'}
          </button>
        </div>
      </div>

      {detectedLanguage && (
        <div className="demo-section">
          <h3>Results</h3>
          <div className="result-item">
            <strong>Detected Language:</strong> {detectedLanguage}
          </div>
          {translatedText && (
            <div className="result-item">
              <strong>English Translation:</strong> {translatedText}
            </div>
          )}
        </div>
      )}

      <div className="demo-section">
        <h3>How It Works</h3>
        <ol className="how-it-works">
          <li>User types a message in any supported language</li>
          <li>System automatically detects the language</li>
          <li>Text is translated to English for model processing</li>
          <li>AI model processes the English text</li>
          <li>Response is translated back to user's language</li>
          <li>User sees the response in their original language</li>
        </ol>
      </div>
    </div>
  );
};

export default TranslationDemo; 
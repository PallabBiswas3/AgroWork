import React, { useState, useEffect } from 'react';
import translationService from '../services/translationService';
import './LanguageSelector.css';

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
  const [languages, setLanguages] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadLanguages();
  }, []);

  const loadLanguages = async () => {
    try {
      setLoading(true);
      setError(false);
      const supportedLanguages = await translationService.getSupportedLanguages();
      setLanguages(supportedLanguages);
    } catch (error) {
      console.error('Failed to load languages:', error);
      setError(true);
      // Use fallback languages from config
      setLanguages({
        'en': 'English',
        'es': 'Spanish',
        'fr': 'French',
        'de': 'German',
        'hi': 'Hindi',
        'zh': 'Chinese',
        'ja': 'Japanese',
        'ko': 'Korean',
        'ar': 'Arabic',
        'ru': 'Russian'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLanguageSelect = (langCode) => {
    onLanguageChange(langCode);
    setIsOpen(false);
  };

  const getLanguageFlag = (langCode) => {
    const flags = {
      'en': '🇺🇸',
      'es': '🇪🇸',
      'fr': '🇫🇷',
      'de': '🇩🇪',
      'hi': '🇮🇳',
      'bn': '🇧🇩',
      'te': '🇮🇳',
      'ta': '🇮🇳',
      'mr': '🇮🇳',
      'gu': '🇮🇳',
      'kn': '🇮🇳',
      'ml': '🇮🇳',
      'pa': '🇮🇳',
      'ur': '🇵🇰',
      'zh': '🇨🇳',
      'ja': '🇯🇵',
      'ko': '🇰🇷',
      'ar': '🇸🇦',
      'ru': '🇷🇺',
      'pt': '🇵🇹'
    };
    return flags[langCode] || '🌐';
  };

  if (loading) {
    return (
      <div className="language-selector">
        <div className="language-selector-button loading">
          <span>🌐</span>
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="language-selector">
        <div className="language-selector-button error">
          <span>🌐</span>
          <span>English</span>
        </div>
      </div>
    );
  }

  return (
    <div className="language-selector">
      <button
        className="language-selector-button"
        onClick={() => setIsOpen(!isOpen)}
        title="Select Language"
      >
        <span>{getLanguageFlag(selectedLanguage)}</span>
        <span className="language-name">
          {languages[selectedLanguage] || 'English'}
        </span>
        <span className="dropdown-arrow">▼</span>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {Object.entries(languages).map(([code, name]) => (
            <button
              key={code}
              className={`language-option ${selectedLanguage === code ? 'selected' : ''}`}
              onClick={() => handleLanguageSelect(code)}
            >
              <span className="language-flag">{getLanguageFlag(code)}</span>
              <span className="language-name">{name}</span>
              {selectedLanguage === code && <span className="check-mark">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 
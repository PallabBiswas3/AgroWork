import React, { useState } from 'react';
import translationService from '../services/translationService';
import './TranslationTester.css';

const TranslationTester = () => {
  const [inputText, setInputText] = useState('');
  const [detectedLanguage, setDetectedLanguage] = useState('');
  const [englishTranslation, setEnglishTranslation] = useState('');
  const [backTranslation, setBackTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [testResults, setTestResults] = useState([]);

  const testExamples = [
    { text: "Hello, how are you?", language: "English" },
    { text: "Hola, ¿cómo estás?", language: "Spanish" },
    { text: "Bonjour, comment allez-vous?", language: "French" },
    { text: "Hallo, wie geht es dir?", language: "German" },
    { text: "नमस्ते, आप कैसे हैं?", language: "Hindi" },
    { text: "你好，你好吗？", language: "Chinese" },
    { text: "こんにちは、お元気ですか？", language: "Japanese" },
    { text: "안녕하세요, 어떻게 지내세요?", language: "Korean" },
    { text: "Привет, как дела?", language: "Russian" },
    { text: "مرحبا، كيف حالك؟", language: "Arabic" }
  ];

  const handleDetectLanguage = async () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    try {
      const detected = await translationService.detectLanguage(inputText);
      setDetectedLanguage(detected);
    } catch (error) {
      console.error('Language detection failed:', error);
      setDetectedLanguage('Error detecting language');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTranslateToEnglish = async () => {
    if (!inputText.trim() || !detectedLanguage) return;
    
    setIsLoading(true);
    try {
      const translation = await translationService.translateText(inputText, detectedLanguage, 'en');
      setEnglishTranslation(translation);
    } catch (error) {
      console.error('Translation failed:', error);
      setEnglishTranslation('Translation failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTranslateBack = async () => {
    if (!englishTranslation.trim() || !detectedLanguage) return;
    
    setIsLoading(true);
    try {
      const translation = await translationService.translateText(englishTranslation, 'en', detectedLanguage);
      setBackTranslation(translation);
    } catch (error) {
      console.error('Back translation failed:', error);
      setBackTranslation('Back translation failed');
    } finally {
      setIsLoading(false);
    }
  };

  const runAllTests = async () => {
    setIsLoading(true);
    const results = [];

    for (const example of testExamples) {
      try {
        // Detect language
        const detected = await translationService.detectLanguage(example.text);
        
        // Translate to English
        const english = await translationService.translateText(example.text, detected, 'en');
        
        // Translate back to original language
        const backTranslated = await translationService.translateText(english, 'en', detected);
        
        results.push({
          original: example.text,
          detectedLanguage: detected,
          englishTranslation: english,
          backTranslation: backTranslated,
          success: true
        });
      } catch (error) {
        results.push({
          original: example.text,
          error: error.message,
          success: false
        });
      }
    }

    setTestResults(results);
    setIsLoading(false);
  };

  const clearResults = () => {
    setInputText('');
    setDetectedLanguage('');
    setEnglishTranslation('');
    setBackTranslation('');
    setTestResults([]);
  };

  return (
    <div className="translation-tester">
      <div className="tester-header">
        <h2>🌐 Translation Testing Tool</h2>
        <p>Test the translation functionality with different languages</p>
      </div>

      <div className="tester-sections">
        {/* Manual Testing Section */}
        <div className="tester-section">
          <h3>Manual Testing</h3>
          <div className="input-group">
            <label>Enter text to test:</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type text in any language..."
              rows="3"
            />
          </div>
          
          <div className="button-group">
            <button 
              onClick={handleDetectLanguage}
              disabled={!inputText.trim() || isLoading}
            >
              🔍 Detect Language
            </button>
            <button 
              onClick={handleTranslateToEnglish}
              disabled={!inputText.trim() || !detectedLanguage || isLoading}
            >
              🇺🇸 Translate to English
            </button>
            <button 
              onClick={handleTranslateBack}
              disabled={!englishTranslation.trim() || !detectedLanguage || isLoading}
            >
              🔄 Translate Back
            </button>
          </div>

          {detectedLanguage && (
            <div className="result-box">
              <strong>Detected Language:</strong> {detectedLanguage}
            </div>
          )}
          
          {englishTranslation && (
            <div className="result-box">
              <strong>English Translation:</strong> {englishTranslation}
            </div>
          )}
          
          {backTranslation && (
            <div className="result-box">
              <strong>Back Translation:</strong> {backTranslation}
            </div>
          )}
        </div>

        {/* Automated Testing Section */}
        <div className="tester-section">
          <h3>Automated Testing</h3>
          <p>Run tests with predefined examples in multiple languages</p>
          
          <div className="button-group">
            <button 
              onClick={runAllTests}
              disabled={isLoading}
              className="run-tests-btn"
            >
              🚀 Run All Tests
            </button>
            <button 
              onClick={clearResults}
              className="clear-btn"
            >
              🗑️ Clear Results
            </button>
          </div>

          {isLoading && (
            <div className="loading-indicator">
              <span>Testing translations...</span>
            </div>
          )}

          {testResults.length > 0 && (
            <div className="test-results">
              <h4>Test Results:</h4>
              {testResults.map((result, index) => (
                <div key={index} className={`test-result ${result.success ? 'success' : 'error'}`}>
                  <div className="test-header">
                    <strong>Test {index + 1}:</strong> {result.success ? '✅ Passed' : '❌ Failed'}
                  </div>
                  <div className="test-content">
                    <div><strong>Original:</strong> {result.original}</div>
                    {result.success ? (
                      <>
                        <div><strong>Detected:</strong> {result.detectedLanguage}</div>
                        <div><strong>English:</strong> {result.englishTranslation}</div>
                        <div><strong>Back Translation:</strong> {result.backTranslation}</div>
                      </>
                    ) : (
                      <div><strong>Error:</strong> {result.error}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Test Examples */}
        <div className="tester-section">
          <h3>Quick Test Examples</h3>
          <div className="example-buttons">
            {testExamples.map((example, index) => (
              <button
                key={index}
                onClick={() => setInputText(example.text)}
                className="example-btn"
                title={`Test with ${example.language}`}
              >
                {example.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslationTester; 
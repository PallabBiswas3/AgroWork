import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../App";
import translationService from "../services/translationService";
import LanguageSelector from "../components/LanguageSelector";
import "./ChatPage.css";

const ChatPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [messages, setMessages] = useState([
    { 
      id: 1,
      role: "ai", 
      content: `Welcome to the ${category} assistant! I'm here to help you with all your ${category.toLowerCase()} related questions. How can I assist you today?`,
      timestamp: new Date(),
      avatar: "🤖"
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAttachments, setShowAttachments] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [userLanguage, setUserLanguage] = useState('en');
  const [detectedLanguage, setDetectedLanguage] = useState('en');
  const [isTranslating, setIsTranslating] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Check system preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  const handleSend = async () => {
    if (input.trim() === "" && !selectedFile) return;

    // Detect language of user input
    setIsTranslating(true);
    let detectedLang = 'en';
    let englishInput = input;
    
    try {
      detectedLang = await translationService.detectLanguage(input);
      setDetectedLanguage(detectedLang);

      // Translate user input to English for model processing
      if (detectedLang !== 'en') {
        englishInput = await translationService.translateText(input, detectedLang, 'en');
      }
    } catch (error) {
      console.error('Translation error:', error);
      // Continue with original input if translation fails
      detectedLang = 'en';
      englishInput = input;
    }

    const newMessage = {
      id: Date.now(),
      role: "user",
      content: input, // Keep original input for display
      originalContent: input,
      englishContent: englishInput, // Store English version for model
      detectedLanguage: detectedLang,
      timestamp: new Date(),
      avatar: "👤",
      attachment: selectedFile
    };

    setMessages(prev => [...prev, newMessage]);
    setInput("");
    setSelectedFile(null);
    setShowAttachments(false);
    setIsTranslating(false);

    // Show typing indicator
    setIsTyping(true);

    // Simulate AI response (in real implementation, this would call your model)
    setTimeout(async () => {
      // Simulate model response in English
      const modelResponse = `I understand you're asking about "${englishInput}". Here's a helpful response from the ${category} model. This is a simulated response to demonstrate the chat interface.`;
      
      // Translate model response to user's language
      let translatedResponse = modelResponse;
      try {
        if (detectedLang !== 'en') {
          translatedResponse = await translationService.translateText(modelResponse, 'en', detectedLang);
        }
      } catch (error) {
        console.error('Response translation error:', error);
        // Use original response if translation fails
        translatedResponse = modelResponse;
      }

      const aiResponse = {
        id: Date.now() + 1,
        role: "ai",
        content: translatedResponse,
        originalContent: modelResponse, // Store English version
        timestamp: new Date(),
        avatar: "🤖"
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const removeAttachment = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getCategoryIcon = (cat) => {
    const icons = {
      soil: "🌱",
      pest: "🐛",
      weather: "🌤️",
      finance: "💰",
      crop: "🌾",
      fertilizer: "🌿"
    };
    return icons[cat.toLowerCase()] || "🌱";
  };

  const handleBackToHome = () => {
    navigate('/home');
  };

  return (
    <div className={`chat-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Header */}
      <div className="chat-header">
        <div className="header-left">
          <button className="back-btn" onClick={handleBackToHome}>
            ← Back
          </button>
          <div className="category-icon">
            {getCategoryIcon(category)}
          </div>
          <div className="header-info">
            <h2>{category.toUpperCase()} Assistant</h2>
            <p className="status">Online • Ready to help</p>
          </div>
        </div>
        <div className="header-actions">
          <LanguageSelector 
            selectedLanguage={userLanguage}
            onLanguageChange={setUserLanguage}
          />
          <button 
            className="theme-toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
          <div className="user-avatar">
            <span>👤</span>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="messages-container">
        <div className="messages-list">
          {messages.map((message) => (
            <div key={message.id} className={`message-wrapper ${message.role}`}>
              <div className="message-bubble">
                <div className="message-header">
                  <span className="message-avatar">{message.avatar}</span>
                  <span className="message-time">{formatTime(message.timestamp)}</span>
                </div>
                <div className="message-content">
                  {message.attachment && (
                    <div className="attachment-preview">
                      <img 
                        src={URL.createObjectURL(message.attachment)} 
                        alt="Attachment" 
                        className="attachment-image"
                      />
                      <span className="attachment-name">{message.attachment.name}</span>
                    </div>
                  )}
                  <p>{message.content}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Translation Indicator */}
          {isTranslating && (
            <div className="message-wrapper ai">
              <div className="message-bubble">
                <div className="message-header">
                  <span className="message-avatar">🌐</span>
                  <span className="message-time">Now</span>
                </div>
                <div className="translation-indicator">
                  <span>Translating...</span>
                </div>
              </div>
            </div>
          )}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="message-wrapper ai">
              <div className="message-bubble">
                <div className="message-header">
                  <span className="message-avatar">🤖</span>
                  <span className="message-time">Now</span>
                </div>
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="input-container">
        {selectedFile && (
          <div className="attachment-preview-input">
            <img 
              src={URL.createObjectURL(selectedFile)} 
              alt="Preview" 
              className="attachment-preview-image"
            />
            <span className="attachment-name">{selectedFile.name}</span>
            <button 
              className="remove-attachment"
              onClick={removeAttachment}
              title="Remove attachment"
            >
              ✕
            </button>
          </div>
        )}
        
        <div className="input-wrapper">
          <div className="input-actions">
            <button 
              className="attachment-btn"
              onClick={() => setShowAttachments(!showAttachments)}
              title="Attach file"
            >
              📎
            </button>
            <button className="camera-btn" title="Take photo">
              📷
            </button>
            <button className="voice-btn" title="Voice input">
              🎤
            </button>
          </div>
          
          <div className="text-input-container">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              rows="1"
              className="message-input"
            />
            <button 
              className="send-btn"
              onClick={handleSend}
              disabled={input.trim() === "" && !selectedFile}
            >
              ➤
            </button>
          </div>
        </div>

        {/* Attachment Menu */}
        {showAttachments && (
          <div className="attachment-menu">
            <button 
              className="attachment-option"
              onClick={() => fileInputRef.current?.click()}
            >
              📁 Choose File
            </button>
            <button className="attachment-option">
              📷 Take Photo
            </button>
            <button className="attachment-option">
              🎤 Voice Message
            </button>
          </div>
        )}
      </div>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="image/*"
        style={{ display: 'none' }}
      />

      {/* Floating Help Button */}
      <button className="floating-help-btn" title="Get Help">
        ❓
      </button>
    </div>
  );
};

export default ChatPage;

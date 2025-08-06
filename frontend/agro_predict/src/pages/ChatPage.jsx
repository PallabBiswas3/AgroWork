import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../App";
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

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: input,
      timestamp: new Date(),
      avatar: "👤"
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      // Simulate AI response (replace with actual API call)
      const modelResponse = await simulateAIResponse(input, category);
      
      const aiMessage = {
        id: Date.now() + 1,
        role: "ai",
        content: modelResponse,
        timestamp: new Date(),
        avatar: "🤖"
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      const errorMessage = {
        id: Date.now() + 1,
        role: "ai",
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date(),
        avatar: "🤖"
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const simulateAIResponse = async (userInput, category) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple response simulation based on category
    const responses = {
      "Crop Management": `Thank you for your question about ${category.toLowerCase()}. I'm here to help you with crop management strategies, pest control, and best practices for optimal yield.`,
      "Soil Health": `Great question about ${category.toLowerCase()}! I can help you understand soil composition, testing methods, and improvement techniques for better crop growth.`,
      "Weather": `Regarding ${category.toLowerCase()}, I can provide weather insights, seasonal forecasts, and climate-related agricultural advice.`,
      "Market Prices": `For ${category.toLowerCase()} information, I can help you understand market trends, pricing strategies, and economic factors affecting agricultural products.`
    };
    
    return responses[category] || `I understand your question about ${category.toLowerCase()}. Let me help you with that.`;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setShowAttachments(false);
    }
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className={`chat-page ${isDarkMode ? 'dark' : ''}`}>
      <div className="chat-header">
        <button className="back-button" onClick={handleBackToHome}>
          ← Back to Home
        </button>
        <h1>{category} Assistant</h1>
        <button className="dark-mode-toggle" onClick={handleDarkModeToggle}>
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <div className="chat-container">
        <div className="messages-container">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.role === "user" ? "user-message" : "ai-message"}`}
            >
              <div className="message-avatar">{message.avatar}</div>
              <div className="message-content">
                <div className="message-text">{message.content}</div>
                <div className="message-timestamp">
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message ai-message">
              <div className="message-avatar">🤖</div>
              <div className="message-content">
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

        <div className="input-container">
          <div className="input-wrapper">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              rows="1"
              className="message-input"
            />
            <div className="input-actions">
              <button
                className="attachment-button"
                onClick={() => setShowAttachments(!showAttachments)}
                title="Attach file"
              >
                📎
              </button>
              <button
                className="send-button"
                onClick={handleSend}
                disabled={input.trim() === "" && !selectedFile}
              >
                Send
              </button>
            </div>
          </div>
          
          {showAttachments && (
            <div className="attachments-panel">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                accept="image/*,.pdf,.doc,.docx"
                style={{ display: "none" }}
              />
              <button
                className="file-select-button"
                onClick={() => fileInputRef.current?.click()}
              >
                Choose File
              </button>
              {selectedFile && (
                <div className="selected-file">
                  📄 {selectedFile.name}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

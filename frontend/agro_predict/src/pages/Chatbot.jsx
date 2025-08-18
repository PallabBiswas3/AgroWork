import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Chatbot.css';

const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

const Chatbot = () => {
  const [messages, setMessages] = useState([]); // {id, text, sender: 'user'|'ai', timestamp}
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');

  const messagesEndRef = useRef(null);

    const apiKey = useMemo(() => {
        return "AIzaSyBJJaY11RInBcJcIT6_dlBGtI71I6iy3no";
    }, []);


  useEffect(() => {
    // Welcome message
    setMessages([
      { id: Date.now().toString(), text: 'Welcome to Agrowork AI Chatbot!', sender: 'ai', timestamp: new Date() }
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const saveApiKey = () => {
    if (!apiKeyInput.trim()) return;
    localStorage.setItem('GEMINI_API_KEY', apiKeyInput.trim());
    setSettingsOpen(false);
    setApiKeyInput('');
    setError('');
    setMessages(prev => ([
      ...prev,
      { id: (Date.now()+1).toString(), text: 'API key saved. You can start chatting now.', sender: 'ai', timestamp: new Date() }
    ]));
  };

  const formatTimestamp = (ts) => {
    const now = new Date();
    const diff = now - ts;
    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return `${Math.floor(diff/60000)} min ago`;
    if (diff < 86400000) return `${Math.floor(diff/3600000)} hr ago`;
    return ts.toLocaleDateString();
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

      const key = apiKey; // use hardcoded apiKey
      if (!key) {
          setError('API key not set.');
          return;
      }

    const userMsg = { id: Date.now().toString(), text, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    setError('');

    try {
      const body = {
        contents: [{ parts: [{ text }]}],
        generationConfig: { temperature: 0.7, topK: 40, topP: 0.95, maxOutputTokens: 1024 }
      };
      const resp = await fetch(`${GEMINI_ENDPOINT}?key=${encodeURIComponent(key)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (!resp.ok) {
        const err = await resp.json().catch(() => null);
        throw new Error(err?.error?.message || `HTTP ${resp.status}: ${resp.statusText}`);
      }
      const data = await resp.json();
      const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
      const aiMsg = { id: (Date.now()+1).toString(), text: aiText, sender: 'ai', timestamp: new Date() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (e) {
      const msg = (e.message || '').toLowerCase();
      if (msg.includes('api key')) setError('Invalid API key. Check your key in Settings.');
      else if (msg.includes('quota')) setError('API quota exceeded. Check usage limits.');
      else if (msg.includes('network')) setError('Network error. Check your connection and retry.');
      else setError('Sorry, there was an error processing your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{ id: Date.now().toString(), text: 'Welcome to Gemini AI Chatbot! API key is required to chat.', sender: 'ai', timestamp: new Date() }]);
    setError('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !loading) sendMessage();
    }
  };

  return (
    <div className="chatbot-page">
      <div className="chatbot-app">
        <header className="chatbot-header">
          <h1>AI Chatbot</h1>
          <div className="header-actions">
            <button className="btn btn--outline btn--sm" onClick={() => setSettingsOpen(v => !v)}>Settings</button>
            <button className="btn btn--outline btn--sm" onClick={clearChat}>Clear Chat</button>
          </div>
        </header>

        {settingsOpen && (
          <div className="settings-panel">
            <div className="card">
              <div className="card__body">
                <h3>API Configuration</h3>
                <div className="form-group">
                  <label className="form-label" htmlFor="apiKeyInput">Google Gemini API Key</label>
                  <input
                    id="apiKeyInput"
                    type="password"
                    className="form-control"
                    placeholder="Enter your Google Gemini API key"
                    value={apiKeyInput}
                    onChange={(e) => setApiKeyInput(e.target.value)}
                  />
                </div>
                <div className="header-actions">
                  <button className="btn btn--primary btn--sm" onClick={saveApiKey} disabled={!apiKeyInput.trim()}>Save</button>
                  <button className="btn btn--secondary btn--sm" onClick={() => { setSettingsOpen(false); setApiKeyInput(''); }}>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="chat-container">
          <div className="messages-container">
            {messages.map(m => (
              <div key={m.id} className={`message ${m.sender}-message new`}>
                <div className="message-bubble">
                  <div className="message-text">{m.text}</div>
                  <div className="message-timestamp">{formatTimestamp(m.timestamp)}</div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="loading-indicator">
                <div className="message ai-message">
                  <div className="message-bubble">
                    <div className="typing-indicator">
                      <span></span><span></span><span></span>
                    </div>
                    <div className="message-text">AI is typing...</div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="input-area">
          <div className="input-container">
            <textarea
              className="message-input"
              placeholder="Type your message here..."
              rows={1}
              maxLength={1000}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
            />
            <button className="send-button" onClick={sendMessage} disabled={!input.trim() || loading}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22,2 15,22 11,13 2,9"></polygon>
              </svg>
            </button>
          </div>
          <div className="input-info">
            <span className="char-count">{input.length}/1000</span>
          </div>
        </div>

        {!!error && (
          <div className="error-message">
            <div className="status status--error">
              <span>{error}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;

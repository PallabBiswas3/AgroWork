# Multi-Language Translation Setup

This guide explains how to set up multi-language support for the chatbox using either Google Cloud Translate API or LibreTranslate.

## Features

- **Automatic Language Detection**: Detects the language of user input
- **Real-time Translation**: Translates user input to English for model processing
- **Response Translation**: Translates model responses back to the user's language
- **Language Selector**: UI component to choose preferred language
- **Multiple Language Support**: Supports 20+ languages including Indian languages

## Setup Options

### Option 1: LibreTranslate (Free - Recommended)

LibreTranslate is a free, open-source translation service. The chatbox is configured to use the free instance by default.

**Advantages:**

- Completely free
- No API key required
- Open source
- Supports many languages

**Setup:**

1. No setup required - works out of the box
2. The default configuration uses `https://libretranslate.de/translate`

### Option 2: Google Cloud Translate API (Paid)

For better translation quality and reliability, you can use Google Cloud Translate API.

**Setup:**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Cloud Translation API
4. Create credentials (API Key)
5. Set environment variables:

```bash
# Create .env file in frontend/agro_predict/
REACT_APP_GOOGLE_TRANSLATE_API_KEY=your_api_key_here
```

6. Update the configuration in `src/config/translationConfig.js`:

```javascript
useGoogleTranslate: true,
googleApiKey: process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY || '',
```

## Supported Languages

The system supports the following languages:

- **English** (en)
- **Spanish** (es)
- **French** (fr)
- **German** (de)
- **Hindi** (hi)
- **Bengali** (bn)
- **Telugu** (te)
- **Tamil** (ta)
- **Marathi** (mr)
- **Gujarati** (gu)
- **Kannada** (kn)
- **Malayalam** (ml)
- **Punjabi** (pa)
- **Urdu** (ur)
- **Chinese** (zh)
- **Japanese** (ja)
- **Korean** (ko)
- **Arabic** (ar)
- **Russian** (ru)
- **Portuguese** (pt)

## How It Works

1. **User Input**: User types a message in any supported language
2. **Language Detection**: System automatically detects the language
3. **Translation to English**: Input is translated to English for model processing
4. **Model Processing**: Your AI model processes the English text
5. **Response Translation**: Model response is translated back to user's language
6. **Display**: Response is shown in the user's original language

## Configuration

Edit `src/config/translationConfig.js` to customize:

```javascript
export const translationConfig = {
	useGoogleTranslate: false, // Set to true for Google Translate
	googleApiKey: process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY || "",
	libreTranslateUrl: "https://libretranslate.de/translate",
	defaultLanguage: "en",
	supportedLanguages: {
		// Add or remove languages as needed
	},
};
```

## Usage

1. **Language Selection**: Users can select their preferred language using the language selector in the chat header
2. **Automatic Detection**: The system automatically detects the language of user input
3. **Seamless Experience**: Users can type in their preferred language and receive responses in the same language

## Error Handling

- If translation fails, the system falls back to the original text
- Network errors are handled gracefully
- Language detection failures default to English

## Testing

To test the translation feature:

1. Start the development server: `npm run dev`
2. Navigate to any chat category
3. Type a message in a different language (e.g., "Hola" in Spanish)
4. Observe the translation process and response

## Troubleshooting

**Translation not working:**

- Check internet connection
- Verify API key (if using Google Translate)
- Check browser console for errors

**Language not detected:**

- Ensure the language is supported
- Try using LibreTranslate instead of Google Translate
- Check if the text is long enough for detection

**Slow translation:**

- LibreTranslate can be slower than Google Translate
- Consider switching to Google Translate for better performance
- Check network connectivity

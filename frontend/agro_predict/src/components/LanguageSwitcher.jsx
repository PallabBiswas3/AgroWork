import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  Box
} from '@mui/material';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'kn', name: 'ಕನ್ನಡ' },
    { code: 'ml', name: 'മലയാളം' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'mr', name: 'मराठी' },
    { code: 'gu', name: 'ગુજરાતી' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  ];

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  // Normalize language code (e.g., en-US -> en) and prefer resolvedLanguage
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0].toLowerCase();

  return (
    <Box sx={{ minWidth: 120, marginLeft: 2 }}>
      <FormControl fullWidth size="small" variant="outlined">
        <Select
          value={currentLang}
          onChange={handleChange}
          displayEmpty
          sx={{
            '& .MuiSelect-select': {
              padding: '8px 32px 8px 12px',
              fontSize: '0.875rem',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid rgba(0, 0, 0, 0.23)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(0, 0, 0, 0.87)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#1976d2',
              borderWidth: '1px',
            },
          }}
        >
          {languages.map((lang) => (
            <MenuItem key={lang.code} value={lang.code}>
              {lang.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageSwitcher;

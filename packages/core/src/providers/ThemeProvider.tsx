import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import { theme } from '../foundation/theme';

interface ThemeContextType {
  currentTheme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: 'light',
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  const muiTheme = createTheme({
    palette: {
      mode: currentTheme,
      primary: theme[currentTheme].colors.primary,
      secondary: theme[currentTheme].colors.secondary,
      success: theme[currentTheme].colors.success,
      error: theme[currentTheme].colors.error,
      warning: theme[currentTheme].colors.warning,
      info: theme[currentTheme].colors.info,
      background: theme[currentTheme].colors.background,
      text: theme[currentTheme].colors.text,
    },
  });

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: setCurrentTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}; 
import { useState, useEffect } from 'react';
import type { Theme } from '../components/ThemeProvider';

interface ThemeManagerOptions {
  defaultTheme?: Theme;
  darkTheme?: Theme;
  storageKey?: string;
}

export const useThemeManager = (options: ThemeManagerOptions = {}) => {
  const {
    defaultTheme = {
      colors: {
        primary: '#4F46E5',
        secondary: '#E0E7FF',
      },
    },
    darkTheme = {
      colors: {
        primary: '#1E40AF',
        secondary: '#1E3A8A',
      },
    },
    storageKey = 'crossuikit-theme',
  } = options;

  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = typeof window !== 'undefined' 
      ? localStorage.getItem(storageKey)
      : null;
    return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
      setTheme(e.matches ? darkTheme : defaultTheme);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [darkTheme, defaultTheme]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, JSON.stringify(theme));
    }
  }, [theme, storageKey]);

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const toggleDarkMode = () => {
    setTheme(current => current === defaultTheme ? darkTheme : defaultTheme);
    setIsDarkMode(current => !current);
  };

  return {
    theme,
    isDarkMode,
    updateTheme,
    toggleDarkMode,
  };
};
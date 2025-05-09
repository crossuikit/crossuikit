import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { useThemeManager } from './useThemeManager';
import { ThemeProvider } from '../components/ThemeProvider';

describe('useThemeManager', () => {
  test('returns initial theme state', () => {
    const { result } = renderHook(() => useThemeManager(), {
      wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    });

    expect(result.current.isDarkMode).toBe(false);
  });

  test('toggles theme when calling toggleDarkMode', () => {
    const { result } = renderHook(() => useThemeManager(), {
      wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    });

    act(() => {
      result.current.toggleDarkMode();
    });

    expect(result.current.isDarkMode).toBe(true);

    act(() => {
      result.current.toggleDarkMode();
    });

    expect(result.current.isDarkMode).toBe(false);
  });

  test('updates theme when calling updateTheme', () => {
    const { result } = renderHook(() => useThemeManager(), {
      wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    });

    const newTheme = {
      colors: {
        primary: '#ff0000',
        secondary: '#00ff00',
      },
    };

    act(() => {
      result.current.updateTheme(newTheme);
    });

    expect(result.current.theme).toEqual(expect.objectContaining(newTheme));
  });
}); 
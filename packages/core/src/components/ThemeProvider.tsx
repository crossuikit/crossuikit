import React from "react";

export interface Theme {
  colors?: {
    primary?: string;
    secondary?: string;
    [key: string]: string | undefined;
  };
  spacing?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    [key: string]: string | undefined;
  };
  borderRadius?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    [key: string]: string | undefined;
  };
}

interface ThemeProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme = {},
  children,
}) => {
  // Convert theme object to CSS variables
  React.useEffect(() => {
    const root = document.documentElement;

    // Apply custom colors
    if (theme.colors) {
      Object.entries(theme.colors).forEach(([key, value]) => {
        if (value) {
          root.style.setProperty(`--color-${key}`, value);
        }
      });
    }

    // Apply custom spacing
    if (theme.spacing) {
      Object.entries(theme.spacing).forEach(([key, value]) => {
        if (value) {
          root.style.setProperty(`--spacing-${key}`, value);
        }
      });
    }

    // Apply custom border radius
    if (theme.borderRadius) {
      Object.entries(theme.borderRadius).forEach(([key, value]) => {
        if (value) {
          root.style.setProperty(`--radius-${key}`, value);
        }
      });
    }
  }, [theme]);

  return <>{children}</>;
};

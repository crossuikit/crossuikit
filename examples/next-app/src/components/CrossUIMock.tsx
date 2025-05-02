"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeColors {
  background: string;
  text: string;
  primary: string;
  secondary: string;
}

interface Theme {
  colors: ThemeColors;
}

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
  theme: {
    colors: {
      background: "#ffffff",
      text: "#213547",
      primary: "#646cff",
      secondary: "#535bf2",
    },
  },
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const theme: Theme = {
    colors: isDarkMode
      ? {
          background: "#242424",
          text: "rgba(255, 255, 255, 0.87)",
          primary: "#646cff",
          secondary: "#535bf2",
        }
      : {
          background: "#ffffff",
          text: "#213547",
          primary: "#646cff",
          secondary: "#535bf2",
        },
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeManager() {
  return useContext(ThemeContext);
}

export function Button({
  variant = "primary",
  children,
  onClick,
}: {
  variant?: "primary" | "secondary";
  children: ReactNode;
  onClick?: () => void;
}) {
  const { theme } = useThemeManager();

  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-md text-white"
      style={{
        backgroundColor: theme.colors[variant],
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export function ThemeDemo() {
  const { theme } = useThemeManager();

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="mb-4">Theme Colors</h3>
      <div className="flex gap-4">
        {(Object.entries(theme.colors) as [keyof ThemeColors, string][]).map(
          ([name, color]) => (
            <div key={name} className="text-center">
              <div
                className="w-12 h-12 border rounded-md mb-2"
                style={{ backgroundColor: color }}
              />
              <span className="text-sm">{name}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

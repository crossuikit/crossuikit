import React, { createContext, useContext, useState, ReactNode } from "react";

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
      style={{
        backgroundColor: theme.colors[variant],
        color: "white",
        border: "none",
        padding: "8px 16px",
        borderRadius: "4px",
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
    <div
      style={{
        padding: "16px",
        border: "1px solid",
        borderColor: theme.colors.text,
      }}
    >
      <h3 style={{ color: theme.colors.text }}>Theme Colors</h3>
      <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
        {(Object.entries(theme.colors) as [keyof ThemeColors, string][]).map(
          ([name, color]) => (
            <div key={name} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: color,
                  border: "1px solid",
                  borderColor: theme.colors.text,
                }}
              />
              <span style={{ color: theme.colors.text, fontSize: "12px" }}>
                {name}
              </span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

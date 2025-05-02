import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { Button } from "./Button";
import { useThemeManager } from "../hooks/useThemeManager";

export const ThemeDemo: React.FC = () => {
  const { theme, isDarkMode, toggleDarkMode } = useThemeManager({
    defaultTheme: {
      colors: {
        primary: "#4F46E5",
        secondary: "#E0E7FF",
      },
    },
    darkTheme: {
      colors: {
        primary: "#1E40AF",
        secondary: "#1E3A8A",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div
        className={`p-4 space-y-4 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <h2 className="text-xl font-bold">Theme Demo</h2>
        <div className="space-x-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>
        <div>
          <Button onClick={toggleDarkMode}>
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </Button>
        </div>
        <div className="text-sm">
          <p>Current theme: {isDarkMode ? "Dark" : "Light"}</p>
          <pre className="mt-2 p-2 rounded bg-gray-100 dark:bg-gray-800">
            {JSON.stringify(theme, null, 2)}
          </pre>
        </div>
      </div>
    </ThemeProvider>
  );
};

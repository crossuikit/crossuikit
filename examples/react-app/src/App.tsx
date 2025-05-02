import React from "react";
import { ThemeProvider, Button, useThemeManager } from "@crossuikit/core";

function App() {
  const { theme, isDarkMode, toggleDarkMode } = useThemeManager();

  return (
    <ThemeProvider theme={theme}>
      <div
        className={`min-h-screen p-8 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">CrossUI Kit Demo</h1>
          <Button onClick={toggleDarkMode}>
            Toggle {isDarkMode ? "Light" : "Dark"} Mode
          </Button>
        </header>

        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Button Variants</h2>
            <div className="space-x-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Button Sizes</h2>
            <div className="space-x-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Full Width Button</h2>
            <Button fullWidth>Full Width Button</Button>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;

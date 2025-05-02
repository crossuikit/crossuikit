"use client";

import { ThemeProvider, Button, useThemeManager } from "@crossuikit/core";

export default function Home() {
  const { theme, isDarkMode, toggleDarkMode } = useThemeManager();

  return (
    <ThemeProvider theme={theme}>
      <main
        className={`min-h-screen p-8 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            CrossUI Kit - Next.js Demo
          </h1>
          <p className="text-lg mb-4">
            Server-side rendering compatible UI components
          </p>
          <Button onClick={toggleDarkMode}>
            Switch to {isDarkMode ? "Light" : "Dark"} Mode
          </Button>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <section className="space-y-6 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold">Button Variants</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Primary</h3>
                <Button variant="primary">Primary Action</Button>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Secondary</h3>
                <Button variant="secondary">Secondary Action</Button>
              </div>
            </div>
          </section>

          <section className="space-y-6 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold">Button Sizes</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          </section>

          <section className="space-y-6 p-6 rounded-lg border border-gray-200 dark:border-gray-700 md:col-span-2">
            <h2 className="text-2xl font-semibold">Full Width Buttons</h2>
            <div className="space-y-4">
              <Button variant="primary" fullWidth>
                Full Width Primary Button
              </Button>
              <Button variant="secondary" fullWidth>
                Full Width Secondary Button
              </Button>
            </div>
          </section>
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Current Theme</h2>
          <pre className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-auto">
            {JSON.stringify(theme, null, 2)}
          </pre>
        </section>
      </main>
    </ThemeProvider>
  );
}

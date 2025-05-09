import React, { useEffect } from "react";
import { ThemeProvider, Button, useThemeManager } from "@crossuikit/core";
import { defineStepper } from "@stepperize/react";

const { Scoped, useStepper } = defineStepper(
  {
    id: "welcome",
    title: "Welcome",
    description: "Get started with CrossUI Kit",
  },
  { id: "theme", title: "Theme", description: "Customize your theme" },
  {
    id: "components",
    title: "Components",
    description: "Explore our components",
  },
  { id: "finish", title: "Finish", description: "You're all set!" },
);

function StepperContent() {
  const stepper = useStepper();
  const { isDarkMode, toggleDarkMode } = useThemeManager({
    defaultTheme: {
      colors: {
        primary: "#4F46E5",
        secondary: "#E0E7FF",
      },
    },
    darkTheme: {
      colors: {
        primary: "#818CF8",
        secondary: "#1E3A8A",
      },
    },
  });

  // Sync dark mode with Tailwind
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{stepper.current.title}</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {stepper.current.description}
          </p>
        </div>
        <Button
          onClick={toggleDarkMode}
          variant="secondary"
          className="dark:bg-gray-700 dark:text-white"
        >
          Switch to {isDarkMode ? "Light" : "Dark"} Mode
        </Button>
      </div>

      <div className="space-y-4">
        {stepper.current.id === "welcome" && (
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-medium mb-4">Welcome to CrossUI Kit</h3>
            <p className="text-gray-600 dark:text-gray-400">
              A beautiful UI kit that works seamlessly with Stepperize.
            </p>
          </div>
        )}

        {stepper.current.id === "theme" && (
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-medium mb-4">Theme Customization</h3>
            <div className="space-y-4">
              <Button variant="primary" className="dark:bg-indigo-500">
                Primary Button
              </Button>
              <Button
                variant="secondary"
                className="dark:bg-gray-700 dark:text-white"
              >
                Secondary Button
              </Button>
            </div>
          </div>
        )}

        {stepper.current.id === "components" && (
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-medium mb-4">Component Showcase</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Button size="sm" className="dark:bg-indigo-500">
                  Small
                </Button>
                <Button size="md" className="dark:bg-indigo-500">
                  Medium
                </Button>
                <Button size="lg" className="dark:bg-indigo-500">
                  Large
                </Button>
              </div>
              <Button fullWidth className="dark:bg-indigo-500">
                Full Width Button
              </Button>
            </div>
          </div>
        )}

        {stepper.current.id === "finish" && (
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-medium mb-4">All Done!</h3>
            <p className="text-gray-600 dark:text-gray-400">
              You've completed the demo. Try customizing the theme and exploring
              more components!
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-between pt-4">
        {!stepper.isFirst && (
          <Button
            variant="secondary"
            onClick={stepper.prev}
            className="dark:bg-gray-700 dark:text-white"
          >
            Previous
          </Button>
        )}
        {!stepper.isLast ? (
          <Button
            variant="primary"
            onClick={stepper.next}
            className="dark:bg-indigo-500"
          >
            Next
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={() => window.location.reload()}
            className="dark:bg-indigo-500"
          >
            Restart
          </Button>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: "#4F46E5",
          secondary: "#E0E7FF",
        },
      }}
    >
      <main className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">CrossUI Kit + Stepperize</h1>
          <p className="text-lg mb-4">
            A beautiful step-by-step workflow with CrossUI Kit components
          </p>
        </header>

        <div className="max-w-3xl mx-auto">
          <Scoped>
            <StepperContent />
          </Scoped>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;

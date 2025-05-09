"use client";

import { ThemeProvider, Button, useThemeManager } from "@crossuikit/core";
import { defineStepper } from "@stepperize/react";
import { useEffect } from "react";

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
  { id: "finish", title: "Finish", description: "You&apos;re all set!" },
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
        primary: "#1E40AF",
        secondary: "#1E3A8A",
      },
    },
  });

  // Sync dark mode with Tailwind
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
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
        <Button onClick={toggleDarkMode}>
          Switch to {isDarkMode ? "Light" : "Dark"} Mode
        </Button>
      </div>

      <div className="space-y-4">
        {stepper.current.id === "welcome" && (
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-medium mb-4">Welcome to CrossUI Kit</h3>
            <p className="text-gray-600 dark:text-gray-400">
              A beautiful UI kit that works seamlessly with Stepperize.
            </p>
          </div>
        )}

        {stepper.current.id === "theme" && (
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-medium mb-4">Theme Customization</h3>
            <div className="space-y-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
            </div>
          </div>
        )}

        {stepper.current.id === "components" && (
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-medium mb-4">Component Showcase</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
              <Button fullWidth>Full Width Button</Button>
            </div>
          </div>
        )}

        {stepper.current.id === "finish" && (
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-medium mb-4">All Done!</h3>
            <p className="text-gray-600 dark:text-gray-400">
              You&apos;ve completed the demo. Try customizing the theme and
              exploring more components!
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-between pt-4">
        {!stepper.isFirst && (
          <Button variant="secondary" onClick={stepper.prev}>
            Previous
          </Button>
        )}
        {!stepper.isLast ? (
          <Button variant="primary" onClick={stepper.next}>
            Next
          </Button>
        ) : (
          <Button variant="primary" onClick={() => window.location.reload()}>
            Restart
          </Button>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: "#4F46E5",
          secondary: "#E0E7FF",
        },
      }}
    >
      <main className="min-h-screen p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
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

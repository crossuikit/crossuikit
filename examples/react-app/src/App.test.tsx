import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders CrossUI Kit title", () => {
    render(<App />);
    const titleElement = screen.getByText(/CrossUI Kit \+ Stepperize/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders theme toggle button", () => {
    render(<App />);
    const themeButton = screen.getByText(/Switch to .* Mode/i);
    expect(themeButton).toBeInTheDocument();
  });

  test("renders navigation buttons", () => {
    render(<App />);
    const prevButton = screen.getByText(/Previous/i);
    const nextButton = screen.getByText(/Next/i);
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  test("toggles theme when clicking theme button", () => {
    render(<App />);
    const themeButton = screen.getByText(/Switch to .* Mode/i);
    
    // Initial state should be light mode
    expect(themeButton).toHaveTextContent(/Switch to Dark Mode/i);
    
    // Click to switch to dark mode
    fireEvent.click(themeButton);
    expect(themeButton).toHaveTextContent(/Switch to Light Mode/i);
    
    // Click to switch back to light mode
    fireEvent.click(themeButton);
    expect(themeButton).toHaveTextContent(/Switch to Dark Mode/i);
  });
});

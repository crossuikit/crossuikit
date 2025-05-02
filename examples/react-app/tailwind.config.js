/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/core/src/**/*.{js,jsx,ts,tsx}"
  ],
  // Extend the core package's theme
  presets: [
    require('../../packages/core/tailwind.config.js')
  ],
  theme: {
    extend: {
      // Example of extending the core theme
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
}
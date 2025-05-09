const baseConfig = require('../packages/core/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
    ...baseConfig,
    content: [
        "../packages/core/src/**/*.{js,jsx,ts,tsx}",
        "./**/*.{js,jsx,ts,tsx}"
    ],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        extend: {
            ...baseConfig.theme?.extend,
            colors: {
                primary: {
                    DEFAULT: '#3B82F6',
                    50: '#EFF6FF',
                    100: '#DBEAFE',
                    200: '#BFDBFE',
                    300: '#93C5FD',
                    400: '#60A5FA',
                    500: '#3B82F6',
                    600: '#2563EB',
                    700: '#1D4ED8',
                    800: '#1E40AF',
                    900: '#1E3A8A',
                    foreground: '#FFFFFF'
                },
                secondary: {
                    DEFAULT: '#6B7280',
                    50: '#F9FAFB',
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    300: '#D1D5DB',
                    400: '#9CA3AF',
                    500: '#6B7280',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#1F2937',
                    900: '#111827',
                    foreground: '#FFFFFF'
                },
                background: '#FFFFFF',
                foreground: '#111827',
            },
        },
    },
    plugins: [],
}; 
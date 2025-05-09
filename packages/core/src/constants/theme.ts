import { colors } from '../foundation/colors';

export const COLORS = {
    primary: {
        main: colors.blue[500],
        light: colors.blue[300],
        dark: colors.blue[700],
    },
    secondary: {
        main: colors.gray[500],
        light: colors.gray[300],
        dark: colors.gray[700],
    },
    success: {
        main: colors.green[500],
        light: colors.green[300],
        dark: colors.green[700],
    },
    error: {
        main: colors.red[500],
        light: colors.red[300],
        dark: colors.red[700],
    },
    warning: {
        main: colors.yellow[500],
        light: colors.yellow[300],
        dark: colors.yellow[700],
    },
    info: {
        main: colors.blue[500],
        light: colors.blue[300],
        dark: colors.blue[700],
    },
} as const;

export const SPACING = {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
} as const;

export const BREAKPOINTS = {
    xs: '0px',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
} as const;

export const TYPOGRAPHY = {
    fontFamily: {
        primary: '"Inter", "Helvetica", "Arial", sans-serif',
        secondary: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
    },
} as const; 
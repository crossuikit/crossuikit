import { colors } from './colors';

const THEMES = {
    light: 'light',
    dark: 'dark',
} as const;

type Themes = keyof typeof THEMES;

export const theme = {
    light: {
        colors: {
            primary: {
                main: colors.blue[500],
                light: colors.blue[400],
                dark: colors.blue[600],
                contrastText: '#FFFFFF',
            },
            secondary: {
                main: colors.gray[500],
                light: colors.gray[400],
                dark: colors.gray[600],
                contrastText: '#FFFFFF',
            },
            background: {
                default: colors.gray[50],
                paper: colors.gray[100],
            },
            text: {
                primary: colors.gray[900],
                secondary: colors.gray[700],
            },
            success: {
                main: colors.green[500],
                light: colors.green[400],
                dark: colors.green[600],
                contrastText: '#FFFFFF',
            },
            error: {
                main: colors.red[500],
                light: colors.red[400],
                dark: colors.red[600],
                contrastText: '#FFFFFF',
            },
            warning: {
                main: colors.yellow[500],
                light: colors.yellow[400],
                dark: colors.yellow[600],
                contrastText: '#FFFFFF',
            },
            info: {
                main: colors.blue[500],
                light: colors.blue[400],
                dark: colors.blue[600],
                contrastText: '#FFFFFF',
            },
        },
    },
    dark: {
        colors: {
            primary: {
                main: colors.blue[400],
                light: colors.blue[300],
                dark: colors.blue[500],
                contrastText: '#FFFFFF',
            },
            secondary: {
                main: colors.gray[400],
                light: colors.gray[300],
                dark: colors.gray[500],
                contrastText: '#FFFFFF',
            },
            background: {
                default: colors.gray[900],
                paper: colors.gray[800],
            },
            text: {
                primary: colors.gray[50],
                secondary: colors.gray[200],
            },
            success: {
                main: colors.green[400],
                light: colors.green[300],
                dark: colors.green[500],
                contrastText: '#FFFFFF',
            },
            error: {
                main: colors.red[400],
                light: colors.red[300],
                dark: colors.red[500],
                contrastText: '#FFFFFF',
            },
            warning: {
                main: colors.yellow[400],
                light: colors.yellow[300],
                dark: colors.yellow[500],
                contrastText: '#FFFFFF',
            },
            info: {
                main: colors.blue[400],
                light: colors.blue[300],
                dark: colors.blue[500],
                contrastText: '#FFFFFF',
            },
        },
    },
} as const;

export default THEMES;
export type { Themes }; 
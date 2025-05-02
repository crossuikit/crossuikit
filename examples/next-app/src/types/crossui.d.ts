declare module '@crossui/kit' {
  export interface ThemeManagerProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    theme: Record<string, unknown>;
  }

  export function useThemeManager(): ThemeManagerProps;
  
  export function ThemeProvider(props: { children: React.ReactNode; theme?: Record<string, unknown> }): JSX.Element;
  
  export function Button(props: {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    onClick?: () => void;
  }): JSX.Element;
  
  export function ThemeDemo(): JSX.Element;
}
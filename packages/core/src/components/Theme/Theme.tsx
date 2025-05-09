import React from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import { Box, FormControl, InputLabel, Select, MenuItem, Typography, Paper } from '@mui/material';
import { COLORS } from '../../constants/theme';

export interface ThemeProps {
  children?: React.ReactNode;
}

export const Theme: React.FC<ThemeProps> = ({ children }) => {
  const { currentTheme, setTheme } = useTheme();

  return (
    <Box sx={{ p: 2 }}>
      <FormControl fullWidth sx={{ mb: 4 }}>
        <InputLabel>Theme</InputLabel>
        <Select
          value={currentTheme}
          label="Theme"
          onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
        >
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
        </Select>
      </FormControl>
      {children}
    </Box>
  );
};

const ColorBox = ({ color, name }: { color: string; name: string }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Box
      sx={{
        width: 96,
        height: 96,
        borderRadius: 1,
        boxShadow: 1,
        mb: 1,
        bgcolor: color,
      }}
    />
    <Typography variant="body2" fontWeight="medium">
      {name}
    </Typography>
    <Typography variant="caption" color="text.secondary">
      {color}
    </Typography>
  </Box>
);

const ColorSection = ({ title, colors }: { title: string; colors: Record<string, string> }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2 }}>
      {title}
    </Typography>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 2 }}>
      {Object.entries(colors).map(([name, color]) => (
        <ColorBox key={name} color={color} name={name} />
      ))}
    </Box>
  </Box>
);

export const ThemeShowcase: React.FC = () => {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Color Palette
      </Typography>
      <ColorSection title="Primary" colors={COLORS.primary} />
      <ColorSection title="Secondary" colors={COLORS.secondary} />
      <ColorSection title="Success" colors={COLORS.success} />
      <ColorSection title="Error" colors={COLORS.error} />
      <ColorSection title="Warning" colors={COLORS.warning} />
      <ColorSection title="Info" colors={COLORS.info} />
    </Paper>
  );
}; 
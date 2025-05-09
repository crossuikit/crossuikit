import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export type SpacingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export interface SpacingProps {
  /**
   * The size of the spacing
   * @default 'md'
   */
  size?: SpacingSize;
  /**
   * The direction of the spacing (vertical or horizontal)
   * @default 'vertical'
   */
  direction?: 'vertical' | 'horizontal';
  /**
   * Whether to show the spacing value
   * @default false
   */
  showValue?: boolean;
  /**
   * The background color of the spacing indicator
   * @default 'primary.light'
   */
  color?: string;
}

const spacingValues: Record<SpacingSize, number> = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
  '4xl': 96,
};

export const Spacing: React.FC<SpacingProps> = ({
  size = 'md',
  direction = 'vertical',
  showValue = false,
  color = 'primary.light',
}) => {
  const spacing = spacingValues[size];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: direction === 'vertical' ? 'column' : 'row',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: direction === 'vertical' ? '100%' : spacing,
          height: direction === 'vertical' ? spacing : '100%',
          minHeight: direction === 'vertical' ? spacing : 'auto',
          minWidth: direction === 'vertical' ? 'auto' : spacing,
          bgcolor: color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {showValue && (
          <Typography variant="caption" color="text.secondary">
            {spacing}px
          </Typography>
        )}
      </Paper>
    </Box>
  );
}; 
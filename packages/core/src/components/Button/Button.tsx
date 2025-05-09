import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size' | 'color'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const sizeMap = {
  sm: 'small',
  md: 'medium',
  lg: 'large',
} as const;

const variantMap = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info',
} as const;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  children,
  ...props
}) => {
  return (
    <MuiButton
      variant="contained"
      color={variantMap[variant]}
      size={sizeMap[size]}
      fullWidth={fullWidth}
      disabled={disabled}
      {...props}
    >
      {children}
    </MuiButton>
  );
}; 
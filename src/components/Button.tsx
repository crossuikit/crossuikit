import React from "react";
import clsx from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...props
}) => {
  const buttonClasses = clsx(
    // Base styles
    variant === "primary" ? "btn-primary" : "btn-secondary",
    // Size variations
    {
      "px-3 py-1 text-sm": size === "sm",
      "px-4 py-2": size === "md",
      "px-6 py-3 text-lg": size === "lg",
      "w-full": fullWidth,
    },
    className
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

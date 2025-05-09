import React from 'react';
import {
  Stepper as MuiStepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Box,
  Typography,
  StepButton,
} from '@mui/material';

export type StepItem = {
  label: string;
  description?: string;
  content?: React.ReactNode;
  optional?: boolean;
  completed?: boolean;
  error?: boolean;
};

export interface StepperProps {
  /**
   * The steps to display in the stepper
   */
  steps: StepItem[];
  /**
   * The current active step (0-based index)
   * @default 0
   */
  activeStep?: number;
  /**
   * Whether to show the step content
   * @default false
   */
  showContent?: boolean;
  /**
   * The orientation of the stepper
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Whether to show the step numbers
   * @default true
   */
  showStepNumbers?: boolean;
  /**
   * Whether to allow clicking on steps to navigate
   * @default false
   */
  clickable?: boolean;
  /**
   * Whether to show the alternative label (description below the step)
   * @default false
   */
  alternativeLabel?: boolean;
  /**
   * Callback fired when a step is clicked
   */
  onStepClick?: (step: number) => void;
  /**
   * Callback fired when the next button is clicked
   */
  onNext?: () => void;
  /**
   * Callback fired when the back button is clicked
   */
  onBack?: () => void;
  /**
   * Callback fired when the reset button is clicked
   */
  onReset?: () => void;
  /**
   * Whether to show navigation buttons
   * @default true
   */
  showNavigation?: boolean;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep = 0,
  showContent = false,
  orientation = 'horizontal',
  showStepNumbers = true,
  clickable = false,
  alternativeLabel = false,
  onStepClick,
  onNext,
  onBack,
  onReset,
  showNavigation = true,
}) => {
  const handleStepClick = (step: number) => {
    if (clickable && onStepClick) {
      onStepClick(step);
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleReset = () => {
    if (onReset) {
      onReset();
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <MuiStepper
        activeStep={activeStep}
        orientation={orientation}
        alternativeLabel={alternativeLabel}
      >
        {steps.map((step, index) => {
          const stepProps: { completed?: boolean; error?: boolean } = {};
          if (step.completed) {
            stepProps.completed = step.completed;
          }
          if (step.error) {
            stepProps.error = step.error;
          }

          const labelProps: {
            optional?: React.ReactNode;
            error?: boolean;
          } = {};
          if (step.optional) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (step.error) {
            labelProps.error = step.error;
          }

          return (
            <Step key={step.label} {...stepProps}>
              {clickable ? (
                <StepButton onClick={() => handleStepClick(index)}>
                  {showStepNumbers ? `${index + 1}. ` : ''}
                  {step.label}
                </StepButton>
              ) : (
                <StepLabel {...labelProps}>
                  {showStepNumbers ? `${index + 1}. ` : ''}
                  {step.label}
                </StepLabel>
              )}
              {showContent && step.content && (
                <StepContent>
                  <Typography>{step.description}</Typography>
                  {step.content}
                </StepContent>
              )}
            </Step>
          );
        })}
      </MuiStepper>
      {showNavigation && (
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          {activeStep === steps.length - 1 ? (
            <Button onClick={handleReset}>Reset</Button>
          ) : (
            <Button onClick={handleNext}>Next</Button>
          )}
        </Box>
      )}
    </Box>
  );
}; 
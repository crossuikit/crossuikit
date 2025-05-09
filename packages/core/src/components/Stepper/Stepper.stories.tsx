import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';
import { Box, TextField } from '@mui/material';
import { useState } from 'react';

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A stepper component that displays progress through a sequence of logical and numbered steps.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    steps: {
      description: 'The steps to display in the stepper',
      control: 'object',
    },
    activeStep: {
      description: 'The current active step (0-based index)',
      control: { type: 'number', min: 0 },
    },
    showContent: {
      description: 'Whether to show the step content',
      control: 'boolean',
    },
    orientation: {
      description: 'The orientation of the stepper',
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    showStepNumbers: {
      description: 'Whether to show the step numbers',
      control: 'boolean',
    },
    clickable: {
      description: 'Whether to allow clicking on steps to navigate',
      control: 'boolean',
    },
    alternativeLabel: {
      description: 'Whether to show the alternative label (description below the step)',
      control: 'boolean',
    },
    onStepClick: {
      description: 'Callback fired when a step is clicked',
    },
    onNext: {
      description: 'Callback fired when the next button is clicked',
    },
    onBack: {
      description: 'Callback fired when the back button is clicked',
    },
    onReset: {
      description: 'Callback fired when the reset button is clicked',
    },
    showNavigation: {
      description: 'Whether to show navigation buttons',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultSteps = [
  {
    label: 'Select campaign settings',
    description: 'For each ad campaign that you create, you can control how much you\'re willing to spend on clicks and conversions.',
    content: (
      <Box sx={{ p: 2 }}>
        <TextField
          label="Campaign name"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Budget"
          type="number"
          fullWidth
          margin="normal"
        />
      </Box>
    ),
  },
  {
    label: 'Create an ad group',
    description: 'An ad group contains one or more ads which target a shared set of keywords.',
    content: (
      <Box sx={{ p: 2 }}>
        <TextField
          label="Ad group name"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Target audience"
          fullWidth
          margin="normal"
        />
      </Box>
    ),
  },
  {
    label: 'Create an ad',
    description: 'Try out different ad text to see what brings in the most customers.',
    content: (
      <Box sx={{ p: 2 }}>
        <TextField
          label="Ad headline"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Ad description"
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
      </Box>
    ),
  },
];

const StepperWithState = (args: any) => {
  const [activeStep, setActiveStep] = useState(args.activeStep || 0);

  const handleNext = () => {
    setActiveStep((prev: number) => Math.min(prev + 1, args.steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prev: number) => Math.max(prev - 1, 0));
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleStepClick = (step: number) => {
    if (args.clickable) {
      setActiveStep(step);
    }
  };

  return (
    <Stepper
      {...args}
      activeStep={activeStep}
      onNext={handleNext}
      onBack={handleBack}
      onReset={handleReset}
      onStepClick={handleStepClick}
    />
  );
};

export const Default: Story = {
  render: (args) => <StepperWithState {...args} />,
  args: {
    steps: defaultSteps,
    activeStep: 0,
    showContent: true,
    showNavigation: true,
  },
};

export const Vertical: Story = {
  render: (args) => <StepperWithState {...args} />,
  args: {
    steps: defaultSteps,
    activeStep: 0,
    orientation: 'vertical',
    showContent: true,
    showNavigation: true,
  },
};

export const Clickable: Story = {
  render: (args) => <StepperWithState {...args} />,
  args: {
    steps: defaultSteps,
    activeStep: 0,
    clickable: true,
    showContent: true,
    showNavigation: true,
  },
};

export const AlternativeLabel: Story = {
  render: (args) => <StepperWithState {...args} />,
  args: {
    steps: defaultSteps,
    activeStep: 0,
    alternativeLabel: true,
    showNavigation: true,
  },
};

export const WithOptionalSteps: Story = {
  render: (args) => <StepperWithState {...args} />,
  args: {
    steps: [
      {
        label: 'Select campaign settings',
        description: 'For each ad campaign that you create, you can control how much you\'re willing to spend on clicks and conversions.',
      },
      {
        label: 'Create an ad group',
        description: 'An ad group contains one or more ads which target a shared set of keywords.',
        optional: true,
      },
      {
        label: 'Create an ad',
        description: 'Try out different ad text to see what brings in the most customers.',
      },
    ],
    activeStep: 0,
    showContent: true,
    showNavigation: true,
  },
};

export const WithError: Story = {
  render: (args) => <StepperWithState {...args} />,
  args: {
    steps: [
      {
        label: 'Select campaign settings',
        description: 'For each ad campaign that you create, you can control how much you\'re willing to spend on clicks and conversions.',
        completed: true,
      },
      {
        label: 'Create an ad group',
        description: 'An ad group contains one or more ads which target a shared set of keywords.',
        error: true,
      },
      {
        label: 'Create an ad',
        description: 'Try out different ad text to see what brings in the most customers.',
      },
    ],
    activeStep: 1,
    showContent: true,
    showNavigation: true,
  },
}; 
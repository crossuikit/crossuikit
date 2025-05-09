import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Box } from '@mui/material';
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component that supports different variants, sizes, and states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
      description: 'The color variant of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take up the full width of its container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    children: {
      control: 'text',
      description: 'The content to be displayed inside the button',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the button is clicked',
      table: {
        type: { summary: 'function' },
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    disabled: false,
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
  },
};

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="error">Error</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons come in different variants to indicate their purpose.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons come in three sizes to accommodate different contexts.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button fullWidth>Full Width</Button>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons can be in different states to indicate their current condition.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    children: 'Interactive Button',
    onClick: () => alert('Button clicked!'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Try interacting with the button using the controls below.',
      },
    },
  },
}; 
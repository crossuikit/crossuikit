import type { Meta, StoryObj } from '@storybook/react';
import { Spacing } from './Spacing';
import { Box } from '@mui/material';

const meta: Meta<typeof Spacing> = {
  title: 'Design System/Spacing',
  component: Spacing,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component to visualize and demonstrate spacing tokens in the design system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
      description: 'The size of the spacing',
      table: {
        type: { summary: 'SpacingSize' },
        defaultValue: { summary: 'md' },
      },
    },
    direction: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'The direction of the spacing',
      table: {
        type: { summary: 'vertical | horizontal' },
        defaultValue: { summary: 'vertical' },
      },
    },
    showValue: {
      control: 'boolean',
      description: 'Whether to show the spacing value in pixels',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    color: {
      control: 'color',
      description: 'The background color of the spacing indicator',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary.light' },
      },
    },
  },
  args: {
    size: 'md',
    direction: 'vertical',
    showValue: false,
    color: 'primary.light',
  },
};

export default meta;
type Story = StoryObj<typeof Spacing>;

export const Default: Story = {
  args: {
    size: 'md',
  },
};

export const AllSizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Spacing size="xs" showValue />
      <Spacing size="sm" showValue />
      <Spacing size="md" showValue />
      <Spacing size="lg" showValue />
      <Spacing size="xl" showValue />
      <Spacing size="2xl" showValue />
      <Spacing size="3xl" showValue />
      <Spacing size="4xl" showValue />
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available spacing sizes in the design system.',
      },
    },
  },
};

export const Horizontal: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 4, height: 200 }}>
      <Spacing size="xs" direction="horizontal" showValue />
      <Spacing size="sm" direction="horizontal" showValue />
      <Spacing size="md" direction="horizontal" showValue />
      <Spacing size="lg" direction="horizontal" showValue />
      <Spacing size="xl" direction="horizontal" showValue />
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Horizontal spacing examples.',
      },
    },
  },
};

export const CustomColor: Story = {
  args: {
    size: 'lg',
    color: '#FF6B6B',
    showValue: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Spacing with custom color.',
      },
    },
  },
}; 
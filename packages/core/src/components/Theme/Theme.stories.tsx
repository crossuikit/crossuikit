import type { Meta, StoryObj } from '@storybook/react';
import { Theme, ThemeShowcase } from './Theme';
import { ThemeProvider } from '../../providers/ThemeProvider';
import { Box } from '@mui/material';

const meta: Meta<typeof Theme> = {
  title: 'Design System/Theme',
  component: Theme,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      description: 'The content to be themed',
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Theme>;

export const Default: Story = {
  args: {
    children: 'This is a sample content that will change with the theme.',
  },
  render: (args) => (
    <Box sx={{ width: 400 }}>
      <Theme {...args}>
        <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
          {args.children}
        </Box>
      </Theme>
    </Box>
  ),
};

export const Showcase: Story = {
  render: () => (
    <Box sx={{ width: '100%', maxWidth: 1200 }}>
      <ThemeShowcase />
    </Box>
  ),
}; 
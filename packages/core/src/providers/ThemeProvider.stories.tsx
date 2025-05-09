import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, useTheme } from './ThemeProvider';
import { Box, Button, Typography, Paper } from '@mui/material';

const meta = {
  title: 'Design System/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A theme provider that manages the application\'s theme state and provides theme context to all child components.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The content to be themed',
      control: 'text',
    },
  },
} satisfies Meta<typeof ThemeProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

// Example component that uses the theme context
const ThemeConsumer = () => {
  const { currentTheme, setTheme } = useTheme();
  
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Current Theme: {currentTheme}
      </Typography>
      <Button
        variant="contained"
        onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
        sx={{ mb: 2 }}
      >
        Switch to {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
      <Paper sx={{ p: 2, bgcolor: 'background.paper' }}>
        <Typography>
          This content will change with the theme. The background color and text color
          will automatically adjust based on the current theme.
        </Typography>
      </Paper>
    </Box>
  );
};

export const Default: Story = {
  args: {
    children: <ThemeConsumer />,
  },
  render: (args) => (
    <Box sx={{ width: 400 }}>
      <ThemeProvider {...args} />
    </Box>
  ),
};

// Example showing multiple components using the same theme context
const ThemeAwareComponents = () => {
  const { currentTheme } = useTheme();
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Paper sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Typography>Primary Color Background</Typography>
      </Paper>
      <Paper sx={{ p: 2, bgcolor: 'secondary.main', color: 'secondary.contrastText' }}>
        <Typography>Secondary Color Background</Typography>
      </Paper>
      <Paper sx={{ p: 2, bgcolor: 'success.main', color: 'success.contrastText' }}>
        <Typography>Success Color Background</Typography>
      </Paper>
      <Paper sx={{ p: 2, bgcolor: 'error.main', color: 'error.contrastText' }}>
        <Typography>Error Color Background</Typography>
      </Paper>
      <Paper sx={{ p: 2, bgcolor: 'warning.main', color: 'warning.contrastText' }}>
        <Typography>Warning Color Background</Typography>
      </Paper>
      <Paper sx={{ p: 2, bgcolor: 'info.main', color: 'info.contrastText' }}>
        <Typography>Info Color Background</Typography>
      </Paper>
    </Box>
  );
};

export const ColorShowcase: Story = {
  args: {
    children: (
      <>
        <ThemeConsumer />
        <Box sx={{ mt: 4 }}>
          <ThemeAwareComponents />
        </Box>
      </>
    ),
  },
  render: (args) => (
    <Box sx={{ width: 400 }}>
      <ThemeProvider {...args} />
    </Box>
  ),
}; 
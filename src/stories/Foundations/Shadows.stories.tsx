import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';

import ThemeProvider from '../../theme';

const meta: Meta<typeof Box> = {
  title: 'Foundations/Shadows',
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const BasicShadows: Story = {
  render: ({boxShadow = 1, sx, ...props}) => (
    <ThemeProvider>
      <Box 
        boxShadow={boxShadow} 
        {...props}
        sx={{
          width: '8rem',
          height: '5rem',
          bgcolor: '#fff',
          p: 1,
          m: 4,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        This is boxShadow {boxShadow as number}
      </Box>
    </ThemeProvider>
  ),
  argTypes: {
    boxShadow: {
      control:{ type: 'select' },
      options: [0, 1, 2, 3, 4, 5, 6, 7],
    },
  },
};

export const ColorShadows: Story = {
  render: ({sx, ...props}) => (
    <ThemeProvider>
      <Box 
        boxShadow={11} 
        {...props}
        sx={{
          width: '8rem',
          height: '5rem',
          bgcolor: (theme) => theme.palette.primary.main,
          p: 1,
          m: 4,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
          display: 'inline-block'
        }}
      >
        This is boxShadow Primary
      </Box>
      <Box 
        boxShadow={12} 
        {...props}
        sx={{
          width: '8rem',
          height: '5rem',
          bgcolor: (theme) => theme.palette.info.main,
          p: 1,
          m: 4,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
          display: 'inline-block'
        }}
      >
        This is boxShadow Info
      </Box>
      <Box 
        boxShadow={13} 
        {...props}
        sx={{
          width: '8rem',
          height: '5rem',
          bgcolor: (theme) => theme.palette.success.main,
          p: 1,
          m: 4,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
          display: 'inline-block'
        }}
      >
        This is boxShadow Success
      </Box>
      <Box 
        boxShadow={14} 
        {...props}
        sx={{
          width: '8rem',
          height: '5rem',
          bgcolor: (theme) => theme.palette.warning.main,
          p: 1,
          m: 4,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
          display: 'inline-block'
        }}
      >
        This is boxShadow Warning
      </Box>
      <Box 
        boxShadow={15} 
        {...props}
        sx={{
          width: '8rem',
          height: '5rem',
          bgcolor: (theme) => theme.palette.error.main,
          p: 1,
          m: 4,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
          display: 'inline-block'
        }}
      >
        This is boxShadow Error
      </Box>
    </ThemeProvider>
  ),
};

export const ComponentShadows: Story = {
  render: ({boxShadow = 1, sx, ...props}) => (
    <ThemeProvider>
      <Box 
        boxShadow={boxShadow} 
        {...props}
        sx={{
          width: '8rem',
          height: '5rem',
          bgcolor: '#fff',
          p: 1,
          m: 4,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        This is boxShadow {boxShadow as number}
      </Box>
    </ThemeProvider>
  ),
  argTypes: {
    boxShadow: {
      control:{ type: 'select' },
      options: [8, 9, 10],
    },
  },
};
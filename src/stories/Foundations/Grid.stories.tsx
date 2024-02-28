import type { Meta, StoryObj } from '@storybook/react';

import Grid from '../../components/Grid';
import ThemeProvider from '../../theme';
import { Box } from '@mui/material';

const meta: Meta<typeof Grid> = {
  title: 'Foundations/Grid',
  component: Grid,
};

export default meta;
type Story = StoryObj<typeof Grid>;

const Item = ({ children }: { children: React.ReactNode}) => (
  <Box 
    sx={{
      bgcolor: (theme) => theme.palette.primary.light,
      width: '100%',
      height: '100%',
      borderRadius: 2,
      padding: (theme) => theme.spacing(1),
      textAlign: 'center',
      fontSize: '0.875rem',
      fontWeight: '700',
    }}
  >
    {children}      
  </Box>
);

export const GridSpacing: Story = {
  render: ({ spacing = 3, ...props }) => (
  <ThemeProvider>
    <Grid container spacing={spacing} {...props}>
      <Grid item xs={6}>
        <Item>xs=6</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>xs=6</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>xs=6</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>xs=6</Item>
      </Grid>
    </Grid>
  </ThemeProvider>),
  argTypes: {
    spacing: {
      control:{ type: 'select' },
      options: [3, 5, 10],
    },
  },
};
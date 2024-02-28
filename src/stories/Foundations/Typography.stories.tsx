import type { Meta, StoryObj } from '@storybook/react';

import Typography from '../../components/Typography';
import ThemeProvider from '../../theme';

const meta: Meta<typeof Typography> = {
  title: 'Foundations/Typography',
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const TypographyVariant: Story = {
  render: ({ variant = 'h1', ...props }) => <ThemeProvider><Typography variant={variant} {...props}>This is {variant}</Typography></ThemeProvider>,
  argTypes: {
    variant: {
      control:{ type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline', 'button'],
    },
  },
};
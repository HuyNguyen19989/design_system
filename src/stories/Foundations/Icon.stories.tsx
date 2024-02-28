import type { Meta, StoryObj } from '@storybook/react';

import ThemeProvider from '../../theme';
import IconBase from '../../components/Icon/IconBase';
import { SvgIconProps } from '@mui/material';
import AllIcons from '../story-components/AllIcons';

const meta: Meta<SvgIconProps> = {
  title: 'Foundations/Icons',
  component: IconBase,
};

export default meta;
type Story = StoryObj<SvgIconProps>;

export const AllIconsStory: Story = {
  render: ({ fontSize = 'large' }) => <ThemeProvider><AllIcons fontSize={fontSize} /></ThemeProvider>,
  argTypes: {
    fontSize: {
      control:{ type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
}
import type { Meta, StoryObj } from '@storybook/react';
import { Badge, Button } from '@andychoucoding/react-mui';
import MailIcon from '@mui/icons-material/Mail';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'success', 'warning'],
    },
    variant: {
      control: 'select',
      options: ['standard', 'dot'],
    },
    max: { control: 'number' },
    showZero: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    badgeContent: 4,
    color: 'primary',
    children: <MailIcon />,
  },
};

export const Dot: Story = {
  args: {
    variant: 'dot',
    color: 'error',
    children: <MailIcon />,
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      {(['primary', 'secondary', 'error', 'success', 'warning'] as const).map((color) => (
        <Badge key={color} badgeContent={4} color={color}>
          <MailIcon />
        </Badge>
      ))}
    </div>
  ),
};

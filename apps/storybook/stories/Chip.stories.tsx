import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@andychoucoding/react-mui';
import FaceIcon from '@mui/icons-material/Face';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'success', 'warning'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    clickable: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: 'Chip',
    color: 'primary',
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {(['default', 'primary', 'secondary', 'error', 'success', 'warning'] as const).map((color) => (
        <Chip key={color} label={color} color={color} />
      ))}
    </div>
  ),
};

export const Outlined: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {(['default', 'primary', 'secondary', 'error', 'success', 'warning'] as const).map((color) => (
        <Chip key={color} label={color} color={color} variant="outlined" />
      ))}
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    label: 'With Icon',
    color: 'primary',
    icon: <FaceIcon />,
  },
};

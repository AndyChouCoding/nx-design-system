import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '@andychoucoding/react-mui';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success', 'warning'],
    },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    helperText: 'We will never share your email.',
    type: 'email',
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    error: true,
    helperText: 'Invalid email address.',
    defaultValue: 'hello@',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    defaultValue: 'Can not edit',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexDirection: 'column', maxWidth: 400 }}>
      <TextField label="Small" size="small" />
      <TextField label="Medium" size="medium" />
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@andychoucoding/react-mui';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption', 'button'],
    },
    color: { control: 'text' },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: 'body1',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
};

export const TypeScale: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Typography variant="h1">H1 — Heading 1</Typography>
      <Typography variant="h2">H2 — Heading 2</Typography>
      <Typography variant="h3">H3 — Heading 3</Typography>
      <Typography variant="h4">H4 — Heading 4</Typography>
      <Typography variant="h5">H5 — Heading 5</Typography>
      <Typography variant="h6">H6 — Heading 6</Typography>
      <Typography variant="body1">Body 1 — The quick brown fox jumps over the lazy dog.</Typography>
      <Typography variant="body2">Body 2 — The quick brown fox jumps over the lazy dog.</Typography>
      <Typography variant="caption">Caption — The quick brown fox jumps over the lazy dog.</Typography>
      <Typography variant="button">Button Text</Typography>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Typography color="text.primary">text.primary</Typography>
      <Typography color="text.secondary">text.secondary</Typography>
      <Typography color="primary.main">primary.main</Typography>
      <Typography color="error.main">error.main</Typography>
      <Typography color="success.main">success.main</Typography>
      <Typography color="warning.main">warning.main</Typography>
    </div>
  ),
};

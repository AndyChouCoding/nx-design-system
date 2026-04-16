import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardHeader, CardActions, Button, Typography } from '@andychoucoding/react-mui';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card sx={{ maxWidth: 360 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Card Title</Typography>
        <Typography variant="body2" color="text.secondary">
          This is a sample card component using the design system theme.
        </Typography>
      </CardContent>
    </Card>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Card sx={{ maxWidth: 360 }}>
      <CardHeader
        title="Card Header"
        subheader="Subheader text"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Card body content goes here. You can add any content inside a card.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" size="small">Cancel</Button>
        <Button variant="contained" size="small">Confirm</Button>
      </CardActions>
    </Card>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import {
  colorPrimary,
  colorSupporting,
  colorError,
  colorSuccess,
  colorWarning,
  colorForeground,
  colorBackground,
} from '@andychoucoding/tokens';

const meta: Meta = {
  title: 'Design Tokens/Colors',
  tags: ['autodocs'],
};

export default meta;

const ColorSwatch = ({ name, value }: { name: string; value: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: value,
        border: '1px solid rgba(0,0,0,0.1)',
        flexShrink: 0,
      }}
    />
    <div>
      <div style={{ fontSize: 13, fontWeight: 600 }}>{name}</div>
      <div style={{ fontSize: 12, color: '#666' }}>{value}</div>
    </div>
  </div>
);

const ColorGroup = ({ title, colors }: { title: string; colors: Record<string, string> }) => (
  <div style={{ marginBottom: 32 }}>
    <h3 style={{ marginBottom: 16, fontSize: 16, fontWeight: 600 }}>{title}</h3>
    {Object.entries(colors).map(([name, value]) => (
      <ColorSwatch key={name} name={name} value={value} />
    ))}
  </div>
);

export const AllColors: StoryObj = {
  render: () => (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h2 style={{ marginBottom: 32 }}>Design Tokens — Colors</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 32 }}>
        <ColorGroup title="Primary" colors={colorPrimary} />
        <ColorGroup title="Supporting" colors={colorSupporting} />
        <ColorGroup title="Foreground" colors={colorForeground} />
        <ColorGroup title="Background" colors={colorBackground} />
        <ColorGroup title="Error" colors={colorError} />
        <ColorGroup title="Success" colors={colorSuccess} />
        <ColorGroup title="Warning" colors={colorWarning} />
      </div>
    </div>
  ),
};

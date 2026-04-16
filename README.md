# nx-design-system

Internal design system built with NX Monorepo, React 19, MUI 6, and Storybook 8.

## Packages

| Package | Description |
|---------|-------------|
| `@andychoucoding/tokens` | Design tokens — colors, spacing, typography, shape |
| `@andychoucoding/react-mui` | React + MUI components + theme |

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Run Storybook

```bash
pnpm storybook
```

### Using in other projects

```tsx
import { ThemeProvider } from '@mui/material/styles';
import { theme, Button, Card, CardContent } from '@andychoucoding/react-mui';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">Hello</Button>
    </ThemeProvider>
  );
}
```

## Monorepo Structure

```
nx-design-system/
├── packages/
│   ├── tokens/          → @andychoucoding/tokens
│   └── react-mui/       → @andychoucoding/react-mui
├── apps/
│   └── storybook/       → Component documentation
├── nx.json
└── pnpm-workspace.yaml
```

## Components

- **Button** — contained / outlined / text variants, loading state
- **TextField** — outlined input with label, helper text, error state
- **Typography** — full type scale (h1–h6, body, caption)
- **Card** — Card + CardHeader + CardContent + CardActions
- **Chip** — filled / outlined, all status colors
- **Badge** — standard / dot variants

## Branch Strategy (Gitflow)

- `main` — stable release
- `develop` — integration branch
- `feature/*` — new features
- `fix/*` — bug fixes

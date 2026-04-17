# Changelog

All notable changes to this project will be documented in this file.

---

## @andychoucoding/react-mui

### 0.1.1 — 2026-04-16

#### Fixed
- Broaden MUI peerDependencies to support `>=6.0.0` (including v9)

### 0.1.0 — 2026-04-16

#### Added
- MUI `createTheme()` bridging layer with full design token mapping
- Components: `Button` (with loading state), `TextField`, `Typography`, `Card` + sub-components, `Chip`, `Badge`
- `@andychoucoding/tokens` bundled internally — no runtime dependency required
- Published to GitHub Packages

---

## @andychoucoding/tokens

### 0.1.0 — 2026-04-16

#### Added
- Color tokens: Primary, Supporting, Foreground, Background, Status (Error / Success / Warning / Neutral)
- Spacing tokens (4px base scale)
- Typography tokens (fontFamily, fontSize, fontWeight, lineHeight, letterSpacing)
- Shape tokens (borderRadius, shadow)
- Semantic token layer mapping primitive values to usage intent
- Published to GitHub Packages

---

## Workspace

### 2026-04-17

#### Added
- Changesets for version management (`@changesets/cli`)
- `.changeset/config.json` configured for GitHub Packages public access
- `version`, `release`, `changeset` scripts in root package.json

### 2026-04-16

#### Added
- NX monorepo initialized with pnpm workspaces
- Storybook 8 app with stories for all components + Design Token color visualizer
- `.npmrc` scoping `@andychoucoding` to GitHub Packages registry
- `dist/` committed to git for direct GitHub path install support
- Gitflow branch strategy (main / develop) with `v0.1.0` tag

---

## [Unreleased]


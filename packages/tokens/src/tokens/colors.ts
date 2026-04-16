/**
 * Design Tokens — Colors
 * Source: Colour.png
 */

// ─── Primary ────────────────────────────────────────────────────────────────
export const colorPrimary = {
  themeDarker: '#0C1331',
  themeDark: '#161D44',
  themeDarkAlt: '#1F2678',
  themePrimary: '#1F2678',
  themeSecondary: '#2F3788',
  themeTertiary: '#6167AE',
  themeLight: '#A7ABD6',
  themeLighter: '#CED0E9',
  themeLightAlt: '#E6E7F3',
} as const;

// ─── Supporting ──────────────────────────────────────────────────────────────
export const colorSupporting = {
  supportDarker: '#A56300',
  supportDark: '#C07300',
  supportDarkAlt: '#DA880D',
  support: '#EA9514',
  supportSecondary: '#EDA83F',
  supportTertiary: '#FAC36E',
  supportLight: '#F8CF91',
  supportLighter: '#F8DFB8',
  supportLightAlt: '#FDF2E2',
} as const;

// ─── Foreground ──────────────────────────────────────────────────────────────
export const colorForeground = {
  black: '#000000',
  neutralDark: '#232323',
  neutralPrimary: '#333333',
  neutralPrimaryAlt: '#666666',
  neutralSecondary: '#999999',
  neutralTertiary: '#B5B5B5',
  neutralTertiaryAlt: '#D3D3D3',
} as const;

// ─── Background ──────────────────────────────────────────────────────────────
export const colorBackground = {
  neutralLighterAlt: '#EDEBE9',
  neutralLighter: '#F3F2F1',
  neutralLight: '#F8F8F8',
  white: '#FFFFFF',
} as const;

// ─── Status — Error ──────────────────────────────────────────────────────────
export const colorError = {
  errorDark: '#83060E',
  errorDarkAlt: '#AA0713',
  error: '#C30F1C',
  errorLight: '#F9E8E9',
} as const;

// ─── Status — Success ────────────────────────────────────────────────────────
export const colorSuccess = {
  successDark: '#538F04',
  successDarkAlt: '#60A405',
  success: '#68B500',
  successLight: '#DEF4DC',
} as const;

// ─── Status — Warning ────────────────────────────────────────────────────────
export const colorWarning = {
  warningDark: '#C98007',
  warningDarkAlt: '#E0910F',
  warning: '#F2A019',
  warningLight: '#FCF0D1',
} as const;

// ─── Status — Neutral ────────────────────────────────────────────────────────
export const colorNeutral = {
  neutralPrimary: '#333333',
  neutralPrimaryAlt: '#666666',
  neutralSecondary: '#999999',
  neutralLight: '#F8F8F8',
} as const;

// ─── Semantic Tokens ─────────────────────────────────────────────────────────
export const colorSemantic = {
  // Brand
  brand: colorPrimary.themePrimary,
  brandDark: colorPrimary.themeDark,
  brandLight: colorPrimary.themeLight,
  brandAccent: colorSupporting.support,

  // Text
  textPrimary: colorForeground.neutralPrimary,
  textSecondary: colorForeground.neutralSecondary,
  textDisabled: colorForeground.neutralTertiary,
  textInverse: colorBackground.white,

  // Surface
  surfaceDefault: colorBackground.white,
  surfaceSubtle: colorBackground.neutralLight,
  surfaceMuted: colorBackground.neutralLighter,

  // Border
  borderDefault: colorForeground.neutralTertiaryAlt,
  borderStrong: colorForeground.neutralTertiary,

  // Status
  error: colorError.error,
  errorLight: colorError.errorLight,
  success: colorSuccess.success,
  successLight: colorSuccess.successLight,
  warning: colorWarning.warning,
  warningLight: colorWarning.warningLight,
} as const;

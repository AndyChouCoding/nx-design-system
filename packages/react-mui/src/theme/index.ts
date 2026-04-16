import { createTheme, ThemeOptions } from '@mui/material/styles';
import {
  colorPrimary,
  colorSupporting,
  colorError,
  colorSuccess,
  colorWarning,
  colorForeground,
  colorBackground,
  colorSemantic,
  spacingBase,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  borderRadius,
} from '@andychoucoding/tokens';

const themeOptions: ThemeOptions = {
  // ─── Spacing ──────────────────────────────────────────────────────────────
  spacing: spacingBase,

  // ─── Shape ────────────────────────────────────────────────────────────────
  shape: {
    borderRadius: 8,
  },

  // ─── Palette ──────────────────────────────────────────────────────────────
  palette: {
    primary: {
      darker: colorPrimary.themeDarker,
      dark: colorPrimary.themeDark,
      main: colorPrimary.themePrimary,
      light: colorPrimary.themeLight,
      lighter: colorPrimary.themeLighter,
      contrastText: colorBackground.white,
    },
    secondary: {
      dark: colorSupporting.supportDark,
      main: colorSupporting.support,
      light: colorSupporting.supportLight,
      contrastText: colorBackground.white,
    },
    error: {
      dark: colorError.errorDark,
      main: colorError.error,
      light: colorError.errorLight,
      contrastText: colorBackground.white,
    },
    success: {
      dark: colorSuccess.successDark,
      main: colorSuccess.success,
      light: colorSuccess.successLight,
      contrastText: colorBackground.white,
    },
    warning: {
      dark: colorWarning.warningDark,
      main: colorWarning.warning,
      light: colorWarning.warningLight,
      contrastText: colorBackground.white,
    },
    text: {
      primary: colorForeground.neutralPrimary,
      secondary: colorForeground.neutralSecondary,
      disabled: colorForeground.neutralTertiary,
    },
    background: {
      default: colorBackground.neutralLight,
      paper: colorBackground.white,
    },
    divider: colorForeground.neutralTertiaryAlt,
  },

  // ─── Typography ───────────────────────────────────────────────────────────
  typography: {
    fontFamily: fontFamily.base,
    fontSize: 16,
    h1: {
      fontSize: fontSize['5xl'],
      fontWeight: fontWeight.bold,
      lineHeight: lineHeight.tight,
    },
    h2: {
      fontSize: fontSize['4xl'],
      fontWeight: fontWeight.bold,
      lineHeight: lineHeight.tight,
    },
    h3: {
      fontSize: fontSize['3xl'],
      fontWeight: fontWeight.semibold,
      lineHeight: lineHeight.snug,
    },
    h4: {
      fontSize: fontSize['2xl'],
      fontWeight: fontWeight.semibold,
      lineHeight: lineHeight.snug,
    },
    h5: {
      fontSize: fontSize.xl,
      fontWeight: fontWeight.medium,
      lineHeight: lineHeight.normal,
    },
    h6: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.medium,
      lineHeight: lineHeight.normal,
    },
    body1: {
      fontSize: fontSize.md,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.normal,
    },
    body2: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.normal,
    },
    caption: {
      fontSize: fontSize.xs,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.normal,
    },
    button: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.semibold,
      textTransform: 'none',
    },
  },

  // ─── Component Overrides ─────────────────────────────────────────────────
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.md,
          padding: '8px 20px',
        },
        sizeSmall: {
          padding: '4px 12px',
          fontSize: fontSize.xs,
        },
        sizeLarge: {
          padding: '12px 28px',
          fontSize: fontSize.md,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'medium',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: borderRadius.md,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.lg,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.full,
          fontWeight: fontWeight.medium,
        },
      },
    },
  },
};

// Extend MUI palette types
declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string;
    lighter?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
    lighter?: string;
  }
}

export const theme = createTheme(themeOptions);
export default theme;

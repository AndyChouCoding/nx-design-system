import { createTheme } from '@mui/material/styles';
import React4 from 'react';
import MuiButton from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { jsx } from 'react/jsx-runtime';
import MuiTextField from '@mui/material/TextField';
import MuiTypography from '@mui/material/Typography';
import MuiCard from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import MuiCardHeader from '@mui/material/CardHeader';
import MuiCardActions from '@mui/material/CardActions';
import MuiChip from '@mui/material/Chip';
import MuiBadge from '@mui/material/Badge';

// src/theme/index.ts

// ../tokens/dist/index.mjs
var colorPrimary = {
  themeDarker: "#0C1331",
  themeDark: "#161D44",
  themePrimary: "#1F2678",
  themeLight: "#A7ABD6",
  themeLighter: "#CED0E9"};
var colorSupporting = {
  supportDark: "#C07300",
  support: "#EA9514",
  supportLight: "#F8CF91"};
var colorForeground = {
  neutralPrimary: "#333333",
  neutralSecondary: "#999999",
  neutralTertiary: "#B5B5B5",
  neutralTertiaryAlt: "#D3D3D3"
};
var colorBackground = {
  neutralLight: "#F8F8F8",
  white: "#FFFFFF"
};
var colorError = {
  errorDark: "#83060E",
  error: "#C30F1C",
  errorLight: "#F9E8E9"
};
var colorSuccess = {
  successDark: "#538F04",
  success: "#68B500",
  successLight: "#DEF4DC"
};
var colorWarning = {
  warningDark: "#C98007",
  warning: "#F2A019",
  warningLight: "#FCF0D1"
};
var spacingBase = 4;
var fontFamily = {
  base: '"Inter", "Roboto", "Helvetica Neue", Arial, sans-serif'};
var fontSize = {
  xs: "0.75rem",
  // 12px
  sm: "0.875rem",
  // 14px
  md: "1rem",
  // 16px
  lg: "1.125rem",
  // 18px
  xl: "1.25rem",
  // 20px
  "2xl": "1.5rem",
  // 24px
  "3xl": "1.875rem",
  // 30px
  "4xl": "2.25rem",
  // 36px
  "5xl": "3rem"
  // 48px
};
var fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
};
var lineHeight = {
  tight: 1.25,
  snug: 1.375,
  normal: 1.5};
var borderRadius = {
  md: "8px",
  lg: "12px",
  full: "9999px"
};

// src/theme/index.ts
var themeOptions = {
  // ─── Spacing ──────────────────────────────────────────────────────────────
  spacing: spacingBase,
  // ─── Shape ────────────────────────────────────────────────────────────────
  shape: {
    borderRadius: 8
  },
  // ─── Palette ──────────────────────────────────────────────────────────────
  palette: {
    primary: {
      darker: colorPrimary.themeDarker,
      dark: colorPrimary.themeDark,
      main: colorPrimary.themePrimary,
      light: colorPrimary.themeLight,
      lighter: colorPrimary.themeLighter,
      contrastText: colorBackground.white
    },
    secondary: {
      dark: colorSupporting.supportDark,
      main: colorSupporting.support,
      light: colorSupporting.supportLight,
      contrastText: colorBackground.white
    },
    error: {
      dark: colorError.errorDark,
      main: colorError.error,
      light: colorError.errorLight,
      contrastText: colorBackground.white
    },
    success: {
      dark: colorSuccess.successDark,
      main: colorSuccess.success,
      light: colorSuccess.successLight,
      contrastText: colorBackground.white
    },
    warning: {
      dark: colorWarning.warningDark,
      main: colorWarning.warning,
      light: colorWarning.warningLight,
      contrastText: colorBackground.white
    },
    text: {
      primary: colorForeground.neutralPrimary,
      secondary: colorForeground.neutralSecondary,
      disabled: colorForeground.neutralTertiary
    },
    background: {
      default: colorBackground.neutralLight,
      paper: colorBackground.white
    },
    divider: colorForeground.neutralTertiaryAlt
  },
  // ─── Typography ───────────────────────────────────────────────────────────
  typography: {
    fontFamily: fontFamily.base,
    fontSize: 16,
    h1: {
      fontSize: fontSize["5xl"],
      fontWeight: fontWeight.bold,
      lineHeight: lineHeight.tight
    },
    h2: {
      fontSize: fontSize["4xl"],
      fontWeight: fontWeight.bold,
      lineHeight: lineHeight.tight
    },
    h3: {
      fontSize: fontSize["3xl"],
      fontWeight: fontWeight.semibold,
      lineHeight: lineHeight.snug
    },
    h4: {
      fontSize: fontSize["2xl"],
      fontWeight: fontWeight.semibold,
      lineHeight: lineHeight.snug
    },
    h5: {
      fontSize: fontSize.xl,
      fontWeight: fontWeight.medium,
      lineHeight: lineHeight.normal
    },
    h6: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.medium,
      lineHeight: lineHeight.normal
    },
    body1: {
      fontSize: fontSize.md,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.normal
    },
    body2: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.normal
    },
    caption: {
      fontSize: fontSize.xs,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.normal
    },
    button: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.semibold,
      textTransform: "none"
    }
  },
  // ─── Component Overrides ─────────────────────────────────────────────────
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.md,
          padding: "8px 20px"
        },
        sizeSmall: {
          padding: "4px 12px",
          fontSize: fontSize.xs
        },
        sizeLarge: {
          padding: "12px 28px",
          fontSize: fontSize.md
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "medium"
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: borderRadius.md
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.lg,
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.full,
          fontWeight: fontWeight.medium
        }
      }
    }
  }
};
var theme = createTheme(themeOptions);
var Button = React4.forwardRef(
  ({ loading = false, disabled, children, startIcon, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      MuiButton,
      {
        ref,
        disabled: disabled || loading,
        startIcon: loading ? /* @__PURE__ */ jsx(CircularProgress, { size: 16, color: "inherit" }) : startIcon,
        ...props,
        children
      }
    );
  }
);
Button.displayName = "Button";
var TextField = React4.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(MuiTextField, { ref, ...props });
  }
);
TextField.displayName = "TextField";
var Typography = React4.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(MuiTypography, { ref, ...props });
  }
);
Typography.displayName = "Typography";
var Card = React4.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(MuiCard, { ref, ...props });
  }
);
Card.displayName = "Card";
var CardContent = React4.forwardRef(
  (props, ref) => /* @__PURE__ */ jsx(MuiCardContent, { ref, ...props })
);
CardContent.displayName = "CardContent";
var CardHeader = React4.forwardRef(
  (props, ref) => /* @__PURE__ */ jsx(MuiCardHeader, { ref, ...props })
);
CardHeader.displayName = "CardHeader";
var CardActions = React4.forwardRef(
  (props, ref) => /* @__PURE__ */ jsx(MuiCardActions, { ref, ...props })
);
CardActions.displayName = "CardActions";
var Chip = React4.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(MuiChip, { ref, ...props });
  }
);
Chip.displayName = "Chip";
var Badge = React4.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(MuiBadge, { ref, ...props });
  }
);
Badge.displayName = "Badge";

export { Badge, Button, Card, CardActions, CardContent, CardHeader, Chip, TextField, Typography, theme };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map
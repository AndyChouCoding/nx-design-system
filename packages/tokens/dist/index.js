'use strict';

// src/tokens/colors.ts
var colorPrimary = {
  themeDarker: "#0C1331",
  themeDark: "#161D44",
  themeDarkAlt: "#1F2678",
  themePrimary: "#1F2678",
  themeSecondary: "#2F3788",
  themeTertiary: "#6167AE",
  themeLight: "#A7ABD6",
  themeLighter: "#CED0E9",
  themeLightAlt: "#E6E7F3"
};
var colorSupporting = {
  supportDarker: "#A56300",
  supportDark: "#C07300",
  supportDarkAlt: "#DA880D",
  support: "#EA9514",
  supportSecondary: "#EDA83F",
  supportTertiary: "#FAC36E",
  supportLight: "#F8CF91",
  supportLighter: "#F8DFB8",
  supportLightAlt: "#FDF2E2"
};
var colorForeground = {
  black: "#000000",
  neutralDark: "#232323",
  neutralPrimary: "#333333",
  neutralPrimaryAlt: "#666666",
  neutralSecondary: "#999999",
  neutralTertiary: "#B5B5B5",
  neutralTertiaryAlt: "#D3D3D3"
};
var colorBackground = {
  neutralLighterAlt: "#EDEBE9",
  neutralLighter: "#F3F2F1",
  neutralLight: "#F8F8F8",
  white: "#FFFFFF"
};
var colorError = {
  errorDark: "#83060E",
  errorDarkAlt: "#AA0713",
  error: "#C30F1C",
  errorLight: "#F9E8E9"
};
var colorSuccess = {
  successDark: "#538F04",
  successDarkAlt: "#60A405",
  success: "#68B500",
  successLight: "#DEF4DC"
};
var colorWarning = {
  warningDark: "#C98007",
  warningDarkAlt: "#E0910F",
  warning: "#F2A019",
  warningLight: "#FCF0D1"
};
var colorNeutral = {
  neutralPrimary: "#333333",
  neutralPrimaryAlt: "#666666",
  neutralSecondary: "#999999",
  neutralLight: "#F8F8F8"
};
var colorSemantic = {
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
  warningLight: colorWarning.warningLight
};

// src/tokens/spacing.ts
var spacing = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
  24: "96px"
};
var spacingBase = 4;

// src/tokens/typography.ts
var fontFamily = {
  base: '"Inter", "Roboto", "Helvetica Neue", Arial, sans-serif',
  mono: '"Roboto Mono", "Courier New", monospace'
};
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
  normal: 1.5,
  relaxed: 1.625
};
var letterSpacing = {
  tight: "-0.025em",
  normal: "0em",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em"
};

// src/tokens/shape.ts
var borderRadius = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "9999px"
};
var shadow = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
};

exports.borderRadius = borderRadius;
exports.colorBackground = colorBackground;
exports.colorError = colorError;
exports.colorForeground = colorForeground;
exports.colorNeutral = colorNeutral;
exports.colorPrimary = colorPrimary;
exports.colorSemantic = colorSemantic;
exports.colorSuccess = colorSuccess;
exports.colorSupporting = colorSupporting;
exports.colorWarning = colorWarning;
exports.fontFamily = fontFamily;
exports.fontSize = fontSize;
exports.fontWeight = fontWeight;
exports.letterSpacing = letterSpacing;
exports.lineHeight = lineHeight;
exports.shadow = shadow;
exports.spacing = spacing;
exports.spacingBase = spacingBase;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
/**
 * Design Tokens — Colors
 * Source: Colour.png
 */
declare const colorPrimary: {
    readonly themeDarker: "#0C1331";
    readonly themeDark: "#161D44";
    readonly themeDarkAlt: "#1F2678";
    readonly themePrimary: "#1F2678";
    readonly themeSecondary: "#2F3788";
    readonly themeTertiary: "#6167AE";
    readonly themeLight: "#A7ABD6";
    readonly themeLighter: "#CED0E9";
    readonly themeLightAlt: "#E6E7F3";
};
declare const colorSupporting: {
    readonly supportDarker: "#A56300";
    readonly supportDark: "#C07300";
    readonly supportDarkAlt: "#DA880D";
    readonly support: "#EA9514";
    readonly supportSecondary: "#EDA83F";
    readonly supportTertiary: "#FAC36E";
    readonly supportLight: "#F8CF91";
    readonly supportLighter: "#F8DFB8";
    readonly supportLightAlt: "#FDF2E2";
};
declare const colorForeground: {
    readonly black: "#000000";
    readonly neutralDark: "#232323";
    readonly neutralPrimary: "#333333";
    readonly neutralPrimaryAlt: "#666666";
    readonly neutralSecondary: "#999999";
    readonly neutralTertiary: "#B5B5B5";
    readonly neutralTertiaryAlt: "#D3D3D3";
};
declare const colorBackground: {
    readonly neutralLighterAlt: "#EDEBE9";
    readonly neutralLighter: "#F3F2F1";
    readonly neutralLight: "#F8F8F8";
    readonly white: "#FFFFFF";
};
declare const colorError: {
    readonly errorDark: "#83060E";
    readonly errorDarkAlt: "#AA0713";
    readonly error: "#C30F1C";
    readonly errorLight: "#F9E8E9";
};
declare const colorSuccess: {
    readonly successDark: "#538F04";
    readonly successDarkAlt: "#60A405";
    readonly success: "#68B500";
    readonly successLight: "#DEF4DC";
};
declare const colorWarning: {
    readonly warningDark: "#C98007";
    readonly warningDarkAlt: "#E0910F";
    readonly warning: "#F2A019";
    readonly warningLight: "#FCF0D1";
};
declare const colorNeutral: {
    readonly neutralPrimary: "#333333";
    readonly neutralPrimaryAlt: "#666666";
    readonly neutralSecondary: "#999999";
    readonly neutralLight: "#F8F8F8";
};
declare const colorSemantic: {
    readonly brand: "#1F2678";
    readonly brandDark: "#161D44";
    readonly brandLight: "#A7ABD6";
    readonly brandAccent: "#EA9514";
    readonly textPrimary: "#333333";
    readonly textSecondary: "#999999";
    readonly textDisabled: "#B5B5B5";
    readonly textInverse: "#FFFFFF";
    readonly surfaceDefault: "#FFFFFF";
    readonly surfaceSubtle: "#F8F8F8";
    readonly surfaceMuted: "#F3F2F1";
    readonly borderDefault: "#D3D3D3";
    readonly borderStrong: "#B5B5B5";
    readonly error: "#C30F1C";
    readonly errorLight: "#F9E8E9";
    readonly success: "#68B500";
    readonly successLight: "#DEF4DC";
    readonly warning: "#F2A019";
    readonly warningLight: "#FCF0D1";
};

/**
 * Design Tokens — Spacing
 * Base unit: 4px
 */
declare const spacing: {
    readonly 0: "0px";
    readonly 1: "4px";
    readonly 2: "8px";
    readonly 3: "12px";
    readonly 4: "16px";
    readonly 5: "20px";
    readonly 6: "24px";
    readonly 7: "28px";
    readonly 8: "32px";
    readonly 10: "40px";
    readonly 12: "48px";
    readonly 16: "64px";
    readonly 20: "80px";
    readonly 24: "96px";
};
type SpacingKey = keyof typeof spacing;
/** Returns numeric value in px (for MUI spacing function) */
declare const spacingBase = 4;

/**
 * Design Tokens — Typography
 */
declare const fontFamily: {
    readonly base: "\"Inter\", \"Roboto\", \"Helvetica Neue\", Arial, sans-serif";
    readonly mono: "\"Roboto Mono\", \"Courier New\", monospace";
};
declare const fontSize: {
    readonly xs: "0.75rem";
    readonly sm: "0.875rem";
    readonly md: "1rem";
    readonly lg: "1.125rem";
    readonly xl: "1.25rem";
    readonly '2xl': "1.5rem";
    readonly '3xl': "1.875rem";
    readonly '4xl': "2.25rem";
    readonly '5xl': "3rem";
};
declare const fontWeight: {
    readonly regular: 400;
    readonly medium: 500;
    readonly semibold: 600;
    readonly bold: 700;
};
declare const lineHeight: {
    readonly tight: 1.25;
    readonly snug: 1.375;
    readonly normal: 1.5;
    readonly relaxed: 1.625;
};
declare const letterSpacing: {
    readonly tight: "-0.025em";
    readonly normal: "0em";
    readonly wide: "0.025em";
    readonly wider: "0.05em";
    readonly widest: "0.1em";
};

/**
 * Design Tokens — Shape (Border Radius & Shadows)
 */
declare const borderRadius: {
    readonly none: "0px";
    readonly sm: "4px";
    readonly md: "8px";
    readonly lg: "12px";
    readonly xl: "16px";
    readonly full: "9999px";
};
declare const shadow: {
    readonly none: "none";
    readonly sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
    readonly md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
    readonly lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
    readonly xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
};

export { type SpacingKey, borderRadius, colorBackground, colorError, colorForeground, colorNeutral, colorPrimary, colorSemantic, colorSuccess, colorSupporting, colorWarning, fontFamily, fontSize, fontWeight, letterSpacing, lineHeight, shadow, spacing, spacingBase };

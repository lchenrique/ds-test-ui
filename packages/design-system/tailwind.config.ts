import {
  colors,
  createThemes,
  fontSizes,
  fontWeights,
  lineHeights,
  padding,
  radii,
  screens,
  spacing,
  themeAdopets,
  themeB2C,
  themePetLoyalty,
} from "@adopets/tokens";

const plugin = require("tailwindcss/plugin");

export default {
  darkMode: ["class"],
  important: true,
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      screens: {
        ...screens,
      },
      padding: {
        ...padding,
        ...spacing,
      },
      margin: {
        ...spacing,
      },
      fontFamily: {
        body: ["inter", "sans-serif"],
        sans: ["inter", "sans-serif"],
      },
      gap: { ...spacing, ...padding },
      fontSize: { ...fontSizes },
      fontWeight: { ...fontWeights },
      lineHeight: { ...lineHeights },
      borderRadius: { ...radii },
      height: { ...spacing, ...padding },
      width: { ...spacing, ...padding },
      radii: radii,
      animation: {
        rotate: "rotate 700ms infinite linear",
      },
      keyframes: {
        rotate: {
          "0%": {
            "-webkit-transform": "rotate(0deg)",
            transform: "rotate(0deg)",
          },
          "100%": {
            "-webkit-transform": "rotate(360deg)",
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [
    createThemes(
      {
        adopets: {
          ...themeAdopets,
        },
        ["pet-loyalty"]: {
          ...themePetLoyalty,
        },
        b2c: {
          ...themeB2C,
        },
      },
      {
        defaultTheme: "adopets",
        defaultColors: { ...colors },
      },
    ),
    require("tailwindcss-animate"),
    plugin(function ({ addBase, addComponents, addUtilities, theme }: any) {
      addComponents({
        ".btn-primary": {},
        ".ado-avatar": {},
        ".ado-avatar-size-md": {},
        ".ado-avatar-size-xs": {},
        ".ado-avatar-size-sm": {},
        ".ado-avatar-size-lg": {},
        ".ado-avatar-size-xlg": {},
        ".loader,\n.loader:after": { borderRadius: "50%" },
        ".loader": {
          top: "0",
          bottom: "0",
          right: "0",
          left: "0",
          position: "absolute",
          borderTop: "2px solid white",
          borderRight: "2px solid rgba(171, 167, 180, 0.5)",
          borderBottom: "2px solid rgba(171, 167, 180, 0.5)",
          borderLeft: "2px solid rgba(171, 167, 180, 0.5)",
          WebkitTransform: "translateZ(0)",
          msTransform: "translateZ(0)",
          transform: "translateZ(0)",
        },
      });
    }),
  ],
};

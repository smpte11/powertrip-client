// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    extend: {
      colors: {
        orange: {
          900: "#ef8b34",
          800: "#f6b143",
          700: "#f9c84c",
          600: "#fcdf55",
          500: "#f5e852",
          400: "#f8ed6a",
          300: "#faf284",
          200: "#fcf6a6",
          100: "#fdfaca",
          50: "#fffeea",
        },
        cyan: {
          900: "#087168",
          800: "#009692",
          700: "#00aaa9",
          600: "#00c1c3",
          500: "#00d2d5",
          400: "#20d9d8",
          300: "#4ae1de",
          200: "#80ebe6",
          100: "#b3f3ee",
          50: "#e0faf8",
        },
      },
      backgroundColor: (theme) => ({
        primary: theme("colors.cyan.500"),
        secondary: theme("colors.orange.500"),
      }),
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
        "10xl": "8rem",
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        h1: { fontSize: config("theme.fontSize.2xl") },
        h2: { fontSize: config("theme.fontSize.xl") },
        h3: { fontSize: config("theme.fontSize.lg") },
        h4: { fontSize: config("theme.fontSize.base") },
        h5: { fontSize: config("theme.fontSize.sm") },
        h6: { fontSize: config("theme.fontSize.xs") },
      });
    }),
  ],
};

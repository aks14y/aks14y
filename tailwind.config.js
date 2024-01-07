import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "false",
  plugins: [
    nextui({
      themes: {
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: "#ccf381",
            secondary: "#a3a3a3",
            purple: "#3f3d56",
            white: "#ffffff",
            black: "#000000",
          }, // dark theme colors
        },
      },
    }),
  ],
};

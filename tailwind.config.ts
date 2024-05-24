import type { Config } from "tailwindcss";
import colorsTheme from "./src/data/colorsTheme.json";
import daisyui from "daisyui";

let themes: any = [
  {
    custom: colorsTheme,
  },
];

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes,
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: ".5rem",
          md: "1.5rem",
          "2xl": "5rem",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["var(--sectra-font)"],
      },
      fontSize: {
        xs: ["11px", "14px"],
        sm: ["14px", "20px"],
        base: ["16px", "22px"],
        md: ["21px", "30px"],
        lg: ["28px", "34px"],
        xl: ["38px", "40px"],
        "2xl": ["50px", "58px"],
        "3xl": ["67px", "75px"],
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [daisyui],
};
export default config;

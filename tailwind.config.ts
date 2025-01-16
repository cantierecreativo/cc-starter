import type { Config } from "tailwindcss";
// import colorsTheme from "./src/data/colorsTheme.json";
// import daisyui from "daisyui";

// let themes: any = [
//   {
//     custom: colorsTheme,
//   },
// ];

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // daisyui: {
  //   themes,
  // },
  theme: {
    extend: {
      colors: {
        primary: "#f0eade",
        "primary-content": "#262626",
        secondary: "#ffffff",
        "secondary-content": "#262626",
        accent: "#ff6b42",
        "accent-100": "#FF5D30",
        "accent-content": "#262626",
        neutral: "#ccebcf",
        "neutral-100": "#acdcb1",
        "neutral-content": "#262626",
        "base-100": "#f0eade",
        "base-200": "#d2be9f",
        "base-300": "#bf9f78",
        "base-400": "#a57651",
        "base-content": "#262626",
        info: "#66c6ff",
        "info-100": "#F03200",
        "info-content": "#262626",
        success: "#FFB7A4",
        "success-100": "#FF5D30",
        "success-content": "#262626",
        warning: "#FDF8DD",
        "warning-100": "#FFE98A",
        "warning-content": "#262626",
        error: "#B3D1DB",
        "error-100": "#0081AC",
        "error-content": "#262626",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          "2xl": "5rem",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["var(--sectra-font)"],
      },
      fontSize: {
        xs: ["12px", "14px"],
        sm: ["14px", "20px"],
        base: ["16px", "22px"],
        md: ["18px", "30px"],
        lg: ["24px", "34px"],
        xl: ["28px", "40px"],
        "2xl": ["38px", "46px"],
        "3xl": ["50px", "60px"],
        "4xl": ["67px", "75px"],
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  // plugins: [daisyui],
};
export default config;

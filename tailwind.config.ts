import type { Config } from "tailwindcss";

// import themes from "./src/data/themes.json";
import customTheme from "./src/data/customTheme.json";
import themeConfig from "./src/data/themeConfig.json";
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

let themes: any = [
  {
    custom: customTheme,
  },
];
// if (themeConfig?.theme !== "custom") {
//   themes.push(`${themeConfig.theme || ""}`);
// }
themes.push(`${themeConfig.theme}`);

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
    },
  },
  plugins: [typography, daisyui],
};
export default config;

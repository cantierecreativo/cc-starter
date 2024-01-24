import themes from "./src/data/themes.json";
import customTheme from "./src/data/customTheme.json";

import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [{ custom: customTheme }, ...themes],
  },
  plugins: [typography, daisyui],
};
export default config;

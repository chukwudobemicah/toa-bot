import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "500px",
        mdx: "900px",
        lgx: "1100px",
        "3xl": "1700px",
        "4xl": "1900px",
      },
      colors: {
        primary: "#3474F4",
        background: "#000000",
        foreground: "#101217",
        secondary: "#101217",
        border: "#262626",
        "text-secondary": "#B1B9C4",
      },
      fontFamily: {
        "segeo-ui": ["var(--segoe-ui)"],
        "segoe-ui-symbol": ["var(--segoe-ui-symbol)"],
        quicksand: ["var(--quicksand)"],
      },
    },
  },
  plugins: [],
};
export default config;

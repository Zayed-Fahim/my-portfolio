import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        purple: "#CBACF9",
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-color": "#33E092",
        "secondary-color": "#0CCE6B",
        "tertiary-color": "#16a34a",
        "primary-bg": "rgba(39, 39, 43, 0.4)",
        "secondary-bg": "rgba(250, 250, 250, 0.4)",
      },
      fontFamily: {
        incognito: ["var(--incognito)"],
        inter: ["var(--inter)"],
      },
      boxShadow: {
        "line-light": "rgba(17, 17, 26, 0.1) 0px 1px 0px",
        "line-dark": "rgb(29, 29, 32) 0px 1px 0px",
      },
      gridTemplateColumns: {
        custom: "1.2fr 1fr",
      },
      gridTemplateRows: {
        fit: "min-content 0fr",
        full: "min-content 1fr",
      },
      backgroundImage: {
        noise:
          "url('https://res.cloudinary.com/victoreke/image/upload/v1691779257/victoreke/noise.png')",
      },
      backgroundPosition: {
        zero: "0 0",
      },
      keyframes: {
        skeletonload: {
          "100%": { "background-position": "-100% 0" },
        },
      },
      animation: {
        "skeleton-load": "skeletonload 2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;

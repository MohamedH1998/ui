import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#366B45",
      },
      dropShadow: {
        "4xl": [
          "1px 1px 0 rgba(0, 0, 0, 0.12)",
          "0 1px 3px rgba(0, 0, 0, 0.08)",
          "12px 13px -6px rgba(0, 0, 0, 0.3)",
          "4px 16px 4px rgba(0, 0, 0, 0.2)",
        ],
        "5xl": [
          "inset 0 2px 4px 0 rgba(0, 0, 0, 0.30)",
          "inset 0 8px 5px 0 rgba(0, 0, 0, 0.10)",
        ],
      },
      boxShadow: {
        "inner-md": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.30)",
        "inner-lg": "inset 0 1px 5px 0 rgba(0, 0, 0, 0.14)",
        "inner-2xl": "inset 0 8px 5px 0 rgba(0, 0, 0, 0.10)",
        dance:
          "0 0 1px 1px rgba(0,0,0,0.12), 0 0 1px 3px rgba(0,0,0,0.08), 0 12px 13px -6px rgba(0,0,0,0.30), 0 4px 16px 4px rgba(0,0,0,0.20)",
        inset:
          "0 2px 2px 1px rgba(255, 255, 255, 0.8), 0 1px 5px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;

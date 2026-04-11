import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0D1B2A",
        "navy-mid": "#1A2E45",
        brass: "#B5975A",
        "brass-light": "#D4B47A",
        "warm-white": "#F8F5F0",
        paper: "#EDE9E3",
        ink: "#1A2332",
        "ink-muted": "#5C6B7A",
        border: "#DDD8D0",
        "border-dark": "#2A3A4E",
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      boxShadow: {
        panel: "0 8px 32px rgba(0,0,0,0.3)",
      },
      maxWidth: {
        shell: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;

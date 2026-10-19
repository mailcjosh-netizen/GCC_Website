import type { Config } from "tailwindcss";

// GCC "Pine & Mist" tokens
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: { DEFAULT: "#173A2E", deep: "#0F2A21", soft: "#2C5545" },
        mist: { DEFAULT: "#E6ECEE", light: "#F3F6F7", dark: "#C9D4D8" },
        slate: { DEFAULT: "#3E5C76", soft: "#6B8BA4" },
        gold: { DEFAULT: "#C8A24A", soft: "#E4CC8C" },
        ink: "#1B1F24",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"Source Sans 3"', '"Noto Sans Devanagari"', "system-ui", "sans-serif"],
      },
      maxWidth: { prose: "68ch" },
    },
  },
  plugins: [],
};
export default config;

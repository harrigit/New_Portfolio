import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#0F1724",
        secondary: "#905DD0",
        accent: "#24A2C8",
      },
    },
  },
  plugins: [],
};
export default config;

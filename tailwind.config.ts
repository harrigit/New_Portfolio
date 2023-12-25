// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      boxShadow: {
        default: "0px 4px 12px rgba(0, 0, 0, 0.08)",
        focus: "0px 0px 0px 4px rgba(251, 216, 157, 0.8)",
      },
      fontSize: {
        "xs-10": ["0.625rem", "0.875rem"],
        sm: ["0.875rem", "1rem"],
      },
      spacing: {
        unset: "unset",
        4.5: "1.125rem",
        5.5: "1.375rem",
        7.5: "1.875rem",
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          transparent: "transparent",
          current: "currentColor",
          primary: "#0F1724",
          secondary: "#905DD0",
          accent: "#24A2C8",
          "base-content": "#FFFFFF",
        },
        light: {
          primary: "#DCD7C9",
          secondary: "#6B240C",
          accent: "#A27B5C",
          background: "#DCD7C9",
          "base-content": "#3F4E4F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

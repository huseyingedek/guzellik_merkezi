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
        sans: ["var(--font-inter)"],
        display: ["var(--font-playfair)"],
      },
      colors: {
        gold: {
          50:  "#FAF6EE",
          100: "#F5EDDB",
          200: "#ECD9B4",
          300: "#E2C68D",
          400: "#D8B266",
          500: "#C9A84C",
          600: "#A8893A",
          700: "#866B2D",
          800: "#634E20",
          900: "#413114",
        },
        cream: {
          50:  "#FFFEF9",
          100: "#FAF7F0",
          200: "#F5EEE0",
          300: "#EDE0C8",
        },
        luxury: {
          900: "#0C0B08",
          800: "#16140F",
          700: "#221E13",
          600: "#2E2918",
        },
        beauty: {
          50:  "#F5F5F6",
          100: "#EAEBED",
          200: "#D5D6DB",
          300: "#C0C2C9",
          400: "#AAACB8",
          500: "#9597A6",
          600: "#777A8C",
          700: "#5A5D6D",
          800: "#3C3F4E",
          900: "#1F212F",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in":  "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "shimmer":  "shimmer 2.5s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        gold:    "0 4px 24px rgba(201,168,76,0.25)",
        "gold-lg": "0 8px 40px rgba(201,168,76,0.35)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
    },
  },
  plugins: [],
};
export default config;

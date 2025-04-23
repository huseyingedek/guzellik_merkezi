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
        sans: ['var(--font-inter)'],
        display: ['var(--font-playfair)'],
      },
      colors: {
        gold: {
          50: '#FDF7E4',
          100: '#FCF0C8',
          200: '#F8E191',
          300: '#F5D15A',
          400: '#F2C223',
          500: '#D9A50D',
          600: '#B38A0A',
          700: '#8C6E08',
          800: '#665105',
          900: '#3F3503',
        },
        beauty: {
          50: '#F5F5F6',
          100: '#EAEBED',
          200: '#D5D6DB',
          300: '#C0C2C9',
          400: '#AAACB8',
          500: '#9597A6',
          600: '#777A8C',
          700: '#5A5D6D',
          800: '#3C3F4E',
          900: '#1F212F',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'float-delay': 'float 10s ease-in-out 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;

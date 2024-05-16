import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          10: 'hsl(158, 36%, 37%)',
          11: 'hsl(158, 36%, 17%)',
          20: 'hsl(30, 38%, 92%)'
        },
        neutral: {
          10: 'hsl(212, 21%, 14%)',
          20: 'hsl(228, 12%, 48%)',
        }
      }
    },
  },
  plugins: [],
};
export default config;

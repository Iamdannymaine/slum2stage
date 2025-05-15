import type { Config } from "tailwindcss";
const { heroui } = require("@heroui/react");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        primary_hover: "var(--primary-hover)",
        snow_white: "var(--primary-snow-white)",
        smoke_white: "var(--primary-smoke-white)",
        slum_peach: "var(--primary-peach)",
        slum_light_peach: "var(--primary-light-peach)",
        slum_gray_200: "var(--primary-gray-200)",
        slum_gray_300: "var(--primary-gray-300)",
        slum_gray_400: "var(--primary-gray-400)",
        slum_gray_600: "var(--primary-gray-600)",
        slum_gray_700: "var(--primary-gray-700)",
        slum_gray_800: "var(--primary-gray-800)",
        slum_gray_900: "var(--primary-gray-900)",
        slum_magenta: "var(--primary-magenta)",
        slum_pink: "var(--primary-pink)",
        slum_orange: "var(--primary-orange)",
        primary_border: "var(--primary-border)",
        bullet_inactive: "var(--bullet-inactive)",

        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        serif: ["var(--font-libre-baskerville)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), heroui()],
};
export default config;

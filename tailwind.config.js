/** @type {import('tailwindcss').Config} */

import fluid, { extract, screens, fontSize } from "fluid-tailwind";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: {
    files: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        "hero-background": "url('@/assets/images/homepage-bg.jpg')",
      },
      fontFamily: {
        playfairFont: ["Playfair Display", "serif"],
      },
      colors: {
        primary: {
          light: '#6366F1',
          DEFAULT: '#4F46E5',
          dark: '#4338CA',
        },
        secondary: {
          light: '#F472B6',
          DEFAULT: '#D946EF',
          dark: '#C026D3',
        },
        background: {
          light: '#F9FAFB',
          dark: '#1F2937',
        },
        text: {
          light: '#111827',
          dark: '#E5E7EB',
        },
        link: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
        },
        accent: {
          success: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444',
        },
      },
    },
  },
  plugins: [
    animate,
    fluid,
  ],
};

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
        "jujustu-city-background": "url('@/assets/images/jujustu-city.jpg')",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // For body text
        header: ['Bebas Neue', 'sans-serif'], // For headers
      },
      colors: {
        // Light Mode (Gojo Palette)
        primary: { 
          DEFAULT: '#5EBFFF', // Electric blue (Gojo's signature color)
          light: '#A9D8FF',   // Sky blue (soft glow effect)
        },
        accent: {
          DEFAULT: '#4CAF50', // Neon green (optional cursed energy)
          light: '#81C784',   // Lighter green
        },
        foreground: '#1E1E1E', // Dark gray for text

        // Dark Mode (Sukuna Palette)
        'dark-primary': {
          DEFAULT: '#FF3A3E', // Deep red (Sukuna's energy color)
          dark: '#BF2025',    // Blood red
        },
        'dark-accent': {
          DEFAULT: '#FF9100', // Bright orange for accents
          dark: '#FF6D00',    // Fiery orange
        },
        'dark-foreground': '#E0E0E0', // Light gray for text
      },
    },
  },
  plugins: [
    animate,
    fluid,
  ],
};

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
          DEFAULT: '#0091EA', // Electric blue (Gojo's signature color)
          light: '#4FC3F7',   // Sky blue (soft glow effect)
        },
        secondary: {
          DEFAULT: '#8E44AD', // Subtle purple for contrast
          light: '#D6BBFC',   // Lavender
        },
        accent: {
          DEFAULT: '#4CAF50', // Neon green (optional cursed energy)
          light: '#81C784',   // Lighter green
        },
        background: '#F0F8FF', // Soft azure (inspired by Gojo’s infinity)
        foreground: '#1E1E1E', // Dark gray for text
        card: '#FFFFFF',       // White card background
        muted: '#9E9E9E',      // Gray for secondary text

        // Dark Mode (Sukuna Palette)
        'dark-primary': {
          DEFAULT: '#FF3A3E', // Deep red (Sukuna's energy color)
          dark: '#BF2025',    // Blood red
        },
        'dark-secondary': {
          DEFAULT: '#7C4DFF', // Cursed purple
          dark: '#6200EA',    // Deep violet
        },
        'dark-accent': {
          DEFAULT: '#FF9100', // Bright orange for accents
          dark: '#FF6D00',    // Fiery orange
        },
        'dark-background': '#1A1A1A', // Almost black
        'dark-foreground': '#E0E0E0', // Light gray for text
        'dark-card': '#252525',       // Dark gray card background
        'dark-muted': '#757575',      // Muted gray for secondary text
      },
    },
  },
  plugins: [
    animate,
    fluid,
  ],
};

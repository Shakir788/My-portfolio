import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F19", // Deep premium dark background
        foreground: "#D7E2EA", // Soft off-white for expensive readability
        accent: {
          blue: "#38BDF8", // Cyan/Blue accent for buttons and glows
          glow: "rgba(56, 189, 248, 0.5)",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'premium-gradient': 'linear-gradient(123deg, #18011F 7%, #0B0F19 100%)',
      }
    },
  },
  plugins: [],
};

export default config;
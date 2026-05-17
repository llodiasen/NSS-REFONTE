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
        primary: {
          900: "#1B4332",
          700: "#2D6A4F",
          500: "#40916C",
          300: "#74C69D",
          100: "#D8F3DC",
          50: "#F0FFF4",
        },
        earth: {
          700: "#A0522D",
          500: "#CD853F",
          300: "#DEB887",
          100: "#FFF5E6",
        },
        neutral: {
          950: "#0A0A0A",
          800: "#1F1F1F",
          600: "#4A4A4A",
          200: "#E5E5E5",
          100: "#F5F5F5",
          50: "#FAFAFA",
        },
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
        foreground: "#2A2A2A",
        nss: {
          nuit:        "#0C3D2A",
          principal:   "#1D9E75",
          moyen:       "#0F6E56",
          clair:       "#EAF3DE",
          "clair-txt": "#3B6D11",
          accent:      "#5DCAA5",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        body:    ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

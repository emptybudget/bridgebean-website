import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFBF6",
          100: "#FAF6EE",
          200: "#F3ECDC",
          300: "#E9DEC4",
        },
        sage: {
          50: "#F2F7F3",
          100: "#E2EEE5",
          200: "#C4DDCA",
          300: "#A3C9AC",
          400: "#86B79A",
          500: "#6BA284",
          600: "#558568",
          700: "#456B54",
          800: "#385445",
          900: "#2E4438",
        },
        ink: {
          DEFAULT: "#2A2A2A",
          soft: "#4B4B4B",
          muted: "#7A7A7A",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "var(--font-noto-serif-kr)", "serif"],
        sans: ["var(--font-noto-serif-kr)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;

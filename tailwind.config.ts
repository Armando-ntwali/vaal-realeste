import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vaal: {
          black: "var(--vaal-black)",
          near: "var(--vaal-near-black)",
          charcoal: "var(--vaal-charcoal)",
          ivory: "var(--vaal-ivory)",
          yellow: "var(--vaal-yellow)",
          gold: "var(--vaal-gold)"
        },
        cadenza: {
          charcoal: "var(--cadenza-charcoal)",
          champagne: "var(--cadenza-champagne)",
          bronze: "var(--cadenza-bronze)",
          stone: "var(--cadenza-stone)",
          cream: "var(--cadenza-cream)",
          green: "var(--cadenza-muted-green)"
        },
        bridge: {
          dark: "var(--bridge-plum-dark)",
          plum: "var(--bridge-plum)",
          burgundy: "var(--bridge-burgundy)",
          wine: "var(--bridge-wine)",
          black: "var(--bridge-black)"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "Avenir", "Helvetica", "Arial", "sans-serif"]
      },
      boxShadow: {
        image: "0 18px 50px rgba(3, 3, 3, 0.22)"
      },
      transitionTimingFunction: {
        vaal: "cubic-bezier(0.23, 1, 0.32, 1)"
      }
    }
  },
  plugins: []
};

export default config;

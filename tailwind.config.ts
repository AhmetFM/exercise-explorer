import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "background-light": "url('/photo-light.jpg')",
        "background-dark": "url('/photo-dark.jpg')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-out-and-in": {
          "0%": { opacity: "1", scale: "1" },
          "20%": { opacity: "0", scale: ".5" },
          "70%": { opacity: "0", scale: ".5" },
          "100%": { opacity: "1", scale: "1" },
        },
        "fade-in-and-out": {
          "0%": { opacity: "0", scale: ".5" },
          "20%": { opacity: "0", scale: ".5" },
          "40%": { opacity: "1", scale: "1" },
          "70%": { opacity: "1", scale: "1" },
          "90%": { opacity: "0", scale: ".5" },
          "100%": { opacity: "0", scale: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-and-out": "fade-in-and-out 4.1s linear",
        "fade-out-and-in": "fade-out-and-in 4s linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

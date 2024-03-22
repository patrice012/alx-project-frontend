import type { Config } from "tailwindcss"

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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      // colors: {
      //   kalami: {
      //     dark: "#000000",
      //     yellow: "#FEC204",
      //     "gray-light": "#a5b4cb",
      //     "icon-gray": "#9CA3AF",
      //     green: "#1c9368",
      //     white: "#ffffff",
      //     bg: "#FBFAF8",
      //     "border-gray": "#D1D5DB",
      //     "main-blue": "#1F2937",
      //     blue: "#4284F4",
      //     red: "#FF0000",
      //     "bg-gray": "#F3F4F6",
      //   },

      //   "kalami-dark": {
      //     "icon-gray": "#9CA3AF",
      //     "border-gray": "#374151",
      //     "main-blue": "#1F2937",
      //     "white-100": "#E5E7EB",
      //     "gray-400": "#9CA3AF",
      //     "gray-800": "#1F2937",
      //     "gray-850": "#1f293787",
      //     "gray-900": "#111928",
      //     "gray-300": "#D1D5DB",
      //   },
      // },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config
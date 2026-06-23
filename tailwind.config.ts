import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#20181A",
        wine: "#7A2032",
        berry: "#A33B52",
        linen: "#F7F0E8",
        fog: "#F4F4F2",
        mist: "#D9D5D0",
        sage: "#77856E",
        blush: "#E9C9CC"
      },
      fontFamily: {
        heading: ["Montserrat", "Arial", "sans-serif"],
        body: ["Poppins", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(32, 24, 26, 0.12)",
        glow: "0 18px 48px rgba(122, 32, 50, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#24191C",
        wine: "#711D34",
        berry: "#9B3851",
        linen: "#F6F0EC",
        fog: "#F5F5F3",
        mist: "#D9D5D0",
        sage: "#687665",
        blush: "#F0CBD2"
      },
      fontFamily: {
        heading: ["Iowan Old Style", "Palatino Linotype", "Georgia", "serif"],
        body: ["Aptos", "Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(36, 25, 28, 0.1)",
        glow: "0 18px 48px rgba(113, 29, 52, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;

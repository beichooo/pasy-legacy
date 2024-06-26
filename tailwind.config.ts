import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        fredoka: ["var(--font-fredoka)"],
        rubik: ["var(--font-rubik)"],
      },
      colors: {
        "pasy-brown-bg": "#FFF6EB",
        "pasy-brown-bg-second": "#FADEBD",
        "pasy-brown-text": "#D37E17",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;

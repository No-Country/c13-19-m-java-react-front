import type { Config } from "tailwindcss";
import daisyUIPlugin from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sansita: "var(--font-sansita)",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            transform: "translateY(-50%)",
        },
        "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
      },
    },
  },
};
export default config;

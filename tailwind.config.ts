/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type Config } from "tailwindcss";
import { theme } from "./node_modules/@sanity/demo";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    ...theme,
    fontFamily: {
      mono: "var(--font-mono)",
      sans: "var(--font-sans)",
      serif: "var(--font-serif)",
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

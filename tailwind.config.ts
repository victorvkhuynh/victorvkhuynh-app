import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      basic: "#222831",
      accent: "#31363F",
      contrast: "#76ABAE",
      lightercontrast: "#BFDCDE",
      light: "#EEEEEE",
      error: "#ef4444",
      progress: "#eab308",
      success: "#22c55e",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;

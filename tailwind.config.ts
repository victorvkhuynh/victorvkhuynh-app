import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      primarydark: "#051923",
      secondarydark: "#003554",
      accent: "#006494",
      secondarylight: "#0582CA",
      primarylight: "#00A6FB",
      primarylighter: "#caf0f8",
      error: "#ef4444",
      progress: "#eab308",
      success: "#22c55e",
      diceLight: "#FFF2D8",
      diceMedium: "#EAD7BB",
      diceMediumDark: "#BCA37F",
      diceDark: "#113946",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;

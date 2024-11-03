import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "scouting-tan": "hsl(var(--tan))",
        "scouting-red": "hsl(var(--red))",
        "scouting-olive": "hsl(var(--olive))",
        "scouting-blue": "hsl(var(--blue))",
        "scouting-warm-gray": "hsl(var(--warm-gray))",
        "scouting-white": "hsl(var(--white))",
      },
      fontFamily: {
        main: ["Roboto Condensed Variable", ...defaultTheme.fontFamily.sans],
        heading: ["Roboto Slab Variable ", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};

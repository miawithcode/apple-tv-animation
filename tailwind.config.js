/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#000",
      backgroundContrast: "#111",
      black: "#1d1d1f",
      white: "#fff",
      gray: "#f5f5f7",
      link: "2997ff",
    },
    fontFamily: {
      sans: [
        "SF Pro Display",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1.0635rem", // 17px
      lg: ["1.1875rem", "1.21"], // 19px
      xl: "1.3125rem", // 21px
      "2xl": "1.5rem", // 24px
      "3xl": "1.75rem", // 28px
      "4xl": ["2.5rem", "1.1"], // 40px
      "5xl": ["4rem", "1.0625"], // 64px
      "6xl": ["4.5rem", "1.05"], // 72px
      "7xl": ["6rem", "1.04"], // 96
    },
    keyframes: {
      "carousel-move-left": {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-100%)" },
      },
      "carousel-move-right": {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(100%)" },
      },
    },
    animation: {
      "carousel-move-left": "carousel-move-left var(--duration, 80s) infinite",
      "carousel-move-right":
        "carousel-move-right var(--duration, 80s) infinite",
    },
    extend: {},
  },
  plugins: [],
};

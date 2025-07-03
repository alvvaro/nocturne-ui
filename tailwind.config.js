/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter Variable",
          "Noto Sans SC Variable",
          "Noto Sans TC Variable",
          "Noto Serif JP Variable",
          "Noto Sans KR Variable",
          "Noto Naskh Arabic Variable",
          "Noto Sans Devanagari Variable",
          "Noto Sans Bengali Variable",
          "Noto Sans Hebrew Variable",
          "Noto Sans Tamil Variable",
          "Noto Sans Thai Variable",
          "Noto Sans Gurmukhi Variable",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

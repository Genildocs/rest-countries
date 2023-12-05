/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,cjs,mjs}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        DarkBlue: "#2b3945",
        VeryDarkBlue: "#202c37",
        LightModeText: "#111517",
        DarkGray: "#858585",
        VeryLightGray: "#fafafa",
        whiteText: "#ffffff",
        Bluehover: '#066bc0',
      },
    },
  },
  plugins: [],
};

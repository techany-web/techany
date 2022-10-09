/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Atoms/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Molecules/**/*.{js,ts,jsx,tsx}",
    "./Organisms/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        techany: {
          50: "#d9d9de",
          100: "#b3b3be",
          200: "#8c8e9d",
          300: "#66687d",
          400: "#40425c",
          500: "#303245",
          600: "#20212e",
          700: "#101017",
          800: "#191a2a",
          900: "#000000",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

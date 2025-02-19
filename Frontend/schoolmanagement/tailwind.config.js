/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF8559",
        secondary: "#FFB578",
        danger: "#E65447",
        accent: "#CF5376",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};


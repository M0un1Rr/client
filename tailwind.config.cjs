/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/components/mainContent/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        green_hues: {
          700: "#5dbea3",
          600: "#33b249",
          500: "#5adbb5",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        heebo: [' "Heebo", sans-serif'],
      },
      screens: {
        sm: "375px",
        x: "1152px",
      },
    },
  },
  plugins: [],
};

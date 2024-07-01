/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundPosition: {
        "right-4": "right 1rem", // Adjust this value as needed
        "right-8": "right 2rem", // Adjust this value as needed
        "right-32": "right 8rem", // Adjust this value as needed
        "left-12": "left 3rem", // Adjust this value as needed
      },
      colors: {
        primary: "rgb(55 65 81)", // Equivalent to --primary
        secondary: "rgb(120 113 108)", // Equivalent to --secondary
        detail: "white", // Equivalent to --detail
        transparent: "rgba(255, 255, 255, 0.1)", // Equivalent to --transparent
      },
      screens: {
        xs: "475px", // Custom screen size for 'xs'
        xxs: "376px",
      },
      fontSize: {
        xs: "9px", // Custom font size for 'xs'
      },
    },
  },
  plugins: [],
};

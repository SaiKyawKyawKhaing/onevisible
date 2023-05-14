/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        rem36: "26rem",
        vh70: "70vh",
        vh50: "50vh",
        vh60: "60vh",
        vh100: "100vh",
      },
      width: {
        vw112: "112vw",
      },
      colors: {
        cskyblue: "#2DC4EA",
        ccyan: "#3AE7AB",
      },
    },
    zIndex: {
      lowz: -1,
      heigh: 99999,
      // Add more custom values as needed
    },
  },
  variants: {
    extend: {
      height: ["responsive"], // Enable responsive behavior for the custom height class
    },
  },
  plugins: [],
};

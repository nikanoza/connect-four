/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#000000",
        "dark-violet": "#5C2DD5",
        "semi-violet": "#7945FF",
        pink: "#FD6687",
        yellow: "#FFCE67",
        light: "#ffffff",
      },
      boxShadow: {
        "panel-shadow": "0px 10px 0px 0px #000",
        "hover-shadow": "0px 10px 0px 0px #5C2DD5",
        "circle-shadow": "inset 0 5px 5px #000",
      },
      width: {
        85: "21.25rem",
        27: "6.75rem",
        35: "8.875rem",
        8.5: "2.125rem",
      },
      height: {
        85: "21.25rem",
        27: "6.75rem",
        35: "8.875rem",
        8.5: "2.125rem",
      },
    },
  },
  plugins: [],
};

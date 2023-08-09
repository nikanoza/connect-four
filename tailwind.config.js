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
    },
  },
  plugins: [],
};

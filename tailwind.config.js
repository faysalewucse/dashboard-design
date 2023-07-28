/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C579B",
        light: "#E7EEF5",
        body: "#EFF4FA",
        side: "#CED5DA",
        formText: "#2D3E4D",
        darkGray: "#556571",
        success: "#23B574",
        successHover: "#1c915d",
      },
    },
  },
  plugins: [],
};

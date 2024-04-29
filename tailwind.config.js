/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#ff4838",
        "color-secondary": "#2d373c",
        "color-opacity": "#666",
        "color-sd": "#454545",
      },
    },
  },
  themes: ["light", "dark"],
  plugins: [require("daisyui")],
};

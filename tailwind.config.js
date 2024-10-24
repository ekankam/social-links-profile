/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cc-grey": {
          900: "#141414",
          800: "#1F1F1F",
          700: "#333333",
        },
        "cc-green": "#C4F82A",
      },
    },
  },
  plugins: [],
};

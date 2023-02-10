/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transform: {
        "scale-125": "scale(1.1)",
      },
    },
  },
  plugins: [require("daisyui")],
};

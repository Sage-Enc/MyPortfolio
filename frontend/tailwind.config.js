/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SourceCodePro: ["Source Code Pro", "monospace"]
      },
      width:{
        '90':'90%',
        '80':'80%',
        '70':'70%',
        '60':'60%',
      }
    },
  },
  plugins: [],
}
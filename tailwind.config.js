/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#FF3811',
        white: '#fff',
        sub: '#151515',
        black: '#000',
        gray: '#737373'
      }
    },
  },
  plugins: [require("daisyui")],
}
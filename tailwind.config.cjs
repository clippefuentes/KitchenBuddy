/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // 'node_modules/daisyui/dist/**/*.js', 
    // 'node_modules/react-daisyui/dist/**/*.js',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require('daisyui')],
  theme: {
    extend: {},
  },
}
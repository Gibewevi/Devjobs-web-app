/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-mobile': "url('./assets/mobile/bg-pattern-header.svg')",
      }
    },
  },
  plugins: [],
}

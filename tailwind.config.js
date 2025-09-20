/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        helvetica: ['Heletica','Arial','Sans-serif'],
        roboto: ["Roboto", "sans-serif"],
        sans: ["var(--font-roboto)", "sans-serif"],
      }
    },
  },
  plugins: [],
}
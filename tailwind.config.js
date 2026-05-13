/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#C89B3C', light: '#D4AF5A', dark: '#A07828', pale: '#F0DFA0' },
        bk:   '#0B0B0B',
        dk:   '#0D0A07',
        card: '#0F0F0F',
        card2:'#141414',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter:  ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

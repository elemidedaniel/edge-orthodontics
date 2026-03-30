/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy:  '#0b1624',
        navy2: '#122033',
        navy3: '#1a2d45',
        gold:  '#d3b966',
        gold2: '#e8d48a',
        gold3: '#b89a40',
        cream: '#faf8f3',
        sand:  '#f0ece0',
        muted: '#8a9ab0',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        label:   ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:    '#2196F3',
          deep:    '#1565C0',
          indigo:  '#3F51B5',
          dark:    '#1A1A2E',
          gray:    '#5C6370',
          light:   '#F4F7FC',
          tint:    '#E8F1FC',
          border:  '#DDE6F5',
        },
        accent: '#FF5C7A',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2196F3 0%, #3F51B5 50%, #1565C0 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(33,150,243,0.12) 0%, rgba(63,81,181,0.08) 100%)',
      },
      boxShadow: {
        'brand': '0 4px 14px rgba(33, 150, 243, 0.35)',
        'brand-lg': '0 8px 32px rgba(21, 101, 192, 0.15)',
        'card': '0 4px 24px rgba(21, 101, 192, 0.07)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}

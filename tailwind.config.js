/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Jacques Francois"'],
        inter: ['"Inter"']
      },
      width: {
        '90vw': '90vw',
        94: '94vw'
      },
      animation: {
        scroll: 'scroll 40s linear infinite'
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-94vw * 5))' }
        }
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        gray_100: 'var(--clr_gray_100)',
        gray_200: 'var(--clr_gray_200)',
        gray_300: 'var(--clr_gray_300)',
        gray_400: 'var(--clr_gray_400)',
        gray_500: 'var(--clr_gray_500)',
        gray_600: 'var(--clr_gray_600)',
        gray_700: 'var(--clr_gray_700)',
        gray_800: 'var(--clr_gray_800)',
        gray_900: 'var(--clr_gray_900)',
        gray_1000: 'var(--clr_gray_1000)',
      },
      fontFamily: {
        font_body: ['var(--primary_font_family)']
      }
    },
  },
  plugins: [],
}


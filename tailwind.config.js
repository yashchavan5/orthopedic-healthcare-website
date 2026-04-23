/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        meddical: {
          navy: '#1F2B6C',
          lightBlue: '#BFD2F8',
          accentBlue: '#159EEC',
          offWhite: '#F7F8FA',
          textDark: '#212121'
        }
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        serif: ['Yeseva One', 'serif'],
      }
    },
  },
  plugins: [],
}

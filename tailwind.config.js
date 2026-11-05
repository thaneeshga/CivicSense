/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        citizen: {
          teal: '#0D828A',
          'teal-dark': '#075A60',
          'teal-light': '#E6F4F5',
          amber: '#F5A524',
          green: '#2E9E5B',
          coral: '#E5484D',
          bg: '#F7F9F9',
        },
        navy: {
          950: '#0A1424',
          900: '#0F2B5C',
          800: '#15397A',
          700: '#1E3A8A',
          600: '#2563EB',
          500: '#3B82F6',
          100: '#EBF2FF',
          50: '#F0F5FF',
        }
      }
    },
  },
  plugins: [],
}

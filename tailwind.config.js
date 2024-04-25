/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        reveal: 'reveal 1s linear infinite'
      },
      keyframes: {
        reveal: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        }
      }
    }
    },
  plugins: [],
}


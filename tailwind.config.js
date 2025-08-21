module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {keyframes: {
        'spin-slow': { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } },
        'slow-spin': { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(-360deg)' } },
      },
      animation: {
        'spin-slow': 'spin-slow 60s linear infinite',
        'slow-spin': 'slow-spin 90s linear infinite',
      },},
  },
  plugins: [require('@tailwindcss/forms')],
}
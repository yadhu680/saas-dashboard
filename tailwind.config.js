/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // for Next.js app directory
    './pages/**/*.{js,ts,jsx,tsx}', // if using pages directory
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#6366F1',
        accent: '#FBBF24',
      },
    },
  },
  plugins: [],
};

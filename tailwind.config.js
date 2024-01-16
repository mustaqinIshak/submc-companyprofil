/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
],
  theme: {
    extend: {
      zIndex: {
        '3000': '3000',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}


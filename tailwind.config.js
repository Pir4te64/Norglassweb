// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx,html}'
    ],
    theme: {
      extend: {
        colors: {
          primary: '#38B6FF',
          secondary: '#2F6BC6',
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        },
      },
    },
    plugins: [],
  }
  
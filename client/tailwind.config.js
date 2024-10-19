/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      color: {
        'custom-black': '#171E26',
        'custom-green': '#ACEDAB',
        'custom-gray': '#737588',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        body: ['Be Vietname Pro'],
      },
      colors: {
        customGreen: 'rgb(173, 237, 171)',
        customBlue: 'rgb(26, 115, 232)',
        deepAzure: '#171F26',
      },
      boxShadow: {
        '5xl': '0 20px 50px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        slideIn: 'slideIn 1s ease-in-out forwards',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      letterSpacing: {
        widest: '.8em',
      },
    },
  },
  plugins: [],
};

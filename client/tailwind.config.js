/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "'Poppins'", "sans-serif"],
      },
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      boxShadow: {
        'lg': '0px 0px 7px #d2d2d2',
        'glass': '0 8px 32px 0 rgba(16, 185, 129, 0.08)',
        'glass-sm': '0 4px 16px 0 rgba(0, 0, 0, 0.04)',
        'card-hover': '0 20px 40px -15px rgba(16, 185, 129, 0.15)',
        'glow': '0 0 25px rgba(16, 185, 129, 0.3)',
      },
    },
    screens: {
      'vsm': '380px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*{html,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
    },
    backgroundImage: {
      'hero-pattern': "url('assets/images/bg-main.webp')",
      'footer-texture': "url('')",
    },
    screens: {
      xs: '440px',
      // ...defaultTheme.screens,
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

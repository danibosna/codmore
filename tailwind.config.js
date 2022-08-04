const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*{html,js,jsx}'],
  theme: {
    colors: {
      ...colors,
    },
    backgroundImage: {
      'hero-pattern': "url('assets/images/bg-main.webp')",
      'footer-texture': "url('')",
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

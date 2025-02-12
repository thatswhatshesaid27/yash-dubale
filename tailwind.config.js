module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Comic Neue', 'cursive'],
      secondary: ['Fredoka', 'sans-serif'],
      tertiary: ['Baloo 2', 'cursive'],
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: ' ##FFD700;',
        accent: ' #FFD700;',
      },
      backgroundImage: {
        site: "url('./assets/canva_bg.jpg')",
        about: "url('./assets/remote_png-removebg-preview.png')",
        services: "url('./assets/boy_resize.png')",
      },
    },
  },
  plugins: [],
};

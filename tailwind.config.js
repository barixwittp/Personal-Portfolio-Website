tailwind.config = {
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'serif'],
      },
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        reverseSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        spin_slow: 'spinSlow 6s linear infinite',
        reverse_spin: 'reverseSpin 6s linear infinite',
      },
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F'
      },
      boxShadow: {
        'black': '4px 4px 0 #000', // Fixed to use spaces
        'white': '4px 4px 0 #fff', // Fixed to use spaces
      },
    },
  },

  darkMode: 'selector'

}

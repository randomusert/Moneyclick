module.exports = {
    theme: {
      extend: {
        colors: {
          money: {
            light: '#d4edda',
            DEFAULT: '#28a745',
            dark: '#1c7c32',
          },
          gold: {
            light: '#fff3cd',
            DEFAULT: '#ffd700',
            dark: '#c9a600',
          },
          cash: {
            DEFAULT: '#00c853',
            dark: '#009624',
          },
          background: '#121212',
          surface: '#1e1e1e',
        },
        fontFamily: {
          sans: ['"Quicksand"', 'sans-serif'],
          display: ['"Press Start 2P"', 'cursive'], // retro display
        },
        boxShadow: {
          'money-glow': '0 0 10px #28a745',
          'gold-glow': '0 0 10px #ffd700',
        },
        borderRadius: {
          xl: '1.5rem',
        },
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        animation: {
          bouncefast: 'bounce 0.8s infinite',
        },
      },
    },
    plugins: [],
  };
  
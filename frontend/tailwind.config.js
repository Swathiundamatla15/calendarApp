module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Make sure Tailwind scans your source files
  ],
  theme: {
    extend: {
      colors: {
        spotifyGreen: '#1DB954',
        spotifyDarkGreen: '#1ED760',
        spotifyBlack: '#121212',
        spotifyGray: '#B3B3B3',
        spotifyDark: '#181818', // Darker shades for sidebars or backgrounds
        darkGray: '#333333', // For cards, navigation, and footer
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Similar to Spotify’s font
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
    },
  },
  plugins: [],
};

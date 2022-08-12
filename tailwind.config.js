module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "**/*.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cream': "#eceae5",
        'cream-70': "#eceae570",
        'black': "#050709",
        'black-70': "#05070970"
      }
    },
    fontSize: {
      xs: ['14px', { lineHeight: '24px' }],
      sm: ['16px', { lineHeight: '28px' }],
      lg: ['18px', { lineHeight: '28px' }],
      xl: ['24px', { lineHeight: '36px' }],
      '2xl': ['36px', { lineHeight: '48px' }],
      '3xl': ['48px', { lineHeight: '60px' }],
      '4xl': ['56px', { lineHeight: '64px' }],
      '5xl': ['64px', { lineHeight: '80px' }],
    },
    fill: ({ theme }) => ({
      cream: theme('colors.cream'),
      black: theme('colors.black'),
    })
  },
  plugins: [],
}

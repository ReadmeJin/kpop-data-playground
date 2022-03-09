module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "**/*.html"
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'cream': "#eceae5",
        'black': "#050709"
      }
    },
    fontSize: {
      xs: ['14px', { lineHeight: '24px' }],
      sm: ['16px', { lineHeight: '28px' }],
      lg: ['18px', { lineHeight: '28px' }],
      xl: ['24px', { lineHeight: '36px' }],
      '2xl': ['36px', { lineHeight: '48px' }],
      '3xl': ['48px', { lineHeight: '56px' }],
      '4xl': ['56px', { lineHeight: '64px' }],
    }
  },
  plugins: [],
}

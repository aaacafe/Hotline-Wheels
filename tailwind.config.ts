/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.liquid', './src/**/*.{ts,js}'],
  theme: {
    extend: {
      fontFamily: {
        body: 'var(--font-body-family)',
        heading: 'var(--font-heading-family)',
      },
      colors: {
        text: 'rgba(var(--color-base-text), <alpha-value>)',
        accent1: 'rgba(var(--color-base-accent-1), <alpha-value>)',
        accent2: 'rgba(var(--color-base-accent-2), <alpha-value>)',
        background1: 'rgba(var(--color-base-background-1), <alpha-value>)',
        background2: 'rgba(var(--color-base-background-2), <alpha-value>)',
      },
    },
  },
  plugins: [],
}
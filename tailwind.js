module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        primary: 'var(--primary)',
        'primary-light': 'var(--primaryLight)',
        'primary-dark': 'var(--primaryDark)',
        secondary: 'var(--secondary)',
        'secondary-light': 'var(--secondaryLight)',
        'secondary-dark': 'var(--secondaryDark)',
      }
    },
  },
  variants: {},
  plugins: [],
}

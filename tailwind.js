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
      },
      stroke: theme => ({
        'error': theme('colors.red.500'),
        'warning': theme('colors.orange.500'),
        'notice': theme('colors.blue.500'),
        'success': theme('colors.green.500'),
      })
    },
  },
  variants: {},
  plugins: [],
}

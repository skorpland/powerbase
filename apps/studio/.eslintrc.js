module.exports = {
  extends: ['eslint-config-powerbase/next'],
  plugins: ['eslint-plugin-barrel-files'],
  rules: {
    '@next/next/no-img-element': 'off',
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'warn',
    'barrel-files/avoid-re-export-all': 'error',
  },
}

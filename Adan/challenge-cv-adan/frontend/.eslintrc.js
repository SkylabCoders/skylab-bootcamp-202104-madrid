module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jasmine: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'arrow-parens': 'off',
    'linebreak-style': 0,
    'global-require': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'comma-dangle': [2, 'never']

  }
}

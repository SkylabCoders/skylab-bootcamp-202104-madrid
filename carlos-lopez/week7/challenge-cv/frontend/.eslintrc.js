module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jasmine: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'No-useless-constructor': 'off',
  },
};

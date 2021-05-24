module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'linebreak-style': 0,
    'global-require': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
<<<<<<< HEAD
    'comma-dangle': [2, 'never']
  }
=======
    'comma-dangle': [2, 'never'],
  },
>>>>>>> e80feeee4e2c9e113e87a86a7a812134a61d4a33
};

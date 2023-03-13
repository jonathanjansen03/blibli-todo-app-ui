module.exports = {
  globals: {
    page: 'readonly',
    context: 'readonly',
    $blibli: 'readonly'
  },
  root: true,
  env: {
    'jest/globals': true,
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  globals: {
    page: 'readonly'
  },
  parser: "babel-eslint",
  parserOptions: {
    parser: 'babel-eslint'
  }
}

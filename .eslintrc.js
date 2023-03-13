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
  parserOptions: {
    parser: "@babel/eslint-parser",
    "requireConfigFile": false
  },
  plugins: ["jest"]
}

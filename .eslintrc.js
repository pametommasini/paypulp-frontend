module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'standard',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-unused-vars': 'warn',
    camelcase: 'off',
    'no-useless-escape': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'prettier/prettier': 'warn',
  },
}

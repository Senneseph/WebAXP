module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y'
  ],
  env: {
    node: true,
    browser: true,
    jest: true
  },
  rules: {
    // Add custom rules here
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};

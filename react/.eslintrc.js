module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    indent: [2, 2],
    'max-len': ['error', { code: 120 }],
    quotes: [1, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    '@typescript-eslint/naming-convention': 'off',
    'react/jsx-indent': [2, 2],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/indent': [2, 2],
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/require-default-props': 'off',
    'no-unused-vars': 'warn',
    'no-shadow': 'off',
    'import/no-unresolved': 'off',
    'react/function-component-definition': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-promise-executor-return': 'warn',
    'no-underscore-dangle': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    indent: [2, 2],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-dupe-keys': 'warn',
    'no-param-reassign': 'off',
  },
  globals: {
    __IS__DEV__: true,
  },
};

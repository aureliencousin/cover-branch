module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/camelcase': 'off',
    'no-useless-constructor': 'off',
    'require-atomic-updates': 'off',
    // Deactivate slow rules
    'import/export': 'off',
    'import/no-cycle': 'off',
    'import/no-deprecated': 'off',
  },
  settings: {
    'import/ignore': ['node_modules'],
  },
};

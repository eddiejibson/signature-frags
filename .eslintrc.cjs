/**
 * @type {import("@types/eslint").Linter.BaseConfig}
 */
module.exports = {
  extends: [
    '@remix-run/eslint-config',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    quotes: 'off',
    'space-infix-ops': 'off',
    'comma-dangle': 'off',
    'object-curly-spacing': 'off',
    'no-unsafe-optional-chaining': 'warn',
    'no-plusplus': 'warn',
    'no-empty': 'warn',
    'no-restricted-syntax': 'warn',
    'no-restricted-exports': 'warn',
    'default-case': 'warn',
    'no-param-reassign': 'warn',
    'consistent-return': 'warn',
    'object-curly-newline': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-unused-expressions': 'warn',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['UPPER_CASE', 'PascalCase'],
        selector: 'enum',
      },
    ],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/no-array-index-key': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    'react/function-component-definition': 'off',
    'react/no-unused-prop-types': 'off',
    'prettier/prettier': ['error'],
  },
};

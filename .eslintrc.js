module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    // 'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    quotes: ['error', 'double'],
    '@typescript-eslint/quotes': ['error', 'double'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'jsx-ally/control-has-associated-label': 'off',
    'commat-dangle': 'off',
    'arrow-body-style': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'object-curly-newline': 'off',
    'react/jsx-props-no-spreading': 'off',
    'arrow-parens': ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    'no-empty': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  ignorePatterns: ['./graphql/types.ts', '**/__generated__'],
};
// module.exports = {
//     env: {
//         browser: true,
//         es2021: true,
//         node: true,
//         jest: true,
//     },
//     extends: [
//         'eslint:recommended',
//         'plugin:react/recommended',
//         'plugin:@typescript-eslint/recommended',
//         'plugin:prettier/recommended',
//     ],
//     parser: '@typescript-eslint/parser',
//     parserOptions: {
//         ecmaFeatures: {
//             jsx: true,
//         },
//         ecmaVersion: 12,
//         sourceType: 'module',
//     },
//     plugins: ['react', '@typescript-eslint'],
//     rules: {
//         'arrow-parens': ['error', 'always'],
//         'react/react-in-jsx-scope': 'off',
//         // '@typescript-eslint/explicit-function-return-type': 'warn',
//         '@typescript-eslint/explicit-module-boundary-types': 'off',
//         '@typescript-eslint/no-non-null-assertion': 'error',
//         '@typescript-eslint/no-unused-vars': 'warn',
//         '@typescript-eslint/no-inferrable-types': 'off',
//         '@typescript-eslint/ban-types': 'off',
//         'react/prop-types': 'off',
//         '@typescript-eslint/no-empty-interface': 'warn',
//         '@typescript-eslint/no-empty-function': 'warn',
//         'no-empty': 'off',
//     },
//     ignorePatterns: ['./graphql/types.ts', '**/__generated__'],
// };

const ALIASES = '^(app|components|http|models|shared|store)/';

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['import', 'prettier', 'react-refresh', 'simple-import-sort'],
  rules: {
    'prettier/prettier': 'error',
    curly: ['error', 'all'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ['^'],
          // alias paths
          //? also change in the rule import/no-unresolved
          [ALIASES],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
          // scss module imports
          ['\\.module\\.scss$'],
          // Side effect imports.
          ['^\\u0000'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/first': 'error',
    //? also change in simple-import-sort/imports to group them
    'import/no-unresolved': [
      'error',
      {
        ignore: ['.(scss|less|css)$', ALIASES],
      },
    ],
    'import/newline-after-import': 'off',
    'import/no-duplicates': 'error',
    // try to add eslint-ignore in important console.logs
    // set to warn to allow webpack compile it
    'no-console': 'warn',
    'no-debugger': 'warn',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
};

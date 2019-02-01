const path = require('path');
const MULTILINE_BLOCK_LIKE = 'multiline-block-like';

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },

  plugins: ['react', 'import', 'jest', 'sonarjs', 'prettier'],
  extends: [
    'plugin:sonarjs/recommended',
    'plugin:react/recommended',
    'eslint:recommended'
  ],
  globals: {
    __TEST__: true,
    __HOST__: true,
    __PORT__: true,
    expect: true,
    jest: true
  },
  settings: {
    'import/parser': 'babel-eslint',
    'import/resolver': {
      alias: [['#', path.resolve(path.join(__dirname, './src/client'))]]
    }
  },
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    indent: 0,

    'arrow-parens': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'consistent-return': 'error',
    'default-case': 0,
    'linebreak-style': 0,
    'max-len': ['error', 400, 2],
    'newline-after-var': 'error',
    'newline-before-return': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': 0,
    'no-unused-expressions': 'error',
    'prefer-destructuring': ['error'],
    'prefer-promise-reject-errors': 0,
    'require-await': 'error',

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: ['const', 'let'] },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
      { blankLine: 'always', prev: MULTILINE_BLOCK_LIKE, next: 'function' },
      {
        blankLine: 'always',
        prev: MULTILINE_BLOCK_LIKE,
        next: MULTILINE_BLOCK_LIKE
      },
      { blankLine: 'always', prev: 'block-like', next: 'block-like' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: 'class', next: '*' },
      { blankLine: 'always', prev: MULTILINE_BLOCK_LIKE, next: '*' },
      { blankLine: 'always', prev: '*', next: MULTILINE_BLOCK_LIKE },
      { blankLine: 'always', prev: '*', next: 'default' },
      { blankLine: 'never', prev: '*', next: 'case' },
      { blankLine: 'always', prev: '*', next: 'function' }
    ],

    'react/default-props-match-prop-types': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-sort-default-props': 'error',
    'react/jsx-sort-props': 'error',
    'react/no-array-index-key': 0,
    'react/no-children-prop': 'error',
    'react/no-did-mount-set-state': 0,
    'react/no-unescaped-entities': 0,
    'react/no-unused-prop-types': 'error',
    'react/prefer-stateless-function': [
      'error',
      { ignorePureComponents: true }
    ],
    'react/prop-types': 'error',
    'react/require-default-props': 0,
    'react/sort-prop-types': 'error',

    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,

    'import/default': 'error',
    'import/no-cycle': 'error',
    'import/no-self-import': 'error',
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/no-useless-path-segments': 'error',

    'import/extensions': [
      'error',
      'never',
      {
        scss: 'always',
        json: 'always'
      }
    ],

    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-describe': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
    'prettier/prettier': ['error', { singleQuote: true }]
  },
  overrides: [
    {
      files: '**/src/**',
      rules: {
        'no-console': ['error', { allow: ['info', 'debug', 'error', 'warn'] }]
      }
    }
  ]
};

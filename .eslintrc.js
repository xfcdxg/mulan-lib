const eslintrc = {
  extends: ['eslint-config-airbnb'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'react',
    'babel',
  ],
  rules: {
    'react/no-multi-comp': 0,
    'no-nested-ternary': 0,
    'func-names': 0,
    'arrow-body-style': 0,
    'react/sort-comp': 0,
    'react/prop-types': 0,
    'react/jsx-first-prop-new-line': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'max-len': 0,
    'consistent-return': 0,
    'global-require': 0,

    'template-curly-spacing': ['error', 'always'],
    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,
    'no-plusplus': 0,
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'react/no-danger': 0,
    'react/require-extension': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.md'] }],
    'react/jsx-curly-spacing': [2, 'always', { 'spacing': { objectLiterals: 'never' } }],
    'import/no-webpack-loader-syntax': 0,
    'import/newline-after-import': [1, { count: 1 }],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-has-content': 0,
    'arrow-parens': ['error', 'as-needed'],
    'no-multi-spaces': ['error', { exceptions: { 'VariableDeclarator': true, 'ImportDeclaration': true, 'Property': true } }],
    'key-spacing': ['error', { align: 'value' }],
    'jsx-quotes': ['error', 'prefer-single'],
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'never']
  },
};

if (process.env.NODE_ENV === 'production') {
  Object.assign(eslintrc.rules, {
    'no-console': 0,
    'no-alert': ['error']
  });
} else {
  eslintrc.globals = {
    React: true,
    ReactDOM: true,
    mountNode: true,
  };

  Object.assign(eslintrc.rules, {
    'no-console': 0,
    'no-alert': 0,
    'no-plusplus': 0,
    'eol-last': 0,
    'prefer-rest-params': 0,
    'react/no-multi-comp': 0,
    'jsx-a11y/href-no-hash': 0,
  });
}

module.exports = eslintrc

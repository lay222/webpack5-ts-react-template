module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    // 解决引入React报错
    'no-use-before-define': 'off',
    // 支持多种后缀文件
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // 解决webpack-merge 应该在项目的依赖中，而不是devDependencies
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};

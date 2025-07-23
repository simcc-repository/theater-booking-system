module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules', 'scripts'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'warn',
    'no-debugger': 'error',
  },
}
module.exports = {
  ignorePatterns: ['**/*.js'],
  overrides: [
    {
      files: '**.ts',
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/no-namespace': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-empty-interface': 0
      }
    }
  ]
};

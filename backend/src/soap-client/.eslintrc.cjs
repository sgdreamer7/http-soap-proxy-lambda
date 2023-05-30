module.exports = {
  ignorePatterns: ['**/*.js'],
  overrides: [
    {
      files: '**.ts',
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/quotes': 'off',
        'max-len': 'off'
      }
    }
  ]
};

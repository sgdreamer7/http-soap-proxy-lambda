module.exports = {
  ignorePatterns: ['dev.js', 'src/**/*.js'],
  overrides: [
    {
      files: '**.ts',
      rules: {
        'import/no-extraneous-dependencies': 'off'
      }
    }
  ]
};

const moduleFileExtensions = [
  'ts',
  'js'
];

const testMatch = ['**/*.spec.ts'];
const transform = {
  '.(ts)': 'ts-jest'
};

module.exports = {
  roots: [
    './src'
  ],
  moduleFileExtensions,
  testMatch,
  transform
};

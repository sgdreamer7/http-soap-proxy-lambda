const level = 2;
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [level, 'always', ['chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert']],
  },
};

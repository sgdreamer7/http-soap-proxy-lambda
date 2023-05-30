module.exports = {
  root: true,
  env: {
    'es2021': true,
    'node': true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  ignorePatterns: ['node_modules', 'build', 'cdk.out', '**/*.d.ts'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'max-len': ['error', 120],
    'import/prefer-default-export': 'off',
    'import/order': [
      1, {
        'groups': [
          'external',
          'builtin',
          'internal',
          'sibling',
          'parent',
          'index'
        ]
      }
    ]
  },
  plugins: ['import'],
  overrides: [
    {
      files: ['**/*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript/base'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json']
      },
      plugins: [
        '@typescript-eslint'
      ],
      rules: {
        '@typescript-eslint/no-shadow': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn'
      }
    },
    {
      files: ['**/*.spec.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
};

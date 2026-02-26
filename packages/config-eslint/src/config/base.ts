import type { Linter } from '../types/index.ts';

export interface BaseConfigReturnType {
  configs: Linter.Config[]
  rules: Linter.RulesRecord
}

export const getBase = (): BaseConfigReturnType => ({
  configs: [],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_$',
        caughtErrorsIgnorePattern: '^_$',
        destructuredArrayIgnorePattern: '^_$',
        varsIgnorePattern: '^_$',
      },
    ],
    // Code quality
    'eqeqeq': ['error', 'always'],

    // Console rules
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',

    'no-unused-vars': 'off',
    // Variable declarations
    'no-var': 'error',
    'no-with': 'error',
    'prefer-const': 'error',
  },
});

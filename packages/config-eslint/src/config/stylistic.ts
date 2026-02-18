import stylistic from '@stylistic/eslint-plugin';

import { IReturnValue } from '../types';
export const getStylistic = (): IReturnValue => ({
  configs: [
    stylistic.configs.recommended,
  ],
  rules: {
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    '@stylistic/semi': ['error', 'always'],
  },
});

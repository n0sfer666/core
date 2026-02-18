import perfectionist from 'eslint-plugin-perfectionist';
import sort from 'eslint-plugin-simple-import-sort';

import { Linter } from '../types';

const perfectionistConfigs = [perfectionist.configs['recommended-natural']];
const sortPlugins = { 'simple-import-sort': sort };

interface ReturnType {
  configs: Linter.Config[]
  plugins: Record<string, unknown>
  rules: Linter.RulesRecord
}

export const getSort = (): ReturnType => ({
  configs: perfectionistConfigs as Linter.Config[],
  plugins: sortPlugins,
  rules: {
    'perfectionist/sort-exports': [
      'error',
      { order: 'asc', type: 'natural' },
    ],
    'perfectionist/sort-imports': 'off',
    'perfectionist/sort-jsx-props': [
      'error',
      { order: 'asc', type: 'natural' },
    ],
    'perfectionist/sort-named-imports': [
      'error',
      { order: 'asc', type: 'natural' },
    ],
    'perfectionist/sort-objects': [
      'error',
      { order: 'asc', type: 'natural' },
    ],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
  },
});

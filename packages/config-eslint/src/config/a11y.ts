import { Linter } from 'eslint';
import a11y from 'eslint-plugin-jsx-a11y';

interface IReturnValue {
  config: Linter.Config[]
  rules: Linter.RulesRecord
}

export const a11yConfig: IReturnValue = {
  config: [{
    plugins: { 'jsx-a11y': a11y },
    rules: Object.fromEntries(
      Object.entries(a11y.configs.strict.rules ?? {}).filter(
        ([ruleName, config]) =>
          ruleName !== 'jsx-a11y/accessible-emoji'
          && config !== undefined
          && (Array.isArray(config) || typeof config === 'string'),
      ),
    ) as Linter.RulesRecord,
  }],
  rules: Object.fromEntries(
    Object.entries(a11y.configs.strict.rules ?? {}).filter(
      ([ruleName, config]) =>
        ruleName !== 'jsx-a11y/accessible-emoji'
        && config !== undefined
        && (Array.isArray(config) || typeof config === 'string'),
    ),
  ) as Linter.RulesRecord,
};

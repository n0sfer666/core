import { Linter } from 'eslint';
import solid from 'eslint-plugin-solid';

interface IReturnValue {
  config: Linter.Config[]
  rules: Linter.RulesRecord
}

export const getSolidjsConfig = (): IReturnValue => ({
  config: [solid.configs['flat/recommended']] as unknown as Linter.Config[],
  rules: {
    'solid/components-return-once': 'error',
    'solid/event-handlers': 'warn',
    'solid/jsx-no-duplicate-props': 'error',
    'solid/jsx-no-script-url': 'error',
    'solid/jsx-no-undef': 'error',
    'solid/no-destructure': 'warn',
    'solid/no-react-deps': 'off',
    'solid/no-react-specific-props': 'error',
    'solid/no-unknown-namespaces': 'error',
    'solid/reactivity': 'warn',
    'solid/self-closing-comp': 'error',
    'solid/style-prop': 'error',
  },
});

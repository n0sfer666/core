import type { Linter } from 'eslint';
export type { Linter };
export interface IReturnValue {
  configs?: Linter.Config[]
  plugins?: Linter.Config['plugins']
  rules?: Linter.RulesRecord
}

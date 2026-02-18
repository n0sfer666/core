import { Linter } from 'eslint';
import astroPkg from 'eslint-plugin-astro';

interface IReturnType {
  config: Linter.Config[]
  rules: typeof astroPkg.rules
}

export const astro: IReturnType = {
  config: astroPkg.configs['flat/recommended'],
  rules: astroPkg.rules,
};

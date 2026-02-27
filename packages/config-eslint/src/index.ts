import css from '@eslint/css';
import js from '@eslint/js';
import json from '@eslint/json';
import { defineConfig } from 'eslint/config';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import { a11yConfig } from './config/a11y.ts';
import { astro } from './config/astro.ts';
import { getBase } from './config/base.ts';
import { getSolidjsConfig } from './config/solidjs.ts';
import { getSort } from './config/sort.ts';
import { getStylistic } from './config/stylistic.ts';
import { type Linter } from './types/index.ts';

const languageOptions: Linter.LanguageOptions = {
  ecmaVersion: 2022,
  globals: { ...globals.browser, ...globals.node },
  sourceType: 'module',
};

interface Params {
  extraFiles?: string[]
  extraIgnores?: string[]
  withA11y?: boolean
  withAstro?: boolean
  withBase?: boolean
  withCss?: boolean
  withJson?: boolean
  withReact?: boolean
  withSolidjs?: boolean
  withSort?: boolean
  withStylistic?: boolean
}

type TReturn = ReturnType<typeof defineConfig>;

export const getEslintConfig = (params = {} as Params): TReturn => {
  const {
    extraFiles = [] as string[],
    extraIgnores = [] as string[],
    withA11y = false,
    withAstro = false,
    withBase = true,
    withCss = false,
    withJson = false,
    withReact = false,
    withSolidjs = false,
    withSort = false,
    withStylistic = false,
  } = params;
  const config: Parameters<typeof defineConfig>[0] = [
    {
      extends: ['js/recommended'],
      files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}', ...extraFiles],
      languageOptions,
      plugins: { js },
    },
    tseslint.configs.recommended,
    {
      ignores: ['node_modules/**/*', 'dist/**/*', ...extraIgnores],
    },
  ];

  if (withBase) {
    const { rules } = getBase();
    config.push({ rules });
  }

  if (withReact) {
    config.push(pluginReact.configs.flat.recommended);
  }

  if (withCss) {
    config.push(css.configs.recommended);
  }

  if (withJson) {
    config.push(json.configs.recommended);
  }

  if (withSort) {
    const { configs, plugins, rules } = getSort();
    const typedPlugins = plugins as unknown as Linter.Config['plugins'];
    config.push(...(configs?.length ? configs : []));
    config.push({ plugins: typedPlugins, rules });
  }

  if (withStylistic) {
    const { configs: stylisticConfigs, rules } = getStylistic();
    config.push(...(stylisticConfigs?.length ? stylisticConfigs : []));
    config.push({ rules });
  }

  if (withAstro) {
    const { config: astroConfig } = astro;
    config.push(...astroConfig);
  }

  if (withA11y || withAstro) {
    const { config: a11yConfigs, rules } = a11yConfig;
    config.push(...a11yConfigs);
    config.push({ rules });
  }

  if (withSolidjs) {
    const { config: solidjsConfigs, rules } = getSolidjsConfig();
    config.push(...solidjsConfigs);
    config.push({ rules });
  }
  return defineConfig(config);
};

interface IArgs {
  files?: string[]
  ignores?: string[]
  withA11y?: boolean
  withCss?: boolean
}
export const getFullReactEslintConfig = (args: IArgs = {}): TReturn => {
  const { withA11y = true, withCss = true, ...rest } = args;
  const { files, ignores } = rest;

  return getEslintConfig({
    extraFiles: files,
    extraIgnores: ignores,
    withA11y,
    withBase: true,
    withCss,
    withJson: true,
    withReact: true,
    withSort: true,
    withStylistic: true,
  });
};

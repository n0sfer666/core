# @n0sfer/config-eslint

## 0.1.0

### Minor Changes

- i hope that will work

## 0.0.7

### Patch Changes

- a5b433c: Fix missing runtime dependencies

  Moved packages from devDependencies to dependencies to fix "Cannot find module" errors when using the configs in external projects:

  **@n0sfer/config-eslint:**

  - Moved all ESLint plugins and core dependencies to dependencies:
    - @eslint/compat, @eslint/config-helpers, @eslint/css, @eslint/js, @eslint/json
    - @stylistic/eslint-plugin
    - eslint-plugin-astro, eslint-plugin-import, eslint-plugin-jsx-a11y
    - eslint-plugin-perfectionist, eslint-plugin-react, eslint-plugin-react-hooks
    - eslint-plugin-react-refresh, eslint-plugin-simple-import-sort, eslint-plugin-solid
    - globals, typescript-eslint

  **@n0sfer/config-stylelint:**

  - Moved stylelint plugins to dependencies:
    - stylelint-config-recommended-scss
    - stylelint-order
    - stylelint-scss
  - Added stylelint as peerDependency

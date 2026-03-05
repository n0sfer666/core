# @n0sfer/config-eslint

ESLint flat config presets for modern TypeScript projects.

## Installation

```bash
npm install @n0sfer/config-eslint --save-dev
```

```bash
yarn add @n0sfer/config-eslint --dev
```

## Usage

### Basic Setup

```typescript
// eslint.config.ts
import { getEslintConfig } from '@n0sfer/config-eslint';

export default getEslintConfig();
```

### With React

```typescript
// eslint.config.ts
import { getEslintConfig } from '@n0sfer/config-eslint';

export default getEslintConfig({
  withReact: true,
  withCss: true,
  withA11y: true,
});
```

### Full React Setup

```typescript
// eslint.config.ts
import { getFullReactEslintConfig } from '@n0sfer/config-eslint';

export default getFullReactEslintConfig();
```

### With Astro

```typescript
// eslint.config.ts
import { getEslintConfig } from '@n0sfer/config-eslint';

export default getEslintConfig({
  withAstro: true,
  withA11y: true,
});
```

### With SolidJS

```typescript
// eslint.config.ts
import { getEslintConfig } from '@n0sfer/config-eslint';

export default getEslintConfig({
  withSolidjs: true,
  withA11y: true,
});
```

## Available Configs

- `@n0sfer/config-eslint/base` - Base ESLint configuration
- `@n0sfer/config-eslint/stylistic` - Code style rules
- `@n0sfer/config-eslint/sort` - Import sorting rules
- `@n0sfer/config-eslint/a11y` - Accessibility rules
- `@n0sfer/config-eslint/solidjs` - SolidJS specific rules
- `@n0sfer/config-eslint/astro` - Astro specific rules

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `withBase` | boolean | `true` | Include base configuration |
| `withReact` | boolean | `false` | Include React rules |
| `withSolidjs` | boolean | `false` | Include SolidJS rules |
| `withAstro` | boolean | `false` | Include Astro rules |
| `withA11y` | boolean | `false` | Include accessibility rules |
| `withStylistic` | boolean | `false` | Include stylistic rules |
| `withSort` | boolean | `false` | Include import sorting rules |
| `withCss` | boolean | `false` | Include CSS linting |
| `withJson` | boolean | `false` | Include JSON linting |
| `extraFiles` | string[] | `[]` | Additional files to lint |
| `extraIgnores` | string[] | `[]` | Additional patterns to ignore |

## Peer Dependencies

This package requires the following peer dependencies:

- `eslint` ^10.0.2
- `typescript` ^5.9.3
- `jiti` ^2.6.1

## License

MIT

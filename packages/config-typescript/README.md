# @n0sfer/config-typescript

TypeScript tsconfig presets for modern projects.

## Usage

### Base Config

```json
// tsconfig.json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@n0sfer/config-typescript/base"
}
```

### Node.js Project

```json
// tsconfig.json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@n0sfer/config-typescript/node"
}
```

### React Project

```json
// tsconfig.json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@n0sfer/config-typescript/react"
}
```

### Next.js Project

```json
// tsconfig.json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@n0sfer/config-typescript/react",
  "compilerOptions": {
    "jsx": "preserve",
    "noEmit": true,
    "incremental": true
  }
}
```

## Available Configs

- `@n0sfer/config-typescript/base` - Base configuration
- `@n0sfer/config-typescript/node` - Node.js projects
- `@n0sfer/config-typescript/react` - React projects

## Configuration

Modern TypeScript configuration with:
- Target: ES2022
- Strict mode enabled
- Lib: ES2022 (DOM types for React)
- ModuleResolution: bundler
- All recommended checks enabled
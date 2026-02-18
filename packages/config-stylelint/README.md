# @n0sfer/config-stylelint

Stylelint configuration with CSSComb-like property ordering for SCSS and CSS files.

## Features

- **Auto-fix Property Ordering**: Uses `stylelint-order` to sort CSS/SCSS properties (CSSComb-like)
- **SCSS Support**: Extends `stylelint-config-recommended-scss` for SCSS files
- **Line Length Detection**: Warns at 100 characters (matches ESLint config)
- **Painful Mistakes Detection**:
  - Invalid hex colors (#zzz is invalid)
  - Duplicate properties
  - Missing vendor prefixes
  - No unit types (e.g., `height: 100` instead of `height: 100px`)
  - Invalid display values (e.g., `display: block inline` - can't be both)

## Installation

\`\`\bash
npm install --save-dev @n0sfer/config-stylelint
\`\`

## Usage

In your project root, run:

\`\`bash
npx stylelint "**/*.{css,scss,sass}" --fix
\`\`

Or in your root `package.json`:

\`\`json
{
  "scripts": {
    "lint:styles": "stylelint \"**/*.{css,scss,sass}\" --fix",
    "lint:styles:check": "stylelint \"**/*.{css,scss,sass}\""
  }
}
\`\`

## Property Ordering

Uses CSSComb-like ordering:

1. **Position** (z-index, positioning)
2. **Display & Layout** (display, flex, grid, width, height)
3. **Box Model** (margin, padding, border)
4. **Typography** (font, color, etc.)
5. **Appearance** (opacity, visibility, background)

## Auto-Fixing

All property ordering violations can be auto-fixed with `--fix` flag:

\`\`bash
npx stylelint \"**/*.{css,scss,sass}\" --fix
\`\`

## Errors Detected

- ✅ **Invalid hex colors**: `color: #zzz;`
- ✅ **Duplicate properties**: Same property defined twice
- ✅ **Missing unit types**: `height: 100` instead of `height: 100px`
- ✅ **Invalid display values**: `display: block inline` is impossible
- ✅ **Missing vendor prefixes**: `transition` needs `-webkit-` prefix

## License

MIT

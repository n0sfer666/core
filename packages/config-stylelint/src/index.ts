export interface StylelintConfig {
  extends?: string[]
  overrides?: StylelintOverride[]
  plugins?: string[]
  rules?: Record<string, any>
}

export interface StylelintOverride {
  extends?: string[]
  files: string[]
  rules?: Record<string, any>
}

export function getStylelintConfig(): StylelintConfig {
  return {
    extends: ['stylelint-config-recommended-scss'],
    overrides: [
      {
        files: ['**/*.scss', '**/*.sass'],
        rules: {
          // CSSComb-like property ordering
          'order/order': [
            'custom-properties',
            'declarations',
            { hasBlock: false, type: 'at-rule' },
            'at-rule',
            'rules',
            { hasBlock: true, type: 'at-rule' },
          ],
          'order/properties-order': [
            // Positioning
            'top', 'right', 'bottom', 'left', 'z-index',
            // Display & Layout
            'display', 'flex', 'flex-direction', 'flex-wrap', 'gap', 'grid',
            'width', 'height', 'max-width', 'min-height',
            'max-width', 'min-height',
            // Box Model
            'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
            'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
            'border', 'border-top', 'border-right', 'border-bottom', 'border-left', 'border-radius',
            // Typography
            'font', 'font-family', 'font-size', 'line-height', 'text-align', 'color',
            'background-color', 'opacity', 'visibility',
            // Other
            'cursor', 'pointer-events',
          ],
        },
      },
    ],
    plugins: ['stylelint-order'],
    rules: {
      // Force alphabetically sorted properties
      'alpha-value-notation': 'never',
      // Force semicolons (painful but necessary)
      'declaration-block-trailing-semicolon': 'always',
      // Line length (100 chars, warn to avoid being painful)
      'max-line-length': [
        100,
        { severity: 'warning' },
      ],
      // SCSS specific
      'scss/at-import-parentheses': 'always',
      // Custom rules for painful mistakes
      'selector-class-pattern': ['^[a-z][a-zA-Z0-9]+$', { resolveNestedSelectors: true }],
    },
  };
}

export default getStylelintConfig();

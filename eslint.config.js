// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase'
        }
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case'
        }
      ]
    }
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility
    ],
    rules: {
      '@angular-eslint/template/alt-text': ['warn'],
      '@angular-eslint/template/elements-content': ['warn'],
      '@angular-eslint/template/label-has-associated-control': ['warn'],
      '@angular-eslint/template/no-positive-tabindex': ['warn'],
      '@angular-eslint/template/table-scope': ['warn'],
      '@angular-eslint/template/valid-aria': ['warn'],
      '@angular-eslint/template/click-events-have-key-events': ['warn'],
      '@angular-eslint/template/mouse-events-have-key-events': ['warn'],
      '@angular-eslint/template/no-autofocus': ['warn'],
      '@angular-eslint/template/no-distracting-elements': ['warn']
    }
  }
);

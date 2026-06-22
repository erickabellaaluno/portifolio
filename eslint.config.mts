import nextVitals from 'eslint-config-next/core-web-vitals'
// @ts-expect-error - no types published for eslint-plugin-neverthrow
import neverthrow from 'eslint-plugin-neverthrow'
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths'
import prettier from 'eslint-plugin-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores([
    './public/assets/js/',
    './public/mockServiceWorker.js',
    'src/ui/shadcn',
    '.next',
    'next-env.d.ts',
    'node_modules',
  ]),
  ...nextVitals,
  tseslint.configs.recommended,
  {
    plugins: {
      'no-relative-import-paths': noRelativeImportPaths,
      prettier: prettier,
    },
    rules: {
      // no-relative-import-paths
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        { allowSameFolder: false, rootDir: 'src', prefix: '@' },
      ],

      // typescript-eslint rules
      '@typescript-eslint/no-duplicate-enum-values': 'off',

      // camelcase
      camelcase: ['error', { ignoreImports: true }],

      // prettier rules
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'all',
          arrowParens: 'always',
          semi: false,
          endOfLine: 'auto',
        },
      ],

      // jsx-a11y rules
      'jsx-a11y/alt-text': [
        'warn',
        {
          elements: ['img'],
          img: ['Image'],
        },
      ],
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
    },
    settings: {
      react: { version: 'detect' },
      'import/parsers': {
        [require.resolve('@typescript-eslint/parser')]: [
          '.ts',
          '.tsx',
          '.d.ts',
        ],
      },
    },
  },
  {
    plugins: {
      neverthrow,
    },
  },
])

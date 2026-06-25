import nextVitals from 'eslint-config-next/core-web-vitals'
import boundaries from 'eslint-plugin-boundaries'
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
        // @ts-expect-error Idk
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
      boundaries,
    },
    settings: {
      'boundaries/elements': [
        { mode: 'full', type: 'actions', pattern: 'src/actions/**/*' },
        { mode: 'full', type: 'app', pattern: 'src/app/**/*' },
        { mode: 'full', type: 'lib', pattern: 'src/lib/**/*' },
        { mode: 'full', type: 'rest', pattern: 'src/rest/**/*' },
        { mode: 'full', type: 'ui', pattern: 'src/ui/**/*' },
        { mode: 'full', type: 'core', pattern: 'src/core/**/*' },
        { mode: 'full', type: 'db-seed', pattern: 'src/db/seed/**/*' },
        { mode: 'full', type: 'db', pattern: 'src/db/**/*' },
      ],
      'boundaries/include': ['src/**/*'],
    },
    rules: {
      ...boundaries.configs.recommended.rules,
      // 'boundaries/no-unknown': ['error'],
      // 'boundaries/no-unknown-files': ['error'],
      'boundaries/dependencies': [
        'error',
        {
          default: 'disallow',
          rules: [
            {
              from: { type: 'actions' },
              allow: [
                { to: { type: 'actions' } },
                { to: { type: 'lib' } },
                { to: { type: 'rest' } },
              ],
            },
            {
              from: { type: 'app' },
              allow: [
                { to: { type: 'app', path: '**/*.css' } },
                { to: { type: 'lib' } },
                { to: { type: 'rest' } },
                { to: { type: 'ui' } },
              ],
            },
            {
              from: { type: 'core' },
              allow: [{ to: { type: 'db' } }, { to: { type: 'core' } }],
            },
            {
              from: { type: 'db' },
              allow: [{ to: { type: 'db' } }, { to: { type: 'lib' } }],
            },
            {
              from: { type: 'db-seed' },
              allow: [
                { to: { type: 'db-seed' } },
                { to: { type: 'db' } },
                { to: { type: 'core' } },
              ],
            },
            {
              from: { type: 'lib' },
              allow: [{ to: { type: 'lib' } }],
            },
            {
              from: { type: 'rest' },
              allow: [
                { to: { type: 'rest' } },
                { to: { type: 'core' } },
                { to: { type: 'lib' } },
              ],
            },
            {
              from: { type: 'ui' },
              allow: [
                { to: { type: 'ui' } },
                { to: { type: 'lib' } },
                { to: { type: 'actions' } },
                { to: { type: 'rest' } },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    plugins: {
      neverthrow,
    },
  },
])

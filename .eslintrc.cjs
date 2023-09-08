/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'airbnb/base',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:prettier/recommended'
  ],
  'plugins': ['prettier'],
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  "env": {
    "browser": true,
    "amd": true,
    "node": true
},
}

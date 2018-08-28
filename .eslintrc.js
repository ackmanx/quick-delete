//babel-eslint is required for this to work properly, being I use babel for transpiling
module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'no-unused-vars': ["error", { args: 'none' }],
        'react/no-unused-prop-types': 'error',
        'linebreak-style': ['error', 'unix'],
        'no-case-declarations': 'off',
        'no-console': 'off',
    }
}

module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        'array-bracket-spacing': ['error', 'always', { 'singleValue': true }],
		'array-callback-return': 'off',
		'arrow-parens': ['error', 'as-needed'],
		'brace-style': ['error', 'stroustrup'],
		'class-methods-use-this': 'off',
		'comma-dangle': ['error', 'never'],
		'consistent-return': 'off',
		'func-names': ['error', 'never'],
		'function-paren-newline': 'off',
		'import/prefer-default-export': 'off',
        'indent': 'off',
        'key-spacing': ['error', { 'align': { 'on': 'colon', 'beforeColon': true, 'afterColon': true } }],
        'no-multi-spaces': 'off',
		'no-param-reassign': ['error', { 'props': false }],
		'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
		'no-return-assign': ['error', 'except-parens'],
		'no-tabs': 0,
		'no-trailing-spaces': 'off',
		'no-underscore-dangle': 'off',
		'no-unused-expressions': 'off',
		'no-unused-vars': ['error', {'args': 'after-used'}],
		'no-use-before-define': ['error', { 'functions': false }],
		'object-curly-newline': 'off',
		'object-curly-spacing': ['error', 'always'],
		'object-shorthand': 'off',
		'prefer-const': 'off',
		'prefer-destructuring': ['error', {'object': true, 'array': false}],
		'template-curly-spacing': ['error', 'always'],
		'vue/no-side-effects-in-computed-properties': 'off',
		'linebreak-style': 0
    }
};
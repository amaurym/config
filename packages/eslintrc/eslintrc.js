module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:react/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	plugins: [
		'react',
		'react-hooks',
		'@typescript-eslint',
		'prettier',
		'simple-import-sort',
	],
	rules: {
		// Sort imports
		'simple-import-sort/imports': 'error',
		// Rules about react hooks
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};

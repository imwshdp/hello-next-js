module.exports = {
	root: true,

	env: { browser: true, node: true, es2023: true },

	ignorePatterns: ['.eslintrc.cjs', 'node_modules', 'package.json', 'package-lock.json', 'public', '.next', 'out'],

	parser: '@typescript-eslint/parser',

	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: { jsx: true },
	},

	settings: {
		react: {
			version: 'detect',
		},
	},

	plugins: ['react', '@typescript-eslint', 'react-refresh', 'react-hooks', 'simple-import-sort', 'prettier'],

	extends: [
		'eslint:recommended',
		'plugin:@next/next/recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],

	globals: {
		JSX: 'readonly',
	},

	rules: {
		'no-unused-vars': 0,
		'no-console': 1,
		'no-trailing-spaces': 2,
		'prefer-const': 1,
		indent: [0, 'tab'],
		semi: [1, 'always'],
		'@typescript-eslint/no-explicit-any': [1, { ignoreRestArgs: true }],

		'react/react-in-jsx-scope': 0,
		'react/jsx-closing-tag-location': 1,
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
		'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
		'react/jsx-closing-bracket-location': [2, 'tag-aligned'],

		'react-refresh/only-export-components': [1, { allowConstantExport: true }],

		'react-hooks/rules-of-hooks': 2,
		'react-hooks/exhaustive-deps': 1,

		'simple-import-sort/exports': 2,
		'simple-import-sort/imports': [
			2,
			{
				groups: [['^next'], ['^react'], ['^\\w'], ['^@?\\w'], ['^(@?components)(/.*|$)'], ['^\\.'], ['^.+\\.?(css)$']],
			},
		],

		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
			{
				usePrettierrc: true,
			},
		],
	},
};

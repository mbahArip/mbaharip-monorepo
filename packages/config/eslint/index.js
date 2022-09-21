module.exports = {
	// extends: ['next', 'airbnb', 'prettier'],
	extends: [
		'next',
		// 'eslint:recommended',
		'airbnb',
		'airbnb-typescript',
		'prettier',
	],
	settings: {
		next: {
			rootDir: ['apps/*/', 'packages/*/'],
		},
	},
	plugins: ['prettier'],
	ignorePatterns: ['.eslintrc.js', 'index.js'],
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
		'react/jsx-key': 'off',
		'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
		'no-console': 'warn',
		'import/first': 'off',
		'import/no-unresolved': ['off'],
		'react/react-in-jsx-scope': 'off',
		'react/function-component-definition': ['off'],
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-filename-extension': [
			1,
			{extensions: ['.js', '.jsx', '.ts', '.tsx']},
		],
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
};

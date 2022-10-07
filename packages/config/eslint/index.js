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
	ignorePatterns: ['.eslintrc.js', 'index.js', 'tailwind.config.js'],
	rules: {
		'@next/next/no-img-element': 'off',
		'@next/next/no-html-link-for-pages': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'react/jsx-key': 'off',
		'react/jsx-no-useless-fragment': 'off',
		'react/no-array-index-key': 'off',
		'react/button-has-type': 'off',
		'no-bitwise': 'off',
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
	settings: {
		next: {
			rootDir: ['apps/*/', 'packages/*/'],
		},
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: undefined,
	},
};

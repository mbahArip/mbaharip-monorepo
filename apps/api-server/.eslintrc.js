const eslintConfig = require('config/eslint');

module.exports = {
	...eslintConfig,
	rules: {
		...eslintConfig.rules,
		'react-hooks/rules-of-hooks': 'off',
	},
};

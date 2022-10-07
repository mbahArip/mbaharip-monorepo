const defaultTheme = require('tailwindcss/defaultTheme');

const newColors = {
	'mbaharip-dark': 'hsl(0, 0%, 5%)',
	'mbaharip-dark-active': 'hsl(0, 0%, 3%)',
	'mbaharip-dark-hover': 'hsl(0, 0%, 7%)',
	'mbaharip-light': 'hsl(0, 0%, 95%)',
	'mbaharip-light-active': 'hsl(0, 0%, 90%)',
	'mbaharip-light-hover': 'hsl(0, 0%, 99%)',
	'mbaharip-primary': 'hsl(21, 90%, 48%)',
	'mbaharip-primary-active': 'hsl(21, 90%, 32%)',
	'mbaharip-primary-hover': 'hsl(21, 90%, 56%)',
	'mbaharip-secondary': 'hsl(219, 90%, 48%)',
	'mbaharip-secondary-active': 'hsl(219, 90%, 32%)',
	'mbaharip-secondary-hover': 'hsl(219, 90%, 56%)',
};
const heights = ['h-8', 'h-16', 'h-24', 'h-32', 'h-48', 'h-64', 'h-96'];

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'../../packages/ui/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	important: true,
	safelist: [
		...colorsToBgColors(newColors),
		...colorsToFillColors(newColors),
		...heights,
	],
	theme: {
		extend: {
			fontFamily: {
				bebas: ['"BEBAS NEUE"'],
				nexus: ['"LOF Nexus 6"'],
				sans: ['"ORIENTICA"', '"Kosugi"', ...defaultTheme.fontFamily.sans],
				mono: ['"Fira Code"', ...defaultTheme.fontFamily.mono],
				serif: ['"Noto Serif"', '"Zen Antique Soft"'],
			},
			fontSize: {
				'2xs': ['0.5rem', '0.75rem'],
			},
			colors: {
				...newColors,
			},
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/line-clamp'),
	],
};

function colorsToBgColors(colorsArray) {
	const bgColors = [];
	for (const color in colorsArray) {
		bgColors.push(`bg-${color}`);
	}
	return bgColors;
}
function colorsToFillColors(colorsArray) {
	const fillColors = [];
	for (const color in colorsArray) {
		fillColors.push(`fill-${color}`);
	}
	return fillColors;
}

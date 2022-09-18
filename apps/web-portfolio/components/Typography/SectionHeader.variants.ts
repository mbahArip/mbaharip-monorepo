import { Variants } from 'framer-motion';

export const decorationVariants: Variants = {
	init: {
		height: 0,
	},
	in: {
		height: '2.25rem',
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			delay: 0.75,
		},
	},
	out: {
		height: 0,
		transition: {
			duration: 0.25,
			ease: 'easeInOut',
			delay: 0.25,
		},
	},
};

export const textVariants: Variants = {
	init: {
		x: '-150%',
	},
	in: {
		x: 0,
		transition: {
			duration: 0.5,
			delay: 1,
		},
	},
	out: {
		x: '-150%',
		transition: {
			duration: 0.25,
		},
	},
};

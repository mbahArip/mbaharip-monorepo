import { Variants } from 'framer-motion';

export const mobileMenuContainer: Variants = {
	in: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.25,
		},
	},
	out: {
		opacity: 0,
		x: -100,
		transition: {
			duration: 0.25,
			when: 'afterChildren',
		},
	},
};
export const mobileMenuList: Variants = {
	in: {
		pointerEvents: 'auto',
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.25,
		},
	},
	out: {
		pointerEvents: 'none',
		transition: {
			staggerChildren: 0.1,
			staggerDirection: -1,
		},
	},
};
export const mobileMenuItem: Variants = {
	init: {
		x: -100,
		opacity: 0,
	},
	in: {
		x: 0,
		opacity: 1,
		transition: {
			x: { stiffness: 1000, velocity: -100 },
		},
	},
	out: {
		x: -100,
		opacity: 0,
		transition: {
			x: { stiffness: 1000 },
		},
	},
};

export const mobileHamburger: Variants = {
	init: {
		opacity: 0,
		rotate: 180,
	},
	in: {
		opacity: 1,
		rotate: 0,
		transition: {
			duration: 0.5,
			easings: 'easeInOut',
		},
	},
	out: {
		opacity: 0,
		rotate: 180,
		transition: {
			duration: 0.5,
			easings: 'easeInOut',
		},
	},
};

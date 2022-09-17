import { Variants } from 'framer-motion';

export const mobileMenuContainer: Variants = {
	init: {
		display: 'none',
		opacity: 0,
	},
	in: {
		display: 'flex',
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
	out: {
		display: 'none',
		opacity: 0,
		transition: {
			duration: 0.5,
			delay: 0.5,
			display: {
				delay: 1,
			},
		},
	},
};
export const mobileMenuList: Variants = {
	in: {
		pointerEvents: 'auto',
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.5,
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
			duration: 0.25,
			type: 'spring',
		},
	},
	out: {
		opacity: 0,
		rotate: 180,
		transition: {
			duration: 0.25,
			type: 'spring',
		},
	},
};

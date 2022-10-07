import { motion, Variants } from 'framer-motion';
import { FC } from 'react';
import { LogoMark } from 'ui';

const loadingVariants: Variants = {
	init: {
		opacity: 0,
	},
	in: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
	out: {
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
};

const LoadingView: FC = () => (
	<motion.div
		initial='init'
		animate='in'
		exit='out'
		variants={loadingVariants}
		className='flex h-full w-full items-center justify-center'
	>
		<LogoMark
			size='small'
			color='light'
			animate
		/>
	</motion.div>
);

export default LoadingView;

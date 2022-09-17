import { FC } from 'react';
import { motion } from 'framer-motion';
import { LogoMark } from 'ui';

const preloaderVariant = {
	initial: {
		opacity: 0,
	},
	in: {
		opacity: 1,
		transition: {
			opacity: {
				duration: 0.25,
			},
		},
	},
	out: {
		opacity: 0,
		transition: {
			opacity: {
				duration: 0.25,
			},
		},
	},
};

const Preloader: FC = () => {
	return (
		<motion.div
			className='fixed top-0 left-0 h-screen w-screen '
			key={'preloader'}
			initial={'initial'}
			animate={'in'}
			exit={'out'}
			variants={preloaderVariant}
		>
			{/* Loader */}
			<div className='absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-mbaharip-dark shadow-md shadow-mbaharip-dark-active md:h-24 md:w-24'>
				{/* Color */}
				<div
					className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
				>
					<div className='flex h-16 w-16 animate-spin overflow-hidden rounded-full duration-500 md:h-24 md:w-24'>
						<div className='h-16 w-1/2 bg-gradient-to-t from-transparent via-transparent to-mbaharip-primary md:h-24' />
						<div className='h-16 w-1/2 bg-gradient-to-b from-transparent via-transparent to-mbaharip-primary md:h-24' />
					</div>
				</div>
				{/* Mask */}
				<div className='absolute top-1/2 left-1/2 h-[3.75rem] w-[3.75rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mbaharip-dark md:h-[5.5rem] md:w-[5.5rem]' />
				{/* Icon */}
				<div className='absolute top-1/2 left-1/2 grid h-[3.75rem] w-[3.75rem] -translate-x-1/2 -translate-y-1/2 animate-pulse place-items-center md:h-[5.5rem] md:w-[5.5rem]'>
					<LogoMark
						color='light'
						animate={false}
						size='small'
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default Preloader;

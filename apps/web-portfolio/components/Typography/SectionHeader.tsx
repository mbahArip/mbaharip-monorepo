import { FC, ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

const decorationVariants: Variants = {
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
			duration: 0.5,
			ease: 'easeInOut',
			delay: 0.25,
		},
	},
};

const textVariants: Variants = {
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
			duration: 0.5,
		},
	},
};

type BlogHeaderProps = {
	useDecoration?: boolean;
	children: ReactNode;
};

const SectionHeader: FC<BlogHeaderProps> = ({
	useDecoration = false,
	children,
}) => {
	return (
		<div className='flex items-center'>
			{useDecoration && (
				<motion.div
					className='w-2 bg-mbaharip-primary'
					initial={'init'}
					animate={'in'}
					exit={'out'}
					variants={decorationVariants}
				/>
			)}
			<div className='w-fit overflow-hidden px-4'>
				<motion.h1
					initial={'init'}
					animate={'in'}
					exit={'out'}
					variants={textVariants}
				>
					{children}
				</motion.h1>
			</div>
		</div>
	);
};

export default SectionHeader;

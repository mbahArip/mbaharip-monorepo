import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { decorationVariants, textVariants } from './sectionHeader.variants';

type BlogHeaderProps = {
	useDecoration?: boolean;
	children: ReactNode;
};

const SectionHeader: FC<BlogHeaderProps> = ({
	useDecoration = false,
	children,
}) => {
	return (
		<div className='flex items-center px-4'>
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

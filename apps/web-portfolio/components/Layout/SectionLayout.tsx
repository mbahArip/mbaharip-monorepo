import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

type SectionProps = {
	children: ReactNode;
	delay: number;
};
const SectionLayout: FC<SectionProps> = ({ children, delay = 0 }) => (
	<motion.div
		initial={{ y: 10, opacity: 0 }}
		animate={{ y: 0, opacity: 1 }}
		transition={{ duration: 0.8, delay }}
		className='my-1 w-full py-2'
	>
		{children}
	</motion.div>
);

export default SectionLayout;

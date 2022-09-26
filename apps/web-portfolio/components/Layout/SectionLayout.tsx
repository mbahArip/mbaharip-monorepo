import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

type SectionProps = {
	children: ReactNode;
	order: number;
};
const SectionLayout: FC<SectionProps> = ({ children, order = 0 }) => (
	<motion.div
		initial={{ y: 10, opacity: 0 }}
		animate={{
			y: 0,
			opacity: 1,
		}}
		transition={{
			duration: 0.5,
			delay: 0.5 + order * 0.2,
		}}
		className='my-1 w-full'
	>
		{children}
	</motion.div>
);

export default SectionLayout;

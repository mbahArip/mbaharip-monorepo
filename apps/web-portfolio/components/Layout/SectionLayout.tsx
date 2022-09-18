import { FC, ReactNode } from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import { motion } from 'framer-motion';

const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: -0, y: 20 },
};

type SectionProps = {
	children: ReactNode;
	delay?: number;
};
const SectionLayout: FC<SectionProps> = ({ children, delay = 0 }) => {
	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, delay }}
		>
			{children}
		</motion.div>
	);
};
export default SectionLayout;

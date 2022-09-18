import { FC, ReactNode } from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import { motion, Variants } from 'framer-motion';
import useDeviceType from '../../hooks/useDeviceType';

const variants: Variants = {
	init: { opacity: 0, x: 0, y: 20 },
	in: { opacity: 1, x: 0, y: 0 },
	out: { opacity: 0, x: -0, y: 20 },
};

type MainLayoutProps = {
	children: ReactNode;
};
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	const isDesktop = useDeviceType();

	return (
		<>
			<Navbar />
			<motion.div
				className='mx-auto flex h-full min-h-screen w-screen max-w-screen-md flex-col'
				initial='init'
				animate='in'
				exit='out'
				variants={variants}
				transition={{
					duration: 0.4,
					ease: 'easeInOut',
					delay: isDesktop ? 0.5 : 0,
				}}
				style={{ position: 'relative' }}
			>
				{children}
			</motion.div>
			<Footer />
		</>
	);
};
export default MainLayout;

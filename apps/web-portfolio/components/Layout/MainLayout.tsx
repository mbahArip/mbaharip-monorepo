import { FC, ReactNode } from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

type MainLayoutProps = {
	children: ReactNode;
};
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<>
			<Navbar />
			<div className='mx-auto flex h-full min-h-screen w-screen max-w-screen-md flex-col'>
				{children}
			</div>
			<Footer />
		</>
	);
};
export default MainLayout;

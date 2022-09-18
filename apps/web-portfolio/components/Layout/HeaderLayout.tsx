import { FC, ReactNode } from 'react';

type HeaderLayoutProps = {
	children: ReactNode;
};

const HeaderLayout: FC<HeaderLayoutProps> = ({ children }) => {
	return (
		<div className='relative mt-12 flex h-48 w-full flex-col items-center justify-center md:mt-16'>
			{children}
		</div>
	);
};

export default HeaderLayout;

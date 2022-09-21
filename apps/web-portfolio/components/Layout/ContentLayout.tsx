import { FC, ReactNode } from 'react';

type ContentLayoutProps = {
	children: ReactNode;
};

const ContentLayout: FC<ContentLayoutProps> = ({ children }) => {
	return (
		<div className='items-between my-4 flex h-full w-full flex-col justify-center gap-4 px-4 md:px-8'>
			{children}
		</div>
	);
};

export default ContentLayout;

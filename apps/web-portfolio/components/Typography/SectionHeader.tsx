import { FC, ReactNode } from 'react';

type BlogHeaderProps = {
	useDecoration?: boolean;
	children: ReactNode;
};

const SectionHeader: FC<BlogHeaderProps> = ({
	useDecoration = false,
	children,
}) => {
	return (
		<div className='flex items-center gap-4'>
			{useDecoration && <div className='h-[2.25rem] w-2 bg-mbaharip-primary' />}
			<h1 className='w-full'>{children}</h1>
		</div>
	);
};

export default SectionHeader;

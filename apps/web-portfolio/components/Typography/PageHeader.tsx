import { FC } from 'react';

type PageHeaderProps = {
	title: string;
};

const PageHeader: FC<PageHeaderProps> = ({ title }) => (
	<h1 className='absolute left-8 bottom-4 z-10 font-bebas text-5xl font-normal underline decoration-mbaharip-primary decoration-from-font underline-offset-8 md:text-6xl'>
		{title}
	</h1>
);

export default PageHeader;

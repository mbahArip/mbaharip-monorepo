import { FC } from 'react';

type PageHeaderProps = {
	title: string;
};

const PageHeader: FC<PageHeaderProps> = ({ title }) => {
	return (
		<h1 className='absolute left-8 bottom-4 text-5xl tracking-wider underline decoration-mbaharip-primary decoration-from-font underline-offset-8 md:text-6xl'>
			{title}
		</h1>
	);
};

export default PageHeader;

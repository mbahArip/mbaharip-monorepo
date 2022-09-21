import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { LogoMark } from 'ui';

const Maintenance: NextPage = () => (
	<>
		<NextSeo title='Maintenance' />
		<div className='flex h-screen w-screen flex-col items-center justify-center gap-16 bg-mbaharip-dark text-white md:flex-row'>
			<LogoMark
				size='large'
				color='light'
			/>
			<div className='flex flex-col items-center justify-center md:items-start md:justify-start'>
				<div className='my-1 flex items-end gap-2'>
					<h1 className='text-4xl'>Maintenance Mode</h1>
				</div>
				<span className='flex items-center gap-2 text-sm'>
					We are currently under maintenance. Please come back later.
				</span>
			</div>
		</div>
	</>
);

export default Maintenance;

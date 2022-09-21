import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button } from 'ui';
import Img from '../components/Shared/Img';

const NotFound: NextPage = () => {
	const router = useRouter();
	const [path, setPath] = useState('');

	useEffect(() => {
		setPath(router.asPath);
	}, [router]);

	return (
		<div className='flex h-screen w-screen flex-col items-center justify-center gap-16 bg-mbaharip-dark text-white md:flex-row'>
			<Img
				src='/images/illust/404.png'
				alt='404 Not Found'
				className='h-44 bg-transparent md:h-36'
				aspectRatio='square'
				useCredits
				credits='Illustrated by ブラニン'
			/>
			<div className='flex flex-col items-center justify-center md:items-start md:justify-start'>
				<div className='my-1 flex items-end gap-2'>
					<h1 className='text-4xl'>404</h1>
					<span className='text-2xl'>Not found</span>
				</div>
				<span className='flex flex-wrap items-center justify-center gap-2 px-8 text-sm md:px-0'>
					The requested URL
					<code className='rounded bg-mbaharip-light/20 px-1 font-mono text-sm font-normal'>
						{path}
					</code>
					is not found on the server.
				</span>
				<div className='my-8 flex flex-col gap-4 md:my-4 md:flex-row md:gap-2'>
					<Link href='/'>
						<Button>Back to home</Button>
					</Link>
					<Button
						variant='ghost'
						onClick={(e) => {
							e.preventDefault();
							router.back();
						}}
					>
						Previous page
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NotFound;

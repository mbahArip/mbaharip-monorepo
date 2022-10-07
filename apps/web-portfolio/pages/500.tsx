import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'ui';
import Img from '../components/Shared/Img';

const NotFound: NextPage = () => {
	const router = useRouter();

	return (
		<>
			<NextSeo
				title='500 Internal Server Error'
				description='Internal Server Error'
			/>
			<div className='flex h-screen w-screen flex-col items-center justify-center gap-16 bg-mbaharip-dark text-white md:flex-row'>
				<Img
					src='/images/illust/500.png'
					alt='500 Internal Server Error'
					className='h-44 bg-transparent md:h-36'
					useCredits
					credits='Illustrated by ブラニン'
				/>
				<div className='flex flex-col items-center justify-center md:items-start md:justify-start'>
					<div className='my-1 flex items-end gap-2'>
						<h1 className='text-4xl'>500</h1>
						<span className='text-2xl'>Internal Server Error</span>
					</div>
					<span className='flex flex-wrap items-center justify-center gap-2 px-8 text-sm md:px-0'>
						The server encountered an internal error or misconfiguration and was
						unable to complete your request.
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
		</>
	);
};

export default NotFound;

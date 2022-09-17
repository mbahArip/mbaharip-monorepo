import type { NextPage } from 'next';
import { LogoText, Button } from 'ui';
import { MdChevronRight } from 'react-icons/md';
import useFetch from '../hooks/useFetch';
import Link from 'next/link';
import useDeviceType from '../hooks/useDeviceType';
import SectionHeader from '../components/Typography/SectionHeader';
import Img from '../components/Shared/Img';
import LatestPost from '../components/Layout/LatestPost';
import MainLayout from '../components/Layout/MainLayout';
import HeaderLayout from '../components/Layout/HeaderLayout';

const Home: NextPage = () => {
	const { deviceType, isDesktop } = useDeviceType();
	const {
		isLoading: isBlogsLoading,
		error: blogsError,
		response: blogsResponse,
	} = useFetch({
		method: 'GET',
		url: '/blogs?limit=3&order=desc&orderBy=createdAt',
	});
	const {
		isLoading: isWorksLoading,
		error: worksError,
		response: worksResponse,
	} = useFetch({
		method: 'GET',
		url: '/works?limit=3&order=desc&orderBy=createdAt',
	});

	return (
		<MainLayout>
			<HeaderLayout>
				<LogoText
					size={'large'}
					color={'light'}
					animate={true}
				/>
			</HeaderLayout>
			<div className='my-6 h-fit md:my-8'>
				<SectionHeader useDecoration>About me</SectionHeader>
				<div className='my-4 flex flex-col items-center justify-center md:flex-row md:gap-8'>
					<Img
						src='/images/me.webp'
						className='h-24 w-24 outline outline-mbaharip-light md:h-32 md:w-32'
						alt='Arief Rachmawan'
						aspectRatio='portrait'
					/>
					<div className='mt-8 mb-0 flex flex-col items-center md:my-2 md:items-start'>
						<h1 className='md:text-4xl'>Arief Rachmawan</h1>
						<p className='max-w-screen-sm px-8 text-center md:px-0 md:text-start'>
							Currently student at Sekolah Tinggi Teknologi Bandung.
							<br />
							Interested in web development, V stuff, and 3D modeling especially
							about cars.
						</p>
						<Link href={'/about'}>
							<Button
								className='my-2 flex items-center'
								size={isDesktop ? 'md' : 'md'}
							>
								Learn more <MdChevronRight />
							</Button>
						</Link>
					</div>
				</div>
				<div className='my-4 hidden flex-col items-center justify-center md:flex-row-reverse md:gap-8'>
					<Img
						src='/images/kanon/kanon-avatar.webp'
						className='h-24 w-24 outline outline-mbaharip-light md:h-32 md:w-32'
						alt='花夢 Kanon'
						aspectRatio='portrait'
						useCredits
						credits='Illustrated by @ranceia'
					/>
					<div className='mt-8 mb-0 flex flex-col items-center md:my-2 md:items-start'>
						<h1 className='md:text-5xl'>花夢／Kanon</h1>
						<p className='max-w-screen-sm px-8 text-center md:px-0 md:text-start'>
							Currently student at Sekolah Tinggi Teknologi Bandung.
							<br />
							Interested in web development, V stuff, and 3D modeling especially
							about cars.
						</p>
						<Link href={'/about'}>
							<Button
								className='my-2 flex items-center'
								size={isDesktop ? 'md' : 'md'}
							>
								Learn more <MdChevronRight />
							</Button>
						</Link>
					</div>
				</div>
			</div>
			<LatestPost
				title='Latest blogs'
				postsLoading={isBlogsLoading}
				postsData={blogsResponse}
				postType='blog'
			/>
			<LatestPost
				title='Latest projects'
				postsLoading={isWorksLoading}
				postsData={worksResponse}
				postType='work'
			/>
		</MainLayout>
	);
};

export default Home;

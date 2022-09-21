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
import SectionLayout from '../components/Layout/SectionLayout';
import { useState } from 'react';
import ContentLayout from '../components/Layout/ContentLayout';

const Home: NextPage = () => {
	const [logoAnimationFinished, setLogoAnimationFinished] = useState(false);

	const { deviceType, isDesktop } = useDeviceType();
	const postLimit = 2;
	const {
		isLoading: isBlogsLoading,
		error: blogsError,
		response: blogsResponse,
	} = useFetch({
		method: 'GET',
		url: `/blogs?limit=${postLimit}&order=desc&orderBy=createdAt`,
	});
	const {
		isLoading: isWorksLoading,
		error: worksError,
		response: worksResponse,
	} = useFetch({
		method: 'GET',
		url: `/works?limit=${postLimit}&order=desc&orderBy=createdAt`,
	});

	return (
		<MainLayout>
			<HeaderLayout>
				<div>
					<LogoText
						size={'large'}
						color={'light'}
						animate={!logoAnimationFinished}
					/>
				</div>
				<span className='absolute bottom-0 right-4 hidden text-xs'>
					Logo by @RINYA_P
				</span>
			</HeaderLayout>
			<ContentLayout>
				<SectionHeader useDecoration>About</SectionHeader>
				<div className='md:px-12'>
					<SectionLayout delay={0.25}>
						<div className='my-4 flex w-full flex-col items-center justify-start md:flex-row md:gap-8'>
							<Img
								src='/images/me.webp'
								className='h-24 w-24 outline outline-mbaharip-light md:h-32 md:w-32'
								alt='Arief Rachmawan'
								aspectRatio='portrait'
							/>
							<div className='mt-8 mb-0 flex flex-col items-center md:my-2 md:items-start'>
								<h1 className='md:text-4xl'>Arief Rachmawan</h1>
								<p className='max-w-screen-sm text-center md:text-start'>
									Currently student at Sekolah Tinggi Teknologi Bandung.
									<br />
									Interested in web development, V stuff, and 3D modeling
									especially about cars.
								</p>
								<Link href={'/about'}>
									<Button className='my-2 flex items-center'>
										Learn more <MdChevronRight />
									</Button>
								</Link>
							</div>
						</div>
					</SectionLayout>
					<SectionLayout delay={0.5}>
						<div className='my-4 flex w-full flex-col-reverse items-center justify-end md:flex-row md:gap-8'>
							<div className='mt-8 mb-0 flex flex-col items-center md:my-2 md:items-end'>
								<h1 className='md:text-4xl'>花夢／Kanon</h1>
								<p className='max-w-screen-sm text-center md:text-end'>
									Mascot of mbaharip::projects.
								</p>
								<Link href={'/about'}>
									<Button className='my-2 flex items-center'>
										Learn more <MdChevronRight />
									</Button>
								</Link>
							</div>
							<Img
								src='/images/kanon/kanon-avatar.webp'
								className='h-24 w-24 outline outline-mbaharip-light md:h-32 md:w-32'
								alt='花夢 Kanon'
								aspectRatio='portrait'
								useCredits
								credits='Illustrated by @ranceia'
							/>
						</div>
					</SectionLayout>
				</div>
				<SectionLayout delay={0.75}>
					<LatestPost
						title='Latest blogs'
						postsLoading={isBlogsLoading}
						postsData={blogsResponse!}
						postType='blog'
					/>
				</SectionLayout>
				<SectionLayout delay={1}>
					<LatestPost
						title='Latest projects'
						postsLoading={isWorksLoading}
						postsData={worksResponse!}
						postType='work'
					/>
				</SectionLayout>
			</ContentLayout>
		</MainLayout>
	);
};

export default Home;

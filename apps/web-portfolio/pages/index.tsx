import type { NextPage } from 'next';
import Link from 'next/link';
import { MdChevronRight } from 'react-icons/md';
import { Button, LogoText } from 'ui';
import ContentLayout from '../components/Layout/ContentLayout';
import HeaderLayout from '../components/Layout/HeaderLayout';
import LatestPost from '../components/Layout/LatestPost';
import MainLayout from '../components/Layout/MainLayout';
import SectionLayout from '../components/Layout/SectionLayout';
import Img from '../components/Shared/Img';
import SectionHeader from '../components/Typography/SectionHeader';
import useFetch from '../hooks/useFetch';
import useLogoState from '../store/logoState';

const Home: NextPage = () => {
	const postLimit = 2;
	const {
		isLoading: isBlogsLoading,
		error: isBlogsError,
		response: blogsResponse,
	} = useFetch({
		method: 'GET',
		url: `/blogs?limit=${postLimit}&order=desc&orderBy=modifiedAt`,
	});
	const {
		isLoading: isWorksLoading,
		error: isWorksError,
		response: worksResponse,
	} = useFetch({
		method: 'GET',
		url: `/works?limit=${postLimit}&order=desc&orderBy=modifiedAt`,
	});

	const logoState = useLogoState((state) => state.isLogoLoaded);
	const logoStateDispatch = useLogoState((state) => state.setIsLogoLoaded);

	return (
		<MainLayout>
			<HeaderLayout>
				<div>
					<LogoText
						size='large'
						color='light'
						animate={!logoState}
						onAnimateEnd={() => {
							logoStateDispatch(true);
						}}
					/>
				</div>
				<span className='absolute bottom-0 right-4 hidden text-xs'>
					Logo by @RINYA_P
				</span>
			</HeaderLayout>
			<ContentLayout>
				<div className='hidden'>
					<SectionLayout order={1}>
						<SectionHeader useDecoration>About</SectionHeader>
						<SectionLayout order={2}>
							<div className='md:px-12'>
								<SectionLayout order={3}>
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
											<Link href='/about'>
												<Button className='my-2 flex items-center'>
													Learn more <MdChevronRight />
												</Button>
											</Link>
										</div>
									</div>
								</SectionLayout>
								<SectionLayout order={4}>
									<div className='my-4 flex w-full flex-col-reverse items-center justify-end md:flex-row md:gap-8'>
										<div className='mt-8 mb-0 flex flex-col items-center md:my-2 md:items-end'>
											<h1 className='md:text-4xl'>花夢／Kanon</h1>
											<p className='max-w-screen-sm text-center md:text-end'>
												Currently student at Sekolah Tinggi Teknologi Bandung.
											</p>
											<Link href='/about'>
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
						</SectionLayout>
					</SectionLayout>
				</div>
				<SectionLayout order={1}>
					<Img
						src='/images/me.webp'
						alt='Arief Rachmawan'
						rounded
						className='mx-auto mb-8 h-24 w-24 md:h-32 md:w-32'
					/>
					<p className='text-center'>
						Hello! I&apos;m <b>Arief Rachmawan</b>.
						<br />
						Currently student at Sekolah Tinggi Teknologi Bandung.
						<br />
						Interested in web development, V stuff, and 3D modeling especially
						about cars.
					</p>
					<div className='flex items-center justify-center gap-4'>
						<Link href='/about'>
							<Button
								className='my-2 flex items-center'
								size='md'
							>
								Learn more about me
							</Button>
						</Link>
					</div>
				</SectionLayout>
				<SectionLayout order={2}>
					<LatestPost
						title='Latest blogs'
						postsLoading={isBlogsLoading}
						postsError={isBlogsError}
						postsData={blogsResponse!}
						postType='blogs'
					/>
				</SectionLayout>
				<SectionLayout order={3}>
					<LatestPost
						title='Latest projects'
						postsLoading={isWorksLoading}
						postsError={isWorksError}
						postsData={worksResponse!}
						postType='works'
					/>
				</SectionLayout>
				<SectionLayout order={4}>
					<SectionHeader useDecoration>花夢／Kanon</SectionHeader>
					<Img
						src='/images/kanon/kanon-avatar.webp'
						alt='Kanon'
						rounded
						className='mx-auto mb-8 h-24 w-24 md:h-32 md:w-32'
						useCredits
						credits='Illustrated by @ranceia'
					/>
					<p className='text-center'>Mascot of mbaharip::projects.</p>
					<div className='flex items-center justify-center gap-4'>
						<Link href='/kanon'>
							<Button
								className='my-2 flex items-center'
								size='md'
							>
								Learn more about her
							</Button>
						</Link>
					</div>
				</SectionLayout>
			</ContentLayout>
		</MainLayout>
	);
};

export default Home;

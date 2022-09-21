import type { NextPage } from 'next';
import Link from 'next/link';
import { Button } from 'ui';
import MainLayout from '../components/Layout/MainLayout';
import HeaderLayout from '../components/Layout/HeaderLayout';
import ContentLayout from '../components/Layout/ContentLayout';
import SectionLayout from '../components/Layout/SectionLayout';
import SectionHeader from '../components/Typography/SectionHeader';
import Img from '../components/Shared/Img';
import useDeviceType from '../hooks/useDeviceType';

const Home: NextPage = () => {
	const { isDesktop } = useDeviceType();
	return (
		<MainLayout>
			<HeaderLayout>Header Layout</HeaderLayout>
			<ContentLayout>
				<SectionLayout delay={0.5}>
					<div>
						<SectionHeader useDecoration>About</SectionHeader>
						<SectionLayout delay={0.25}>
							<div className='my-4 flex flex-col items-center justify-center md:flex-row md:gap-8'>
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
										<Button
											className='my-2 flex items-center'
											size={isDesktop ? 'md' : 'md'}
										>
											Lorem
										</Button>
									</Link>
								</div>
							</div>
						</SectionLayout>
						<SectionLayout delay={0.5}>
							<div className='my-4 flex flex-col items-center justify-center md:flex-row-reverse md:gap-8'>
								<Img
									src='/images/kanon/kanon-avatar.webp'
									className='h-24 w-24 outline outline-mbaharip-light md:h-32 md:w-32'
									alt='花夢 Kanon'
									aspectRatio='portrait'
									useCredits
									credits='Illustrated by @ranceia'
								/>
								<div className='mt-8 mb-0 flex flex-col items-center md:my-2 md:items-end'>
									<h1 className='md:text-4xl'>花夢／Kanon</h1>
									<p className='max-w-screen-sm text-center md:text-end'>
										Mascot of mbaharip::projects.
									</p>
								</div>
							</div>
						</SectionLayout>
					</div>
				</SectionLayout>
			</ContentLayout>
		</MainLayout>
	);
};

export default Home;

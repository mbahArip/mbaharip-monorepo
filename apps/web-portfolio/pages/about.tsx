import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import MainLayout from '../components/Layout/MainLayout';
import HeaderLayout from '../components/Layout/HeaderLayout';
import PageHeader from '../components/Typography/PageHeader';
import ContentLayout from '../components/Layout/ContentLayout';
import SectionHeader from '../components/Typography/SectionHeader';
import SectionLayout from '../components/Layout/SectionLayout';
import Img from '../components/Shared/Img';

const timeline = [
	{
		year: '1998',
		title: 'Born',
		detail: '26 December',
	},
	{
		year: {
			start: '2015',
			end: '2017',
		},
		title: 'SMAN 6 Bandung',
		detail: 'High School Diploma',
	},
	{
		year: {
			start: '2019',
			end: 'Current',
		},
		title: 'Sekolah Tinggi Teknologi Bandung',
		detail: 'Bachelor of Computer Science',
	},
];
const experiences = [
	{
		year: {
			start: '2021 Aug',
			end: '2022 Feb',
		},
		title: 'Game development course and bootcamp',
		detail: 'Kampus Merdeka with Agate Academy',
		skill: '3D Modeling',
	},
	{
		year: {
			start: '2022 Feb',
			end: '2022 Jul',
		},
		title: 'How to be an Ideal Top Search React JS Front-End Engineer',
		detail: 'Kampus Merdeka with Alterra Academy',
		skill: 'React JS, GraphQL, Git, Bootstrap',
	},
];

const About: NextPage = () => (
	<MainLayout>
		<NextSeo title='About' />
		<HeaderLayout>
			<div className='relative h-full w-full'>
				<img
					src='https://cdnb.artstation.com/p/assets/images/images/022/251/361/large/arief-rachmawan-4-e.jpg?1574704505'
					alt='About'
					className='h-full w-full object-cover opacity-70'
				/>
				<div className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-mbaharip-dark via-transparent to-mbaharip-dark' />
				<PageHeader title='About' />
			</div>
		</HeaderLayout>
		<ContentLayout>
			<SectionLayout delay={0.25}>
				<div className='my-4 flex flex-col items-center justify-center md:flex-row md:gap-8'>
					<Img
						src='/images/me.webp'
						className='h-24 w-24 outline outline-mbaharip-light md:h-32 md:w-32'
						alt='Arief Rachmawan'
						aspectRatio='portrait'
					/>
					<div className='mt-8 mb-0 flex flex-col items-center md:my-2 md:items-start'>
						<h1 className='text-4xl md:text-4xl'>Arief Rachmawan</h1>
						<h2 className='text-xl md:text-2xl'>
							Frontend Developer - 3D Artist
						</h2>
					</div>
				</div>
			</SectionLayout>
			<SectionHeader useDecoration>About me</SectionHeader>
			<SectionLayout delay={0.5}>
				<p className='px-4 text-lg md:px-8 md:text-xl'>
					Hi, I&apos;m Arief Rachmawan, a Frontend Developer and 3D Artist from
					Indonesia.
					<br /> I&apos;m currently an active university student at{' '}
					<a
						href='https://sttbandung.ac.id/'
						target='_blank'
						rel='noreferrer'
						className='underline decoration-mbaharip-primary underline-offset-2'
					>
						Sekolah Tinggi Teknologi Bandung
					</a>
					.
					<br />
					<br />
					I love cars, design, and thing related to ACG (Anime, Comics, and
					Games).
					<br />
					When you combine it all, you would find{' '}
					<a
						href='https://www.wikipedia.org/wiki/itasha'
						target='_blank'
						rel='noreferrer'
						className='underline decoration-mbaharip-primary underline-offset-2'
					>
						Itasha
					</a>{' '}
					or Car with Anime sticker.
					<br />
					Actually i&apos;m one of main designer of{' '}
					<a
						href='https://www.facebook.com/NekoAllianceDesign/'
						target='_blank'
						rel='noreferrer'
						className='underline decoration-mbaharip-primary underline-offset-2'
					>
						Neko Alliance
					</a>
					, a small circle of itasha designer.
					<br />
					<br />
					I&apos;m actively playing APEX Legends and Genshin Impact. Feel free
					to add me on steam.
					<br />
					<span className='text-sm italic'>
						(You can find my steam and other account on my discord profile)
					</span>
				</p>
			</SectionLayout>
			<SectionHeader useDecoration>Timeline</SectionHeader>
			<SectionLayout delay={0.75}>
				<div className='my-4 flex flex-col px-4 md:px-8'>
					{timeline.map((item, index) => (
						<div
							className='flex h-20 gap-4'
							key={item.title}
						>
							<div
								className={`relative flex h-full w-1 items-center justify-center bg-mbaharip-light/75 ${
									index === 0 && 'rounded-t-lg'
								} ${index === timeline.length - 1 && 'rounded-b-lg'}`}
							>
								<div className='absolute h-4 w-4 rounded-full bg-mbaharip-primary' />
							</div>
							<div className='flex w-full items-center'>
								<div className='flex w-1/4 flex-col md:w-1/5'>
									{typeof item.year === 'object' ? (
										<>
											<span className='text-lg font-bold'>
												{item.year.start}
											</span>
											<span className='text-lg font-bold'>{item.year.end}</span>
										</>
									) : (
										<span className='text-lg font-bold'>{item.year}</span>
									)}
								</div>
								<div className='flex w-3/4 flex-col md:w-4/5'>
									<span className='text-xl font-bold'>{item.title}</span>
									<span className='text-sm'>{item.detail}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</SectionLayout>
			<SectionHeader useDecoration>Experiences</SectionHeader>
			<SectionLayout delay={1}>
				<ul className='flex list-disc flex-col gap-4 md:px-8'>
					{experiences.map((item) => (
						<li
							className='flex flex-col rounded-lg bg-mbaharip-light/10 px-2 py-2 md:px-4'
							key={item.title}
						>
							<h3 className='my-0 text-xl'>{item.title}</h3>
							<span>{item.detail}</span>
							<div className='flex w-full items-center justify-between'>
								<span className='text-sm'>
									Skills: <b>{item.skill}</b>
								</span>
								<span className='flex items-center gap-2 text-sm'>
									{item.year.start} - {item.year.end}
								</span>
							</div>
						</li>
					))}
				</ul>
			</SectionLayout>
		</ContentLayout>
	</MainLayout>
);

export default About;

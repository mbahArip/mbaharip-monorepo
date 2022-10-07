import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import ContentLayout from '../components/Layout/ContentLayout';
import HeaderLayout from '../components/Layout/HeaderLayout';
import MainLayout from '../components/Layout/MainLayout';
import SectionLayout from '../components/Layout/SectionLayout';
import Img from '../components/Shared/Img';
import PageHeader from '../components/Typography/PageHeader';
import SectionHeader from '../components/Typography/SectionHeader';

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
const pcSpecs = [
	{
		name: 'CPU',
		value: 'AMD Ryzen 5 3600',
	},
	{
		name: 'GPU',
		value: 'NVIDIA GeForce GTX 2060 Super',
	},
	{
		name: 'RAM',
		value: [
			{
				name: 'Kit 1',
				value: 'G.Skill Trident Z 2x16GB DDR4 3600MHz',
			},
			{
				name: 'Kit 2',
				value: 'Team Vulcan Z Z 2x8GB DDR4 3200MHz',
			},
		],
	},
	{
		name: 'Storage',
		value: [
			{
				name: 'SSD-1',
				value: 'Adata XPG SX8200 Pro M.2 NVMe 256GB',
			},
			{
				name: 'SSD-2',
				value: 'Apacer AS340 120GB',
			},
			{
				name: 'HDD',
				value: 'Western Digital Blue 4TB',
			},
		],
	},
	{
		name: 'PC Case',
		value: 'Tecware Nexus M',
	},
];
const workspaceItems = [
	{
		name: 'Main monitor',
		value: 'LG 25UM58-P 25" 21:9 UltraWide IPS Monitor',
	},
	{
		name: 'Secondary monitor',
		value: 'BENQ G610HDAL 16" 16:9 Full HD LED Monitor',
	},
	{
		name: 'Mouse',
		value: 'Logitech MX Master 3',
	},
	{
		name: 'Keyboard',
		value: 'Keychron K2 w/ 78g Gateron brown and Shirakawa Keycaps',
	},
	{
		name: 'Audio Interface',
		value: 'Behringer UMC22',
	},
	{
		name: 'Headphone',
		value: 'Audio Technica ATH-M40x',
	},
	{
		name: 'Webcam',
		value: 'NYK A95 Albatros',
	},
];

const About: NextPage = () => (
	<MainLayout>
		<NextSeo
			title='About'
			description='About me'
		/>
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
			<SectionLayout order={1}>
				<div className='my-4 flex flex-col items-center justify-center md:flex-row md:gap-8'>
					<Img
						src='/images/me.webp'
						className='h-24 w-24 md:h-32 md:w-32'
						alt='Arief Rachmawan'
						aspectRatio='square'
					/>
					<div className='mt-8 mb-0 flex flex-col items-center md:my-2 md:items-start'>
						<h1 className='text-4xl md:text-4xl'>Arief Rachmawan</h1>
						<h2 className='text-xl md:text-2xl'>
							Frontend Developer - 3D Artist
						</h2>
					</div>
				</div>
			</SectionLayout>

			<SectionLayout order={2}>
				<SectionHeader useDecoration>About me</SectionHeader>
				<SectionLayout order={3}>
					<p className='px-4 text-lg md:px-8 md:text-xl'>
						Hi, I&apos;m Arief Rachmawan, a Frontend Developer and 3D Artist
						from Indonesia.
						<br /> I&apos;m currently an active university student at{' '}
						<a
							href='https://sttbandung.ac.id/'
							target='_blank'
							rel='noreferrer'
							className='about-link'
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
							className='about-link'
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
							className='about-link'
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
			</SectionLayout>

			<SectionLayout order={4}>
				<SectionHeader useDecoration>Workspace</SectionHeader>
				<SectionLayout order={5}>
					<div className='flex flex-col gap-4 px-8'>
						<Img
							src='/images/workspace.webp'
							alt='Workspace'
							aspectRatio='landscape'
							className='mx-auto md:w-full'
						/>
						<SectionLayout order={6}>
							<div className='flex w-full flex-col items-start md:flex-row md:gap-8'>
								<div className='w-full md:w-2/6'>
									<SectionHeader>PC Specification</SectionHeader>
								</div>
								<ul className='flex w-full flex-col items-center text-sm md:w-4/6 md:text-base'>
									{pcSpecs.map((spec) => (
										<li
											key={spec.name}
											className='mx-auto flex w-full items-center justify-center'
										>
											{typeof spec.value === 'string' ? (
												<>
													<span className='w-1/4 font-bold'>{spec.name}</span>
													<span className='w-3/4 whitespace-nowrap'>
														{spec.value}
													</span>
												</>
											) : (
												<div className='flex w-full flex-col'>
													{spec.value.map((storageValue, index) => (
														<div
															className='flex w-full items-center'
															key={index}
														>
															<span
																className='w-1/4 font-bold'
																key={index}
															>
																{index === 0 ? spec.name : ''}
															</span>
															<span className='w-3/4 whitespace-nowrap'>
																{storageValue.value}
															</span>
														</div>
													))}
												</div>
											)}
										</li>
									))}
								</ul>
							</div>
						</SectionLayout>

						<SectionLayout order={7}>
							<div className='flex w-full flex-col items-start md:flex-row md:gap-8'>
								<div className='w-full md:w-2/6'>
									<SectionHeader>Workspace Equipment</SectionHeader>
								</div>
								<ul className='flex w-full flex-col items-center justify-center text-sm md:w-4/6 md:text-base'>
									{workspaceItems.map((item) => (
										<li
											key={item.name}
											className='mx-auto flex w-full items-center justify-center'
										>
											<span className='w-1/4 font-bold'>{item.name}</span>
											<span className='w-3/4'>{item.value}</span>
										</li>
									))}
								</ul>
							</div>
						</SectionLayout>
					</div>
				</SectionLayout>
			</SectionLayout>

			<SectionLayout order={8}>
				<SectionHeader useDecoration>Timeline</SectionHeader>
				<SectionLayout order={9}>
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
												<span className='text-lg font-bold'>
													{item.year.end}
												</span>
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
			</SectionLayout>

			<SectionLayout order={10}>
				<SectionHeader useDecoration>Experiences</SectionHeader>
				<SectionLayout order={11}>
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
			</SectionLayout>
		</ContentLayout>
	</MainLayout>
);

export default About;

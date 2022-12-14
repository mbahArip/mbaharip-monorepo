import Link from 'next/link';
import { FC } from 'react';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import SectionLayout from '../Layout/SectionLayout';

const contacs = [
	{
		name: 'support@mbaharip.me',
		link: 'mailto:support@mbaharip.me',
		icon: <MdEmail />,
	},
	{
		name: 'mbaharip',
		link: 'https://www.github.com/mbaharip',
		icon: <FaGithub />,
	},
	{
		name: '@mbaharip_',
		link: 'https://www.twitter.com/mbaharip_',
		icon: <FaTwitter />,
	},
	{
		name: 'mbahArip#9552',
		link: 'https://discord.com/users/652155604172931102',
		icon: <FaDiscord />,
	},
];

const Footer: FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className='mx-auto flex h-fit w-screen flex-col items-center py-2'>
			<div className='divider w-full max-w-screen-md border-mbaharip-primary' />
			<SectionLayout order={0}>
				<div className='my-2 flex w-full flex-col items-start justify-center gap-4 px-8 md:flex-row'>
					<div className='flex w-full flex-col items-start justify-center md:items-center md:text-center'>
						<h1>Contact</h1>
						<span>You can contact me via:</span>
						<div className='flex flex-col flex-wrap gap-1 md:flex-row md:gap-4'>
							{contacs.map((contact) => (
								<Link
									key={contact.name}
									href={contact.link}
								>
									<a
										className='flex items-center gap-1'
										target='_blank'
										rel='noreferrer'
									>
										{contact.icon}
										{contact.name}
									</a>
								</Link>
							))}
						</div>
						<a
							href='https://links.mbaharip.me/'
							target='_blank'
							rel='noreferrer'
						>
							More links
						</a>
					</div>
				</div>
			</SectionLayout>
			<span className='mt-4 text-xs md:text-sm'>
				© {currentYear} mbahArip. All rights reserved.
			</span>
		</div>
	);
};

export default Footer;

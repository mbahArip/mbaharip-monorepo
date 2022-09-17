import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';
import SectionHeader from '../Typography/SectionHeader';

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

type FooterItemProps = {
	title: string;
	children: ReactNode;
};

const FooterItem: FC<FooterItemProps> = ({ title, children }) => {
	return (
		<div className='flex max-w-xs flex-col items-start justify-center'>
			<SectionHeader>{title}</SectionHeader>
			<div className='flex flex-col'>{children}</div>
		</div>
	);
};

const Footer: FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className='mx-auto flex h-fit w-screen flex-col items-center py-2'>
			<div className='divider w-full max-w-screen-md border-mbaharip-primary' />
			<div className='my-2 flex w-full max-w-screen-md flex-col items-start justify-center gap-4 px-8 md:flex-row md:gap-64 '>
				<FooterItem title='Contact'>
					You can contact me via:
					<div className='flex flex-col flex-wrap gap-1'>
						{contacs.map((contact) => (
							<Link
								key={contact.name}
								href={contact.link}
								passHref
							>
								<a
									className='flex items-center gap-1'
									target={'_blank'}
								>
									{contact.icon}
									{contact.name}
								</a>
							</Link>
						))}
					</div>
				</FooterItem>
				<FooterItem title='Quick links'>
					<span>Lorem</span>
					<span>Ipsum</span>
				</FooterItem>
			</div>
			<span className='mt-4'>
				© {currentYear} mbahArip. All rights reserved.
			</span>
		</div>
	);
};

export default Footer;

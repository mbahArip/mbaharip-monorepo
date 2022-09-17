import { FC, useEffect, useState } from 'react';
import { LogoMark } from 'ui';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MdOutlineMenu, MdOutlineClose, MdLaunch } from 'react-icons/md';
import { useRouter } from 'next/router';
import {
	mobileMenuContainer,
	mobileMenuList,
	mobileMenuItem,
	mobileHamburger,
} from './navbar.variants';

const menuLinks = [
	{
		name: 'Home',
		url: '/',
	},
	{
		name: 'Blogs',
		url: '/blogs',
	},
	{
		name: 'Works',
		url: '/works',
	},
	{
		name: 'About',
		url: '/about',
	},
	{
		name: '花夢',
		url: '/kanon',
	},
	{
		name: 'Store',
		url: 'https://store.mbaharip.me',
		external: true,
	},
];

const Navbar: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const router = useRouter();
	useEffect(() => {
		setIsMenuOpen(false);
	}, [router.pathname]);

	return (
		<>
			<div className='fixed z-[1000] flex h-12 w-screen bg-mbaharip-dark/75 shadow-md shadow-mbaharip-dark backdrop-blur md:h-16 md:bg-mbaharip-dark/80'>
				{/* Mobile */}
				<div className='flex w-full items-center justify-between px-4 md:hidden'>
					<LogoMark
						size='small'
						color='light'
					/>
					<div
						className='aspect-square relative right-4 grid cursor-pointer place-items-center rounded'
						onClick={() => {
							setIsMenuOpen(!isMenuOpen);
						}}
					>
						<motion.div
							initial={'init'}
							animate={isMenuOpen ? 'out' : 'in'}
							variants={mobileHamburger}
							className='absolute'
						>
							<MdOutlineMenu
								className='text-mbaharip-light'
								size={28}
							/>
						</motion.div>

						<motion.div
							initial={'init'}
							animate={isMenuOpen ? 'in' : 'out'}
							variants={mobileHamburger}
							className='absolute'
						>
							<MdOutlineClose
								className='text-mbaharip-light'
								size={28}
							/>
						</motion.div>
					</div>
				</div>
				{/* Desktop */}
				<div className='mx-auto hidden w-full max-w-screen-xl items-center justify-between md:flex'>
					<LogoMark
						size='xsmall'
						color='light'
					/>
					<div className='flex'>
						{menuLinks.map((link, index) => (
							<Link
								href={link.url}
								key={`desktop-menu-link-${index}`}
							>
								<a
									className={`flex cursor-pointer items-center gap-1 px-4  py-2 text-xl transition hover:opacity-100 ${
										router.pathname === link.url
											? 'font-bold text-mbaharip-primary opacity-100'
											: 'font-normal text-mbaharip-light opacity-75 hover:text-mbaharip-light-hover'
									}`}
									target={link.external ? '_blank' : ''}
								>
									{link.external && <MdLaunch size={12} />}
									{link.name}
								</a>
							</Link>
						))}
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<motion.div
				className={`fixed left-0 top-0 z-[999] h-screen w-screen flex-col items-start justify-center bg-mbaharip-dark md:hidden`}
				animate={isMenuOpen ? 'in' : 'out'}
				variants={mobileMenuContainer}
			>
				<motion.ul variants={mobileMenuList}>
					{menuLinks.map((link, index) => {
						return (
							<Link
								href={link.url}
								key={`${index}`}
							>
								<motion.li
									key={`mobile-menu-item-${index}`}
									className='my-8 cursor-pointer'
									variants={mobileMenuItem}
									onClick={() => {
										if (router.pathname === link.url) {
											setIsMenuOpen(false);
										}
									}}
								>
									<a
										className={`flex w-screen items-center gap-1 px-16 text-3xl ${
											router.pathname === link.url
												? 'font-bold text-mbaharip-primary'
												: 'font-normal text-mbaharip-light'
										}`}
										target={link.external ? '_blank' : ''}
									>
										{link.external && <MdLaunch size={16} />}
										{link.name}
									</a>
								</motion.li>
							</Link>
						);
					})}
				</motion.ul>
			</motion.div>
		</>
	);
};

export default Navbar;

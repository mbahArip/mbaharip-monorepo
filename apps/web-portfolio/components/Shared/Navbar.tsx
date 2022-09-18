import { FC, useEffect, useState } from 'react';
import { LogoMark } from 'ui';
import { motion, useAnimationControls } from 'framer-motion';
import Link from 'next/link';
import { MdOutlineMenu, MdOutlineClose, MdLaunch } from 'react-icons/md';
import { useRouter } from 'next/router';
import {
	mobileMenuContainer,
	mobileMenuList,
	mobileMenuItem,
	mobileHamburger,
} from './Navbar.variants';

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
						className='aspect-square relative right-4 grid place-items-center rounded'
						onClick={() => {
							setIsMenuOpen(!isMenuOpen);
						}}
					>
						<motion.div
							initial={'init'}
							animate={isMenuOpen ? 'out' : 'in'}
							variants={mobileHamburger}
							className='absolute'
							key={'menu-open'}
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
							key={'menu-close'}
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
					<Link
						href={'/'}
						passHref
					>
						<div>
							<LogoMark
								size='xsmall'
								color='light'
							/>
						</div>
					</Link>
					<div className='flex'>
						{menuLinks.map((link, index) => (
							<Link
								href={link.url}
								key={`desktop-menu-link-${index}`}
							>
								<a
									className={`flex items-center gap-1 px-4  py-2 text-xl transition hover:opacity-100 ${
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
				className={`fixed z-[999] flex h-screen w-screen flex-col items-start justify-center bg-mbaharip-dark md:hidden`}
				// initial={{
				// 	opacity: 0,
				// 	x: -100,
				// }}
				animate={isMenuOpen ? 'in' : 'out'}
				variants={mobileMenuContainer}
				key={'mobile-menu-container'}
			>
				<motion.ul
					variants={mobileMenuList}
					key={'mobile-menu-list'}
				>
					{menuLinks.map((link, index) => {
						return (
							<Link
								href={link.url}
								key={`${index}`}
							>
								<motion.li
									key={`mobile-menu-item-${index}`}
									className='my-8'
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

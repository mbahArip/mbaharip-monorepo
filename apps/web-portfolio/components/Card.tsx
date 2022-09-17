import Link from 'next/link';
import { FC, Fragment } from 'react';
import { Button } from 'ui';
import useDeviceType from '../hooks/useDeviceType';
import { capitalize } from '../utils/capitalize';
import { formatDate } from '../utils/formatDate';
import Img from './Shared/Img';

type BlogPostProps = {
	id: string;
	title: string;
	content: string;
	summary: string;
	thumbnail: string;
	published: boolean;
	tags: string[];
	views: number;
	createdAt: Date | string;
	modifiedAt: Date | string;
};
type WorkPostProps = {
	id: string;
	title: string;
	summary: string;
	images: string[];
	thumbnail: string;
	tags: string[];
	views: number;
	published: boolean;
	createdAt: Date | string;
	modifiedAt: Date | string;
};

type CardProps = {
	data: BlogPostProps | WorkPostProps;
	type: 'blog' | 'work';
};

const oldCard: FC<CardProps> = ({ data, type }) => {
	const { isDesktop } = useDeviceType();
	return (
		<Link
			href={`/${type}/${data.id}`}
			passHref
			prefetch={false}
		>
			<div className='flex h-28 w-full cursor-pointer overflow-hidden rounded-lg bg-mbaharip-light/25 transition hover:translate-x-2'>
				<Img
					src={'https://picsum.photos/200/300'}
					alt={data.title}
					className='h-28 w-28 object-cover'
				/>
				<div className='flex w-full flex-col justify-between py-1 px-2'>
					<div className='flex items-center justify-between'>
						<h1 className='m-0 w-auto text-lg line-clamp-1'>{data.title}</h1>
						<span className='hidden text-xs md:block'>
							{formatDate(data.modifiedAt as Date, false, true)}
						</span>
					</div>
					<p className={`${isDesktop ? 'text-sm' : 'text-xs'} line-clamp-2`}>
						{data.summary}
					</p>
					<div className='flex gap-1'>
						{data.tags.map((tag, index) => {
							return (
								<Fragment key={tag}>
									{index < (isDesktop ? 3 : 2) && (
										<Link
											href={`/tags/${tag}`}
											passHref
											prefetch={false}
										>
											<Button
												size='xs'
												variant='outline'
											>
												{tag}
											</Button>
										</Link>
									)}
								</Fragment>
							);
						})}
					</div>
				</div>
			</div>
		</Link>
	);
};
const Card: FC<CardProps> = ({ data, type }) => {
	return (
		<div className='flex h-full w-screen flex-col items-center justify-between gap-4 px-8 text-center md:w-1/3 md:px-4'>
			<Img
				src={'https://picsum.photos/512/512'}
				alt={data.title}
				className={'h-40 w-72 outline outline-mbaharip-light md:h-32 md:w-96'}
			/>
			<div className='flex w-full flex-col items-center justify-center'>
				<h2 className='h-auto text-xl tracking-wider line-clamp-1'>
					{capitalize(data.title)}
				</h2>
				<Link
					href={`/${type}/${data.id}`}
					passHref
					prefetch={false}
				>
					<Button
						size='md'
						variant='primary'
						className='w-full'
					>
						Read More
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Card;

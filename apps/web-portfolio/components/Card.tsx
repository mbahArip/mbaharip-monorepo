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

const Card: FC<CardProps> = ({ data, type }) => {
	const { isDesktop } = useDeviceType();
	return (
		<div className='group flex h-28 w-full flex-grow overflow-hidden rounded-lg bg-mbaharip-light/10 transition hover:bg-mbaharip-light/20'>
			<Link
				href={`/${type}/${data.id}`}
				passHref
				prefetch={false}
			>
				<div>
					<Img
						src={data.thumbnail}
						alt={data.title}
						className='h-28 w-28 object-cover opacity-75 transition group-hover:opacity-100'
						aspectRatio='square'
					/>
				</div>
			</Link>
			<div className='mx-auto flex w-3/4 flex-1 flex-col justify-between py-1 px-2'>
				<div className='flex items-center justify-between'>
					<Link
						href={`/${type}/${data.id}`}
						passHref
						prefetch={false}
					>
						<a>
							<h1 className='m-0 w-auto flex-shrink text-lg line-clamp-1'>
								{capitalize(data.title)}
							</h1>
						</a>
					</Link>
					<span className='hidden flex-grow whitespace-nowrap text-end text-xs md:block'>
						{formatDate(data.modifiedAt as Date, false, true)}
					</span>
				</div>
				<p className={`${isDesktop ? 'text-sm' : 'text-xs'} line-clamp-2`}>
					{data.summary}
				</p>
				<div className='flex gap-1'>
					{data.tags.map((tag, index) => (
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
					))}
				</div>
			</div>
		</div>
	);
};

export default Card;

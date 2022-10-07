import Link from 'next/link';
import { FC } from 'react';
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
	type: 'blogs' | 'works';
};

const Card: FC<CardProps> = ({ data, type }) => (
	<Link
		href={`/${type}/${data.id}`}
		className='h-full w-full'
		passHref
	>
		<div
			key={data.id}
			className='group flex h-fit w-full flex-col items-center justify-start transition hover:bg-mbaharip-light/5'
		>
			<Img
				src={data.thumbnail}
				alt={data.title}
				className='h-48 w-full rounded-lg object-cover opacity-75 transition group-hover:opacity-100'
			/>
			<div className='mt-2 flex w-full flex-col items-start justify-start p-2'>
				<h2 className='font-semibold text-mbaharip-light group-hover:text-mbaharip-primary'>
					{data.title}
				</h2>
				<div className='flex w-full flex-col items-start justify-start'>
					<p className='cursor-pointer text-sm font-medium text-mbaharip-light/50 line-clamp-2'>
						{data.summary}
					</p>
					<span className='text-xs font-medium text-mbaharip-light/25'>
						{formatDate(data.createdAt as Date, false, true)}
					</span>
					<div className='flex w-full flex-wrap gap-2 p-1'>
						{data.tags.map((tag: any) => (
							<Link
								href={`/tag/${tag}`}
								key={tag}
								passHref
							>
								<span
									key={tag}
									className='px-1 py-0.5 text-xs font-medium text-mbaharip-light/75 hover:text-mbaharip-light-hover'
								>
									# {tag}
								</span>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	</Link>
);

export default Card;

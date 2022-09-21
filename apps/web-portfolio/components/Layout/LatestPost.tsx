import { AxiosResponse, AxiosError } from 'axios';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';
import { Button, LogoMark } from 'ui';
import useDeviceType from '../../hooks/useDeviceType';
import Card from '../Card';
import SectionHeader from '../Typography/SectionHeader';
import SectionLayout from './SectionLayout';

const loadingVariants: Variants = {
	init: {
		opacity: 0,
	},
	in: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			delay: 1,
		},
	},
	out: {
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
};

type LatestPostProps = {
	title: string;
	postsLoading: boolean;
	postsError: AxiosError | any;
	postsData: AxiosResponse;
	postType: 'blog' | 'work';
};

const LatestPost: FC<LatestPostProps> = ({
	title,
	postsLoading,
	postsError,
	postsData,
	postType,
}) => {
	const { isDesktop } = useDeviceType();

	return (
		<div className='my-2 h-fit md:my-4'>
			<div className='flex w-full items-end justify-between'>
				<SectionHeader useDecoration>{title}</SectionHeader>
				<Link
					href={`/${postType}`}
					passHref
				>
					<Button
						size={isDesktop ? 'md' : 'sm'}
						variant='link'
					>
						See more...
					</Button>
				</Link>
			</div>
			<div className='my-4 flex w-full flex-col flex-wrap items-center justify-center gap-y-4 px-4 md:flex-row md:px-16'>
				{postsLoading ? (
					<motion.div
						initial='init'
						animate='in'
						exit='out'
						variants={loadingVariants}
					>
						<LogoMark
							size='small'
							color='light'
							animate
						/>
					</motion.div>
				) : (
					<>
						{postsData?.data?.data?.length > 0 ? (
							<>
								{postsData.data?.data?.map((post: any, index: number) => (
									<SectionLayout
										delay={0.25 * index}
										key={index}
									>
										<Card
											data={post}
											type={postType}
											key={index}
										/>
									</SectionLayout>
								))}
							</>
						) : (
							<>
								{postsError ? (
									<h2 className='my-4 text-lg text-red-500'>
										Fetch post failed.
									</h2>
								) : (
									<h2 className='my-4 text-lg'>There are no posts found.</h2>
								)}
							</>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default LatestPost;

import { AxiosResponse } from 'axios';
import Link from 'next/link';
import { FC } from 'react';
import { Button, LogoMark } from 'ui';
import useDeviceType from '../../hooks/useDeviceType';
import Card from '../Card';
import SectionHeader from '../Typography/SectionHeader';

type LatestPostProps = {
	title: string;
	postsLoading: boolean;
	postsData: AxiosResponse;
	postType: 'blog' | 'work';
};

const LatestPost: FC<LatestPostProps> = ({
	title,
	postsLoading,
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
			<div className='my-4 flex w-full flex-col flex-wrap items-start justify-center gap-y-4 md:flex-row'>
				{postsLoading ? (
					<LogoMark
						size='small'
						color='light'
						animate
					/>
				) : (
					<>
						{postsData.data?.data?.length > 0 ? (
							<>
								{postsData.data?.data?.map((post: any, index: number) => (
									<Card
										key={`${post.id}`}
										data={post}
										type={postType}
									/>
								))}
							</>
						) : (
							<h2 className='my-4 text-lg'>There are no posts found.</h2>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default LatestPost;

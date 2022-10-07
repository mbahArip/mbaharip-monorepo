import { AxiosError, AxiosResponse } from 'axios';
import Link from 'next/link';
import { FC } from 'react';
import { Button } from 'ui';
import useDeviceType from '../../hooks/useDeviceType';
import Card from '../Card';
import LoadingView from '../Shared/LoadingView';
import SectionHeader from '../Typography/SectionHeader';
import SectionLayout from './SectionLayout';

type LatestPostProps = {
	title: string;
	postsLoading: boolean;
	postsError: AxiosError | any;
	postsData: AxiosResponse;
	postType: 'blogs' | 'works';
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
			<div className='my-4 flex w-full flex-col flex-wrap items-center justify-center px-4 md:flex-row md:px-16'>
				{postsLoading ? (
					<LoadingView />
				) : (
					<div className='grid w-full grid-cols-1 place-items-start gap-4 md:grid-cols-2'>
						{postsData?.data?.data?.length > 0 ? (
							<>
								{postsData.data?.data?.map((post: any, index: number) => (
									<SectionLayout
										order={0}
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
					</div>
				)}
			</div>
		</div>
	);
};

export default LatestPost;

import axios from 'axios';
import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import { FC } from 'react';
import HeaderLayout from '../../components/Layout/HeaderLayout';
import MainLayout from '../../components/Layout/MainLayout';
import Img from '../../components/Shared/Img';
import PageHeader from '../../components/Typography/PageHeader';

type BlogPostData = {
	comments: object[];
	content: string;
	createdAt: Date;
	id: string;
	modifiedAt: Date;
	published: boolean;
	summary: string;
	tags: string[];
	thumbnail: string;
	title: string;
	views: number;
};
type BlogPostProps = {
	data: BlogPostData;
};

const BlogPost: FC<BlogPostProps> = ({ data }) => (
	<MainLayout>
		<NextSeo
			title={data.title}
			description={data.summary}
		/>
		<HeaderLayout height='large'>
			<div className='relative h-full w-full'>
				<div className='absolute top-0 left-0 h-full w-full'>
					<Img
						src={data.thumbnail}
						alt={data.title}
						className='h-full w-full object-cover'
					/>
				</div>
				<div className='absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-r from-mbaharip-dark via-transparent to-mbaharip-dark' />
				<PageHeader title={data.title} />
			</div>
		</HeaderLayout>
	</MainLayout>
);

// Get server side
export const getServerSideProps: GetServerSideProps = async (context) => {
	const { params } = context;
	try {
		const res = await axios.get(
			process.env.NODE_ENV === 'development'
				? `http://localhost:8000/v1/blogs/${params?.id}`
				: `https://api.mbaharip.me/v1/blogs/${params?.id}`,
		);
		const { data } = res.data;
		return {
			props: { data },
		};
	} catch (error: any) {
		const status = error.response?.status;
		if (status === 404) {
			return {
				notFound: true,
			};
		}
		return {
			redirect: {
				destination: '/500',
				permanent: false,
			},
		};
	}
};

export default BlogPost;

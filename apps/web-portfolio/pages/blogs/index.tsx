import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useCallback, useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import Card from '../../components/Card';
import ContentLayout from '../../components/Layout/ContentLayout';
import HeaderLayout from '../../components/Layout/HeaderLayout';
import MainLayout from '../../components/Layout/MainLayout';
import SectionLayout from '../../components/Layout/SectionLayout';
import Pagination from '../../components/Pagination';
import ErrorView from '../../components/Shared/ErrorView';
import LoadingView from '../../components/Shared/LoadingView';
import PageHeader from '../../components/Typography/PageHeader';
import useFetch from '../../hooks/useFetch';

const Blogs: NextPage = () => {
	const PAGE_LIMIT = 6;

	const [searchValue, setSearchValue] = useState('');
	const [debouncedSearch, setDebouncedSearch] = useState('');
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		if (!searchValue) return setDebouncedSearch('');

		const timer = setTimeout(() => {
			setDebouncedSearch(searchValue);
			setPage(1);
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [searchValue]);

	const {
		isLoading,
		error,
		response: data,
	} = useFetch({
		method: 'GET',
		url: `/blogs?&order=desc&orderBy=createdAt&query=${debouncedSearch}&page=${page}&itemsPerPage=${PAGE_LIMIT}`,
	});
	// Get total pages
	useEffect(() => {
		if (data?.data.details.totalPages)
			setTotalPages(data?.data.details.totalPages);
	}, [data, debouncedSearch]);

	// Handle pagination
	const handlePagination = useCallback(
		(pageDestination: number) => {
			if (pageDestination < 1 || pageDestination > totalPages) return;
			setPage(pageDestination);
			if (typeof window !== 'undefined') window.scrollTo(0, 0);
		},
		[totalPages],
	);

	return (
		<MainLayout>
			<NextSeo
				title='Blogs'
				description='Blogs about web development, programming, and other stuff.'
			/>
			<HeaderLayout>
				<div className='relative h-full w-full'>
					<img
						src='https://cdnb.artstation.com/p/assets/images/images/021/360/513/large/arief-rachmawan-rinbd7.jpg?1571361435'
						alt='Blogs'
						className='h-full w-full object-cover opacity-70'
					/>
					<div className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-mbaharip-dark via-transparent to-mbaharip-dark' />
					<PageHeader title='Blogs' />
				</div>
			</HeaderLayout>
			<ContentLayout>
				{/* Search and filter */}
				<SectionLayout order={1}>
					<div className='flex w-full flex-col gap-2'>
						<div className='relative flex w-full flex-col items-center justify-center'>
							<input
								type='text'
								placeholder='Search'
								value={searchValue}
								onChange={(e) => setSearchValue(e.target.value)}
								className='w-full rounded-md border border-mbaharip-light/25 bg-mbaharip-light/5 py-1 pl-2 pr-8 text-lg text-mbaharip-light focus:border-transparent focus:outline-none focus:ring-2 focus:ring-mbaharip-light/50'
							/>
							<motion.button
								className={`absolute right-2 grid h-6 w-6 place-items-center rounded-full bg-mbaharip-light/25 text-mbaharip-light ${
									searchValue ? 'pointer-events-auto' : 'pointer-events-none'
								}`}
								initial={{ opacity: 0, rotate: 180 }}
								animate={{
									opacity: searchValue ? 1 : 0,
									rotate: searchValue ? 0 : -180,
								}}
								transition={{ duration: 0.1 }}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								onClick={() => setSearchValue('')}
							>
								<MdClose />
							</motion.button>
						</div>
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={
								debouncedSearch
									? {
											opacity: 1,
											y: 0,
									  }
									: {
											opacity: 0,
											y: -10,
									  }
							}
							className='text-lg'
						>
							Search result for &quot;{debouncedSearch}&quot;
						</motion.div>
					</div>
				</SectionLayout>
				{/* Blog list */}
				<SectionLayout order={2}>
					<>
						{isLoading && <LoadingView />}
						{error && !isLoading && (
							<ErrorView
								error={error}
								className='md:col-span-2'
							/>
						)}
						{data && !isLoading && (
							<motion.div
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.25 }}
								className='mb-8 grid w-full grid-cols-1 place-items-start gap-4 md:grid-cols-2'
							>
								{data.data.data.map((blog: any) => (
									<Card
										data={blog}
										key={blog.id}
										type='blogs'
									/>
								))}
							</motion.div>
						)}
					</>
					{!isLoading && !error && (
						<Pagination
							currentPage={page}
							totalPages={totalPages}
							onPageChange={handlePagination}
						/>
					)}
				</SectionLayout>
			</ContentLayout>
		</MainLayout>
	);
};

export default Blogs;

import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { useState } from 'react';
import ContentLayout from '../components/Layout/ContentLayout';
import HeaderLayout from '../components/Layout/HeaderLayout';
import MainLayout from '../components/Layout/MainLayout';
import SearchInput from '../components/SearchInput';
import PageHeader from '../components/Typography/PageHeader';
import SectionHeader from '../components/Typography/SectionHeader';

// TODO: Fetch data from database

const Home: NextPage = () => {
	const [search, setSearch] = useState('');
	const [debouncedSearch, setDebouncedSearch] = useState('');
	// const [searchResults, setSearchResults] = useState([]);
	// const [isSearchLoading, setIsSearchLoading] = useState(false);

	// useEffect(() => {
	// 	const { isLoading, response } = useFetch({
	// 		method: 'GET',
	// 		url: `/blogs?limit=${5}&order=desc&orderBy=createdAt&query=${debouncedSearch}`,
	// 	});
	// }, [debouncedSearch]);
	// const { isLoading, error, response } = useFetch({
	// 	method: 'GET',
	// 	url: `/blogs?limit=${5}&order=desc&orderBy=createdAt`,
	// });

	return (
		<MainLayout>
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
				<SectionHeader useDecoration>Search</SectionHeader>
				<SearchInput
					searchState={{ search, setSearch }}
					debouncedState={{ debouncedSearch, setDebouncedSearch }}
				/>
				<SectionHeader useDecoration>Posts</SectionHeader>
				{debouncedSearch && (
					<motion.h1
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 20, opacity: 0 }}
						transition={{ duration: 0.5 }}
						className='text-center text-2xl'
					>
						{debouncedSearch}
					</motion.h1>
				)}
				{/* <div className='mt-8 flex flex-col items-center justify-center'>
					<h1 className='text-4xl'>No blogs found</h1>
					<h2 className='text-xl'>Try searching for something else</h2>
				</div> */}
			</ContentLayout>
		</MainLayout>
	);
};

export default Home;

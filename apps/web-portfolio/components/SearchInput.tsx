import { motion } from 'framer-motion';
import { Dispatch, FC, SetStateAction, useCallback, useEffect } from 'react';
import { MdClose } from 'react-icons/md';

type SearchInputProps = {
	searchState: {
		search: string;
		setSearch: Dispatch<SetStateAction<string>>;
	};
	debouncedState: {
		debouncedSearch: string;
		setDebouncedSearch: Dispatch<SetStateAction<string>>;
	};
};

const SearchInput: FC<SearchInputProps> = ({ searchState, debouncedState }) => {
	const { search, setSearch } = searchState;
	const { setDebouncedSearch } = debouncedState; // Wait after x Second, then update

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (search === '') {
			setDebouncedSearch('');
		} else {
			timer = setTimeout(() => {
				setDebouncedSearch(search);
			}, 500);
		}
		return () => {
			clearTimeout(timer);
		};
	}, [search, setDebouncedSearch]);

	const handleSearch = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setSearch(e.target.value);
		},
		[setSearch],
	);

	return (
		<div className='relative flex w-full flex-col justify-center'>
			<div className='relative flex w-full items-center'>
				<input
					type='text'
					placeholder='Search'
					value={search}
					onChange={handleSearch}
					className='w-full rounded-md border border-mbaharip-light py-1 pl-2 pr-8 text-lg text-mbaharip-dark focus:border-transparent focus:outline-none focus:ring-2 focus:ring-mbaharip-light'
				/>
				<motion.button
					className='absolute right-2 grid h-6 w-6 place-items-center rounded-full bg-mbaharip-dark text-mbaharip-light'
					initial={{ opacity: 0, rotate: 180 }}
					animate={{ opacity: search ? 1 : 0, rotate: search ? 0 : -180 }}
					transition={{ duration: 0.1 }}
					whileHover={{ scale: 1.1 }}
					onClick={() => setSearch('')}
				>
					<MdClose />
				</motion.button>
			</div>
		</div>
	);
};

export default SearchInput;

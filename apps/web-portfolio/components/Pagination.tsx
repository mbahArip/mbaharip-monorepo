import { FC, useMemo, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Button } from 'ui';

type PaginationProps = {
	currentPage: number;
	totalPages: number;
	siblingCount?: number;
	onPageChange: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({
	currentPage,
	totalPages,
	siblingCount = 2,
	onPageChange,
}) => {
	const [pagesArray, setPagesArray] = useState<number[]>([]);

	useMemo(() => {
		const pageStart = currentPage - siblingCount;
		const pageEnd = currentPage + siblingCount;
		const pages = [];

		for (let i = pageStart; i <= pageEnd; i++) {
			if (i > 0 && i <= totalPages) pages.push(i);
		}
		setPagesArray(pages);
	}, [currentPage, siblingCount, totalPages]);

	return (
		<div className='mx-auto flex items-center justify-center gap-1 md:col-span-2'>
			{currentPage !== 1 && (
				<Button
					variant='ghost'
					onClick={(e) => {
						e.preventDefault();
						onPageChange(1);
					}}
					className='text-mbaharip-light hover:bg-mbaharip-light/5 focus:outline-none active:bg-mbaharip-light/10'
				>
					<BiChevronLeft />
				</Button>
			)}
			{pagesArray.map((pageItem) => (
				<Button
					key={pageItem}
					variant='ghost'
					onClick={(e) => {
						e.preventDefault();
						onPageChange(pageItem);
					}}
					className={`${
						currentPage === pageItem
							? 'bg-mbaharip-primary text-white hover:bg-mbaharip-primary active:bg-mbaharip-primary'
							: 'text-mbaharip-light hover:bg-mbaharip-light/5 active:bg-mbaharip-light/10'
					} focus:outline-none`}
				>
					{pageItem}
				</Button>
			))}
			{currentPage !== totalPages && (
				<Button
					variant='ghost'
					onClick={(e) => {
						e.preventDefault();
						onPageChange(totalPages);
					}}
					className='text-mbaharip-light hover:bg-mbaharip-light/5 focus:outline-none active:bg-mbaharip-light/10'
				>
					<BiChevronRight />
				</Button>
			)}
		</div>
	);
};

Pagination.defaultProps = {
	siblingCount: 2,
};

export default Pagination;

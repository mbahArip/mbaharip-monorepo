import { NextApiRequest, NextApiResponse } from 'next';
import useResponse from './useResponse';

export type GetOptions = {
	limit?: number;
	query?: string;
	page?: number;
	itemsPerPage?: number;
	orderBy?: string | string[] | any;
	order?: string;
};

export const getOptions = (req: NextApiRequest) => {
	const options: GetOptions = {};
	const DEFAULT_LIMIT = 10;
	const DEFAULT_PAGE = 1;

	const { limit, query, page, itemsPerPage, orderBy, order } = req.query;

	if (limit) {
		options.limit = parseInt(limit as string, 10);
	} else {
		options.limit = DEFAULT_LIMIT;
	}
	if (query) options.query = query as string;
	if (page) {
		options.page = parseInt(page as string, 10);
	} else if (limit) {
		options.page = 1;
	} else {
		options.page = DEFAULT_PAGE;
	}
	if (itemsPerPage) {
		options.itemsPerPage = parseInt(itemsPerPage as string, 10);
	} else if (limit) {
		options.itemsPerPage = options.limit;
	} else {
		options.itemsPerPage = DEFAULT_LIMIT;
	}
	if (orderBy) options.orderBy = orderBy as string;
	if (order) options.order = order as string;

	return options;
};

export const checkOptions = (res: NextApiResponse, options: GetOptions) => {
	const { query, page, itemsPerPage, orderBy, order } = options;

	if (query && query.length === 0)
		return res
			.status(400)
			.json(useResponse(400, false, "Query parameter can't be empty."));
	if ((page && !itemsPerPage) || (!page && itemsPerPage))
		return res
			.status(400)
			.json(
				useResponse(
					400,
					false,
					'Page and itemsPerPage must be provided together.',
				),
			);
	if ((orderBy && !order) || (!orderBy && order))
		return res
			.status(400)
			.json(
				useResponse(400, false, 'OrderBy and Order must be provided together.'),
			);

	return null;
};

export const convertToPrismaOptions = (_options: GetOptions) => {
	const options: any = {};
	const { limit, query, page, itemsPerPage, orderBy, order } = _options;

	if (limit) options.take = limit;
	if (query)
		options.where = {
			OR: [
				{
					title: {
						contains: query,
						mode: 'insensitive',
					},
				},
				{
					tags: {
						has: query,
					},
				},
			],
		};
	if (page && itemsPerPage) {
		options.skip = page * itemsPerPage - itemsPerPage;
		options.take = itemsPerPage;
	}
	if (orderBy && order) options.orderBy = { [orderBy]: order };

	return options;
};

export const pageValidator = (count: number, options: GetOptions) => {
	const { page, itemsPerPage } = options;
	const response: PaginatedResponse = {
		totalPages: 0,
		currentPage: 0,
	};

	if (page && itemsPerPage) {
		const totalPages = Math.ceil(count / itemsPerPage);
		const currentPage = page;

		response.totalPages = totalPages;
		response.currentPage = currentPage;
		const stack = JSON.stringify(response);

		if (currentPage === 0) {
			const error = new Error('InvalidPage');
			error.name = 'InvalidPage';
			error.message = 'Page cannot be less than 1.';
			error.stack = stack;
			throw error;
		}
		if (currentPage > totalPages) {
			const error = new Error('InvalidPage');
			error.name = 'InvalidPage';
			error.message = 'Page cannot be greater than total pages.';
			error.stack = stack;
			throw error;
		}

		response.isNextPage = currentPage < totalPages;
		response.isPrevPage = currentPage > 1;
	}

	return response;
};

export type PaginatedResponse = {
	totalPages: number;
	currentPage: number;
	isNextPage?: boolean;
	isPrevPage?: boolean;
};

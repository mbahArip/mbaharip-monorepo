import { NextApiRequest, NextApiResponse } from 'next';
import type { GetOptions } from '../../hooks/useGetOptions';
import {
	checkOptions,
	convertToPrismaOptions,
	getOptions,
	pageValidator,
	PaginatedResponse,
} from '../../hooks/useGetOptions';
import usePrisma from '../../hooks/usePrisma';
import useResponse from '../../hooks/useResponse';

const blogsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	const METHOD = req.method!.toUpperCase();

	if (METHOD === 'GET') {
		const requestOptions: GetOptions = getOptions(req);
		checkOptions(res, requestOptions);
		const prismaOptions = convertToPrismaOptions(requestOptions);

		try {
			const databaseCount = await usePrisma.blogs.count();
			const databaseResponse = await usePrisma.blogs.findMany({
				...prismaOptions,
			});

			const {
				currentPage,
				totalPages,
				isPrevPage,
				isNextPage,
			}: PaginatedResponse = pageValidator(databaseCount, requestOptions);

			return res
				.status(200)
				.json(
					useResponse(
						200,
						true,
						'Fetch all blogs success.',
						{ currentPage, totalPages, isNextPage, isPrevPage },
						databaseResponse,
					),
				);
		} catch (error: any) {
			if (error.name === 'InvalidPage')
				return res.status(400).json(
					useResponse(400, false, error.message, {
						...JSON.parse(error.stack),
					}),
				);

			return res.status(500).json(
				useResponse(500, false, 'Fetch blogs failed.', {
					error: error.message,
				}),
			);
		}
	}
	if (METHOD === 'POST') {
		const { title, summary, content, thumbnail, tags } = req.body;

		const missingFields = [];
		if (!title) missingFields.push('title');
		if (!summary) missingFields.push('summary');
		if (!content) missingFields.push('content');
		if (!thumbnail) missingFields.push('thumbnail');
		if (!tags) missingFields.push('tags');
		if (missingFields.length > 0)
			return res.status(400).json(
				useResponse(400, false, `Missing required fields.`, {
					missingFields,
				}),
			);

		try {
			const databaseResponse = await usePrisma.blogs.create({
				data: { ...req.body },
			});

			return res
				.status(201)
				.json(
					useResponse(201, true, 'Create blog success.', {}, databaseResponse),
				);
		} catch (error: any) {
			return res.status(500).json(
				useResponse(500, false, 'Create blog failed.', {
					error: error.message,
				}),
			);
		}
	}
	if (METHOD === 'DELETE') {
		const { ids } = req.body;

		if (!ids)
			return res.status(400).json(
				useResponse(400, false, 'Missing required fields.', {
					missingFields: ['ids'],
				}),
			);

		try {
			const databaseResponse = await usePrisma.blogs.deleteMany({
				where: {
					id: {
						in: ids,
					},
				},
			});

			if (databaseResponse.count === 0)
				return res
					.status(404)
					.json(useResponse(404, false, 'Blog not found.', { ids }));

			return res
				.status(200)
				.json(
					useResponse(200, true, 'Delete blogs success.', {}, databaseResponse),
				);
		} catch (error: any) {
			return res
				.status(500)
				.json(useResponse(500, false, 'Delete blogs failed.', { error }));
		}
	}

	return res.status(501).json(useResponse(501, false, 'Not implemented.'));
};

export default blogsHandler;

import { NextApiRequest, NextApiResponse } from 'next';
import useResponse from '../../hooks/useResponse';
import {
	checkOptions,
	convertToPrismaOptions,
	getOptions,
	pageValidator,
	GetOptions,
	PaginatedResponse,
} from '../../hooks/useGetOptions';
import usePrisma from '../../hooks/usePrisma';

const commentsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	const METHOD = req.method!.toUpperCase();

	if (METHOD === 'GET') {
		const requestOptions: GetOptions = getOptions(req);
		checkOptions(res, requestOptions);
		const prismaOptions = convertToPrismaOptions(requestOptions);

		try {
			const databaseCount = await usePrisma.comments.count();
			const databaseResponse = await usePrisma.comments.findMany({
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
						'Fetch all comments success.',
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
	if (METHOD === 'DELETE') {
		const { ids } = req.body;

		if (!ids)
			return res.status(400).json(
				useResponse(400, false, 'Missing required fields.', {
					missingFields: ['ids'],
				}),
			);

		try {
			const databaseResponse = await usePrisma.comments.deleteMany({
				where: {
					id: {
						in: ids,
					},
				},
			});

			if (databaseResponse.count === 0)
				return res
					.status(404)
					.json(useResponse(404, false, 'No comment found.'));

			return res.status(200).json(
				useResponse(200, true, 'Delete comments success.', {
					databaseResponse,
				}),
			);
		} catch (error: any) {
			return res.status(500).json(
				useResponse(500, false, 'Delete comments failed.', {
					error,
				}),
			);
		}
	}

	return res.status(501).json(useResponse(501, false, 'Not implemented.'));
};

export default commentsHandler;

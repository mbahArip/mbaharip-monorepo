import { NextApiRequest, NextApiResponse } from 'next';
import useResponse from '../../hooks/useResponse';
import usePrisma from '../../hooks/usePrisma';

const notificationHandler = async (
	req: NextApiRequest,
	res: NextApiResponse,
) => {
	const METHOD = req.method!.toUpperCase();

	if (METHOD === 'GET') {
		try {
			const databaseResponse = await usePrisma.comments.findMany({
				where: { unread: true },
				include: { blog: true },
			});

			return res
				.status(200)
				.json(
					useResponse(
						200,
						true,
						'Fetch all unread comments success.',
						{},
						databaseResponse,
					),
				);
		} catch (error: any) {
			return res.status(500).json(
				useResponse(500, false, 'Fetch all unread comments failed.', {
					error,
				}),
			);
		}
	}
	if (METHOD === 'PUT') {
		try {
			const databaseResponse = await usePrisma.comments.updateMany({
				where: {
					unread: true,
				},
				data: {
					unread: false,
				},
			});

			return res
				.status(200)
				.json(
					useResponse(
						200,
						true,
						'Marked all unread comments.',
						{},
						databaseResponse,
					),
				);
		} catch (error: any) {
			return res.status(500).json(
				useResponse(500, false, 'Failed to mark unread comments.', {
					error,
				}),
			);
		}
	}

	return res.status(501).json(useResponse(501, false, 'Not implemented.'));
};

export default notificationHandler;

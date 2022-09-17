import { NextApiRequest, NextApiResponse } from 'next';
import useResponse from '../../hooks/useResponse';
import usePrisma from '../../hooks/usePrisma';

const commentHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	const METHOD = req.method!.toUpperCase();
	const id = req.query.id as string;

	if (METHOD === 'PUT') {
		const { content } = req.body;

		if (!content)
			res.status(400).json(
				useResponse(400, false, 'Missing required field.', {
					missingFields: ['content'],
				}),
			);

		try {
			const databaseResponse = await usePrisma.comments.update({
				where: { id },
				data: { content },
			});

			return res
				.status(200)
				.json(useResponse(200, true, 'Comment updated.', {}, databaseResponse));
		} catch (error: any) {
			if (error.code === 'P2025')
				return res
					.status(404)
					.json(useResponse(404, false, 'Comment not found.'));

			return res
				.status(500)
				.json(useResponse(500, false, 'Failed to update comment.', { error }));
		}
	}
	if (METHOD === 'DELETE') {
		try {
			const databaseResponse = await usePrisma.comments.delete({
				where: { id },
			});

			return res
				.status(200)
				.json(useResponse(200, true, 'Comment deleted.', {}, databaseResponse));
		} catch (error: any) {
			if (error.code === 'P2025')
				return res
					.status(404)
					.json(useResponse(404, false, 'Comment not found.'));

			return res
				.status(500)
				.json(useResponse(500, false, 'Failed to delete comment.', { error }));
		}
	}

	return res.status(501).json(useResponse(501, false, 'Not implemented.'));
};

export default commentHandler;

import { NextApiRequest, NextApiResponse } from 'next';
import usePrisma from '../../hooks/usePrisma';
import useResponse from '../../hooks/useResponse';

const publishHandler = async (
	req: NextApiRequest,
	res: NextApiResponse,
	published: boolean,
) => {
	const METHOD = req.method!.toUpperCase();
	const id = req.query.id as string;

	if (METHOD === 'PUT') {
		try {
			const databaseResponse = await usePrisma.works.update({
				where: { id },
				data: { published },
				select: {
					id: true,
					title: true,
					published: true,
				},
			});

			return res
				.status(200)
				.json(
					useResponse(
						200,
						true,
						`Work ${published ? 'published' : 'unpublished'}.`,
						{},
						databaseResponse,
					),
				);
		} catch (error: any) {
			if (error.code === 'P2025')
				return res.status(404).json(useResponse(404, false, 'Work not found.'));

			return res
				.status(500)
				.json(
					useResponse(
						500,
						false,
						`Failed to ${published ? 'publish' : 'unpublish'} work.`,
						{ error },
					),
				);
		}
	}

	return res.status(501).json(useResponse(501, false, 'Not implemented.'));
};
export default publishHandler;

import { NextApiRequest, NextApiResponse } from 'next';
import usePrisma from '../../hooks/usePrisma';
import useResponse from '../../hooks/useResponse';

const viewHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	const METHOD = req.method!.toUpperCase();
	const id = req.query.id as string;

	if (METHOD === 'POST') {
		try {
			const databaseResponse = await usePrisma.works.update({
				where: { id },
				data: {
					views: {
						increment: 1,
					},
				},
				select: {
					id: true,
					title: true,
					views: true,
				},
			});

			return res
				.status(200)
				.json(
					useResponse(
						200,
						true,
						'View work incremented.',
						{},
						databaseResponse,
					),
				);
		} catch (error: any) {
			if (error.code === 'P2025')
				return res.status(404).json(useResponse(404, false, 'Work not found.'));

			return res
				.status(500)
				.json(useResponse(500, false, 'Failed to increment view.', { error }));
		}
	}

	return res.status(501).json(useResponse(501, false, 'Not implemented.'));
};
export default viewHandler;

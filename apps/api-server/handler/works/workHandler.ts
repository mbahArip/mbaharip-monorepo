import { NextApiRequest, NextApiResponse } from 'next';
import useResponse from '../../hooks/useResponse';
import usePrisma from '../../hooks/usePrisma';

const workHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	const METHOD = req.method!.toUpperCase();
	const id = req.query.id as string;

	if (METHOD === 'GET') {
		try {
			const databaseResponse = await usePrisma.works.findUniqueOrThrow({
				where: { id },
			});

			return res
				.status(200)
				.json(
					useResponse(200, true, 'Fetch work success.', {}, databaseResponse),
				);
		} catch (error: any) {
			if (error.name === 'NotFoundError')
				return res.status(404).json(useResponse(404, false, 'Work not found.'));

			return res
				.status(500)
				.json(useResponse(500, false, 'Fetch work failed.', { error }));
		}
	}
	if (METHOD === 'PUT') {
		const { title, summary, thumbnail, images, tags } = req.body;

		const filledFields = [];
		if (title) filledFields.push('title');
		if (summary) filledFields.push('summary');
		if (thumbnail) filledFields.push('thumbnail');
		if (images) filledFields.push('content');
		if (tags) filledFields.push('tags');
		if (!filledFields)
			return res.status(400).json(
				useResponse(400, false, 'Body must contain one of these fields.', {
					availableFields: ['title', 'summary', 'thumbnail', 'images', 'tags'],
				}),
			);

		try {
			const editedFields: any = {};
			filledFields.forEach((field) => {
				editedFields[field] = true;
			});

			const databaseResponse = await usePrisma.works.update({
				where: { id },
				data: { ...req.body },
				select: {
					id: true,
					modifiedAt: true,
					...editedFields,
				},
			});

			return res
				.status(200)
				.json(
					useResponse(
						200,
						true,
						'Work updated successfully.',
						{},
						databaseResponse,
					),
				);
		} catch (error: any) {
			if (error.name === 'P2025')
				return res.status(404).json(useResponse(404, false, 'Work not found.'));

			return res
				.status(500)
				.json(useResponse(500, false, 'Update work failed.', { error }));
		}
	}
	if (METHOD === 'DELETE') {
		try {
			const databaseResponse = await usePrisma.works.delete({
				where: { id },
			});

			return res
				.status(200)
				.json(
					useResponse(
						200,
						true,
						'Work deleted successfully.',
						{},
						databaseResponse,
					),
				);
		} catch (error: any) {
			if (error.name === 'P2025')
				return res.status(404).json(useResponse(404, false, 'Work not found.'));

			return res
				.status(500)
				.json(useResponse(500, false, 'Delete work failed.', { error }));
		}
	}

	return res.status(501).json(useResponse(501, false, 'Method not allowed.'));
};

export default workHandler;

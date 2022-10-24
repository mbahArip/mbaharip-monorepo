import { NextApiRequest, NextApiResponse } from 'next';
import usePrisma from '../../hooks/usePrisma';
import useResponse from '../../hooks/useResponse';
import {
	parseImages,
	parseJSON,
	parseThumbnail,
} from '../../utils/parseThumbnail';

const productHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	const METHOD = req.method!.toUpperCase();
	const id = req.query.id as string;

	if (METHOD === 'GET') {
		try {
			const databaseResponse = await usePrisma.products.findUniqueOrThrow({
				where: { id },
			});

			return res
				.status(200)
				.json(
					useResponse(
						200,
						true,
						'Fetch product success.',
						{},
						databaseResponse,
					),
				);
		} catch (error: any) {
			if (error.name === 'NotFoundError')
				return res
					.status(404)
					.json(useResponse(404, false, 'Product not found.'));

			return res
				.status(500)
				.json(useResponse(500, false, 'Fetch product failed.', { error }));
		}
	}
	if (METHOD === 'PUT') {
		const { name, price, url, thumbnail, images, tags } = req.body;

		const filledFields = [];
		if (name) filledFields.push('name');
		if (price) filledFields.push('price');
		if (url) filledFields.push('url');
		if (thumbnail) filledFields.push('thumbnail');
		if (images) filledFields.push('images');
		if (tags) filledFields.push('tags');
		if (!filledFields)
			return res.status(400).json(
				useResponse(400, false, 'Body must contain one of these fields.', {
					availableFields: [
						'name',
						'price',
						'url',
						'thumbnail',
						'images',
						'tags',
					],
				}),
			);

		const parsedPrice = parseJSON(price, res);
		const parsedURL = parseJSON(url, res);
		const parsedThumbnail = parseThumbnail(thumbnail, res);
		const parsedImages = parseImages(images, res);

		try {
			const editedFields: any = {};
			filledFields.forEach((field) => {
				editedFields[field] = true;
			});

			const databaseResponse = await usePrisma.products.update({
				where: { id },
				data: {
					...req.body,
					price: parsedPrice,
					url: parsedURL,
					thumbnail: parsedThumbnail,
					images: parsedImages,
				},
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
						'Update product success.',
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
			const databaseResponse = await usePrisma.products.delete({
				where: { id },
			});

			return res
				.status(200)
				.json(
					useResponse(
						200,
						true,
						'Delete product success.',
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

	return res
		.status(501)
		.json(useResponse(501, false, 'Method not implemented.'));
};

export default productHandler;

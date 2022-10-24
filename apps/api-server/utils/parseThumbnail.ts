import { NextApiResponse } from 'next';
import { encrypt } from '../hooks/useEncryption';
import useResponse from '../hooks/useResponse';

type ImageWithBlurhash = {
	url: string;
	blurHash: string;
	width: number;
	height: number;
};

export const parseThumbnail = (thumbnail: string, res: NextApiResponse) => {
	const parsed: ImageWithBlurhash = JSON.parse(thumbnail);
	parsed.url = encrypt(parsed.url);

	if (!parsed.url || !parsed.blurHash || !parsed.width || !parsed.height)
		return res.status(400).json(
			useResponse(400, false, `Missing required fields.`, {
				missingFields: { thumbnail: ['url', 'blurHash', 'width', 'height'] },
			}),
		);

	return parsed;
};

export const parseImages = (images: string, res: NextApiResponse) => {
	const parsedImages: ImageWithBlurhash[] = JSON.parse(images);
	parsedImages.forEach((img, index) => {
		parsedImages[index].url = encrypt(img.url);
		if (!img.url || !img.blurHash || !img.width || !img.height)
			return res.status(400).json(
				useResponse(400, false, `Missing required fields.`, {
					missingFields: { images: ['url', 'blurHash', 'width', 'height'] },
				}),
			);
		return null;
	});

	return parsedImages;
};

export const parseJSON = (json: string, res: NextApiResponse) => {
	const parsed: any = JSON.parse(json);

	if (!parsed)
		return res.status(400).json(
			useResponse(400, false, `Missing required fields.`, {
				missingFields: { json: ['url', 'blurHash', 'width', 'height'] },
			}),
		);

	return parsed;
};

export default { parseThumbnail, parseImages, parseJSON };

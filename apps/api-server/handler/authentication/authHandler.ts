import { sign } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import useResponse from '../../hooks/useResponse';

const authHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	const METHOD = req.method!.toUpperCase();

	if (METHOD === 'POST') {
		const { 'secret-key': secretKey } = req.body;

		if (!secretKey)
			return res.status(400).json(
				useResponse(400, false, 'Missing required field.', {
					missingFields: ['secret-key'],
				}),
			);
		if (secretKey !== process.env.MBAHARIP_SECRET)
			return res
				.status(400)
				.json(useResponse(400, false, 'Invalid secret key.'));

		try {
			const jwtData = sign(
				{ validSecret: true, secretKey },
				process.env.CRYPTO_KEY as string,
			);

			return res.status(200).json(
				useResponse(
					200,
					true,
					'Successfully authenticated.',
					{},
					{
						apiKey: jwtData,
					},
				),
			);
		} catch (error: any) {
			return res
				.status(500)
				.json(useResponse(500, false, 'Failed to authenticate.', { error }));
		}
	}

	return res.status(501).json(useResponse(501, false, 'Not implemented.'));
};
export default authHandler;

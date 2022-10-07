import { verify } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import useResponse from '../useResponse';

const useAuthorization = (
	req: NextApiRequest,
	res: NextApiResponse,
	next: any,
) => {
	const { 'x-api-key': apiKey } = req.headers;
	if (req.method !== 'GET' && !req.url?.includes('authentication')) {
		if (!apiKey) {
			return res.status(401).json(useResponse(401, false, 'Unauthorized.'));
		}

		try {
			verify(apiKey as string, process.env.CRYPTO_KEY as string);
		} catch (error: any) {
			return res.status(401).json(useResponse(401, false, 'Invalid API key.'));
		}
	}
	return next();
};

export default useAuthorization;

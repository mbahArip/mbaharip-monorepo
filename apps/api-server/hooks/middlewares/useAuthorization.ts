import { verify } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import useResponse from '../useResponse';

const useAuthorization = async (req: NextApiRequest, res: NextApiResponse) => {
	const { 'x-api-key': apiKey } = req.headers;
	if (
		req.method !== 'GET' &&
		!req.url?.includes('authentication') &&
		!req.url?.includes('gumroad')
	) {
		if (!apiKey) {
			return res.status(401).json(useResponse(401, false, 'Unauthorized.'));
		}

		try {
			return verify(apiKey as string, process.env.CRYPTO_KEY as string);
		} catch (error: any) {
			return res.status(401).json(useResponse(401, false, 'Invalid API key.'));
		}
	}

	return null;
};

export default useAuthorization;

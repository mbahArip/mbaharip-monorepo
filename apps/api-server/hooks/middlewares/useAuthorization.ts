import { NextApiResponse, NextApiRequest } from 'next';
import useResponse from '../useResponse';
import { decrypt } from '../useEncryption';

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

		const isApiKeyValid = decrypt(apiKey as string) === process.env.CRYPTO_KEY;
		if (!isApiKeyValid) {
			return res.status(401).json(useResponse(401, false, 'Invalid API key.'));
		}
	}
	return next();
};

export default useAuthorization;

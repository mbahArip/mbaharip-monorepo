import { NextApiRequest, NextApiResponse } from 'next';
import useAuthorization from './middlewares/useAuthorization';
import useCORS from './middlewares/useCORS';
import useRateLimit from './middlewares/useRateLimit';

const useMiddlewares = async (req: NextApiRequest, res: NextApiResponse) => {
	await useCORS(req, res);
	await useAuthorization(req, res);
	if (process.env.NODE_ENV === 'production') {
		await useRateLimit(req, res);
	}
};

export default useMiddlewares;

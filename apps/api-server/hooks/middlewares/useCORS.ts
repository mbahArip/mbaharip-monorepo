import Cors, { CorsRequest } from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

function initMiddleware(middleware: CorsRequest | any) {
	return (req: NextApiRequest, res: NextApiResponse) =>
		new Promise((resolve, reject) => {
			middleware(req, res, (result: any) => {
				if (result instanceof Error) {
					return reject(result);
				}
				return resolve(result);
			});
		});
}

const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];

const useCORS = initMiddleware(
	Cors({
		methods: allowedMethods,
	}),
);

export default useCORS;

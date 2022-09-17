import NextCors from 'nextjs-cors';
import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

const useCORS = async (req: NextApiRequest, res: NextApiResponse, next: any) => {
	const options: Cors.CorsOptions = {
		methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200,
		credentials: true,
	};
	await NextCors(req, res, options);
	next();
};

export default useCORS;

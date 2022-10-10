import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

const useNCCORS = async (
	req: NextApiRequest,
	res: NextApiResponse,
	next: any,
) => {
	const options: Cors.CorsOptions = {
		methods: ['*'],
		origin: ['*', 'http://localhost:3000'],
		allowedHeaders: ['*'],
		optionsSuccessStatus: 200,
		credentials: true,
	};
	await NextCors(req, res, options);
	// CORS headers
	// res.setHeader('Access-Control-Allow-Credentials', 'true');
	// res.setHeader('Access-Control-Allow-Origin', '*');
	// res.setHeader(
	// 	'Access-Control-Allow-Methods',
	// 	'GET,OPTIONS,PATCH,DELETE,POST,PUT',
	// );
	// res.setHeader(
	// 	'Access-Control-Allow-Headers',
	// 	'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, x-api-key',
	// );

	if (req.method === 'OPTIONS') {
		res.status(200).send('ok');
	}

	next();
};

export default useNCCORS;

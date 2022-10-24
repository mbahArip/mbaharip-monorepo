import { NextApiRequest, NextApiResponse } from 'next';
import useMiddlewares from '../../hooks/useMiddlewares';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await useMiddlewares(req, res);
	const reqTime = new Date().toISOString();
	try {
		const resTime = Number(new Date().toISOString()) - Number(reqTime);
		if (resTime > 1000) throw new Error('Request took too long');

		res.status(200).json({ message: 'Server OK' });
	} catch (error: any) {
		res.status(error.status || 500).json({ message: error.message });
	}
};
export default handler;

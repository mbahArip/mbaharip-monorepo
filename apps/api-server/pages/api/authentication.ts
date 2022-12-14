import { NextApiRequest, NextApiResponse } from 'next';
import authHandler from '../../handler/authentication/authHandler';
import useMiddlewares from '../../hooks/useMiddlewares';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await useMiddlewares(req, res);
	await authHandler(req, res);
};
export default handler;

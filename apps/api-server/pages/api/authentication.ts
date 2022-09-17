import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import useMiddleware from '../../hooks/useMiddleware';
import authHandler from '../../handler/authentication/authHandler';

const handler = nextConnect<NextApiRequest, NextApiResponse>();
handler.use(useMiddleware);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	await authHandler(req, res);
});

export default handler;

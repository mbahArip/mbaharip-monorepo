import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import viewHandler from '../../../../../handler/blogs/viewHandler';
import useMiddleware from '../../../../../hooks/useMiddleware';

const handler = nextConnect<NextApiRequest, NextApiResponse>();
handler.use(useMiddleware);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	await viewHandler(req, res);
});

export default handler;

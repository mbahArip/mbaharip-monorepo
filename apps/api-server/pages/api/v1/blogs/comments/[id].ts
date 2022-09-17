import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import useMiddleware from '../../../../../hooks/useMiddleware';
import commentHandler from '../../../../../handler/comments/commentHandler';

const handler = nextConnect<NextApiRequest, NextApiResponse>();
handler.use(useMiddleware);

handler.all(async (req: NextApiRequest, res: NextApiResponse) => {
	await commentHandler(req, res);
});

export default handler;

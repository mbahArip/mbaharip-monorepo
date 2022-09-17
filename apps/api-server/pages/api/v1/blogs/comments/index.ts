import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import useMiddleware from '../../../../../hooks/useMiddleware';
import commentsHandler from '../../../../../handler/comments/commentsHandler';

const handler = nextConnect<NextApiRequest, NextApiResponse>();
handler.use(useMiddleware);

handler.all(async (req: NextApiRequest, res: NextApiResponse) => {
	await commentsHandler(req, res);
});

export default handler;

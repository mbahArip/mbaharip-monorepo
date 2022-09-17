import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import useMiddleware from '../../../../../hooks/useMiddleware';
import postCommentHandler from '../../../../../handler/comments/postCommentHandler';

const handler = nextConnect<NextApiRequest, NextApiResponse>();
handler.use(useMiddleware);

handler.all(async (req: NextApiRequest, res: NextApiResponse) => {
	await postCommentHandler(req, res);
});

export default handler;

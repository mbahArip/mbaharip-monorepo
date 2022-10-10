import { NextApiRequest, NextApiResponse } from 'next';
import postCommentHandler from '../../../../../handler/comments/postCommentHandler';
import useMiddlewares from '../../../../../hooks/useMiddlewares';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await useMiddlewares(req, res);
	await postCommentHandler(req, res);
};
export default handler;

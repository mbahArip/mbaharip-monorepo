import { NextApiRequest, NextApiResponse } from 'next';
import commentsHandler from '../../../../../handler/comments/commentsHandler';
import useMiddlewares from '../../../../../hooks/useMiddlewares';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await useMiddlewares(req, res);
	await commentsHandler(req, res);
};
export default handler;

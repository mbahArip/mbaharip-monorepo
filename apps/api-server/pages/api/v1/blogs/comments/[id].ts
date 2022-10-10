import { NextApiRequest, NextApiResponse } from 'next';
import commentHandler from '../../../../../handler/comments/commentHandler';
import useMiddlewares from '../../../../../hooks/useMiddlewares';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await useMiddlewares(req, res);
	await commentHandler(req, res);
};
export default handler;

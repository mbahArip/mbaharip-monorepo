import { NextApiRequest, NextApiResponse } from 'next';
import notificationHandler from '../../../../../handler/comments/notificationHandler';
import useMiddlewares from '../../../../../hooks/useMiddlewares';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await useMiddlewares(req, res);
	await notificationHandler(req, res);
};
export default handler;

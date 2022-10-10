import { NextApiRequest, NextApiResponse } from 'next';
import blogsHandler from '../../../../handler/blogs/blogsHandler';
import useMiddlewares from '../../../../hooks/useMiddlewares';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await useMiddlewares(req, res);
	await blogsHandler(req, res);
};
export default handler;

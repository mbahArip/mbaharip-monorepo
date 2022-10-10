import { NextApiRequest, NextApiResponse } from 'next';
import blogHandler from '../../../../../handler/blogs/blogHandler';
import useMiddlewares from '../../../../../hooks/useMiddlewares';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await useMiddlewares(req, res);
	await blogHandler(req, res);
};
export default handler;

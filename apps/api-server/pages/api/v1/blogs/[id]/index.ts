import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import useMiddleware from '../../../../../hooks/useMiddleware';
import blogHandler from '../../../../../handler/blogs/blogHandler';

const handler = nextConnect<NextApiRequest, NextApiResponse>();
handler.use(useMiddleware);

handler.all(async (req: NextApiRequest, res: NextApiResponse) => {
	await blogHandler(req, res);
});

export default handler;

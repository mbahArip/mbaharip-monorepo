import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import useMiddleware from '../../../../../hooks/useMiddleware';
import publishHandler from '../../../../../handler/blogs/publishHandler';

const handler = nextConnect<NextApiRequest, NextApiResponse>();
handler.use(useMiddleware);

handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
	await publishHandler(req, res, true);
});

export default handler;

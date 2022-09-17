import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import useMiddleware from '../../../../hooks/useMiddleware';
import genshinHandler from '../../../../handler/scheduler/genshinHandler';

const handler = nextConnect<NextApiRequest, NextApiResponse>();
handler.use(useMiddleware);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	await genshinHandler(req, res);
});

export default handler;

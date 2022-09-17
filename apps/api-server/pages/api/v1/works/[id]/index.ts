import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import useMiddleware from '../../../../../hooks/useMiddleware';
import workHandler from '../../../../../handler/works/workHandler';

const handler = nextConnect<NextApiRequest, NextApiResponse>();
handler.use(useMiddleware);

handler.all(async (req: NextApiRequest, res: NextApiResponse) => {
	await workHandler(req, res);
});

export default handler;

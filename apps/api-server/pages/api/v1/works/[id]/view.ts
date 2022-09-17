import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import useMiddleware from '../../../../../hooks/useMiddleware';
import viewHandler from '../../../../../handler/works/viewHandler';

const handler = nextConnect<NextApiRequest, NextApiResponse>();
handler.use(useMiddleware);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	await viewHandler(req, res);
});

export default handler;

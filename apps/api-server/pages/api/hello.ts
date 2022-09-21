import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import useMiddleware from '../../hooks/useMiddleware';

const handler = nextConnect<NextApiRequest, NextApiResponse>();
handler.use(useMiddleware);
handler.get((req: NextApiRequest, res: NextApiResponse) =>
	res.status(200).json({ message: 'Hello World!' }),
);

export default handler;

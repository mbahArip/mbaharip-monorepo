import { NextApiRequest, NextApiResponse } from 'next';
import pingHandler from '../../../../../../handler/gumroad/pingHandler';
import useMiddlewares from '../../../../../../hooks/useMiddlewares';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await useMiddlewares(req, res);

	await pingHandler(req, res);
};

export default handler;

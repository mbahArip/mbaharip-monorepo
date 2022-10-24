import { NextApiRequest, NextApiResponse } from 'next';
import productsHandler from '../../../../handler/products/productsHandler';
import useMiddlewares from '../../../../hooks/useMiddlewares';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await useMiddlewares(req, res);
	await productsHandler(req, res);
};

export default handler;

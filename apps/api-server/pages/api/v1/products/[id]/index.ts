import { NextApiRequest, NextApiResponse } from 'next';
import productHandler from '../../../../../handler/products/productHandler';
import useMiddlewares from '../../../../../hooks/useMiddlewares';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await useMiddlewares(req, res);
	await productHandler(req, res);
};

export default handler;

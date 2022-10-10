import { NextApiRequest, NextApiResponse } from 'next';
import viewHandler from '../../../../../handler/works/viewHandler';
import useMiddlewares from '../../../../../hooks/useMiddlewares';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await useMiddlewares(req, res);
	await viewHandler(req, res);
};
export default handler;

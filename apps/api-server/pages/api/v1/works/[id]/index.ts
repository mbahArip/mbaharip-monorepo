import { NextApiRequest, NextApiResponse } from 'next';
import workHandler from '../../../../../handler/works/workHandler';
import useMiddlewares from '../../../../../hooks/useMiddlewares';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await useMiddlewares(req, res);
	await workHandler(req, res);
};
export default handler;

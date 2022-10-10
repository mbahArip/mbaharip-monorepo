import { NextApiRequest, NextApiResponse } from 'next';
import publishHandler from '../../../../../handler/works/publishHandler';
import useMiddlewares from '../../../../../hooks/useMiddlewares';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await useMiddlewares(req, res);
	await publishHandler(req, res, true);
};
export default handler;

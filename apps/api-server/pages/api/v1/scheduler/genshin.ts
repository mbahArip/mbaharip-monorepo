import { NextApiRequest, NextApiResponse } from 'next';
import genshinHandler from '../../../../handler/scheduler/genshinHandler';
import useMiddlewares from '../../../../hooks/useMiddlewares';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await useMiddlewares(req, res);
	await genshinHandler(req, res);
};
export default handler;

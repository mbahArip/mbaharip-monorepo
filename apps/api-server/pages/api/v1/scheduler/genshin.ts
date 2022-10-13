import { NextApiRequest, NextApiResponse } from 'next';
import genshinHandler from '../../../../handler/scheduler/genshinHandler';
import useCORS from '../../../../hooks/middlewares/useCORS';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	useCORS(req, res);
	await genshinHandler(req, res);
};
export default handler;

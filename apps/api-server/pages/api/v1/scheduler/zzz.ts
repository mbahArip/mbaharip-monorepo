import { NextApiRequest, NextApiResponse } from 'next';
import hoyoHandler from '../../../../handler/scheduler/hoyoHandler';
import useCORS from '../../../../hooks/middlewares/useCORS';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	useCORS(req, res);
	await hoyoHandler(req, res, "zzz");
};

export default handler;

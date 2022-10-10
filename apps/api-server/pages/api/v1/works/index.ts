import { NextApiRequest, NextApiResponse } from 'next';
import worksHandler from '../../../../handler/works/worksHandler';
import useMiddlewares from '../../../../hooks/useMiddlewares';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await useMiddlewares(req, res);
	await worksHandler(req, res);
};
export default handler;

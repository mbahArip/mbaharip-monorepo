import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';
import { NextApiRequest, NextApiResponse } from 'next';

const applyMiddleware =
	(middleware: any) => (request: NextApiRequest, response: NextApiResponse) =>
		new Promise((resolve, reject) => {
			middleware(request, response, (result: any) =>
				result instanceof Error ? reject(result) : resolve(result),
			);
		});

const getIP = (request: NextApiRequest | any) =>
	request.ip ||
	request.headers['x-forwarded-for'] ||
	request.headers['x-real-ip'] ||
	request.connection.remoteAddress;

export const getRateLimitMiddlewares = ({
	limit = 30,
	windowMs = 60 * 1000,
	delayAfter = Math.round(10 / 2),
	delayMs = 500,
} = {}) => [
	slowDown({ keyGenerator: getIP, windowMs, delayAfter, delayMs }),
	rateLimit({ keyGenerator: getIP, windowMs, max: limit }),
];

const middlewares = getRateLimitMiddlewares();

async function applyRateLimit(
	request: NextApiRequest,
	response: NextApiResponse,
) {
	await Promise.all(
		middlewares
			.map(applyMiddleware)
			.map((middleware) => middleware(request, response)),
	);
}

const useRateLimit = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		return await applyRateLimit(req, res);
	} catch (error) {
		return res.status(429);
	}
};
export default useRateLimit;

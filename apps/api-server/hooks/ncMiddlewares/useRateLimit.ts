import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';
import { NextApiRequest, NextApiResponse } from 'next';

const applyMiddleware =
	(middleware: any) => (req: NextApiRequest, res: NextApiResponse) =>
		new Promise((resolve, reject) => {
			middleware(req, res, (result: any) =>
				result instanceof Error ? reject(result) : resolve(result),
			);
		});

const getIP = (req: any) =>
	req.ip ||
	req.headers['x-forwarded-for'] ||
	req.headers['x-real-ip'] ||
	req.connection.remoteAddress;

const requestLimit = 100;
const requestWindowMs = 60 * 1000;
const requestDelayAfter = Math.round(requestLimit / 2);
const requestDelayMs = 500;
export const getRateLimitMiddlewares = ({
	limit = requestLimit,
	windowMs = requestWindowMs,
	delayAfter = requestDelayAfter,
	delayMs = requestDelayMs,
} = {}) => [
	slowDown({ keyGenerator: getIP, windowMs, delayAfter, delayMs }),
	rateLimit({ keyGenerator: getIP, windowMs, max: limit }),
];

const middlewares = getRateLimitMiddlewares();

const applyRateLimit = async (req: NextApiRequest, res: NextApiResponse) => {
	await Promise.all(
		middlewares.map(applyMiddleware).map((middleware) => middleware(req, res)),
	);
};

const useNCRateLimit = async (
	req: NextApiRequest,
	res: NextApiResponse,
	next: any,
) => {
	try {
		if (process.env.NODE_ENV === 'production') {
			await applyRateLimit(req, res);
			res.setHeader(
				'Cache-Control',
				'public, max-age=3600, s-maxage=3600, stale-while-revalidate=60',
			);
			next();
		}
	} catch (error) {
		return res.status(429);
	}
	return next();
};

export default useNCRateLimit;

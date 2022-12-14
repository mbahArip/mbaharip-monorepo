//	@ts-ignore
import { PrismaClient } from '@prisma/client';
import Redis from 'ioredis';
import { bgGreen, bgRed, bgYellow, black, white } from 'kolorist';
import { createPrismaRedisCache } from 'prisma-redis-middleware';

const usePrisma: PrismaClient = new PrismaClient();
if (process.env.NODE_ENV === 'production') {
	const redisURL =
		(process.env.REDIS_URL as string) || 'redis://localhost:6379';
	const redisClient = new Redis(redisURL);

	const cacheMiddleware: any = createPrismaRedisCache({
		models: [
			{
				model: 'links',
				cacheTime: 86400000,
			},
		],
		storage: {
			type: 'redis',
			options: {
				client: redisClient,
			},
			// type: 'memory',
			// options: {
			// 	invalidation: true,
			// 	size: 512,
			// },
		},
		cacheTime: 15000,
		excludeModels: ['access', 'promotions', 'shortlinks'],
		excludeMethods: ['count', 'groupBy'],
		onHit: (key) => {
			bgGreen(white(`Using cache: ${key}`));
		},
		onMiss: (key) => {
			bgYellow(black(`Cache miss: ${key}`));
		},
		onError: (key) => {
			bgRed(white(`Failed to use cache: ${key}`));
		},
	});

	usePrisma.$use(cacheMiddleware);
}

export default usePrisma;

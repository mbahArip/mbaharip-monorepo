//	@ts-ignore
import { createPrismaRedisCache } from 'prisma-redis-middleware';
import { PrismaClient } from '@prisma/client';
import { bgGreen, bgRed, bgYellow, black, white } from 'kolorist';
import Redis from 'ioredis';

const usePrisma: PrismaClient = new PrismaClient();
const redisURL = (process.env.REDIS_URL as string) || 'redis://localhost:6379';
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

if (process.env.NODE_ENV === 'production') {
	usePrisma.$use(cacheMiddleware);
}

export default usePrisma;

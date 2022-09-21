const withTM = require('next-transpile-modules')(['ui']);

/** @type {import('next').NextConfig} */
module.exports = withTM({
	reactStrictMode: true,
	trailingSlash: false,
	redirects() {
		return [
			process.env.NEXT_PUBLIC_MAINTENANCE_MODE === '1'
				? {
						source: '/((?!maintenance)(?!_next)(?!static).*)',
						destination: '/maintenance',
						permanent: false,
				  }
				: null,
			process.env.NEXT_PUBLIC_MAINTENANCE_MODE === '0'
				? {
						source: '/maintenance/',
						destination: '/',
						permanent: false,
				  }
				: null,
		].filter(Boolean);
	},
	images: {
		domains: ['picsum.photos'],
	},
});

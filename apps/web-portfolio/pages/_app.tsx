import 'config/tailwind/styles.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { LoadingBar } from 'ui';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';

const App = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();

	// Handle route change start
	const [routeChange, setRouteChange] = useState({
		isRouteChanging: false,
		loadingKey: 0,
	});
	useEffect(() => {
		const handleRouteChangeStart = () => {
			setRouteChange(() => ({
				isRouteChanging: true,
				loadingKey: routeChange.loadingKey ^ 1,
			}));
		};

		const handleRouteChangeEnd = () => {
			setRouteChange((r) => ({
				isRouteChanging: false,
				loadingKey: r.loadingKey,
			}));
		};

		router.events.on('routeChangeStart', handleRouteChangeStart);
		router.events.on('routeChangeComplete', handleRouteChangeEnd);
		router.events.on('routeChangeError', handleRouteChangeEnd);

		return () => {
			router.events.off('routeChangeStart', handleRouteChangeStart);
			router.events.off('routeChangeComplete', handleRouteChangeEnd);
			router.events.off('routeChangeError', handleRouteChangeEnd);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.events]);

	return (
		<>
			<LoadingBar
				isRouteChanging={routeChange.isRouteChanging}
				key={routeChange.loadingKey}
			/>
			<DefaultSeo
				defaultTitle='mbahArip'
				titleTemplate='%s | mbahArip'
				description='Pretending to be a dev. I write code, sometimes.'
				canonical='https://www.mbaharip.me'
				robotsProps={{
					nosnippet: false,
					notranslate: false,
					noimageindex: false,
					noarchive: false,
				}}
				additionalLinkTags={[
					{
						rel: 'icon',
						href: '/favicon.svg',
					},
				]}
				twitter={{
					cardType: 'summary_large_image',
					site: 'https://www.mbaharip.me',
					handle: '@mbaharip_',
				}}
				openGraph={{
					url: 'https://www.mbaharip.me',
					type: 'website',
					title: 'mbahArip',
					description: 'Pretending to be a dev. I write code, sometimes.',
					images: [
						{
							url: 'https://www.mbaharip.me/images/og-image.png',
							alt: 'mbahArip',
						},
					],
					site_name: 'mbahArip',
				}}
			/>
			<MotionConfig reducedMotion='user'>
				<AnimatePresence
					// exitBeforeEnter
					mode='wait'
					// initial={true}
					onExitComplete={() => {
						if (typeof window !== 'undefined') {
							window.scrollTo({ top: 0 });
						}
					}}
				>
					<Component
						{...pageProps}
						key={router.asPath}
					/>
				</AnimatePresence>
			</MotionConfig>
		</>
	);
};

export default App;

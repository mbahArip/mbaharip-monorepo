import type { NextPage } from 'next';
import Navbar from '../components/Shared/Navbar';
import { NextSeo } from 'next-seo';

const Home: NextPage = () => {
	return (
		<>
			<div
				className={`flex min-h-screen w-screen flex-col items-center justify-center`}
			>
				Lorem
			</div>
		</>
	);
};

// Get server-side props
export const getServerSideProps = async () => {
	await new Promise((resolve) => {
		setTimeout(resolve, 1000);
	});
	return {
		props: {},
	};
};

export default Home;

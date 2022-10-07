import type { NextPage } from 'next';

const Home: NextPage = () => <div>OK</div>;

// Server side redirect
export const getServerSideProps = async () => ({
	redirect: {
		destination: 'https://www.mbaharip.me',
		permanent: false,
	},
});

export default Home;

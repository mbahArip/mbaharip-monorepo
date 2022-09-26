import type { NextPage } from 'next';
import HeaderLayout from '../components/Layout/HeaderLayout';
import MainLayout from '../components/Layout/MainLayout';

const Home: NextPage = () => (
	<MainLayout>
		<HeaderLayout>Header Layout</HeaderLayout>
	</MainLayout>
);

export default Home;

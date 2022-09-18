import type { NextPage } from 'next';
import Navbar from '../components/Shared/Navbar';
import { NextSeo } from 'next-seo';
import MainLayout from '../components/Layout/MainLayout';
import HeaderLayout from '../components/Layout/HeaderLayout';

const Home: NextPage = () => {
	return (
		<MainLayout>
			<HeaderLayout>Lorem ipsum</HeaderLayout>
			<div className={`my-6 h-fit md:my-8`}>Lorem</div>
		</MainLayout>
	);
};

export default Home;

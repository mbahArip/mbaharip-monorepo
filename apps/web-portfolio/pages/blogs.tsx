import type { NextPage } from 'next';
import Navbar from '../components/Shared/Navbar';
import { NextSeo } from 'next-seo';
import MainLayout from '../components/Layout/MainLayout';
import HeaderLayout from '../components/Layout/HeaderLayout';

const Home: NextPage = () => {
	return (
		<MainLayout>
			<HeaderLayout>Header Layout</HeaderLayout>
			<div className={`my-6 h-fit md:my-8`}>
				Page content goes here. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Recusandae cupiditate, beatae sint consequatur
				quisquam quia similique error nobis doloremque quidem modi ab eum
				dolorem excepturi eligendi facere esse aspernatur voluptatum provident
				libero eos nesciunt laboriosam totam. Magnam dolor debitis amet earum
				porro. Laborum at temporibus obcaecati alias ad quasi id?
			</div>
		</MainLayout>
	);
};

export default Home;

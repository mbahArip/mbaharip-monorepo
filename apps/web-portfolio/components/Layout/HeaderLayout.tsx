import { FC, ReactNode } from 'react';

type HeaderLayoutProps = {
	height?: 'small' | 'medium' | 'large';
	children: ReactNode;
};

const HeaderLayout: FC<HeaderLayoutProps> = ({ height, children }) => {
	const heightMap = {
		xsmall: 16,
		small: 32,
		medium: 48,
		large: 96,
	};
	let heightClass;
	switch (height) {
		case 'small':
			heightClass = `h-${heightMap.xsmall} md:h-${heightMap.small}`;
			break;
		case 'medium':
			heightClass = `h-${heightMap.small} md:h-${heightMap.medium}`;
			break;
		case 'large':
			heightClass = `h-${heightMap.medium} md:h-${heightMap.large}`;
			break;
		default:
			heightClass = `h-${heightMap.small} md:h-${heightMap.medium}`;
			break;
	}

	return (
		<div
			className={`relative mt-12 flex w-full flex-col items-center justify-center md:mt-16 ${heightClass}`}
		>
			{children}
		</div>
	);
};

HeaderLayout.defaultProps = {
	height: 'medium',
};

export default HeaderLayout;

export type LogoProps = {
	size?: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge';
	color?: 'light' | 'dark';
	animate?: boolean;
	className?: string;
	onAnimateEnd?: (e: any) => void;
};

export * from './LogoMark';
export * from './LogoText';

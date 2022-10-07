import type {LogoProps} from '.';

export const LogoMark = ({
	size = 'normal',
	color = 'light',
	animate = false,
	className = '',
}: LogoProps) => {
	const height = {
		xsmall: 'h-6 md:h-8',
		small: 'h-8 md:h-16',
		normal: 'h-16 md:h-24',
		large: 'h-24 md:h-32',
		xlarge: 'h-32 md:h-48',
	};
	const logoSize = `${height[size]} object-contain`;

	return (
		<svg
			version="1.1"
			id="logo"
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 598 598"
			className={`${animate && 'animate'} ${color} ${logoSize} ${className}`}
		>
			<g id="groupMarkMain">
				<polygon
					className="colorMain"
					points="206.2,190.8 31,366 31,407.2 113.5,489.7 175.3,489.7 216.5,448.5 216.5,427.9 175.3,386.6 
	288.7,273.2 "
				/>
				<polygon
					className="colorMain"
					points="391.8,190.8 567,366 567,407.2 484.5,489.7 422.7,489.7 381.5,448.5 381.5,427.9 422.7,386.6 
	309.3,273.2 "
				/>
				<polygon
					className="colorMain"
					points="381.5,180.5 309.3,108.3 288.7,108.3 216.5,180.5 299,262.9 "
				/>
			</g>
			<g id="groupMarkAccent">
				<polygon
					className="colorAccent"
					points="319.6,304.1 278.4,304.1 237.1,345.4 299,407.2 360.9,345.4 "
				/>
			</g>
		</svg>
	);
};

export default {LogoMark};

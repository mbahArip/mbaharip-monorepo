import * as React from 'react';
import type {LogoProps} from '.';

export const LogoText = ({
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
			viewBox="0 0 1682 611.6"
			className={`${animate && 'animate'} ${color} ${logoSize} ${className}`}
		>
			<g id="groupTextAccent">
				<polygon
					className="colorAccent"
					points="166,152.8 166,134.8 211,89.8 211,107.8 "
				/>
				<polygon
					className="colorAccent"
					points="265,557.8 247,557.8 364,440.8 364,458.8 "
				/>
				<polygon
					className="colorAccent"
					points="571,251.8 571,233.8 679,125.8 679,143.8 "
				/>
				<polygon
					className="colorAccent"
					points="697,593.8 679,593.8 841,431.8 841,449.8 "
				/>
				<polygon
					className="colorAccent"
					points="958,332.8 958,314.8 1255,17.8 1255,35.8 "
				/>
				<polygon
					className="colorAccent"
					points="1534,440.8 1534,422.8 1633,323.8 1633,341.8 "
				/>
			</g>
			<g id="groupTextMain">
				<polygon
					className="colorMain"
					points="229,251.8 175,197.8 139,233.8 139,179.8 157,161.8 157,143.8 67,233.8 67,485.8 49,503.8 49,521.8 
	139,431.8 139,323.8 175,287.8 175,485.8 247,413.8 247,323.8 283,287.8 283,503.8 355,431.8 355,269.8 283,197.8 "
				/>
				<polygon
					className="colorMain"
					points="445,323.8 481,287.8 481,359.8 391,449.8 481,449.8 553,377.8 553,269.8 481,197.8 445,233.8 
	445,125.8 373,197.8 373,449.8 445,377.8 "
				/>
				<polygon
					className="colorMain"
					points="661,431.8 679,413.8 679,449.8 751,377.8 751,197.8 679,269.8 679,323.8 643,359.8 643,287.8 
	733,197.8 643,197.8 571,269.8 571,449.8 643,449.8 "
				/>
				<polygon
					className="colorMain"
					points="841,413.8 841,332.8 877,296.8 877,413.8 949,341.8 949,269.8 877,197.8 841,233.8 841,143.8 
	877,107.8 877,89.8 769,197.8 769,377.8 688,458.8 382,458.8 373,467.8 787,467.8 "
				/>
				<polygon
					className="colorMain"
					points="1138,170.8 751,557.8 769,557.8 805,521.8 895,521.8 1138,278.8 "
				/>
				<polygon
					className="colorMain"
					points="1147,503.8 1219,431.8 1219,89.8 1147,161.8 1147,359.8 1075,359.8 913,521.8 931,521.8 1021,431.8 
	1147,431.8 "
				/>
				<polygon
					className="colorMain"
					points="1345,197.8 1309,233.8 1309,143.8 1237,215.8 1237,431.8 1147,521.8 1165,521.8 1309,377.8 1309,323.8 
	1345,287.8 "
				/>
				<polygon
					className="colorMain"
					points="1435,404.8 1435,233.8 1327,341.8 1327,359.8 1363,323.8 1363,476.8 "
				/>
				<polygon
					className="colorMain"
					points="1435,143.8 1363,215.8 1363,269.8 1435,197.8 "
				/>
				<path
					className="colorMain"
					d="M1561,143.8l-36,36v-36l-72,72v288l-36,36v18l108-108v-72h36l72-72v-90L1561,143.8z M1561,287.8l-36,36v-54
	l36-36V287.8z"
				/>
			</g>
		</svg>
	);
};

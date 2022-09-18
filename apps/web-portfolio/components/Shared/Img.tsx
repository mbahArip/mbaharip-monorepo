import { FC, useEffect, useState, forwardRef } from 'react';
import { LogoMark } from 'ui';

type ImgProps = {
	src: string;
	alt: string;
	className?: string;
	rounded?: boolean;
	aspectRatio?: 'auto' | 'square' | 'landscape' | 'portrait';
	useCredits?: boolean;
	credits?: string;
};

const Img = forwardRef<HTMLDivElement, ImgProps>(
	(
		{
			src,
			alt,
			className,
			rounded,
			aspectRatio,
			useCredits = false,
			credits = '',
		},
		ref,
	) => {
		const [imgSrc, setImgSrc] = useState('');
		const [isLoading, setIsLoading] = useState(true);

		const aspectValue = {
			auto: 'aspect-auto',
			square: 'aspect-square',
			landscape: 'aspect-landscape',
			portrait: 'aspect-portrait',
		};

		useEffect(() => {
			setIsLoading(true);
			setImgSrc(src);
			setIsLoading(false);
		}, [src]);

		return (
			<>
				{isLoading ? (
					<div
						className={`${className} ${
							rounded ? 'rounded-full' : 'rounded-lg'
						} ${
							aspectValue[aspectRatio]
						} m-4 grid animate-pulse place-items-center bg-mbaharip-light/10`}
					>
						<LogoMark size='small' />
					</div>
				) : (
					<div className='relative'>
						<img
							src={imgSrc}
							alt={alt}
							className={`${className} ${
								rounded ? 'rounded-full' : 'rounded-lg'
							} ${aspectRatio && aspectValue[aspectRatio]} object-cover`}
							onError={() => {
								setImgSrc('/images/illust/404.png');
							}}
						/>
						<span
							className={`absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.625rem] ${
								useCredits ? 'block' : 'hidden'
							}`}
						>
							{credits}
						</span>
					</div>
				)}
			</>
		);
	},
);

export default Img;

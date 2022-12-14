import {useNProgress} from '@tanem/react-nprogress';
import {FC} from 'react';

type LoadingBarProps = {
	isRouteChanging: boolean;
};

export const LoadingBar: FC<LoadingBarProps> = ({isRouteChanging}) => {
	const {animationDuration, isFinished, progress} = useNProgress({
		isAnimating: isRouteChanging,
	});

	return (
		<>
			<style>{`
				.container {
					transition: opacity ${animationDuration}ms linear;
				}

                .bar {
                    margin-left: ${(-1 + progress) * 100}%;
                    transition: margin-left ${animationDuration}ms ease;
                `}</style>
			<div
				className={`${
					isFinished ? 'opacity-0' : 'opacity-100'
				} container pointer-events-none`}
			>
				<div className="bg-mbaharip-primary bar fixed left-0 top-0 z-[1001] h-1 w-full md:h-1" />
			</div>
		</>
	);
};

export default {LoadingBar};

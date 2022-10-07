import { AxiosError } from 'axios';
import { FC } from 'react';
import Img from './Img';

type ErrorViewProps = {
	error: AxiosError;
	className?: string;
};

const ErrorView: FC<ErrorViewProps> = ({ error, className }) => (
	<div
		className={`flex h-full w-full flex-col items-center justify-center ${className}`}
	>
		{error.message.includes('404') ? (
			<>
				<Img
					src='/images/illust/404.png'
					alt='Not Found'
					className='my-4 w-48'
				/>
				<h3 className='m-0 text-center font-bold text-mbaharip-light'>
					No result found
				</h3>
				<p className='text-center text-lg text-mbaharip-light'>
					Try to search with another keyword
				</p>
			</>
		) : (
			<>
				<Img
					src='/images/illust/500.png'
					alt='Error'
					className='my-4 w-48'
				/>
				<h3 className='m-0 text-center font-bold text-red-500'>{error.code}</h3>
				<p className='text-center text-lg text-red-500'>{error.message}</p>
			</>
		)}
	</div>
);

ErrorView.defaultProps = {
	className: '',
};

export default ErrorView;

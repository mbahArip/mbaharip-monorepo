import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (axiosParams: AxiosRequestConfig) => {
	const [response, setResponse] = useState<AxiosResponse>();
	const [error, setError] = useState<AxiosError>();
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async (params: AxiosRequestConfig) => {
		try {
			const result = await axios.request({
				baseURL:
					process.env.NODE_ENV === 'production'
						? 'https://api.mbaharip.me/v1'
						: 'http://localhost:8000/v1',
				...params,
			});
			setResponse(result);
		} catch (err: AxiosError | Error | any) {
			setError(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData(axiosParams);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { response, error, isLoading };
};

export default useFetch;

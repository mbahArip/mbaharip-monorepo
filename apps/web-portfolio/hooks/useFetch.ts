import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

interface FetchOptions {
	isLoading: any;
	isError: any;
	response: any;
}

const useFetch = (axiosParams: AxiosRequestConfig) => {
	const [response, setResponse] = useState<AxiosResponse>();
	const [error, setError] = useState<AxiosError>();
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async (params: AxiosRequestConfig) => {
		try {
			const result = await axios.request({
				baseURL: 'https://api.mbaharip.me/v1',
				...params,
			});
			setResponse(result);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData(axiosParams);
	}, []);

	return { response, error, isLoading };
};

export default useFetch;

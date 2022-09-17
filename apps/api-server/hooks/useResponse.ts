import { stringAddEndingDot } from '../utils/stringManipulation';

/**
 * Available response
 * 200: OK
 * 201: CREATED
 * 400: BAD REQUEST
 * 401: UNAUTHORIZED
 * 404: NOT FOUND
 * 500: INTERNAL SERVER ERROR
 */

const responseTemplate = {
	200: {
		status: 200,
		message: 'Request success.',
	},
	201: {
		status: 201,
		message: 'Create request success.',
	},
	400: {
		status: 400,
		message: 'Bad request. Check details for more information.',
	},
	401: {
		status: 401,
		message: 'Unauthorized request. Check details for more information.',
	},
	404: {
		status: 404,
		message: 'Requested resource was not found.',
	},
	429: {
		status: 429,
		message: 'Too many requests. Please try again later.',
	},
	500: {
		status: 500,
		message: 'Internal server error.',
	},
	501: {
		status: 501,
		message: 'Not implemented.',
	},
};

export default function useResponse(
	status: 200 | 201 | 400 | 401 | 404 | 429 | 500 | 501,
	success: boolean,
	details: string,
	extra?: object,
	data?: object[] | string[] | number[] | object
) {
	const formattedDetails = stringAddEndingDot(details);
	const response = {
		success,
		timestamp: new Date().getTime(),
		...responseTemplate[status],
		details: {
			message: formattedDetails,
			...extra,
		},
		data,
	};
	return response;
}

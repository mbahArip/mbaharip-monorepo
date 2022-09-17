import { NextApiRequest, NextApiResponse } from 'next';
import useResponse from '../../hooks/useResponse';
import usePrisma from '../../hooks/usePrisma';

const postCommentHandler = async (
	req: NextApiRequest,
	res: NextApiResponse,
) => {
	const METHOD = req.method!.toUpperCase();
	const id = req.query.id as string;

	if (METHOD === 'POST') {
		const { name, email, content, reply, replyTo } = req.body;
		const isReply: { reply: boolean; replyTo: string } = {
			reply: false,
			replyTo: '',
		};

		const missingFields = [];
		if (!name) missingFields.push('name');
		if (!email) missingFields.push('email');
		if (!content) missingFields.push('content');
		if (missingFields)
			return res
				.status(400)
				.json(
					useResponse(400, false, 'Missing required field.', { missingFields }),
				);

		if (reply && replyTo) {
			isReply.reply = reply === 'true';
			isReply.replyTo = replyTo;

			if (reply && !replyTo)
				return res.status(400).json(
					useResponse(400, false, 'Missing required field.', {
						missingFields: ['replyTo'],
					}),
				);
			if (!reply && replyTo)
				return res.status(400).json(
					useResponse(400, false, 'Missing required field.', {
						missingFields: ['reply'],
					}),
				);
		}

		try {
			const databaseResponse = await usePrisma.comments.create({
				data: {
					name,
					email,
					content,
					blogId: id,
					...isReply,
				},
			});

			return res
				.status(201)
				.json(useResponse(201, true, 'Comment created.', {}, databaseResponse));
		} catch (error: any) {
			if (error.code === 'P2025')
				return res
					.status(404)
					.json(useResponse(404, false, 'Comment not found.'));

			return res
				.status(500)
				.json(useResponse(500, false, 'Failed to create comment.', { error }));
		}
	}

	return res.status(501).json(useResponse(501, false, 'Not implemented.'));
};

export default postCommentHandler;

/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import useResponse from '../../hooks/useResponse';

export type GumroadResponse = {
	seller_id: string;
	product_id: string;
	product_name: string;
	permalink: string;
	product_permalink: string;
	short_product_id: string;
	email: string;
	price: number;
	gumroad_fee: number;
	currency: string;
	quantity: number;
	discover_fee_charged: boolean;
	can_contact: true;
	referrer: string;
	order_number: string;
	sale_id: string;
	sale_timestamp: Date | string;
	full_name: string;
	ip_country: string;
	offer_code?: string;
	is_gift_receiver_purchase: boolean;
	refunded: boolean;
	disputed: boolean;
	dispute_won: boolean;
	test: boolean;
};

function maskEmail(string: string) {
	return string.replace(
		/(..)(.{1,2})(?=.*@)/g,
		(_, a, b) => a + '\\*'.repeat(b.length),
	);
}

function maskName(name: string) {
	return name.replace(
		/\b(\w{2})(\w+)(\w)\b/g,
		(_, first, middle, last) => `${first}${'\\*'.repeat(middle.length)}${last}`,
	);
}
async function pingToDiscord(
	gumroadResponse: GumroadResponse,
	productDetails: ProductDetails,
	channel: string,
	token: string,
) {
	const dataPayload = {
		content: `New Gumroad sale!`,
		tts: false,
		embeds: [
			{
				type: 'rich',
				title: `Someone just bought ${productDetails.name}!`,
				description: `Thank you **${maskName(
					gumroadResponse.full_name,
				)}** (**${maskEmail(gumroadResponse.email)}**) for your purchase!
                
                Purchase details:
                **Order ID**:  ${gumroadResponse.order_number}
                **Product ID**:  ${gumroadResponse.product_id}
                **Price**:  ${new Intl.NumberFormat('en-US', {
									style: 'currency',
									currency: 'USD',
									currencyDisplay: 'symbol',
									maximumFractionDigits: 2,
								}).format(gumroadResponse.price / 100)}
                                
                [View product](${gumroadResponse.product_permalink})
                [Setup your own notification](https://www.mbaharip.me/gumroad-ping)`,
				color: 15856113,
				timestamp: new Date(gumroadResponse.sale_timestamp).toISOString(),
				fields: [
					{
						name: `Country`,
						value: gumroadResponse.ip_country,
						inline: true,
					},
					{
						name: `Offer Code`,
						value: gumroadResponse.offer_code
							? gumroadResponse.offer_code
							: 'None',
						inline: true,
					},
				],
				footer: {
					text: 'Gumroad',
				},
				image: {
					url: productDetails.thumbnail_url,
				},
				author: {
					name: `mbahArip Gumroad Notification`,
					url: `https://www.mbaharip.me/`,
					icon_url: `https://cdn.mbaharip.me/api?path=/%E8%8A%B1%E5%A4%A2%EF%BC%8Fkanon/ava_pixel.png&raw=true`,
				},
			},
		],
	};

	const createEndpoint = `https://discord.com/api/v10/webhooks/${channel}/${token}`;
	await axios.post(createEndpoint, dataPayload);
}

const pingHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { channel, token, apiKey } = req.query;
	const gumroadResponse: GumroadResponse = {
		seller_id: req.body.seller_id as string,
		product_id: req.body.product_id as string,
		product_name: req.body.product_name as string,
		permalink: req.body.permalink as string,
		product_permalink: req.body.product_permalink as string,
		short_product_id: req.body.short_product_id as string,
		email: req.body.email as string,
		price: req.body.price as number,
		gumroad_fee: req.body.gumroad_fee as number,
		currency: req.body.currency as string,
		quantity: req.body.quantity as number,
		discover_fee_charged: req.body.discover_fee_charged as boolean,
		can_contact: req.body.can_contact as true,
		referrer: req.body.referrer as string,
		order_number: req.body.order_number as string,
		sale_id: req.body.sale_id as string,
		sale_timestamp: req.body.sale_timestamp as Date | string,
		full_name: req.body.full_name as string,
		ip_country: req.body.ip_country as string,
		is_gift_receiver_purchase: req.body.is_gift_receiver_purchase as boolean,
		refunded: req.body.refunded as boolean,
		disputed: req.body.disputed as boolean,
		dispute_won: req.body.dispute_won as boolean,
		test: req.body.test as boolean,
	};

	try {
		const getProductDetails = await axios.get(
			`https://api.gumroad.com/v2/products/${gumroadResponse.short_product_id}`,
			{
				headers: {
					'Authorization': `Bearer ${apiKey}`,
					'Content-Type': 'application/json',
				},
			},
		);
		const { product } = getProductDetails.data;
		const { name, thumbnail_url } = product;

		await pingToDiscord(
			gumroadResponse,
			{ name, thumbnail_url },
			channel as string,
			token as string,
		);

		return res.status(200).json(useResponse(200, true, 'Success'));
	} catch (error: any) {
		return res.status(500).json(useResponse(500, false, error.message));
	}
};

export default pingHandler;

type ProductDetails = {
	name: string;
	thumbnail_url: string;
};

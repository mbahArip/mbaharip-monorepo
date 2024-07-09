import axios from 'axios';

interface DiscordWebhookURL {
	gumroadPing: string;
	webUpdate: string;
	promoCode: string;
	scheduler: string;
	test: string;
}

const discordWebhookURL: DiscordWebhookURL = {
	gumroadPing:
		'https://discord.com/api/webhooks/983798321623752734/wAKMM1xlY-MGTCaPe_vCFbNsPHFEUf8e18H0FCvehFNpFQHeouew1PSRsum_GAVyTeRm',
	webUpdate:
		'https://discord.com/api/webhooks/983834034281013329/r9-fthZy6qJps2eBHrRoXNcDGZM5qlKOCFayua8-ouiL51kmLNAzh3HBZuwhwNy6EkFQ',
	promoCode:
		'https://discord.com/api/webhooks/984531180135280701/mwXjcmEJ3NaXeaHhBBQZ5TVATEoCJ2vk7w4GZ-g4NDdV5WcX-LsRTP2UdUPgH0CFIAK9',
	scheduler:
		'https://discord.com/api/webhooks/1020754322704834581/sQWIkwI12UKQH0jAkHHE58vgKa5DjzMWX7OPODcvXqeoP151tOfWBTK7eTAzPBEu8Idp',
	test: 'https://discord.com/api/webhooks/1020751284330049557/lEpBn8tWfJWzo5nh-5zceg8YX7Ls274j6I45u_K8WZrEROTbysR316sj1F47woA7hZvs',
};

type EmbedField = {
	name: string;
	value: string | number | boolean;
	inline?: boolean;
};
type Embeds = {
	title: string;
	description: string;
	fields: EmbedField[];
	timestamp: Date;
	footerText: string;
	imageUrl?: string;
};

const postToDiscord = async (
	channel: 'gumroadPing' | 'webUpdate' | 'promoCode' | 'scheduler' | 'test',
	content: string = '',
	useEmbed: boolean = false,
	embeds?: Embeds,
	avatar?: string;
) => {
	type Embed = {
		title: string;
		description: string;
		color: number;
		fields: EmbedField[];
		timestamp: string;
		footer: { text: string };
		image?: { url: string };
	};
	type DataPayload = {
		content: string;
		embeds?: Embed[];
	};
	const dataPayload: DataPayload = {
		content,
		avatar_url: avatar
	};

	if (useEmbed) {
		dataPayload.embeds = [
			{
				title: embeds!.title,
				description: embeds!.description,
				color: 15357964,
				fields: embeds!.fields,
				timestamp: embeds!.timestamp.toISOString(),
				footer: { text: embeds!.footerText },
			},
		];

		if (embeds!.imageUrl) {
			dataPayload.embeds[0].image = { url: embeds!.imageUrl };
		}
	}

	const targetWebhookURL = discordWebhookURL[channel];
	const urlArray = targetWebhookURL.split('api/');
	const endpoint = `${urlArray[0]}api/v10/${urlArray[1]}`;
	await axios.post(endpoint, dataPayload);
};

export default postToDiscord;

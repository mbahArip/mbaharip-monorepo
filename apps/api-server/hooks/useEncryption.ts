import crypto from 'crypto';

const ALGORITHM: string = 'aes-256-cbc';
const SECRET: string = process.env.MBAHARIP_SECRET as string;
const KEY: string = crypto
	.createHash('sha256')
	.update(SECRET)
	.digest('base64')
	.substring(0, 32);
const IV = crypto.randomBytes(16);

export const encrypt = (text: string): string => {
	const cipher = crypto.createCipheriv(ALGORITHM, KEY, IV);
	const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
	return `${IV.toString('hex')}:${encrypted.toString('hex')}`;
};

export const decrypt = (hash: string) => {
	const hashIV = Buffer.from(hash.split(':')[0], 'hex');
	const hashEncrypt = Buffer.from(hash.split(':')[1], 'hex');

	try {
		const decipher = crypto.createDecipheriv(ALGORITHM, KEY, hashIV);
		const decrypted = Buffer.concat([
			decipher.update(hashEncrypt),
			decipher.final(),
		]);
		return decrypted.toString();
	} catch (error) {
		return error;
	}
};

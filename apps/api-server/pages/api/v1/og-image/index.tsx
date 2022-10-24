import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
	runtime: 'experimental-edge',
};

const fontBebas = fetch(
	new URL('../../../../assets/BebasNeue-Regular.woff', import.meta.url),
).then((res) => res.arrayBuffer());
const fontOrientica = fetch(
	new URL('../../../../assets/ORIENTICA-Regular.woff', import.meta.url),
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
	try {
		const fontDataBebas = await fontBebas;
		const fontDataOrientica = await fontOrientica;
		const logoSize = 72;
		const { searchParams } = new URL(req.url);
		const hasTitle = searchParams.has('title');
		const hasId = searchParams.has('id');

		if (!hasTitle || !hasId) {
			return new ImageResponse(
				(
					<div
						style={{
							background: '#0d0d0d',
							color: '#f1f1f1',
							width: '100%',
							height: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<svg
							x='0px'
							y='0px'
							width={(75 / 100) * 1200}
							height={(75 / 100) * 630}
							viewBox='0 0 2088 576'
							style={{
								objectFit: 'contain',
								position: 'absolute',
							}}
							fill='#ea580c'
						>
							<polygon points='1413,315 1413,297 1710,0 1710,18 ' />
							<polygon points='1026,234 1026,216 1134,108 1134,126 ' />
							<polygon points='1989,423 1989,405 2088,306 2088,324 ' />
							<polygon points='621,135 621,117 666,72 666,90 ' />
							<polygon points='720,540 702,540 819,423 819,441 ' />
							<polygon points='1152,576 1134,576 1296,414 1296,432 ' />
						</svg>
						<svg
							x='0px'
							y='0px'
							width={(75 / 100) * 1200}
							height={(75 / 100) * 630}
							viewBox='0 0 2088 576'
							style={{
								objectFit: 'contain',
								position: 'absolute',
							}}
							fill='#f1f1f1'
						>
							{' '}
							<g>
								<polygon points='1890,387 1890,216 1782,324 1782,342 1818,306 1818,459 	' />
								<polygon
									points='684,234 630,180 594,216 594,162 612,144 612,126 522,216 522,468 504,486 504,504 594,414 594,306 
		630,270 630,468 702,396 702,306 738,270 738,486 810,414 810,252 738,180 	'
								/>
								<polygon
									points='1296,396 1296,315 1332,279 1332,396 1404,324 1404,252 1332,180 1296,216 1296,126 1332,90 1332,72 
		1224,180 1224,360 1143,441 837,441 828,450 1242,450 	'
								/>
								<polygon points='1800,180 1764,216 1764,126 1692,198 1692,414 1602,504 1620,504 1764,360 1764,306 1800,270 	' />
								<polygon points='1890,126 1818,198 1818,252 1890,180 	' />
								<polygon
									points='900,306 936,270 936,342 846,432 936,432 1008,360 1008,252 936,180 900,216 900,108 828,180 828,432 
		900,360 	'
								/>
								<path
									d='M2016,126l-36,36v-36l-72,72v288l-36,36v18l108-108v-72h36l72-72v-90L2016,126z M2016,270l-36,36v-54l36-36
		V270z'
								/>
								<polygon
									points='1116,414 1134,396 1134,432 1206,360 1206,180 1134,252 1134,306 1098,342 1098,270 1188,180 
		1098,180 1026,252 1026,432 1098,432 	'
								/>
								<polygon points='1593,153 1206,540 1224,540 1260,504 1350,504 1593,261 	' />
								<polygon points='1602,486 1674,414 1674,72 1602,144 1602,342 1530,342 1368,504 1386,504 1476,414 1602,414 	' />
							</g>
						</svg>

						<svg
							x='0px'
							y='0px'
							width={(75 / 100) * 1200}
							height={(75 / 100) * 630}
							viewBox='0 0 2088 576'
							style={{
								objectFit: 'contain',
								position: 'absolute',
							}}
							fill='#ea580c'
						>
							<polygon points='252,288 216,288 180,324 234,378 288,324 	' />
						</svg>

						<svg
							x='0px'
							y='0px'
							width={(75 / 100) * 1200}
							height={(75 / 100) * 630}
							viewBox='0 0 2088 576'
							style={{
								objectFit: 'contain',
								position: 'absolute',
							}}
							fill='#f1f1f1'
						>
							<g>
								<polygon points='153,189 0,342 0,378 72,450 126,450 162,414 162,396 126,360 225,261 	' />
								<polygon points='315,189 468,342 468,378 396,450 342,450 306,414 306,396 342,360 243,261 	' />
								<polygon points='306,180 243,117 225,117 162,180 234,252 	' />
							</g>
						</svg>
					</div>
				),
				{
					width: 1200,
					height: 630,
					fonts: [
						{
							name: 'Orientica',
							data: fontDataOrientica,
							style: 'normal',
						},
						{
							name: 'Bebas',
							data: fontDataBebas,
							style: 'normal',
						},
					],
				},
			);
		}

		const title = searchParams.get('title');
		const id = searchParams.get('id');

		return new ImageResponse(
			(
				<div
					style={{
						display: 'flex',
						width: '100%',
						height: '100%',
						background: '#0d0d0d',
						color: '#f1f1f1',
						position: 'relative',
					}}
				>
					<img
						src={`https://cdn.mbaharip.me/api?path=/thumb/${id}_thumb.jpeg&raw=true`}
						alt='thumb'
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
						}}
					/>
					<img
						src='https://cdn.mbaharip.me/api?path=/thumb/global-overlay.png&raw=true'
						alt='overlay'
						style={{
							width: '100%',
							height: '100%',
							position: 'absolute',
						}}
					/>
					<div
						style={{
							position: 'absolute',
							bottom: 0,
							fontFamily: 'Bebas',
							fontSize: 72,
							letterSpacing: '0',
							padding: '16px',
							whiteSpace: 'pre-wrap',
							display: 'flex',
							flexDirection: 'column',
							maxWidth: '900px',
							width: '900px',
						}}
					>
						<b>{title}</b>
					</div>
					<div
						style={{
							width: '100%',
							height: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							position: 'absolute',
						}}
					>
						<svg
							version='1.1'
							x='0px'
							y='0px'
							viewBox='0 0 598 598'
							width={logoSize}
							height={logoSize}
							fill='#ea580c'
							style={{
								position: 'absolute',
								bottom: 16,
								right: 16,
							}}
						>
							<polygon points='319.6,304.1 278.4,304.1 237.1,345.4 299,407.2 360.9,345.4 ' />
						</svg>
						<svg
							version='1.1'
							x='0px'
							y='0px'
							viewBox='0 0 598 598'
							width={logoSize}
							height={logoSize}
							fill='#f1f1f1'
							style={{
								position: 'absolute',
								bottom: 16,
								right: 16,
							}}
						>
							<polygon
								points='206.2,190.8 31,366 31,407.2 113.5,489.7 175.3,489.7 216.5,448.5 216.5,427.9 175.3,386.6 
	288.7,273.2 '
							/>
							<polygon
								points='391.8,190.8 567,366 567,407.2 484.5,489.7 422.7,489.7 381.5,448.5 381.5,427.9 422.7,386.6 
	309.3,273.2 '
							/>
							<polygon points='381.5,180.5 309.3,108.3 288.7,108.3 216.5,180.5 299,262.9 ' />
						</svg>
					</div>
				</div>
			),
			{
				width: 1200,
				height: 630,
				fonts: [
					{
						name: 'Orientica',
						data: fontDataOrientica,
						style: 'normal',
					},
					{
						name: 'Bebas',
						data: fontDataBebas,
						style: 'normal',
					},
				],
			},
		);
	} catch (e: any) {
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}

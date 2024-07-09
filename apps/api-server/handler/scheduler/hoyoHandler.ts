import {NextApiRequest, NextApiResponse} from 'next';
import { red, green, cyan } from 'kolorist';
import useResponse from '../../hooks/useResponse';
import postToDiscord from '../../utils/discordHelper';

type Game = "zzz" | "genshin";
const gameName: Record<Game, string> = {
    zzz: "Zenless Zone Zero",
    genshin: "Genshin Impact"
}
const endpoint: Record<Game, string> = {
  zzz: 'https://sg-act-nap-api.hoyolab.com/event/luna/zzz/os/sign?act_id=e202406031448091',
  genshin:  'https://sg-hk4e-api.hoyolab.com/event/sol/sign?act_id=e202102251931481',
}

export default async function hoyoLogin(req: NextApiRequest, res: NextApiResponse, game: Game) {
    const {cookie} = req.body;
    if(!cookie) {
        console.log(red("Missing cookie from body"));
        return res.status(400).json(useResponse(400, false, 'Missing cookie from body'))
    }

    const url = new URL(endpoint[game]);
    url.searchParams.set('lang', 'en-us');

    const body = JSON.stringify({
        lang: 'en-us',
        act_id: url.searchParams.get('act_id')
    })

    const headers = new Headers()

    Object.entries({
      'accept': 'application/json, text/plain, */*',
      'accept-encoding': 'gzip, deflate, br, zstd',
      'accept-language': 'en-US,en;q=0.6',
      'connection': 'keep-alive',
      'origin': 'https://act.hoyolab.com',
      'referrer': 'https://act.hoyolab.com',
      'content-type': 'application.json;charset=UTF-8',
      'cookie': cookie,
      'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Brave";v="126"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"',
      'sec-fetch-dest': 'empty',
      'sec-fech-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'sec-gpc': '1',
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
    }).forEach(([key, value]) => headers.set(key, value))

    try {
        const res = await fetch(url, {method: 'POST', headers, body}).then(res => res.json());
    
        if(res.message === 'OK' || res.retcode === 0) {
            await postToDiscord('scheduler', `${gameName[game]} Checked In!`, true, {
                title: `✅ ${gameName[game]} check in success`,
                description: `Successfully checked in to ${gameName[game]}`,
                timestamp: new Date(),
                footerText: "Scheduler",
                fields: [],
            });
        } else if(res.message.includes('already') || res.retcode === -5003) {
            await postToDiscord('scheduler', `${gameName[game]} Already Checked In!!`, true, {
                title: `✅ ${gameName[game]} already checked in for today`,
                description: `Check in to ${gameName[game]} aborted because you already checked in for today`,
                timestamp: new Date(),
                footerText: "Scheduler",
                fields: [],
            });
        } else {
            throw new Error(res.message || "Unknown Error");
        }
    } catch (error) {
        const e = error as Error;
        await postToDiscord('scheduler', `${gameName[game]} Failed to Checked In!`, true, {
            title: `❌ ${gameName[game]} check in failed`,
            description: `Failed checked in to ${gameName[game]}\nError: ${e.message}`,
            timestamp: new Date(),
            footerText: "Scheduler",
            fields: [],
        });
        return res.status(500).json(useResponse(500, false, `Failed`))
    }
    return res.status(200).json(useResponse(200, true, `Success`))
}
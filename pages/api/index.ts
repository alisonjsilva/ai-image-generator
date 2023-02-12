import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

type Data = {
    image: string | undefined,
    message: string | undefined
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    if (req.method !== "POST") return res.status(400).json({ image: undefined, message: "Invalid method" })

    const { prompt } = req.body

    if (!prompt) return res.status(400).json({ image: undefined, message: "No prompt provided" })



    try {
        const openAi = new OpenAIApi(configuration)
        const response = await openAi.createImage({
            prompt: prompt as string,
            n: 1,
            size: "512x512",

        })
        const image = response.data.data[0].url;

        res.status(200).json({ image, message: "Success" })

    } catch (error) {
        if (error instanceof Error) {
            if (error.message) {
                console.log(error.message);
            }
        }
        res.status(500).json({ image: undefined, message: "Internal server error" })
    }
}
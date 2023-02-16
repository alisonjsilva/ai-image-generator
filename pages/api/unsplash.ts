import type { NextApiRequest, NextApiResponse } from 'next'
import { createApi } from 'unsplash-js'

export default async function getUnsplashImage(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const unsplash = createApi({
        accessKey: process.env.UNSPLASH_API_KEY as string,
        //...other fetch options
    });

    return unsplash.photos.getRandom(
        {
            query: 'nature',
            featured: true,
            count: 1,
            orientation: 'portrait',
        }
    ).then(result => {
        if (result.errors) {
            // handle error here
            console.log('error occurred: ', result.errors[0]);
            return res.status(500).json(result.errors[0]);
        } else {
            // handle success here
            // console.log(result.response);
            return res.status(200).json(result.response);
        }
    });

}


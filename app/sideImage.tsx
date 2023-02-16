import styles from './page.module.scss'
import { createApi } from 'unsplash-js'

export const revalidate = 30;

export async function getUnsplashImage(): Promise<any> {
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
        } else {
            // handle success here
            // console.log(result.response);
            return result.response;
        }
    });

}

export default async function Sidebar(): Promise<JSX.Element> {

    const imageResponse = await getUnsplashImage();
    const image = imageResponse?.[0]?.urls?.regular;

    const style = {
        "--backgroundImage": `url(${image})`
    } as React.CSSProperties;

    return (
        <div style={style} className={`w-1/3 ${styles.focusImageBackground}`}></div>
    )
}
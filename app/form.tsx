"use client";
import { useState } from 'react'

export default function Form() {

    const [prompt, setPrompt] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPrompt(e.currentTarget.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setImage('');
        setLoading(true);
        const response = await fetch('/api', {
            method: 'POST',
            body: JSON.stringify({ prompt }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log('prompt', prompt)
        setImage(data.image);
        setLoading(false);
    }


    return (
        <div className='w-full lg:w-2/3 h-full text-center ml-1 mr-1 lg:m-auto flex content-center'>
            <div className='w-full content-center'>
                <div className="md:gap-6">
                    <div className="mt-5 md:mt-0 ml-4">
                        <form action="#" method="POST">
                            <div className="shadow sm:overflow-hidden sm:rounded-md">
                                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                    <div>
                                        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">Please, insert your prompt to generate the image.</label>
                                        <div className="mt-1">
                                            <textarea onChange={handlePromptChange} id="prompt" name="prompt" rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Victorian city landscape"></textarea>
                                        </div>
                                    </div>

                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <button onClick={(e: any) => handleSubmit(e)} type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Generate</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='mt-10 lg:ml-4 md:gap-6 grid'>
                    <div className='w-1/2 place-self-center'>
                        {loading && <div className='text-2xl'>Generating your image...</div>}
                        {image && <img src={image} />}
                    </div>

                </div>
            </div>

        </div>
    )
}
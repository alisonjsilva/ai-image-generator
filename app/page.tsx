import { Inter } from '@next/font/google'
import styles from './page.module.scss'
import { createApi } from 'unsplash-js'
// import Sidebar from './sideImage'
import Sidebar from './sideImage'

const inter = Inter({ subsets: ['latin'] })
export const revalidate = 30;

export default async function Home() {

  return (
    <main className='flex w-screen h-full'>
      {/* @ts-expect-error Server Component */}
      <Sidebar />
      <div className='w-2/3 h-full text-center'>
        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="mt-5 md:col-span-2 md:mt-0 ml-4">
              <form action="#" method="POST">
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                  <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                    

                    <div>
                      <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">Please, insert your prompt to generate the image.</label>
                      <div className="mt-1">
                        <textarea id="prompt" name="prompt" rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Victorian city landscape"></textarea>
                      </div>
                    </div>

                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Generate</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

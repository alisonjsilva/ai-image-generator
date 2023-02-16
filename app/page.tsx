import { Inter } from '@next/font/google'
import styles from './page.module.scss'
import { createApi } from 'unsplash-js'
// import Sidebar from './sideImage'
import Sidebar from './sideImage'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  return (
    <main className='flex w-screen h-full'>
      {/* @ts-expect-error Server Component */}
      <Sidebar />
      <div className='w-2/3 h-full text-center'>
        <h1>Image generator</h1>
      </div>
    </main>
  )
}

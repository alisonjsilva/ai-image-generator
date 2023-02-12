import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex w-screen h-full'>
      <div className={`w-1/3 ${styles.focusImageBackground}`}>
            {/* <Image
              src='https://images.unsplash.com/photo-1676206584909-c373cf61cefc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1408&q=80'
              fill={true}
              alt="" /> */}
        </div>
        <div className='w-2/3 h-full text-center'>
          <h1>Image generator</h1>
        </div>
    </main>
  )
}

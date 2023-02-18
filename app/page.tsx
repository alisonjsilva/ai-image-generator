
import { Inter } from '@next/font/google'
import Sidebar from './sideImage'
import Form from './form'

const inter = Inter({ subsets: ['latin'] })
export const revalidate = 30;

export default async function Home() {


  return (
    <main className='flex w-screen h-full'>
      {/* @ts-expect-error Server Component */}
      <Sidebar />
      <Form />
    </main>
  )
}

import { Inter } from 'next/font/google'
import Link from 'next/link'
import MainLayout from '../../components/layouts/MainLayout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <MainLayout>
     <div className={'description'}>
          <h1>
            Ir a <Link href="/about">About</Link>
          </h1>
          <p>

            Get started by editing&nbsp;
            <code className={'code'}>src/pages/index.js</code>
          </p>
          <div>
        </div>
        </div>
  </MainLayout>
  )
}

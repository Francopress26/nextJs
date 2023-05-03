import { Inter } from 'next/font/google'
import Link from 'next/link'
import MainLayout from '../../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
 <MainLayout>
     <div className={'description'}>
          <h1>
            Ir a <Link href ="/">Home</Link>
          </h1>
          <p>

            Get started by editing&nbsp;
            <code className={'code'}>src/pages/contact.js</code>
          </p>
          <div>
        </div>
        </div>
 </MainLayout>
  )
}
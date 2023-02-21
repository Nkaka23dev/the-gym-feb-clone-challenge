import Layout from '@/components/Layout'
import '@/styles/globals.css'
import localFont from '@next/font/local'

const myFont = localFont({src:'../public/roboto-latin-300-normal.woff2'})

export default function App({ Component, pageProps }) {
  return <main className={myFont.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </main>
}

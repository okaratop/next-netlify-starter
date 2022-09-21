import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bytheconteudo!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="PAGAMENTOS TC WALLET" />
        <p className="description">
          Assinaturas, produtos e +
          Fale comigo no chat para comprar🥰
        </p>
      </main>

      <Footer />
    </div>
  )
}

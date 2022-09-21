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
        <a href="https://lively-gnome-333ad2.netlify.app/page2/"><button style="background: #069cc2; border-radius: 6px; padding: 15px; cursor: pointer; color: #fff; border: none; font-size: 16px;">Meu Botão</button></a>
      </main>

      <Footer />
    </div>
  )
}

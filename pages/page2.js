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
        <Header title="Quem somos nós" />
        <p className="description">
          Nós somos o bytheconteudo! O que fazemos é criar aplicativos para Android, que servem para mostrar o que é possível criar ultilizando apenas o celular. Nenhum aplicativo é vendido, alguns projetos são liberados para download para serem usados no Sketchware. Obrigado por acompanhar!
        </p>
        <a href="https://wipsites.com.br"><button style="background: #069cc2; border-radius: 6px; padding: 15px; cursor: pointer; color: #fff; border: none; font-size: 16px;">Voltar</button></a>
      </main>

      <Footer />
    </div>
  )
}

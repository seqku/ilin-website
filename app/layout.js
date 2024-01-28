import Head from 'next/head'
import './globals.css'

export const metadata = {
  title: 'Ilin Esports',
  description: 'Official Ilin Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Counter-Strike 2, Киберспорт, Команды, Составы, Результаты, ILIN, ilin" />
        <meta property="og:title" content="Команды Counter-Strike 2: Составы, Результаты, Новости" />
        <meta property="og:description" content="Узнайте о лучших командах в Counter-Strike 2, следите за их результатами и новостями о составах." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="ilin.pro" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  )
}

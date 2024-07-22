import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Providers from './providers'
import { cookies } from 'next/headers'

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ['latin'] })

// SEO 
import backgroundImage from "@/assets/landing-page.png"

const urlClient = process.env.NEXT_PUBLIC_URL_CLIENT ?? "http://localhost:3000";
export const metadata: Metadata = {
  metadataBase: new URL(urlClient),
  title: "Portfolio | Vinicius Cavalcanti Santos",
  description: 'Meu universo de código em destaque! Explore meu portfolio de programação - uma jornada digital que traduz ideias em linhas de código.',
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  manifest: '/site.webmanifest',
  creator: "Vinicius Cavalcanti Santos",
  openGraph: {
    url: urlClient,
    type: "website",
    title: "Youniky | Uma rede social de criatividade",
    description: 'Explore a essência da criatividade e conexões autênticas na Youniky. Compartilhe, inspire-se e seja você mesmo!',
    siteName: "youniky",
    images: backgroundImage.src
  },
  keywords: ["vinicius", "portfolio", "programação", "programador", "sucesso", "next", "javascript", "php",],
}

// FONTAWESOME
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = cookies().get('theme')?.value ?? "dark";

  return (
    <html lang="pt-BR">
      <body className={poppins.className + " " + theme}>        
        <Providers>
          <Header />

          {children}
        </Providers>
      </body>
    </html>
  )
}

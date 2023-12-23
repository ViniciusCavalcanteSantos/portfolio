import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Providers from './providers'
import { cookies } from 'next/headers'

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Portfolio"
  },
  description: 'Meu universo de código em destaque! Explore meu portfólio de programação - uma jornada digital que traduz ideias em linhas de código inovadoras.',
  icons: {
    icon: "/favicon.ico",
  },
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

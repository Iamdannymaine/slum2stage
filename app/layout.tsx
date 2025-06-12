import type { Metadata } from 'next'
import { Inter, Libre_Baskerville } from 'next/font/google'
import './globals.css'
import { Header, Providers, Footer, GSAPLoader } from '@/components/shared';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-libre-baskerville',
  display: "swap",
});


export const metadata: Metadata = {
  title: 'Slum2Stage',
  description: 'Every child desearves to be happy!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
        <Providers>
          <main className="w-full">
            <div className="relative">
              <Header />
            </div>
            {children}
          </main>
          <Footer />
        </Providers>
        <GSAPLoader />
      </body>
    </html>
  )
}

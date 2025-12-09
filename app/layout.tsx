import type {Metadata} from 'next'
import Header from '@/components/Header/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Easy List App',
  description: 'Generated list app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

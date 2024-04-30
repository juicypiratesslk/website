import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head' 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Evil Rabbit — Design',
  description: 'Nicolas Garro, aka Evil Rabbit: Founding Designer / Brand Architect at Vercel.', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@evilrabbit_" />
        <meta name="twitter:creator" content="@evilrabbit_" />
        <meta name="twitter:title" content="Evil Rabbit" />
        <meta name="twitter:description" content="Nicolas Garro, aka Evil Rabbit: Founding Designer / Brand Architect at Vercel." />
        <meta name="twitter:image" content="https://dev.evilrabb.it/static/og-image.png" />
        <meta property="og:title" content="Evil Rabbit" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Nicolas Garro, aka Evil Rabbit: Founding Designer / Brand Architect at Vercel." />
        <meta property="og:url" content="https://dev.evilrabb.it" />
        <meta property="og:image" content="https://dev.evilrabb.it/static/og-image.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
      </Head>
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  )
}

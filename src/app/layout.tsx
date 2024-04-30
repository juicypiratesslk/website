import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

// Assuming Metadata needs to be fully populated
export const metadata: Metadata = {
  title: 'Evil Rabbit — Design',
  description: 'Nicolas Garro, aka Evil Rabbit: Founding Designer / Brand Architect at Vercel.',
  keywords: '', // Default value if needed
  author: '', // Default value if needed
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title || 'Default Title'}</title>
        <meta name="description" content={metadata.description || 'Default Description'} />
        <meta name="keywords" content={metadata.keywords || 'Default Keywords'} />
        <meta name="author" content={metadata.author || 'Default Author'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@evilrabbit_" />
        <meta name="twitter:creator" content="@evilrabbit_" />
        <meta name="twitter:title" content={metadata.title || 'Default Twitter Title'} />
        <meta name="twitter:description" content={metadata.description || 'Default Twitter Description'} />
        <meta name="twitter:image" content="https://dev.evilrabb.it/static/og-image.png" />
        <meta property="og:title" content={metadata.title || 'Default OG Title'} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={metadata.description || 'Default OG Description'} />
        <meta property="og:url" content="https://dev.evilrabb.it" />
        <meta property="og:image" content="https://dev.evilrabb.it/static/og-image.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
      </Head>
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}

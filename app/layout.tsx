import './globals.css';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
const DynamicThemeButton = dynamic(() => import('@/components/ThemeChanger'));

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Naveed Portfolio',
  description: 'Portfolio of Naveed Abdullah, a Software Engineer',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <title>Naveed Abdullah | Software Engineer</title>
        <meta name='description' content={metadata.description!} />
        <meta property='og:title' content='Naveed Abdullah Portfolio Website' />
        <meta property='og:description' content={metadata.description!} />
      </Head>
      <body
        className={`${inter.variable} ${inter.className} antialiased bg-primary`}
      >
        {children}
        <DynamicThemeButton />
      </body>
    </html>
  );
}

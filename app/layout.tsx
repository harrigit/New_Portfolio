import ThemeButton from "@/components/ThemeChanger";
import "./globals.css";
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <title>Naveed Portfolio</title>
        <meta
          name='description'
          content='Portfolio of Naveed Abdullah, a Software Engineer'
        />
      </Head>
      <body
        className={`${inter.variable} ${inter.className} antialiased bg-primary`}
      >
        {children}
        <ThemeButton />
      </body>
    </html>
  );
}

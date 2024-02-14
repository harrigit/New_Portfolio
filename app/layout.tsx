import './globals.css';
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
  title: 'Naveed Abdullah',
  description: 'Portfolio of Naveed Abdullah, a Software Engineer',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${inter.className} antialiased bg-primary`}
      >
        {children}
        <DynamicThemeButton />
      </body>
    </html>
  );
}

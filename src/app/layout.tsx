import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Happy Face',
  description: 'Купівля та доставка продуктів харчування',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='uk' className={`${rubik.variable}`}>
      <body className='flex flex-col font-sans antialiased'>
        <Header />
        <main className='md:mt-19 md:flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

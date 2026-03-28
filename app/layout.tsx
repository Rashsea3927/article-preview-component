import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Article preview component',
  description: 'Article card with responsive share UI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${manrope.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col items-center justify-center font-manrope bg-grey-200'>{children}</body>
    </html>
  );
}

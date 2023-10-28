import NavBar from '@/components/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import React from 'react';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Paula Trenuje',
  description: 'Twoje treningi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={'/LogoBezNapisu1.png'} />
      </head>
      <body className={cn(poppins.className, 'w-[100vw]')}>
        <div className="flex flex-col w-full items-center">
          <NavBar />
          <div className="min-h-screen max-w-7xl w-full">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

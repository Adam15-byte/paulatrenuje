import NavBar from '@/components/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import React from 'react';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import Providers from '@/context/Providers';
import { Toaster } from 'react-hot-toast';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/lib/auth';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Paula Trenuje',
  description: 'Trenuj z Paulą',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authConfig);
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={'/LogoBezNapisu1.png'} />
      </head>
      <body className={cn(poppins.className)}>
        <Toaster position="top-center" />
        <Providers>
          <div className="flex flex-col w-full items-center">
            <NavBar />
            <div className="min-h-screen container w-full">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

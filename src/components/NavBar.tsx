import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import ShoppingCartIcon from './ShoppingCartIcon';

const NavBar = () => {
  return (
    <header className="w-full z-10 py-2 bg-white">
      <nav className="max-w-7xl mx-auto flex justify-between items-center sm:px-16 px-6">
        <Link href="/">
          <Image
            src="/LogoBezNapisu1.png"
            alt="Paula Trenuje Logo"
            width={70}
            height={70}
            className="object-contain"
          />
        </Link>
        <div className="flex gap-8 h-full items-center font-semibold transition-all text-xl my-4">
          <Link
            href="/ebooks"
            className="p-4 border-b-5 border-white hover:border-orange transition-all"
          >
            Ebooks
          </Link>
          <Link
            href="/blog"
            className="p-4 border-b-5 border-white hover:border-orange transition-all"
          >
            Blog
          </Link>
        </div>
        <ShoppingCartIcon />
      </nav>
    </header>
  );
};

export default NavBar;

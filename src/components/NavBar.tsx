'use client';

import { Button } from '@nextui-org/button';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
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
        <Link href="http://localhost:3000/api/email-send/pdf-waterproof/AdamJankowski5@gmail.com/slim_legs">
          Check post
        </Link>
        <ShoppingCartIcon />
      </nav>
    </header>
  );
};

export default NavBar;

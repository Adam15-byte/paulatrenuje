'use client';

import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';
import ShoppingCartIcon from './ShoppingCartIcon';
import axios from 'axios';

const NavBar = () => {
  const username = Number(111);
  const password = String('ddd');
  const encodedCredentials = btoa(`${username}:${password}`);
  const testAccess = async () => {
    await axios.get('https://secure.przelewy24.pl/api/v1/testAccess', {
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
      },
    });
  };
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
        <ShoppingCartIcon />
        <Button
          onClick={async () => {
            await testAccess();
          }}
        >
          Check
        </Button>
      </nav>
    </header>
  );
};

export default NavBar;

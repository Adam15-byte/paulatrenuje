'use client';

import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';
import ShoppingCartIcon from './ShoppingCartIcon';
import axios from 'axios';

const NavBar = () => {
  const username = 150483;
  const password = '72db040f40245696baa45b44c5d84b3f';
  const encodedCredentials = btoa(`${username}:${password}`);
  const testAccess = async () => {
    axios.get('https://secure.przelewy24.pl/api/v1/testAccess', {
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
            // console.log(
            //   'NEXT_PUBLIC_PRZELEWY24_MERCHANT_ID:',
            //   Number(process.env.NEXT_PUBLIC_PRZELEWY24_MERCHANT_ID)
            // );
            // console.log(
            //   'NEXT_PUBLIC_PRZELEWY24_POS_ID:',
            //   Number(process.env.NEXT_PUBLIC_PRZELEWY24_POS_ID)
            // );
            // console.log(
            //   'NEXT_PUBLIC_PRZELEWY24_APIKEY:',
            //   String(process.env.NEXT_PUBLIC_PRZELEWY24_APIKEY)
            // );
            // console.log(
            //   'NEXT_PUBLIC_PRZELEWY24_CRC:',
            //   String(process.env.NEXT_PUBLIC_PRZELEWY24_CRC)
            // );
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

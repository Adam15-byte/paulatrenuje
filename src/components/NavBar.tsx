'use client';

import { P24 } from '@ingameltd/node-przelewy24';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';
import ShoppingCartIcon from './ShoppingCartIcon';

const NavBar = () => {
  const p24 = new P24(
    Number(process.env.NEXT_PUBLIC_PRZELEWY24_MERCHANT_ID),
    Number(process.env.NEXT_PUBLIC_PRZELEWY24_POS_ID),
    String(process.env.NEXT_PUBLIC_PRZELEWY24_APIKEY),
    String(process.env.NEXT_PUBLIC_PRZELEWY24_CRC),
    {
      sandbox: false,
    }
  );
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
            console.log(
              'NEXT_PUBLIC_PRZELEWY24_MERCHANT_ID:',
              Number(process.env.NEXT_PUBLIC_PRZELEWY24_MERCHANT_ID)
            );
            console.log(
              'NEXT_PUBLIC_PRZELEWY24_POS_ID:',
              Number(process.env.NEXT_PUBLIC_PRZELEWY24_POS_ID)
            );
            console.log(
              'NEXT_PUBLIC_PRZELEWY24_APIKEY:',
              Number(process.env.NEXT_PUBLIC_PRZELEWY24_APIKEY)
            );
            console.log(
              'NEXT_PUBLIC_PRZELEWY24_CRC:',
              Number(process.env.NEXT_PUBLIC_PRZELEWY24_CRC)
            );
            await p24.testAccess();
          }}
        >
          Check
        </Button>
      </nav>
    </header>
  );
};

export default NavBar;

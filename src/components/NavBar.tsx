'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import ShoppingCartIcon from './ShoppingCartIcon';
import { Button } from '@nextui-org/button';
import { addToRandomInt, checkAsyncItems } from '@/app/api/actions';
import axios from 'axios';

const NavBar = () => {
  const checkPost = async () => {
    const data = await axios.post(
      'https://paulatrenuje.vercel.app/api/transactionStatus',
      {
        p24_merchant_id: '11111',
        p24_pos_id: '22222',
        p24_session_id: '333333',
        p24_amount: '444444',
        p24_currency: '555555',
        p24_order_id: '6666666',
        p24_sign: '7777777',
      }
    );
    console.log('data:', data);
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
        <Button
          onClick={async () => {
            await addToRandomInt();
          }}
        >
          ADD+
        </Button>
        <Button
          onClick={async () => {
            await checkAsyncItems();
          }}
        >
          Check
        </Button>
        <Button
          onClick={async () => {
            await checkPost();
          }}
        >
          Check post
        </Button>
        <ShoppingCartIcon />
      </nav>
    </header>
  );
};

export default NavBar;

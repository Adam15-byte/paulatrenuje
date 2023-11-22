'use client';

import { ShoppingBag } from 'lucide-react';
import { Badge } from '@nextui-org/react';
import { useShoppingBag } from '@/context/ShoppingBagContext';
import Link from 'next/link';
import { Button } from '@nextui-org/react';

const ShoppingCartIcon = () => {
  const { bagWorthValue, shoppingBag } = useShoppingBag();
  return (
    <Badge
      content={shoppingBag.length}
      size="lg"
      className="bg-orange text-white "
    >
      <Link href={'/koszyk'} className={'relative group'}>
        <div
          className={
            'text-white flex text-lg py-3 px-6 font-semibold rounded-lg bg-orange z-10 absolute group-hover:animate-pulse group-hover:scale-[102%] gap-2 tracking-wider'
          }
        >
          <ShoppingBag size={24} strokeWidth={3} />
          {bagWorthValue} zł
        </div>
        <div
          className={
            'text-white flex text-lg py-3 px-6 font-semibold rounded-lg bg-pink group-hover:scale-[102%] gap-2 tracking-wider'
          }
        >
          <ShoppingBag size={24} strokeWidth={3} />
          {bagWorthValue} zł
        </div>
      </Link>
    </Badge>
  );
};

export default ShoppingCartIcon;

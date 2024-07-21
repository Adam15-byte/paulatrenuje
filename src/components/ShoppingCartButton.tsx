'use client';

import { useShoppingBag } from '@/context/ShoppingBagContext';
import { Badge } from '@nextui-org/react';
import { ShoppingBag } from 'lucide-react';
import DefaultButton from './reusable-components/DefaultButton';
import { usePathname } from 'next/navigation';

const ShoppingCartButton = () => {
  const pathname = usePathname();
  if (pathname.includes('/aplikacja')) return null;
  const { bagWorthValue, shoppingBag } = useShoppingBag();
  return (
    <Badge
      content={shoppingBag.length}
      size="lg"
      className="bg-orange text-white"
    >
      <DefaultButton variant="outline" href={'/koszyk'}>
        <ShoppingBag size={18} strokeWidth={2.5} className="mr-2" />
        {bagWorthValue} zł
      </DefaultButton>
    </Badge>
  );
};

export default ShoppingCartButton;

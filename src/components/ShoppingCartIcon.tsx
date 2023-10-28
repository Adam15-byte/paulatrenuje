'use client';

import { ShoppingCart } from 'lucide-react';
import { Badge } from '@nextui-org/react';

const ShoppingCartIcon = () => {
  return (
    <Badge content="0" size="lg" className="bg-orange text-white ">
      <div className="flex gap-2 bg-gray hover:bg-orange transition-all rounded-lg p-4 text-white text-lg font-semibold cursor-pointer hover:scale-105">
        <ShoppingCart size={24} strokeWidth={3} /> 0 zł
      </div>
    </Badge>
  );
};

export default ShoppingCartIcon;

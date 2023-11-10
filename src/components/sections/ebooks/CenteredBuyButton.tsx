'use client';

import ActionButton from '@/components/ActionButton';
import { EbookConfigType } from '@/configs/ebooksConfig';
import { useShoppingBag } from '@/context/ShoppingBagContext';
import { ShoppingBag } from 'lucide-react';
import { FC } from 'react';

interface CenteredBuyButtonProps {
  ebookData: EbookConfigType;
}

const CenteredBuyButton: FC<CenteredBuyButtonProps> = ({ ebookData }) => {
  const { addItem } = useShoppingBag();
  return (
    <div className="w-full flex justify-center px-5 mt-2 md:mt-8">
      <ActionButton
        leftIcon={<ShoppingBag size={24} strokeWidth={2.5} />}
        additionalStyle="w-full max-w-[600px] mx-auto mb-2 text-lg font-semibold"
        text="Dodaj do koszyka"
        onClick={() => {
          addItem(ebookData);
        }}
      />
    </div>
  );
};

export default CenteredBuyButton;

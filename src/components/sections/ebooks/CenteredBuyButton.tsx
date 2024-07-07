'use client';

import DefaultButton from '@/components/reusable-components/DefaultButton';
import { EbookConfigType } from '@/configs/ebooksConfig';
import { useShoppingBag } from '@/context/ShoppingBagContext';
import { ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface CenteredBuyButtonProps {
  ebookData: EbookConfigType;
}

const CenteredBuyButton: FC<CenteredBuyButtonProps> = ({ ebookData }) => {
  const { addItem, isItemIncludedInBag } = useShoppingBag();
  const router = useRouter();
  return (
    <div className="w-full flex justify-center px-5 mt-2 md:mt-8">
      <DefaultButton
        onClick={() => {
          addItem(ebookData);
          router.push('/koszyk', { scroll: true });
        }}
        disabled={isItemIncludedInBag(ebookData.id)}
        className="w-full max-w-[600px] mx-auto mb-2 text-lg font-semibold"
      >
        <ShoppingBag size={24} strokeWidth={2.5} className="mr-4" />
        {isItemIncludedInBag(ebookData.id)
          ? 'Produkt znajduje się w koszyku'
          : 'Dodaj do koszyka'}
      </DefaultButton>
    </div>
  );
};

export default CenteredBuyButton;

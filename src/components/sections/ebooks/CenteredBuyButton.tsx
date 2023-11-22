'use client';

import PrimaryButton from '@/components/PrimaryButton';
import AddedToBagModal from '@/components/AddedToBagModal';
import { EbookConfigType } from '@/configs/ebooksConfig';
import { useShoppingBag } from '@/context/ShoppingBagContext';
import { useDisclosure } from '@nextui-org/react';
import { ShoppingBag } from 'lucide-react';
import { FC } from 'react';

interface CenteredBuyButtonProps {
  ebookData: EbookConfigType;
}

const CenteredBuyButton: FC<CenteredBuyButtonProps> = ({ ebookData }) => {
  const { addItem, isItemIncludedInBag } = useShoppingBag();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onOpenChange: onModalOpenChange,
  } = useDisclosure();

  return (
    <div className="w-full flex justify-center px-5 mt-2 md:mt-8">
      <AddedToBagModal
        ebookData={ebookData}
        isOpen={isModalOpen}
        onOpenChange={onModalOpenChange}
      />
      <PrimaryButton
        leftIcon={<ShoppingBag size={24} strokeWidth={2.5} />}
        additionalStyle="w-full max-w-[600px] mx-auto mb-2 text-lg font-semibold"
        text={
          isItemIncludedInBag && isItemIncludedInBag(ebookData.id)
            ? 'Produkt dodany do koszyka'
            : 'Dodaj do koszyka'
        }
        onClick={() => {
          addItem && addItem(ebookData);
          onModalOpen();
        }}
        disabled={isItemIncludedInBag && isItemIncludedInBag(ebookData.id)}
      />
    </div>
  );
};

export default CenteredBuyButton;

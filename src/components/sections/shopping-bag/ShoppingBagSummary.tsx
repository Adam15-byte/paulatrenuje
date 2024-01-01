'use client';

import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';
import { useShoppingBag } from '@/context/ShoppingBagContext';
import { Input } from '@nextui-org/react';
import { useState } from 'react';

const ShoppingBagSummary = () => {
  const {
    shoppingBag,
    bagWorthValue,
    discountBasedOnNumberOfProducts,
    discountedValue,
    valueAfterDiscount,
  } = useShoppingBag();
  const [isPromoFormOpen, setIsPromoFormOpen] = useState<boolean>(false);
  const [promoCode, setPromoCode] = useState<string>('');
  const handleOpenPromoForm = () => {
    setIsPromoFormOpen(true);
  };
  const handleAddPromoCode = () => {
    setPromoCode('');
  };

  return (
    <div className="flex flex-col gap-4">
      {!isPromoFormOpen ? (
        <SecondaryButton
          text="Mam kod rabatowy"
          onClick={handleOpenPromoForm}
        />
      ) : (
        <div className="flex flex-col md:flex-row gap-4 mt-2 items-end">
          {' '}
          <Input
            label="Kod promocyjny"
            labelPlacement={'outside'}
            variant="bordered"
            value={promoCode}
            onValueChange={setPromoCode}
          />
          <SecondaryButton text="Dodaj kod" onClick={handleAddPromoCode} />
        </div>
      )}
      <p> Suma przed rabatami: {bagWorthValue} zł</p>
      {discountBasedOnNumberOfProducts ? (
        <p className="font-semibold text-orange">
          {shoppingBag.length} produkty w koszyku: -
          {discountBasedOnNumberOfProducts * 100}% na wszystkie produkty.{' '}
        </p>
      ) : null}
      <p className="font-semibold text-orange">
        {' '}
        Rabat: {discountedValue.toFixed(1)} zł
      </p>
      <p className="text-gray"> Koszt dostawy: 0 zł</p>
      <p className="font-bold"> Łącznie: {valueAfterDiscount} zł</p>
      {bagWorthValue ? (
        <PrimaryButton
          disabled={!shoppingBag.length}
          text="Zamawiam"
          href="/koszyk/zamowienie"
        />
      ) : null}
    </div>
  );
};

export default ShoppingBagSummary;
